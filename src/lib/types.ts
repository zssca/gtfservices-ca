// GTFS Types - Complete TypeScript definitions for Global Tech Fluid Services

// =============================================================================
// COMPANY INFORMATION
// =============================================================================

export interface CompanyInfo {
  name: string;
  website: string;
  industry: string;
  tagline: string;
  mission: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

// =============================================================================
// PRODUCT SPECIFICATIONS
// =============================================================================

export type SizeEntry = {
  model: string;
  outerDiameter: string;
  innerDiameter: string;
  length: string;
  filtrationSurface: string;
};

export type Dimensions = {
  customizable: boolean;
  outerDiameter: string;
  innerDiameter: string;
  length: string;
  height: string;
  width: string;
  rollWidth: string;
  rollLength: string;
  sheetSize: string;
  thickness: string;
  rollFormat: string;
  sheetFormat: string;
  paperThickness: string;
  wheels: string;
  industrialSize: string;
  funnelDiameter: string;
  variousSizes: string;
  compact: string;
  cartridgeCapacity: string;
  flangeSize: string;
  shape: string;
  cartridgeAngle: string;
  specialSizes: string;
  standardSizes: string[];
  heavyDuty: string;
  capacity: string;
  footprint: string;
  systemSize: string;
  ductwork: string;
  bagQuantity: string;
  industrial: string;
  bagConfiguration: string;
  modular: string;
  expandable: string;
};

export type TechnicalSpecs = {
  filtrationEfficiency: string;
  operatingTemperature: string;
  temperatureRange: string;
  surfaceResistance: string;
  filtrationSurface: string;
  airflowCapacity: string;
  materialType: string;
  airPermeability: string;
  tensileStrength: string;
  wetStrength: string;
  antiStaticCompliance: string;
  basisWeight: string;
  chemicalResistance: string;
  dimensionalStability: string;
  serviceLife: string;
  specialProperties: string;
  initialPressureDrop: string;
  dustHoldingCapacity: string;
  thermalStability: string;
  humidity: string;
  saltResistance: string;
  mountingType: string;
  mechanicalStrength: string;
  minimumParticleSize: string;
  suctionPower: string;
  motorPower: string;
  mobility: string;
  cleaningSystem: string;
  airflow: string;
  operation: string;
  collectionEfficiency: string;
  construction: string;
  extractionEfficiency: string;
  maintenance: string;
  cost: string;
  cartridgeLife: string;
  capacity: string;
  operatingCost: string;
  efficiency: string;
  woodDustOptimized: boolean;
  multiMachine: string;
  fireProtection: string;
  bagLife: string;
  bagCapacity: string;
  cleaningEfficiency: string;
  dustRelease: string;
  scalability: string;
  modularity: string;
  flexibility: string;
};

export type Materials = {
  filterMedia: string;
  construction: string;
  endCap: string;
  gasket: string;
  core: string;
  additives: string;
  treatment: string;
  baseMedia: string;
  conductiveElements: string;
  structure: string;
  binder: string;
  finish: string;
  frame: string;
  reinforcement: string;
  housing: string;
  filterElement: string;
  filterElements: string;
  collection: string;
  funnel: string;
  filtration: string;
  collector: string;
  ductwork: string;
  bags: string;
  cages: string;
  filterBags: string;
  support: string;
  cartridges: string;
  cleaning: string;
  modules: string;
  connections: string;
  topBottom: string;
  sealing: string;
};

export type ConnectionType = {
  type: string;
  lugCount: number | string;
  mechanism: string;
  size: string;
};

export type Treatments = {
  antiStatic: boolean;
  oilWaterRepellent: boolean;
  ptfeMembrane: boolean;
  fireRetardant: boolean;
  moistureResistant: boolean;
  conductive: boolean;
  washable: boolean;
  biodegradable: boolean;
  chemicalResistant: boolean;
  temperatureResistant: boolean;
  highTemperature: boolean;
  ultraHighTemperature: boolean;
  thermalShock: boolean;
  corrosionResistant: boolean;
};

// =============================================================================
// PRODUCT ENTITIES
// =============================================================================

export interface Product {
  id: string;
  name: string;
  productType: string;
  model: string;
  brand: string;
  description: string; // Short description for headers and cards
  detailedDescription?: string; // Long detailed description from markdown
  images: string[];
  features: string[];
  specialFeatures: string[];
  advantages: string[];
  benefits: string[];
  applications: string[];
  dimensions: Dimensions;
  technicalSpecs: TechnicalSpecs;
  materials: Materials;
  connectionType: ConnectionType;
  treatments: Treatments;
  availableSizes: SizeEntry[];
  customizationOptions: string[];
  qualityStandards: string[];
  dataSheet: string;
  subcategory: string;
  category: string;
  certifications: string[];
}

// =============================================================================
// CATEGORY DEFINITIONS
// =============================================================================

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  overview: string;
  description?: string;
  products: Product[];
  subcategories?: string[];
  categoryImage?: string;
  keyFeatures?: string[];
  commonApplications?: string[];
}

