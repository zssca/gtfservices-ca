// Data fetching and parsing utilities for GTFS application

import { 
  CompanyInfo, 
  ProductCategory, 
  Product, 
  GTFSData, 
  SearchParams, 
  SearchResults,
  FilterOptions,
  CATEGORY_IDS,
  MainNavItem
} from './types';

// Import TypeScript data files
import { productCategories } from '../data/categories/index';
import { polyesterAirFilterCartridges } from '../data/products/polyester-air-filter-cartridge';
import { celluloseAirFilterCartridges } from '../data/products/cellulose-air-filter-cartridge';
import { gasTurbineAirIntakeFilters } from '../data/products/gas-turbine-air-intake-filters';
import { metalPleatedBagFilters } from '../data/products/metal-pleated-bag-filters';
import { puPleatedBagFilters } from '../data/products/pu-pleated-bag-filters';
import { panelAirFilters } from '../data/products/panel-air-filters';
import { airFilterMedia } from '../data/products/air-filter-media';
import { fiberglassFilterMedia } from '../data/products/fiberglass-filter-media';
import { cartridgeDustCatcher } from '../data/products/cartridge-dust-catcher';
import { dustCollectorSystem } from '../data/products/dust-collector-system';
import { companyInfo } from '../data/company/info';
import { companyAdvantages } from '../data/company/advantages';
import { filterMedia } from '../data/config/filter-media';
import { navigation } from '../data/config/navigation';

// =============================================================================
// ERROR HANDLING
// =============================================================================

// =============================================================================
// COMPANY DATA
// =============================================================================

export async function getCompanyInfo(): Promise<CompanyInfo> {
  return companyInfo;
}

export async function getCompanyAdvantages(): Promise<Array<{ title: string; description: string; }>> {
  return [...companyAdvantages];
}

// =============================================================================
// CATEGORY DATA
// =============================================================================

export async function getCategories(): Promise<ProductCategory[]> {
  // Use imported TypeScript data instead of JSON files
  const categories = productCategories;
  
  // Attach products to each category
  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => {
      const products = await getCategoryProducts(category.slug);
      return {
        ...category,
        products,
      };
    })
  );
  
  return categoriesWithProducts;
}

export async function getCategory(slug: string): Promise<ProductCategory | null> {
  const categories = await getCategories();
  return categories.find(cat => cat.slug === slug) || null;
}

export async function getCategoryById(id: string): Promise<ProductCategory | null> {
  const categories = await getCategories();
  return categories.find(cat => cat.id === id) || null;
}

// =============================================================================
// PRODUCT DATA
// =============================================================================

export async function getCategoryProducts(categorySlug: string): Promise<Product[]> {
  // Use imported TypeScript data based on category slug
  switch (categorySlug) {
    case 'polyester-air-filter-cartridge':
      return polyesterAirFilterCartridges;
    case 'cellulose-air-filter-cartridge':
      return celluloseAirFilterCartridges;
    case 'gas-turbine-air-intake-filters':
      return gasTurbineAirIntakeFilters;
    case 'metal-pleated-bag-filters':
      return metalPleatedBagFilters;
    case 'pu-pleated-bag-filters':
      return puPleatedBagFilters;
    case 'panel-air-filters':
      return panelAirFilters;
    case 'air-filter-media':
      return airFilterMedia;
    case 'fiberglass-filter-media':
      return fiberglassFilterMedia;
    case 'cartridge-dust-catcher':
      return cartridgeDustCatcher;
    case 'dust-collector-system':
      return dustCollectorSystem;
    default:
      return [];
  }
}

export async function getAllProducts(): Promise<Product[]> {
  const allProducts: Product[] = [];
  
  for (const category of productCategories) {
    const products = await getCategoryProducts(category.slug);
    allProducts.push(...products);
  }
  
  return allProducts;
}

export async function getProduct(categorySlug: string, productId: string): Promise<Product | null> {
  const products = await getCategoryProducts(categorySlug);
  return products.find(product => product.id === productId) || null;
}

