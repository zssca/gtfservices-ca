import { ProductCategory } from '../../lib/types';

// Import individual category files
import { polyesterAirFilterCartridgeCategory } from './polyester-air-filter-cartridge';
import { celluloseAirFilterCartridgeCategory } from './cellulose-air-filter-cartridge';
import { gasTurbineAirIntakeFiltersCategory } from './gas-turbine-air-intake-filters';
import { metalPleatedBagFiltersCategory } from './metal-pleated-bag-filters';
import { puPleatedBagFiltersCategory } from './pu-pleated-bag-filters';
import { panelAirFiltersCategory } from './panel-air-filters';
import { airFilterMediaCategory } from './air-filter-media';
import { fiberglassFilterMediaCategory } from './fiberglass-filter-media';
import { cartridgeDustCatcherCategory } from './cartridge-dust-catcher';
import { dustCollectorSystemCategory } from './dust-collector-system';

// Export individual categories
export { polyesterAirFilterCartridgeCategory } from './polyester-air-filter-cartridge';
export { celluloseAirFilterCartridgeCategory } from './cellulose-air-filter-cartridge';
export { gasTurbineAirIntakeFiltersCategory } from './gas-turbine-air-intake-filters';
export { metalPleatedBagFiltersCategory } from './metal-pleated-bag-filters';
export { puPleatedBagFiltersCategory } from './pu-pleated-bag-filters';
export { panelAirFiltersCategory } from './panel-air-filters';
export { airFilterMediaCategory } from './air-filter-media';
export { fiberglassFilterMediaCategory } from './fiberglass-filter-media';
export { cartridgeDustCatcherCategory } from './cartridge-dust-catcher';
export { dustCollectorSystemCategory } from './dust-collector-system';

// Export all categories as an array
export const productCategories: ProductCategory[] = [
  polyesterAirFilterCartridgeCategory,
  celluloseAirFilterCartridgeCategory,
  gasTurbineAirIntakeFiltersCategory,
  metalPleatedBagFiltersCategory,
  puPleatedBagFiltersCategory,
  panelAirFiltersCategory,
  airFilterMediaCategory,
  fiberglassFilterMediaCategory,
  cartridgeDustCatcherCategory,
  dustCollectorSystemCategory
];