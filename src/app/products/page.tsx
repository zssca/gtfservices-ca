import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { getCategories } from "@/lib/data";

export const metadata = {
  title: "Product Categories - GTFS Industrial Filters",
  description: "Explore our comprehensive range of industrial filtration solutions including polyester cartridges, cellulose filters, gas turbine filters, and dust collection systems.",
  keywords: "industrial filters, air filtration, dust collection, filter cartridges, polyester filters, cellulose filters, gas turbine filters, dust collectors",
};

export default async function ProductsPage() {
  const categories = await getCategories();

  return (
    <div className="flex max-w-7xl mx-auto flex-col">
      {/* Page Header */}
      <PageHeader
        title="Product Categories"
        description="Comprehensive industrial filtration solutions for every application"
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Products", href: "/products" }
        ]}
      />


      {/* Categories Grid */}
      <section className="section-primary py-8 sm:py-12 lg:py-16">
        <PageContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="h-full flex flex-col group hover:shadow-sm transition-shadow duration-300">
                <CardHeader className="space-y-3 sm:space-y-4 pb-4">
                  {/* Category Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={category.categoryImage || "/placeholder.svg"}
                      alt={category.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  {/* Category Title and Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg sm:text-xl leading-tight flex-1">
                      {category.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs sm:text-sm flex-shrink-0">
                      {category.products.length} Products
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col space-y-4 sm:space-y-6 pt-0">
                  {/* Category Description */}
                  <CardDescription className="text-sm sm:text-base leading-relaxed flex-1">
                    {category.overview}
                  </CardDescription>
                  
                  {/* Key Features */}
                  {category.keyFeatures && category.keyFeatures.length > 0 && (
                    <div className="space-y-2 sm:space-y-3">
                      <div className="text-xs sm:text-sm font-semibold text-foreground">Key Features</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {category.keyFeatures.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {category.keyFeatures.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.keyFeatures.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Common Applications */}
                  {category.commonApplications && category.commonApplications.length > 0 && (
                    <div className="space-y-2 sm:space-y-3">
                      <div className="text-xs sm:text-sm font-semibold text-foreground">Applications</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {category.commonApplications.slice(0, 2).map((app, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        {category.commonApplications.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.commonApplications.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Action Button */}
                  <div className="mt-auto pt-3 sm:pt-4 border-t">
                    <Button asChild className="w-full text-sm sm:text-base group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/${category.slug}`} className="flex items-center justify-center">
                        <span>View Products</span>
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Call to Action Section */}
      <section className="section-accent py-8 sm:py-12 lg:py-16">
        <PageContainer>
          <Card className="max-w-7xl mx-auto bg-primary text-primary-foreground border-0">
            <CardContent className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                  Need Help Finding the Right Filter?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Our technical experts can help you select the perfect filtration solution for your specific application and requirements.
                </p>
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
                <Button variant="outline" size="lg" className="bg-transparent text-background border-background w-full xs:w-auto">
                    <Link href="/contact" className="flex items-center justify-center">
                      Get Expert Consultation
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-background border-background w-full xs:w-auto">
                    <Link href="/about" className="flex items-center justify-center">
                      Learn About GTFS
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </PageContainer>
      </section>
    </div>
  );
}