export async function getProductById(productId: string): Promise<Product | null> {
  const allProducts = await getAllProducts();
  return allProducts.find(product => product.id === productId) || null;
}

export async function getFeaturedProducts(limit: number = 6): Promise<Product[]> {
  const allProducts = await getAllProducts();
  
  // Return specific featured products that match GTFS requirements
  const featuredProductIds = [
    'polyester-ptfe-air-filter-cartridge', // GTFS | Polyester Cartridge
    'anti-static-polyester-dust-filter-cartridge-cylindrical-air-filter-for-explosive-dust-control', // GTFS | Antistatic Cartridge
    'twist-lock-cartridge', // GTFS | Twist-Lock Cartridge (47/52 mm)
    'bag-panel-pre-filter', // GTFS | Panel Pre-Filter
    'high-performance-carbon-fiber-dust-filter-cartridge-industrial-air-filtration', // Additional GTFS product
    'blue-polyester-air-filter-cartridge' // Additional GTFS product
  ];
  
  const featuredProducts = featuredProductIds
    .map(id => allProducts.find(product => product.id === id))
    .filter((product): product is Product => product !== undefined)
    .slice(0, limit);
  
  // If we don't have enough specific featured products, fill with others
  if (featuredProducts.length < limit) {
    const remainingProducts = allProducts
      .filter(product => !featuredProductIds.includes(product.id))
      .slice(0, limit - featuredProducts.length);
    featuredProducts.push(...remainingProducts);
  }
  
  return featuredProducts;
}

// =============================================================================
// SEARCH AND FILTERING
// =============================================================================

export async function searchProducts(params: SearchParams): Promise<SearchResults> {
  const allProducts = await getAllProducts();
  let filteredProducts = [...allProducts];
  
  // Text search
  if (params.query) {
    const query = params.query.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query) ||
      product.productType.toLowerCase().includes(query) ||
      product.applications.some(app => app.toLowerCase().includes(query)) ||
      product.features?.some(feature => feature.toLowerCase().includes(query))
    );
  }
  
  // Category filter
  if (params.category) {
    filteredProducts = filteredProducts.filter(product => 
      product.category === params.category
    );
  }
  
  // Apply additional filters
  if (params.filters) {
    filteredProducts = applyFilters(filteredProducts, params.filters);
  }
  
  // Sort results
  if (params.sort) {
    filteredProducts = sortProducts(filteredProducts, params.sort);
  }
  
  // Pagination
  const page = params.page || 1;
  const limit = params.limit || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  // Generate filter options from all products
  const filters = await generateFilterOptions(allProducts);
  
  return {
    products: paginatedProducts,
    total: filteredProducts.length,
    page,
    totalPages: Math.ceil(filteredProducts.length / limit),
    filters,
  };
}

function applyFilters(products: Product[], filters: FilterOptions): Product[] {
  let filtered = [...products];
  
  if (filters.categories?.length) {
    filtered = filtered.filter(product => 
      filters.categories!.includes(product.category)
    );
  }
  
  if (filters.productTypes?.length) {
    filtered = filtered.filter(product => 
      filters.productTypes!.includes(product.productType)
    );
  }
  
  if (filters.applications?.length) {
    filtered = filtered.filter(product => 
      product.applications.some(app => 
        filters.applications!.some(filterApp => 
          app.toLowerCase().includes(filterApp.toLowerCase())
        )
      )
    );
  }
  
  if (filters.filterMedia?.length) {
    filtered = filtered.filter(product => 
      product.materials?.filterMedia && 
      filters.filterMedia!.some(media => 
        product.materials!.filterMedia!.toLowerCase().includes(media.toLowerCase())
      )
    );
  }
  
  if (filters.treatments?.length) {
    filtered = filtered.filter(product => {
      if (!product.treatments) return false;
      
      return filters.treatments!.some(treatment => {
        switch (treatment) {
          case 'anti-static':
            return product.treatments!.antiStatic;
          case 'oil-water-repellent':
            return product.treatments!.oilWaterRepellent;
          case 'ptfe-membrane':
            return product.treatments!.ptfeMembrane;
          case 'fire-retardant':
            return product.treatments!.fireRetardant;
          case 'washable':
            return product.treatments!.washable;
          case 'conductive':
            return product.treatments!.conductive;
          default:
            return false;
        }
      });
    });
  }
  
  return filtered;
}

