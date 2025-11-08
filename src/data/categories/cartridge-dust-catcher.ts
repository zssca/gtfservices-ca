import { ProductCategory } from '../../lib/types';
import { cartridgeDustCatcher } from '../products/cartridge-dust-catcher';

export const cartridgeDustCatcherCategory: ProductCategory = {
  id: "cartridge-dust-catcher",
  name: "Cartridge Dust Catcher",
  slug: "cartridge-dust-catcher",
  overview: "Complete dust collection equipment and portable dust extractors for industrial applications.",
  description: "Our cartridge dust catcher systems provide complete, self-contained dust collection solutions for various industrial applications. These portable and stationary units feature cartridge-based filtration technology, offering superior collection efficiency with compact design. Perfect for point-of-use dust collection and mobile applications.",
  categoryImage: "/products_images/product-catagories-images/cartridge-dust-catcher.webp",
  keyFeatures: [
    "Complete dust collection systems",
    "Portable extractors",
    "Industrial applications",
    "Various capacities",
    "Easy maintenance",
    "Cartridge-based filtration",
    "Compact design",
    "High collection efficiency",
    "Mobility options",
    "Plug-and-play operation"
  ],
  commonApplications: [
    "Woodworking shops",
    "Metal fabrication",
    "Welding operations",
    "Grinding applications",
    "General dust collection",
    "Small manufacturing",
    "Maintenance operations",
    "Construction sites",
    "Automotive repair",
    "Electronics manufacturing",
    "Prototype development",
    "Laboratory applications"
  ],
  products: cartridgeDustCatcher,
  subcategories: [
    "Portable Dust Collectors",
    "Stationary Dust Collectors",
    "Mobile Extractors",
    "Specialty Dust Catchers"
  ]
};