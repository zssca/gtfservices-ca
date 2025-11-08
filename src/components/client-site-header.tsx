"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteBreadcrumb } from "@/components/site-breadcrumb"
import { MainNavItem } from "@/lib/types"

interface ClientSiteHeaderProps {
  navItems: MainNavItem[]
}

export function ClientSiteHeader({ navItems }: ClientSiteHeaderProps) {
  return (
    <>
      <SiteHeader navItems={navItems} />
      <SiteBreadcrumb />
    </>
  )
}