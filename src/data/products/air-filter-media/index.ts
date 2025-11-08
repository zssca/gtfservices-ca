import { Product } from '../../../lib/types';

// Import all air filter media products
import { antiStaticFilterPaperFilterCloth } from './anti-static-filter-paper-filter-cloth';
import { airFilterPaperRoll } from './air-filter-paper-roll';
import { airFilterRawMaterialMediaRoll } from './air-filter-raw-material-media-roll';
import { filterPaper } from './filter-paper';

// Export individual products
export { antiStaticFilterPaperFilterCloth } from './anti-static-filter-paper-filter-cloth';
export { airFilterPaperRoll } from './air-filter-paper-roll';
export { airFilterRawMaterialMediaRoll } from './air-filter-raw-material-media-roll';
export { filterPaper } from './filter-paper';

// Export all air filter media products as an array
export const airFilterMedia: Product[] = [
  antiStaticFilterPaperFilterCloth,
  airFilterPaperRoll,
  airFilterRawMaterialMediaRoll,
  filterPaper,
];
