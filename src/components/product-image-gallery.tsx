"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProductImageGalleryProps {
  images?: string[];
  productName: string;
  fallbackImage?: string;
}

export function ProductImageGallery({ 
  images, 
  productName, 
  fallbackImage = "/placeholder.svg" 
}: ProductImageGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Memoize displayImages to prevent unnecessary re-renders
  const displayImages = useMemo(() => {
    return images && images.length > 0 ? images : [fallbackImage];
  }, [images, fallbackImage]);

  // Set up carousel API effects
  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
      {/* Main Carousel */}
      <Carousel setApi={setApi} className="w-full relative">
        <CarouselContent>
          {displayImages.map((image, index) => (
            <CarouselItem key={`${image}-${index}`}>
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted border border-border transition-all duration-200">
                <Image
                  src={image}
                  alt={`${productName} - Image ${index + 1} of ${displayImages.length}`}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {displayImages.length > 1 && (
          <>
            <CarouselPrevious className="left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-white/90 hover:bg-white border shadow-none transition-all duration-200" />
            <CarouselNext className="right-2 sm:right-4 h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-white/90 hover:bg-white border shadow-none transition-all duration-200" />
          </>
        )}
      </Carousel>
      
      {/* Image Counter */}
      {displayImages.length > 1 && (
        <div className="flex justify-center">
          <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-none">
            {current} / {displayImages.length}
          </div>
        </div>
      )}
      
      {/* Thumbnail Grid with Scroll */}
      {displayImages.length > 1 && (
        <div className="space-y-2 lg:space-y-3">
          <h4 className="text-xs sm:text-sm lg:text-base font-medium text-foreground">Product Images</h4>
          
          {/* Responsive grid for smaller screens */}
          <div className="block lg:hidden">
            <ScrollArea className="w-full">
              <div className="flex space-x-2 sm:space-x-3 pb-2 px-1">
                {displayImages.map((image, index) => (
                  <button 
                    key={`thumb-${image}-${index}`}
                    type="button"
                    className={`relative flex-shrink-0 aspect-square w-16 sm:w-20 md:w-24 overflow-hidden rounded-lg border cursor-pointer touch-manipulation ${
                      current === index + 1
                        ? 'border-primary'
                        : 'border-border'
                    }`}
                    onClick={() => scrollToSlide(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        scrollToSlide(index);
                      }
                    }}
                    aria-label={`View image ${index + 1} of ${productName}`}
                    aria-current={current === index + 1 ? 'true' : 'false'}
                  >
                    <Image
                      src={image}
                      alt={`${productName} view ${index + 1}`}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="h-2" />
            </ScrollArea>
          </div>

          {/* Grid layout for larger screens */}
          <div className="hidden lg:block">
            <div className="w-full">
              <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2 lg:gap-3 pb-2">
                {displayImages.map((image, index) => (
                  <button 
                    key={`thumb-${image}-${index}`}
                    type="button"
                    className={`relative aspect-square w-full overflow-hidden rounded-lg border cursor-pointer touch-manipulation ${
                      current === index + 1
                        ? 'border-primary'
                        : 'border-border'
                    }`}
                    onClick={() => scrollToSlide(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        scrollToSlide(index);
                      }
                    }}
                    aria-label={`View image ${index + 1} of ${productName}`}
                    aria-current={current === index + 1 ? 'true' : 'false'}
                  >
                    <Image
                      src={image}
                      alt={`${productName} view ${index + 1}`}
                      width={120}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}