// =============================================================================
// MAIN DATA STRUCTURE
// =============================================================================

export interface GTFSData {
  company: CompanyInfo;
  contact?: ContactInfo;
  categories: ProductCategory[];
  featuredProducts?: Product[];
  advantages?: Array<{
    title: string;
    description: string;
  }>;
  certifications?: string[];
  qualityStandards?: string[];
}

// =============================================================================
// FILTER/SEARCH TYPES
// =============================================================================

export interface FilterOptions {
  categories?: string[];
  productTypes?: string[];
  applications?: string[];
  filterMedia?: string[];
  connectionTypes?: string[];
  temperatureRange?: {
    min?: number;
    max?: number;
  };
  efficiency?: {
    min?: number;
    max?: number;
  };
  treatments?: string[];
  brands?: string[];
}

export interface SearchParams {
  query?: string;
  category?: string;
  subcategory?: string;
  filters?: FilterOptions;
  sort?: 'name' | 'efficiency' | 'temperature' | 'newest';
  page?: number;
  limit?: number;
}

export interface SearchResults {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
  filters: {
    availableCategories: string[];
    availableProductTypes: string[];
    availableApplications: string[];
    availableFilterMedia: string[];
    availableConnectionTypes: string[];
    availableTreatments: string[];
  };
}

// =============================================================================
// UI/NAVIGATION TYPES
// =============================================================================

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
  description?: string;
  children?: NavItem[];
}

export interface MainNavItem extends NavItem {
  items?: NavItem[];
}

export interface SidebarNavItem {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  href?: string;
  items?: NavItem[];
}

// =============================================================================
// PAGE PROPS TYPES
// =============================================================================

export interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface ProductPageProps {
  params: Promise<{
    slug: string;
    product: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// =============================================================================
// API RESPONSE TYPES
// =============================================================================

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// =============================================================================
// FORM TYPES
// =============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  productInterest?: string;
}

export interface QuoteRequestFormData extends ContactFormData {
  products: Array<{
    productId: string;
    quantity: number;
    specifications?: string;
  }>;
  applicationDetails: string;
  timeline?: string;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

export type ProductStatus = 'active' | 'discontinued' | 'coming-soon';
export type MediaType = 'image' | 'video' | 'pdf' | 'datasheet';
export type CertificationType = 'ISO' | 'OEM' | 'Custom';

// Category ID constants for type safety
export const CATEGORY_IDS = {
  POLYESTER_CARTRIDGE: 'polyester-air-filter-cartridge',
  CELLULOSE_CARTRIDGE: 'cellulose-air-filter-cartridge',
  GAS_TURBINE_FILTERS: 'gas-turbine-air-intake-filters',
  METAL_PLEATED_BAG: 'metal-pleated-bag-filters',
  PU_PLEATED_BAG: 'pu-pleated-bag-filters',
  PANEL_FILTERS: 'panel-air-filters',
  FILTER_MEDIA: 'air-filter-media',
  FIBERGLASS_MEDIA: 'fiberglass-filter-media',
  CARTRIDGE_DUST_CATCHER: 'cartridge-dust-catcher',
  DUST_COLLECTOR_SYSTEM: 'dust-collector-system',
} as const;

export type CategoryId = typeof CATEGORY_IDS[keyof typeof CATEGORY_IDS];

// =============================================================================
// CONSTANTS
// =============================================================================
