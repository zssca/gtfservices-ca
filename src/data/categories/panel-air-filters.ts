import { ProductCategory } from '../../lib/types';
import { panelAirFilters } from '../products/panel-air-filters';

export const panelAirFiltersCategory: ProductCategory = {
  id: "panel-air-filters",
  name: "Panel Air Filters",
  slug: "panel-air-filters",
  overview: "Panel Air Filters — Rugged pre-filtration for HVAC and process systems. Flat panel filters for general air cleaning with various efficiency levels.",
  description: "Our panel air filters provide essential pre-filtration and general air cleaning for HVAC systems and industrial applications. Available in multiple efficiency levels, these filters are designed to protect downstream equipment and improve indoor air quality. The flat panel design ensures easy installation and replacement while providing reliable performance across various applications.",
  categoryImage: "/products_images/product-catagories-images/panel-air-filters.webp",
  keyFeatures: [
    "Various efficiency levels",
    "Pre-filtration applications",
    "HVAC compatibility",
    "Easy replacement",
    "Cost-effective",
    "Standard frame sizes",
    "Low initial pressure drop",
    "High dust holding capacity",
    "Moisture resistant options",
    "Fire retardant materials"
  ],
  commonApplications: [
    "HVAC systems",
    "Pre-filtration",
    "Air handling units",
    "Commercial buildings",
    "Industrial facilities",
    "Cleanrooms",
    "Hospitals and healthcare",
    "Schools and offices",
    "Residential applications",
    "Data centers",
    "Manufacturing facilities",
    "Laboratories"
  ],
  products: panelAirFilters,
  subcategories: [
    "Primary Efficiency Filters",
    "Medium Efficiency Filters",
    "High Efficiency Filters",
    "HEPA Panel Filters"
  ]
};