import fs from 'fs';
import path from 'path';

/**
 * Utility to dynamically get product images from the file system
 * This allows for adding new images without updating TypeScript files
 */

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'products_images');

/**
 * Dynamically get all images for a product
 */
function getProductImages(category: string, productId: string): string[] {
  const productImagesDir = path.join(PUBLIC_IMAGES_DIR, category, productId);
  
  if (!fs.existsSync(productImagesDir)) {
    return ['/placeholder.svg'];
  }
  
  const files = fs.readdirSync(productImagesDir);
  const imageFiles = files.filter(file => 
    /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
  ).sort();
  
  if (imageFiles.length === 0) {
    return ['/placeholder.svg'];
  }
  
  return imageFiles.map(file => `/products_images/${category}/${productId}/${file}`);
}

/**
 * Get category image dynamically
 */
function getCategoryImage(categoryId: string): string {
  const categoryImagesDir = path.join(PUBLIC_IMAGES_DIR, 'product-catagories-images');
  
  if (!fs.existsSync(categoryImagesDir)) {
    return '/placeholder.svg';
  }
  
  const files = fs.readdirSync(categoryImagesDir);
  const categoryImageFile = files.find(file => 
    file.startsWith(categoryId) && /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
  );
  
  return categoryImageFile 
    ? `/products_images/product-catagories-images/${categoryImageFile}` 
    : '/placeholder.svg';
}

/**
 * Get the first available image for a product with fallback chain
 */
function getProductThumbnail(category: string, productId: string, categoryImage?: string): string {
  const images = getProductImages(category, productId);
  
  // If product has images, return the first one
  if (images.length > 0 && images[0] !== '/placeholder.svg') {
    return images[0];
  }
  
  // Fall back to category image
  if (categoryImage && categoryImage !== '/placeholder.svg') {
    return categoryImage;
  }
  
  // Final fallback to placeholder
  return '/placeholder.svg';
}

export {
  getProductImages,
  getCategoryImage,
  getProductThumbnail
};
