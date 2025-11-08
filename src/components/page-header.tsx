"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useBreadcrumbs, BreadcrumbItem } from "@/contexts/breadcrumb-context"

interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  children?: React.ReactNode // actions on the right (buttons, etc.)
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  children,
  className,
  ...props
}: PageHeaderProps) {
  const { setBreadcrumbs } = useBreadcrumbs()

  // Set breadcrumbs in the context when the component mounts
  React.useEffect(() => {
    if (breadcrumbs) {
      setBreadcrumbs(breadcrumbs)
    }
    // Clean up breadcrumbs when component unmounts
    return () => setBreadcrumbs([])
  }, [breadcrumbs, setBreadcrumbs])

  return (
    <>
      {/* Top spacing for the entire page */}
      <div className="pt-6 sm:pt-8 lg:pt-12" />

      {/* Hero Section with proper spacing */}
      <header
        className={cn(
          // gradient hero surface from globals.css
          "hero-section rounded-lg border border-border",
          // spacing - increased bottom margin for better separation from content below
          "px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12 mb-8 sm:mb-10 lg:mb-12",
          className
        )}
        {...props}
      >
        {/* Top row: title + actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-2 text-base sm:text-lg text-muted-foreground max-w-3xl">
                {description}
              </p>
            )}
          </div>

          {children ? (
            <div className="shrink-0">
              {/* actions area (e.g., buttons) */}
              {children}
            </div>
          ) : null}
        </div>
      </header>
    </>
  )
}