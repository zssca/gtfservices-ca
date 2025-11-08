"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { CTASectionLight } from "@/components/cta-section";
import Image from "next/image";
import { 
  ArrowRight,
  Thermometer, 
  Gauge, 
  Settings,
  CheckCircle,
  Info
} from "lucide-react";
import { CategoryPageProps, ProductCategory, Product } from "@/lib/types";

export default function CategoryPage({ params }: CategoryPageProps) {
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);

  useEffect(() => {
    async function resolveParams() {
      const resolved = await params;
      setResolvedParams(resolved);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    async function loadCategoryData() {
      if (!resolvedParams) return;
      
      try {
        const response = await fetch(`/api/categories/${resolvedParams.slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            notFound();
          }
          throw new Error("Failed to fetch category data");
        }
        
        const data = await response.json();
        setCategory(data.category);
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to load category data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    loadCategoryData();
  }, [resolvedParams]);

  if (isLoading) {
    return (
      <PageContainer>
        <div className="space-y-6">
          <div className="h-8 bg-muted rounded animate-pulse" />
          <div className="h-32 bg-muted rounded animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 bg-muted rounded animate-pulse" />
            ))}
          </div>
        </div>
      </PageContainer>
    );
  }

  if (!category) {
    notFound();
  }

  return (
    <PageContainer>
      <PageHeader
        title={category.name}
        description={category.overview}
        breadcrumbs={[
          { title: category.name }
        ]}
      />

      {/* Hero Image with proper spacing */}
      <section className="mb-6 sm:mb-8 lg:mb-12">
        <div className="aspect-[16/8] sm:aspect-[16/7] lg:aspect-[16/6] w-full overflow-hidden rounded-lg sm:rounded-xl border bg-muted">
          <Image
            src={category?.categoryImage || "/placeholder.svg"}
            alt={`${category?.name || "Category"} hero`}
            width={1600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Category Info Section */}
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Key Features */}
          {category.keyFeatures && category.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                {category.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common Applications */}
          {category.commonApplications && category.commonApplications.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 flex items-center">
                <Settings className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                Common Applications
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {category.commonApplications.map((app) => (
                  <Badge key={app} variant="secondary" className="text-xs sm:text-sm">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Category Stats */}
        <div className="space-y-4">
          <Card className="">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg">Category Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 pt-0">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground">Total Products</span>
                  <span className="font-medium text-sm sm:text-base">{products.length}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground">Product Types</span>
                  <span className="font-medium text-sm sm:text-base">
                    {new Set(products.map(p => p.productType)).size}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-muted-foreground">Applications</span>
                  <span className="font-medium text-sm sm:text-base">
                    {category.commonApplications?.length || 0}+
                  </span>
                </div>
              </div>
              
              <Button asChild className="w-full text-sm sm:text-base">
                <Link href="/contact" className="flex items-center justify-center">
                  Get Expert Consultation
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Products Grid */}
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Products ({products.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group h-full flex flex-col">
              <CardHeader className="pb-4">
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted mb-3 sm:mb-4">
                  <Image
                    src={product.images?.[0] || category?.categoryImage || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <Badge variant="outline" className="text-xs sm:text-sm">{product.brand}</Badge>
                  <div className="flex flex-wrap gap-1">
                    {product.treatments?.antiStatic && (
                      <Badge variant="secondary" className="text-xs">Anti-Static</Badge>
                    )}
                    {product.treatments?.ptfeMembrane && (
                      <Badge variant="secondary" className="text-xs">PTFE</Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-base sm:text-lg line-clamp-2 mb-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 flex-1 flex flex-col pt-0">
                {/* Technical Specs */}
                {product.technicalSpecs && (
                  <div className="space-y-2">
                    <div className="text-xs sm:text-sm font-medium">Technical Specifications:</div>
                    <div className="space-y-1">
                      {product.technicalSpecs.filtrationEfficiency && (
                        <div className="flex items-center space-x-2 text-xs sm:text-sm">
                          <Gauge className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">Efficiency:</span>
                          <span className="font-medium">{product.technicalSpecs.filtrationEfficiency}</span>
                        </div>
                      )}
                      {product.technicalSpecs.operatingTemperature && (
                        <div className="flex items-center space-x-2 text-xs sm:text-sm">
                          <Thermometer className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">Temperature:</span>
                          <span className="font-medium">{product.technicalSpecs.operatingTemperature}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Applications */}
                <div className="space-y-2">
                  <div className="text-xs sm:text-sm font-medium">Key Applications:</div>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 3).map((app) => (
                      <Badge key={app} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                    {product.applications.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.applications.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mt-auto pt-3 sm:pt-4">
                  <Button asChild className="w-full text-sm sm:text-base">
                    <Link href={`/${resolvedParams?.slug}/${product.id}`} className="flex items-center justify-center">
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <Info className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold mb-2">No Products Found</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 px-4">
              There are currently no products in this category.
            </p>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/products" className="flex items-center justify-center">
                Browse Other Categories
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Related Categories */}
      {products.length > 0 && (
        <CTASectionLight
          title="Need Something Different?"
          description="Explore our other product categories or contact our technical team for custom solutions."
          primaryButton={{
            href: "/products",
            text: "Browse All Categories",
            variant: "default"
          }}
          secondaryButton={{
            href: "/contact",
            text: "Request Custom Solution",
            variant: "outline"
          }}
          className="mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 lg:mb-12"
        />
      )}
    </PageContainer>
  );
}