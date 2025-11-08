export const navigation = {
  mainNav: [
    {
      title: "Home",
      href: "/",
      description: "Welcome to Global Tech Fluid Services"
    },
    {
      title: "Categories",
      href: "#", 
      description: "Browse our complete range of filter categories",
      children: [
        {
          title: "Polyester Air Filter Cartridge",
          href: "/polyester-air-filter-cartridge",
          description: "High-performance synthetic filter cartridges"
        },
        {
          title: "Cellulose Air Filter Cartridge", 
          href: "/cellulose-air-filter-cartridge",
          description: "Environmentally-friendly cellulose filters"
        },
        {
          title: "Gas Turbine Air Intake Filters",
          href: "/gas-turbine-air-intake-filters", 
          description: "Specialized filters for turbine protection"
        },
        {
          title: "Metal Pleated Bag Filters",
          href: "/metal-pleated-bag-filters",
          description: "Advanced Metal Pleated Bag Filters with metal support"
        },
        {
          title: "PU Metal Pleated Bag Filters",
          href: "/pu-pleated-bag-filters",
          description: "Polyurethane Metal Pleated Bag Filters"
        },
        {
          title: "Panel Air Filters",
          href: "/panel-air-filters",
          description: "Flat panel filters for HVAC applications"
        },
        {
          title: "Air Filter Media",
          href: "/air-filter-media",
          description: "Raw filter media materials and rolls"
        },
        {
          title: "Fiberglass Filter Media", 
          href: "/fiberglass-filter-media",
          description: "High temperature fiberglass media"
        },
        {
          title: "Cartridge Dust Catcher",
          href: "/cartridge-dust-catcher",
          description: "Complete dust collection equipment"
        },
        {
          title: "Dust Collector System",
          href: "/dust-collector-system",
          description: "Industrial dust collection systems"
        }
      ]
    },
    {
      title: "About",
      href: "/about",
      description: "Learn about Global Tech Fluid Services"
    },
    {
      title: "Contact",
      href: "/contact", 
      description: "Get in touch with our team"
    }
  ],
  footerNav: [
    {
      title: "Products",
      items: [
        {
          title: "Filter Cartridges",
          href: "/polyester-air-filter-cartridge"
        },
        {
          title: "Dust Collectors",
          href: "/dust-collector-system"
        },
        {
          title: "Filter Media",
          href: "/air-filter-media"
        }
      ]
    },
    {
      title: "Company",
      items: [
        {
          title: "About Us",
          href: "/about"
        },
        {
          title: "Quality Standards",
          href: "/quality"
        },
        {
          title: "Certifications",
          href: "/certifications"
        }
      ]
    },
    {
      title: "Support",
      items: [
        {
          title: "Contact Us",
          href: "/contact"
        },
        {
          title: "Technical Support",
          href: "/support"
        },
        {
          title: "Documentation",
          href: "/docs"
        }
      ]
    }
  ]
} as const;

export type Navigation = typeof navigation;
export type MainNavItem = typeof navigation.mainNav[number];
export type FooterNavItem = typeof navigation.footerNav[number];
