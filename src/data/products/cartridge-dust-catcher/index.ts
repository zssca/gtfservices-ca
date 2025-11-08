import { Product } from '../../../lib/types';

// Import all cartridge dust catcher products
import { funnelTypeIndustrialDustCollector } from './funnel-type-industrial-dust-collector';
import { dustCatcher } from './dust-catcher';
import { forstIndustrialPortableExtractorDustCollector } from './forst-industrial-portable-extractor-dust-collector';
import { dustRemoverExtractor } from './dust-remover-extractor';
import { automaticPulseJetCleaningWoodworkingDustCollector } from './automatic-pulse-jet-cleaning-woodworking-dust-collector';

// Export individual products
export { funnelTypeIndustrialDustCollector } from './funnel-type-industrial-dust-collector';
export { dustCatcher } from './dust-catcher';
export { forstIndustrialPortableExtractorDustCollector } from './forst-industrial-portable-extractor-dust-collector';
export { dustRemoverExtractor } from './dust-remover-extractor';
export { automaticPulseJetCleaningWoodworkingDustCollector } from './automatic-pulse-jet-cleaning-woodworking-dust-collector';

// Export all cartridge dust catcher products as an array
export const cartridgeDustCatcher: Product[] = [
  funnelTypeIndustrialDustCollector,
  dustCatcher,
  forstIndustrialPortableExtractorDustCollector,
  dustRemoverExtractor,
  automaticPulseJetCleaningWoodworkingDustCollector,
];
