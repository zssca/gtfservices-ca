"use client";

import * as React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumbs, BreadcrumbItem as BreadcrumbItemType } from "@/contexts/breadcrumb-context";

interface SiteBreadcrumbProps {
  breadcrumbs?: BreadcrumbItemType[];
}

export function SiteBreadcrumb({ breadcrumbs: propBreadcrumbs }: SiteBreadcrumbProps) {
  const { breadcrumbs: contextBreadcrumbs } = useBreadcrumbs();

  // Use prop breadcrumbs if provided, otherwise use context breadcrumbs
  const breadcrumbs = propBreadcrumbs || contextBreadcrumbs;

  // Always show Home as the first breadcrumb unless we're on the home page
  const allBreadcrumbs = breadcrumbs.length > 0 ? [{ title: "Home", href: "/" }, ...breadcrumbs] : [];

  if (allBreadcrumbs.length === 0) {
    return null;
  }

  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            {allBreadcrumbs.map((bc, i) => {
              const isLast = i === allBreadcrumbs.length - 1;
              return (
                <React.Fragment key={`${bc.title}-${i}`}>
                  {bc.href && !isLast ? (
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={bc.href}>{bc.title}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem>
                      <BreadcrumbPage>{bc.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                  )}
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