function sortProducts(products: Product[], sortBy: string): Product[] {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'efficiency':
      // Sort by filtration efficiency (assuming format like "≥99.9%")
      return sorted.sort((a, b) => {
        const effA = parseFloat(a.technicalSpecs?.filtrationEfficiency?.replace(/[^\d.]/g, '') || '0');
        const effB = parseFloat(b.technicalSpecs?.filtrationEfficiency?.replace(/[^\d.]/g, '') || '0');
        return effB - effA; // Descending order
      });
    case 'temperature':
      // Sort by operating temperature
      return sorted.sort((a, b) => {
        const tempA = parseFloat(a.technicalSpecs?.operatingTemperature?.replace(/[^\d.]/g, '') || '0');
        const tempB = parseFloat(b.technicalSpecs?.operatingTemperature?.replace(/[^\d.]/g, '') || '0');
        return tempB - tempA; // Descending order
      });
    default:
      return sorted;
  }
}

async function generateFilterOptions(products: Product[]): Promise<SearchResults['filters']> {
  const categories = await getCategories();
  
  const availableCategories = categories.map(cat => cat.name);
  const availableProductTypes = [...new Set(products.map(p => p.productType))];
  const availableApplications = [...new Set(products.flatMap(p => p.applications))];
  const availableFilterMedia = [...new Set(
    products
      .map(p => p.materials?.filterMedia)
      .filter(Boolean) as string[]
  )];
  const availableConnectionTypes = [...new Set(
    products
      .map(p => p.connectionType?.type)
      .filter(Boolean) as string[]
  )];
  const availableTreatments = ['anti-static', 'oil-water-repellent', 'ptfe-membrane', 'fire-retardant', 'washable', 'conductive'];
  
  return {
    availableCategories,
    availableProductTypes,
    availableApplications,
    availableFilterMedia,
    availableConnectionTypes,
    availableTreatments,
  };
}

// =============================================================================
// CONFIGURATION DATA
// =============================================================================

export async function getFilterMedia(): Promise<string[]> {
  return [...filterMedia];
}

interface NavigationData {
  mainNav: MainNavItem[];
  footerNav: Array<{
    title: string;
    items: Array<{
      title: string;
      href: string;
    }>;
  }>;
}

export async function getNavigation(): Promise<NavigationData> {
  return JSON.parse(JSON.stringify(navigation));
}

// =============================================================================
// MAIN DATA AGGREGATION
// =============================================================================

export async function getGTFSData(): Promise<GTFSData> {
  const [company, categories, advantages] = await Promise.all([
    getCompanyInfo(),
    getCategories(),
    getCompanyAdvantages(),
  ]);
  
  const featuredProducts = await getFeaturedProducts(6);
  
  return {
    company,
    categories,
    featuredProducts,
    advantages,
    certifications: ['ISO9001', 'OEM Standards'],
    qualityStandards: [
      'ISO-certified production and quality control',
      'OEM standards compliance', 
      'Third-party test reports',
      'Global export quality standards'
    ],
  };
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function generateProductUrl(category: string, productId: string): string {
  return `/${category}/${productId}`;
}

export function generateCategoryUrl(categorySlug: string): string {
  return `/${categorySlug}`;
}

// =============================================================================
// CACHE UTILITIES (for production optimization)
// =============================================================================

const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key);
  if (!cached) return null;
  
  if (Date.now() - cached.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }
  
  return cached.data as T;
}

export function setCachedData<T>(key: string, data: T): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

export async function getCachedOrFetch<T>(
  key: string,
  fetchFn: () => Promise<T>
): Promise<T> {
  const cached = getCachedData<T>(key);
  if (cached) return cached;
  
  const data = await fetchFn();
  setCachedData(key, data);
  return data;
}

// Export everything
export {
  CATEGORY_IDS,
};