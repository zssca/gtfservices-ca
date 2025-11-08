import { ProductCategory } from '../../lib/types';
import { fiberglassFilterMedia } from '../products/fiberglass-filter-media';

export const fiberglassFilterMediaCategory: ProductCategory = {
  id: "fiberglass-filter-media",
  name: "Fiberglass Filter Media",
  slug: "fiberglass-filter-media",
  overview: "Fiberglass-based filter media offering high temperature resistance and excellent chemical compatibility.",
  description: "Our fiberglass filter media provides exceptional performance in high-temperature and chemically aggressive environments. The fiberglass construction offers superior thermal stability and chemical resistance while maintaining excellent filtration efficiency. These materials are ideal for demanding industrial applications where standard filter media cannot perform.",
  categoryImage: "/products_images/product-catagories-images/fiberglass-filter-media.webp",
  keyFeatures: [
    "High temperature resistance",
    "Excellent chemical compatibility",
    "Fiberglass construction",
    "Durable materials",
    "Industrial grade",
    "Thermal stability",
    "Acid resistance",
    "Low shrinkage",
    "Consistent performance",
    "Long service life"
  ],
  commonApplications: [
    "High temperature applications",
    "Chemical processing",
    "Industrial furnaces",
    "Corrosive environments",
    "Specialty filtration",
    "Acid processing",
    "Metal processing",
    "Glass manufacturing",
    "Ceramic production",
    "Thermal treatment",
    "Incineration systems",
    "High-temperature HVAC"
  ],
  products: fiberglassFilterMedia,
  subcategories: [
    "Standard Fiberglass Media",
    "High Temperature Media",
    "Chemical Resistant Media",
    "Specialty Fiberglass Media"
  ]
};