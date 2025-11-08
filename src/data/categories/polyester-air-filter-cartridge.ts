import { ProductCategory } from '../../lib/types';
import { polyesterAirFilterCartridges } from '../products/polyester-air-filter-cartridge';

export const polyesterAirFilterCartridgeCategory: ProductCategory = {
  id: "polyester-air-filter-cartridge",
  name: "Polyester Air Filter Cartridge",
  slug: "polyester-air-filter-cartridge",
  overview: "Washable spun-bond polyester, optional surface treatments. High-performance synthetic filter cartridges for industrial dust collection systems.",
  description: "Our polyester air filter cartridges represent the pinnacle of synthetic filtration technology. Engineered with advanced polyester media, these cartridges deliver superior performance in demanding industrial environments. The synthetic construction provides excellent resistance to moisture, chemicals, and temperature variations while maintaining consistent filtration efficiency throughout their service life.",
  categoryImage: "/products_images/product-catagories-images/polyester-air-filter-cartridge.webp",
  keyFeatures: [
    "Various polyester media treatments",
    "Anti-static options available",
    "PTFE coating for superior filtration",
    "Oil-water repellent properties",
    "Pulse jet cleaning compatible",
    "High temperature resistance",
    "Chemical resistance",
    "Long service life",
    "Washable and reusable options",
    "Customizable dimensions"
  ],
  commonApplications: [
    "Powder coating booths",
    "Welding fume extraction", 
    "Industrial dust collection",
    "Pharmaceutical powder handling",
    "Food processing",
    "Cement and concrete plants",
    "Woodworking industries",
    "Metal fabrication",
    "Chemical processing",
    "Automotive manufacturing",
    "Electronics manufacturing"
  ],
  products: polyesterAirFilterCartridges,
  subcategories: [
    "Anti-Static Cartridges",
    "PTFE Coated Cartridges",
    "Oil-Water Repellent Cartridges",
    "High Temperature Cartridges",
    "Standard Polyester Cartridges"
  ]
};