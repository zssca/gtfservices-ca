"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { MainNavItem } from "@/lib/types"
import { NavbarSearch } from "@/components/navbar-search"

interface MainNavProps {
  items: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  return (
    <div className="flex items-center justify-between w-full min-w-0">
      <Link href="/" className="flex items-center space-x-2 rounded-lg p-1 sm:p-2 -ml-1 sm:-ml-2 touch-manipulation flex-shrink-0">
        <Image
          src="/gtfs-logo.png"
          alt="GTFS Logo"
          width={120}
          height={40}
          className="h-6 w-auto xs:h-7 sm:h-8 lg:h-10 transition-all duration-200"
          priority
        />
      </Link>
      
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex mx-auto">
        <NavigationMenuList className="gap-1">
          {items.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.children ? (
                <>
                  <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] p-2">
                      {item.children.map((child) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.href}
                        >
                          {child.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link 
                    href={item.href || "#"}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "px-3 py-2 text-sm font-medium transition-colors",
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Enhanced Mobile Navigation with Right Drawer */}
      <div className="lg:hidden flex-shrink-0">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} direction="right">
          <DrawerTrigger asChild>
            <Button 
              variant="secondary" 
              size="sm" 
              className="px-3 py-2 h-auto touch-manipulation hover:bg-accent transition-colors"
              aria-expanded={isDrawerOpen}
              aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
            >
              Menu
            </Button>
          </DrawerTrigger>
          <DrawerContent className="!w-80 sm:!w-96 !max-w-[85vw] !h-full !rounded-l-xl !rounded-r-none !border-l !border-r-0 !shadow-none">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="px-6 py-6 border-b border-border/50 flex items-center justify-between">
                <div>
                  <DrawerTitle className="text-xl font-bold text-foreground">Menu</DrawerTitle>
                  <p className="text-sm text-muted-foreground mt-1">Navigate our products & services</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDrawerOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-accent"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {/* Search Section */}
                <div className="p-4 border-b border-border/30">
                  <NavbarSearch />
                </div>
                
                {/* Navigation Items with Accordion */}
                <div className="p-4">
                  <Accordion type="multiple" className="space-y-2">
                    {items.map((item) => (
                      item.children ? (
                        <AccordionItem key={item.title} value={item.title} className="border border-border/30 rounded-lg overflow-hidden">
                          <AccordionTrigger className="px-4 py-3 hover:bg-accent/50 hover:no-underline rounded-t-lg data-[state=open]:bg-accent/30 data-[state=open]:rounded-b-none">
                            <span className="font-semibold text-base text-foreground">{item.title}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-0 pb-0">
                            <div className="space-y-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.title}
                                  href={child.href || "#"}
                                  className="block px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation border-b border-border/20 last:border-b-0"
                                  onClick={() => setIsDrawerOpen(false)}
                                >
                                  <div>
                                    <div className="font-medium text-foreground">{child.title}</div>
                                    {child.description && (
                                      <div className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                                        {child.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={item.title} className="border border-border/30 rounded-lg overflow-hidden">
                          <Link
                            href={item.href || "#"}
                            className={cn(
                              "block px-4 py-3 text-base font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors touch-manipulation",
                              pathname === item.href && "bg-accent text-accent-foreground"
                            )}
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </div>
                      )
                    ))}
                  </Accordion>
                </div>
              </div>
              
              {/* Footer with Contact Buttons */}
              <div className="border-t border-border/50 p-6 space-y-3">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center font-semibold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-none hover:shadow-none touch-manipulation"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center font-medium border border-border rounded-xl hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 touch-manipulation"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"