const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function checkProductImages() {
  console.log('🔍 Checking products for image availability...\n');
  
  const productsDir = path.join(DATA_DIR, 'products');
  const categories = fs.readdirSync(productsDir).filter(item => {
    const itemPath = path.join(productsDir, item);
    return fs.statSync(itemPath).isDirectory();
  });

  let totalProducts = 0;
  let productsWithImages = 0;
  let productsWithoutImages = 0;
  const categorySummary = {};

  categories.forEach(category => {
    const categoryPath = path.join(productsDir, category);
    const productFiles = fs.readdirSync(categoryPath).filter(file => 
      file.endsWith('.ts') && file !== 'index.ts'
    );

    categorySummary[category] = {
      total: productFiles.length,
      withImages: 0,
      withoutImages: 0,
      missingImages: []
    };

    productFiles.forEach(file => {
      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      totalProducts++;
      
      // Check if product has images defined
      const imageMatch = content.match(/images:\s*\[([^\]]*)\]/);
      if (imageMatch) {
        const imageString = imageMatch[1];
        const images = imageString.match(/"([^"]*)"/g);
        
        if (images && images.length > 0) {
          const cleanImages = images.map(img => img.replace(/"/g, ''));
          
          // Check if it's just placeholder
          if (cleanImages.length === 1 && cleanImages[0] === '/placeholder.svg') {
            productsWithoutImages++;
            categorySummary[category].withoutImages++;
            categorySummary[category].missingImages.push(file.replace('.ts', ''));
          } else {
            // Check if images actually exist
            let hasRealImages = false;
            cleanImages.forEach(imagePath => {
              if (imagePath !== '/placeholder.svg') {
                const fullPath = path.join(PUBLIC_DIR, imagePath);
                if (fs.existsSync(fullPath)) {
                  hasRealImages = true;
                }
              }
            });
            
            if (hasRealImages) {
              productsWithImages++;
              categorySummary[category].withImages++;
            } else {
              productsWithoutImages++;
              categorySummary[category].withoutImages++;
              categorySummary[category].missingImages.push(file.replace('.ts', ''));
            }
          }
        } else {
          productsWithoutImages++;
          categorySummary[category].withoutImages++;
          categorySummary[category].missingImages.push(file.replace('.ts', ''));
        }
      } else {
        productsWithoutImages++;
        categorySummary[category].withoutImages++;
        categorySummary[category].missingImages.push(file.replace('.ts', ''));
      }
    });
  });

  console.log('📊 Product Image Summary:');
  console.log('========================');
  console.log(`📦 Total Products: ${totalProducts}`);
  console.log(`✅ Products with Images: ${productsWithImages}`);
  console.log(`⚠️  Products without Images: ${productsWithoutImages}`);
  console.log(`📍 Placeholder Available: ${fs.existsSync(path.join(PUBLIC_DIR, 'placeholder.svg')) ? 'Yes' : 'No'}\n`);

  console.log('📋 Category Breakdown:');
  console.log('=====================');
  Object.entries(categorySummary).forEach(([category, stats]) => {
    console.log(`📂 ${category}:`);
    console.log(`   Total: ${stats.total}, With Images: ${stats.withImages}, Without Images: ${stats.withoutImages}`);
    if (stats.missingImages.length > 0) {
      console.log(`   Missing: ${stats.missingImages.join(', ')}`);
    }
    console.log('');
  });

  if (productsWithoutImages === 0) {
    console.log('🎉 All products have images or proper fallbacks!');
  } else {
    console.log(`⚠️  ${productsWithoutImages} products will use placeholder images.`);
    console.log('This is normal for products that don\'t have photos yet.');
  }
}

checkProductImages();
