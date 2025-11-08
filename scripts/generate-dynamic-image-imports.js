const fs = require('fs');
const path = require('path');

const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'products_images');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

function getProductImages(category, productId) {
  const productImagesDir = path.join(PUBLIC_IMAGES_DIR, category, productId);
  
  if (!fs.existsSync(productImagesDir)) {
    return [];
  }
  
  const files = fs.readdirSync(productImagesDir);
  const imageFiles = files.filter(file => 
    /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
  ).sort();
  
  return imageFiles.map(file => `/products_images/${category}/${productId}/${file}`);
}

function getCategoryImage(categoryId) {
  const categoryImagesDir = path.join(PUBLIC_IMAGES_DIR, 'product-catagories-images');
  
  if (!fs.existsSync(categoryImagesDir)) {
    return null;
  }
  
  const files = fs.readdirSync(categoryImagesDir);
  const categoryImageFile = files.find(file => 
    file.startsWith(categoryId) && /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
  );
  
  return categoryImageFile ? `/products_images/product-catagories-images/${categoryImageFile}` : null;
}

function updateProductDataFile(category, productFile, images) {
  const filePath = path.join(DATA_DIR, 'products', category, productFile);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Create the images array string
  const imagesArrayString = images.length > 0 
    ? `[${images.map(img => `"${img}"`).join(', ')}]`
    : '["/placeholder.svg"]';
  
  // Find and replace the images array
  const imagesRegex = /images:\s*\[([^\]]*)\]/;
  const imagesString = `images: ${imagesArrayString}`;
  
  if (imagesRegex.test(content)) {
    content = content.replace(imagesRegex, imagesString);
  } else {
    // If no images property found, add it after description
    const descriptionRegex = /(description:\s*"[^"]*",)/;
    if (descriptionRegex.test(content)) {
      content = content.replace(descriptionRegex, `$1\n  ${imagesString},`);
    }
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated ${productFile} with ${images.length} images`);
}

function updateCategoryDataFile(categoryFile, categoryImage) {
  const filePath = path.join(DATA_DIR, 'categories', categoryFile);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Category file not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  const imageToUse = categoryImage || '/placeholder.svg';
  
  // Find the categoryImage and replace it
  const categoryImageRegex = /categoryImage:\s*"[^"]*"/;
  const categoryImageString = `categoryImage: "${imageToUse}"`;
  
  if (categoryImageRegex.test(content)) {
    content = content.replace(categoryImageRegex, categoryImageString);
  } else {
    console.log(`⚠️  Could not find categoryImage in ${categoryFile}`);
    return;
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Updated category ${categoryFile} with image: ${imageToUse}`);
}

function generateDynamicImageImports() {
  console.log('🔍 Scanning for images and updating imports dynamically...\n');
  
  // Get all categories
  const productsDir = path.join(DATA_DIR, 'products');
  const categories = fs.readdirSync(productsDir).filter(item => {
    const itemPath = path.join(productsDir, item);
    return fs.statSync(itemPath).isDirectory();
  });
  
  let totalUpdated = 0;
  let totalProducts = 0;
  
  categories.forEach(category => {
    console.log(`📂 Processing category: ${category}`);
    
    const categoryPath = path.join(productsDir, category);
    const productFiles = fs.readdirSync(categoryPath).filter(file => 
      file.endsWith('.ts') && file !== 'index.ts'
    );
    
    productFiles.forEach(file => {
      const productId = file.replace('.ts', '');
      const images = getProductImages(category, productId);
      
      totalProducts++;
      
      if (images.length > 0) {
        updateProductDataFile(category, file, images);
        totalUpdated++;
        console.log(`   ✅ ${productId}: Found ${images.length} images`);
      } else {
        // Set placeholder for products without images
        updateProductDataFile(category, file, []);
        console.log(`   ⚠️  ${productId}: No images found, using placeholder`);
      }
    });
    
    // Update category image
    const categoryImage = getCategoryImage(category);
    const categoryFile = `${category}.ts`;
    updateCategoryDataFile(categoryFile, categoryImage);
    
    console.log('');
  });
  
  console.log(`\n🎉 Dynamic import update complete!`);
  console.log(`📊 Summary: ${totalUpdated}/${totalProducts} products have images`);
  console.log(`📍 ${totalProducts - totalUpdated} products will use placeholder images`);
}

// Run the dynamic import generator
generateDynamicImageImports();
