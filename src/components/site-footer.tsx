import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

interface FooterNavSection {
  title: string
  items: Array<{
    title: string
    href: string
  }>
}

interface SiteFooterProps {
  footerNav: FooterNavSection[]
}

export function SiteFooter({ footerNav }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 md:col-span-2 lg:col-span-2">
            <div className="flex items-start sm:items-center space-x-3">
              <Image
                src="/gtfs-logo.png"
                alt="Global Tech Fluid Services Logo"
                width={96}
                height={32}
                className="h-7 w-auto sm:h-8 lg:h-10 object-contain flex-shrink-0"
                style={{ aspectRatio: 'auto' }}
              />
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  GTFS
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Industrial Filtration — Branded Supply, Local Support
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg leading-relaxed">
              Hours: Mon–Fri 08:00–17:00 (MT)<br/>
              Phone: +1 587-703-0091<br/>
              Email: sales@gtfservices.ca
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  Canada
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <a 
                  href="tel:+15877030091"
                  className="text-muted-foreground touch-manipulation"
                >
                  +1 587-703-0091
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <Link 
                  href="mailto:sales@gtfservices.ca" 
                  className="text-muted-foreground touch-manipulation"
                >
                  sales@gtfservices.ca
                </Link>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                <Link 
                  href="https://www.gtfservices.ca" 
                  className="text-muted-foreground touch-manipulation"
                >
                  www.gtfservices.ca
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerNav.map((section) => (
            <div key={section.title} className="space-y-3 sm:space-y-4">
              <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-muted-foreground touch-manipulation"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6 sm:my-8" />
        
        {/* Footer Bottom */}
        <div className="flex flex-col xs:flex-row justify-between items-center space-y-3 xs:space-y-0 gap-4">
          <p className="text-xs text-muted-foreground text-center xs:text-left">
            © {currentYear} GTFS. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link 
              href="/privacy" 
              className="text-xs text-muted-foreground touch-manipulation"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-xs text-muted-foreground touch-manipulation"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}