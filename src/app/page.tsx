import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import { PageContainer } from "@/components/page-container";
import { CTASection } from "@/components/cta-section";
import { ArrowRight, CheckCircle, Shield, Globe, Users, Award, Settings } from "lucide-react";
import { getGTFSData, getFeaturedProducts } from "@/lib/data";
import { HeroCarousel } from "@/components/hero-carousel";

export default async function Home() {
  const gtfsData = await getGTFSData();
  const featuredProducts = await getFeaturedProducts(6);

  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Company Advantages */}
      <section className="section-secondary py-8 sm:py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-12">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Why Choose GTFS</h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                GTFS-brand filters for dust collection and air handling — stocked locally with Canada-wide shipping.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {gtfsData.advantages?.map((advantage, index) => {
              const icons = [Award, Shield, Settings, Globe];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={advantage.title} className="text-center h-full">
                  <CardHeader className="space-y-3 sm:space-y-4 pb-4">
                    <div className="mx-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* Product Categories */}
      <section className="section-primary py-8 sm:py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-12">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Product Categories</h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Washable spun-bond polyester, cost-effective media, extra filter area options, and rugged pre-filtration solutions
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {gtfsData.categories.slice(0, 6).map((category) => (
              <Card key={category.id} className="h-full flex flex-col group">
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
                  <CardTitle className="text-lg sm:text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4 sm:space-y-6 pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed flex-1">
                    {category.overview}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t">
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      {category.products.length} Products
                    </Badge>
                    <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm">
                      <Link href={`/${category.slug}`} className="flex items-center">
                        <span className="hidden xs:inline">View Products</span>
                        <span className="xs:hidden">View</span>
                        <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/polyester-air-filter-cartridge" className="flex items-center justify-center">
                <span>View All Categories</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </PageContainer>
      </section>

      {/* Featured Products */}
      <section className="section-accent py-8 sm:py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-12">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Featured Products</h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Professional filtration solutions for industry
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="h-full flex flex-col group">
                <CardHeader className="space-y-3 sm:space-y-4 pb-4">
                  {/* Product Image */}
                  <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={product.images?.[0] || "/products_images/product-catagories-images/cylindrical-filter-cartridge.webp"}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="text-xs sm:text-sm">{product.brand}</Badge>
                    {product.treatments?.antiStatic && (
                      <Badge variant="secondary" className="text-xs sm:text-sm">Anti-Static</Badge>
                    )}
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <CardTitle className="text-base sm:text-lg lg:text-xl line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-3">
                      {product.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4 sm:space-y-6 pt-0">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="text-xs sm:text-sm font-semibold text-foreground">Key Applications</div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {product.applications.slice(0, 3).map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                      {product.applications.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.applications.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-3 sm:pt-4 border-t">
                    <Button asChild className="w-full text-sm sm:text-base">
                      <Link href={`/${product.category}/${product.id}`} className="flex items-center justify-center">
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="section-secondary py-8 sm:py-12 lg:py-16">
        <PageContainer>
          <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-12">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">Quality & Standards</h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Factory Quality: ISO 9001 production. Testing Frameworks: MERV (ASHRAE 52.2), ISO 16890.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card className="">
              <CardHeader className="space-y-3 sm:space-y-4">
                <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                  <Award className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {gtfsData.certifications?.map((cert) => (
                    <div key={cert} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="">
              <CardHeader className="space-y-3 sm:space-y-4">
                <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                  <Users className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  Quality Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {gtfsData.qualityStandards?.slice(0, 4).map((standard) => (
                    <div key={standard} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-muted/50">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm leading-relaxed">{standard}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 mb-6 sm:mb-8 lg:mb-12">
        <PageContainer>
          <CTASection
            title="Ready to Find Your Filtration Solution?"
            description="Technical questions, quotes, or cross-references — tell us what you're running and we'll help you match it."
            primaryButton={{
              href: "/contact",
              text: "Get Consultation",
              variant: "secondary"
            }}
            secondaryButton={{
              href: "/products",
              text: "Explore Products",
              variant: "outline"
            }}
          />
        </PageContainer>
      </section>
    </div>
  );
}
