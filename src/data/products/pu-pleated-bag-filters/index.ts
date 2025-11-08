import { Product } from '../../../lib/types';

// Import all PU pleated bag filter products
import { polyurethaneTopBottomPleatedBagFilter } from './polyurethane-top-bottom-pleated-bag-filter';
import { metalTopBottomPleatedBagFilters } from './metal-top-bottom-pleated-bag-filters';
import { highEfficiencyPuEndCapDustCollectorFilterCartridgePolyurethaneSealLongServiceLifeEasyInstallation } from './high-efficiency-pu-end-cap-dust-collector-filter-cartridge-polyurethane-seal-long-service-life-easy-installation';

// Export individual products
export { polyurethaneTopBottomPleatedBagFilter } from './polyurethane-top-bottom-pleated-bag-filter';
export { metalTopBottomPleatedBagFilters } from './metal-top-bottom-pleated-bag-filters';
export { highEfficiencyPuEndCapDustCollectorFilterCartridgePolyurethaneSealLongServiceLifeEasyInstallation } from './high-efficiency-pu-end-cap-dust-collector-filter-cartridge-polyurethane-seal-long-service-life-easy-installation';

// Export all PU pleated bag filter products as an array
export const puPleatedBagFilters: Product[] = [
  polyurethaneTopBottomPleatedBagFilter,
  metalTopBottomPleatedBagFilters,
  highEfficiencyPuEndCapDustCollectorFilterCartridgePolyurethaneSealLongServiceLifeEasyInstallation,
];
