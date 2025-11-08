"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi 
} from "@/components/ui/carousel";
import Image from "next/image";
import { ArrowRight, Filter, Shield, Wrench } from "lucide-react";

const heroImages = [
  "/products_images/product-catagories-images/metal-pleated-bag-filters.webp",
  "/products_images/product-catagories-images/polyester-air-filter-cartridge.webp",
  "/products_images/product-catagories-images/cartridge-dust-catcher.webp",
  "/products_images/product-catagories-images/dust-collector-system.webp",
];

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative h-[calc(100vh-6rem)] sm:h-[calc(100vh-6.5rem)] overflow-hidden">
      {/* Background Carousel */}
      <Carousel 
        setApi={setApi} 
        className="absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-6.5rem)]">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-[calc(100vh-6rem)] sm:h-[calc(100vh-6.5rem)] pl-0">
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`Industrial filtration solution ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Enhanced gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>

      {/* Enhanced Static Content Overlay with Better Mobile Visibility */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Text container with backdrop blur for extra visibility */}
            <div className="bg-foreground/20 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-background/10 max-w-4xl">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-background">
                <span className="block">Professional</span>
                <span className="block text-primary filter brightness-110 mt-1 sm:mt-2">Filtration Solutions for Industry</span>
              </h1>
              
              <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-background/90 leading-relaxed font-medium max-w-2xl">
                Reliable GTFS-brand filters for dust collection and air handling — stocked locally with Canada-wide shipping.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start mb-6 sm:mb-8 max-w-lg">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  <Link href="/products" className="flex items-center justify-center">
                    <span className="mr-2">Explore Products</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-background text-background hover:bg-background hover:text-foreground backdrop-blur-sm bg-background/10 w-full sm:w-auto">
                  <Link href="/contact" className="flex items-center justify-center">Get Consultation</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl">
                <div className="flex items-center space-x-2 sm:space-x-3 bg-background/5 backdrop-blur rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-background/10">
                  <div className="bg-primary/20 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                    <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-primary filter brightness-125" />
                  </div>
                  <span className="text-background font-medium text-sm sm:text-base">High Efficiency</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-background/5 backdrop-blur rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-background/10">
                  <div className="bg-primary/20 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary filter brightness-125" />
                  </div>
                  <span className="text-background font-medium text-sm sm:text-base">Certified Quality</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-background/5 backdrop-blur rounded-full px-3 sm:px-4 py-2 sm:py-3 border border-background/10 xs:col-span-2 sm:col-span-1">
                  <div className="bg-primary/20 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                    <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-primary filter brightness-125" />
                  </div>
                  <span className="text-background font-medium text-sm sm:text-base">Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`relative rounded-full transition-all duration-300 ease-in-out hover:scale-110 ${
              index === current
                ? "w-8 sm:w-10 h-3 sm:h-4 bg-primary shadow-lg shadow-primary/50"
                : "w-3 sm:w-4 h-3 sm:h-4 bg-background/60 hover:bg-background/80"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}