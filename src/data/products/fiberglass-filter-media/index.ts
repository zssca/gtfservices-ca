import { Product } from '../../../lib/types';

// Import all fiberglass filter media products
import { forstFiberglassFilter } from './forst-fiberglass-filter';
import { forstFiberglassAirFilter } from './forst-fiberglass-air-filter';
import { forstFilterFiberglassMedia } from './forst-filter-fiberglass-media';
import { fiberglassForstFilterMedia } from './fiberglass-forst-filter-media';

// Export individual products
export { forstFiberglassFilter } from './forst-fiberglass-filter';
export { forstFiberglassAirFilter } from './forst-fiberglass-air-filter';
export { forstFilterFiberglassMedia } from './forst-filter-fiberglass-media';
export { fiberglassForstFilterMedia } from './fiberglass-forst-filter-media';

// Export all fiberglass filter media products as an array
export const fiberglassFilterMedia: Product[] = [
  forstFiberglassFilter,
  forstFiberglassAirFilter,
  forstFilterFiberglassMedia,
  fiberglassForstFilterMedia,
];
