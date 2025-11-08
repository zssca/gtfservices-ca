import { ProductCategory } from '../../lib/types';
import { dustCollectorSystem } from '../products/dust-collector-system';

export const dustCollectorSystemCategory: ProductCategory = {
  id: "dust-collector-system",
  name: "Dust Collector System",
  slug: "dust-collector-system",
  overview: "Complete industrial dust collection systems and equipment designed for various industrial applications with different capacities and configurations.",
  description: "Our dust collector systems represent comprehensive industrial-scale solutions for demanding dust collection applications. These engineered systems combine advanced filtration technology with robust construction to handle large volumes of dust and particulates. Available in various configurations to meet specific industrial requirements and environmental regulations.",
  categoryImage: "/products_images/product-catagories-images/dust-collector-system.webp",
  keyFeatures: [
    "Complete industrial systems",
    "Various capacities",
    "Different configurations",
    "Customizable designs",
    "High efficiency",
    "Engineered solutions",
    "Regulatory compliance",
    "Advanced controls",
    "Remote monitoring",
    "Modular construction"
  ],
  commonApplications: [
    "Cement plants",
    "Metallurgical industry",
    "Chemical processing",
    "Pharmaceutical manufacturing",
    "Power generation",
    "Mining operations",
    "Steel production",
    "Aluminum processing",
    "Waste incineration",
    "Biomass processing",
    "Industrial manufacturing",
    "Environmental remediation"
  ],
  products: dustCollectorSystem,
  subcategories: [
    "Baghouse Systems",
    "Cartridge Collectors",
    "Cyclone Collectors",
    "Wet Scrubber Systems",
    "Hybrid Systems"
  ]
};