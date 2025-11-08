import { ProductCategory } from '../../lib/types';
import { airFilterMedia } from '../products/air-filter-media';

export const airFilterMediaCategory: ProductCategory = {
  id: "air-filter-media",
  name: "Air Filter Media",
  slug: "air-filter-media",
  overview: "Raw filter media materials and rolls for custom filter manufacturing and replacement applications.",
  description: "Our air filter media collection provides premium raw materials for custom filter manufacturing and specialized applications. These high-quality filter media materials are available in various compositions, weights, and treatments to meet specific filtration requirements. Perfect for OEM manufacturers, custom fabricators, and specialized filtration applications.",
  categoryImage: "/products_images/product-catagories-images/air-filter-media.webp",
  keyFeatures: [
    "Raw filter media materials",
    "Various material options",
    "Custom manufacturing",
    "Anti-static options",
    "Different roll sizes",
    "Multiple media types",
    "Specialized treatments",
    "Quality certified materials",
    "Consistent performance",
    "Custom specifications"
  ],
  commonApplications: [
    "Custom filter manufacturing",
    "Filter replacement",
    "OEM applications",
    "Specialty applications",
    "Research and development",
    "Prototype development",
    "Filter media testing",
    "Industrial fabrication",
    "Maintenance and repair",
    "Equipment retrofitting",
    "Replacement filters",
    "Custom engineering projects"
  ],
  products: airFilterMedia,
  subcategories: [
    "Paper Filter Media",
    "Synthetic Filter Media",
    "Anti-Static Media",
    "Specialty Treatment Media"
  ]
};