"use client";

import { useState, useEffect } from 'react';

/**
 * Hook to dynamically load product images
 */
export function useProductImages(category: string, productId: string) {
  const [images, setImages] = useState<string[]>(['/placeholder.svg']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      try {
        // In a real app, you might fetch this from an API
        // For now, we'll use the statically generated images
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setImages(['/placeholder.svg']);
        setLoading(false);
      }
    }

    loadImages();
  }, [category, productId]);

  return { images, loading };
}

/**
 * Hook to handle image fallbacks
 */
export function useImageFallback(src: string, fallbacks: string[] = ['/placeholder.svg']) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbacks.length > 0) {
      setHasError(true);
      setCurrentSrc(fallbacks[0]);
    }
  };

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  return { currentSrc, handleError, hasError };
}
