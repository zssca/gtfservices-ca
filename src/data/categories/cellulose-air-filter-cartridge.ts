import { ProductCategory } from '../../lib/types';
import { celluloseAirFilterCartridges } from '../products/cellulose-air-filter-cartridge';

export const celluloseAirFilterCartridgeCategory: ProductCategory = {
  id: "cellulose-air-filter-cartridge",
  name: "Cellulose Air Filter Cartridge", 
  slug: "cellulose-air-filter-cartridge",
  overview: "Cost-effective media for lighter duty. Environmentally-friendly filter cartridges made from cellulose materials for sustainable filtration solutions.",
  description: "Our cellulose air filter cartridges are manufactured from premium wood pulp materials, providing an eco-friendly filtration solution without compromising performance. These biodegradable filters are perfect for industries prioritizing environmental sustainability while requiring high-efficiency dust collection. The natural fiber construction offers excellent particle capture and easy disposal.",
  categoryImage: "/products_images/product-catagories-images/cellulose-air-filter-cartridge.webp",
  keyFeatures: [
    "Environmentally friendly and biodegradable",
    "Excellent filtration efficiency",
    "Wood pulp paper media",
    "Moisture-resistant treatment",
    "Lightweight and easy to handle",
    "Cost-effective solution",
    "Natural fiber construction",
    "High dust loading capacity",
    "Easy disposal and replacement",
    "Sustainable manufacturing"
  ],
  commonApplications: [
    "Woodworking",
    "Grain processing",
    "Cement plants",
    "Metal grinding",
    "Industrial dust collection systems",
    "Agricultural processing",
    "Textile manufacturing",
    "Paper and pulp mills",
    "Mining operations",
    "Construction sites",
    "Recycling facilities",
    "General manufacturing"
  ],
  products: celluloseAirFilterCartridges,
  subcategories: [
    "Standard Cellulose Air Filter Cartridge",
    "Moisture-Resistant Cartridges",
    "High-Efficiency Cellulose",
    "Industrial Grade Cartridges"
  ]
};