import { Product } from '../../../lib/types';

// Import all cellulose air filter cartridge products
import { squareFlangeAirFilterCartridge } from './square-flange-air-filter-cartridge';
import { celluloseAirFilterCartridge } from './cellulose-air-filter-cartridge';
import { ovalAirFilterCartridge } from './oval-air-filter-cartridge';
import { forstHighEfficiencyIndustrialDustCollectorReplacementFilterCelluloseFilterCartridge } from './forst-high-efficiency-industrial-dust-collector-replacement-filter-cellulose-filter-cartridge';

// Export individual products
export { squareFlangeAirFilterCartridge } from './square-flange-air-filter-cartridge';
export { celluloseAirFilterCartridge } from './cellulose-air-filter-cartridge';
export { ovalAirFilterCartridge } from './oval-air-filter-cartridge';
export { forstHighEfficiencyIndustrialDustCollectorReplacementFilterCelluloseFilterCartridge } from './forst-high-efficiency-industrial-dust-collector-replacement-filter-cellulose-filter-cartridge';

// Export all cellulose air filter cartridge products as an array
export const celluloseAirFilterCartridges: Product[] = [
  squareFlangeAirFilterCartridge,
  celluloseAirFilterCartridge,
  ovalAirFilterCartridge,
  forstHighEfficiencyIndustrialDustCollectorReplacementFilterCelluloseFilterCartridge,
];
