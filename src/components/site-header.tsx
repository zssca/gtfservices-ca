"use client"

import * as React from "react"
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { NavbarSearch } from "@/components/navbar-search"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { MainNavItem } from "@/lib/types"
import { contactInfo } from "@/data/contact/contact"

interface SiteHeaderProps {
  navItems: MainNavItem[]
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top Bar with Contact Info */}
      <div className="border-b bg-muted/50 w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex h-8 sm:h-9 md:h-10 items-center justify-between text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
            <div className="flex items-center gap-1 min-w-0">
              <Phone className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
              <span className="hidden sm:inline text-muted-foreground">Contact: </span>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-xs sm:text-sm touch-manipulation hover:text-primary transition-colors font-medium truncate"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-1 min-w-0">
              <Mail className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-xs sm:text-sm touch-manipulation hover:text-primary transition-colors font-medium truncate"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex items-center min-w-0">
            <span className="hidden xl:inline text-muted-foreground text-xs font-medium truncate">
              Delivering Efficient & Durable Filtration Solutions
            </span>
            <span className="hidden lg:inline xl:hidden text-muted-foreground text-xs font-medium truncate">
              Quality Filtration Solutions
            </span>
            <span className="hidden md:inline lg:hidden text-muted-foreground text-xs font-medium truncate">
              Quality Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b w-full shadow-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex h-14 sm:h-16 lg:h-18 items-center justify-between gap-4">
        <MainNav items={navItems} />
        
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
          {/* Search - Show on tablet+ */}
          <div className="hidden lg:block">
            <NavbarSearch />
          </div>
          
          {/* CTA Buttons - Better responsive design */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="outline" size="sm" asChild className="hidden xl:inline-flex text-sm px-3 py-2">
              <Link href="/contact">
                Get Quote
              </Link>
            </Button>
            <Button size="sm" asChild className="hidden sm:inline-flex text-sm px-3 py-2">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}