import { Product } from '../../../lib/types';

// Import all panel air filter products
import { primaryEfficiencyPanelFilter } from './primary-efficiency-panel-filter';
import { bagPanelPreFilter } from './bag-panel-pre-filter';
import { highMediumEfficiencyPanelFilterWithClapboard } from './high-medium-efficiency-panel-filter-with-clapboard';
import { hepaPanelAirFilterWithoutClapboard } from './hepa-panel-air-filter-without-clapboard';

// Export individual products
export { primaryEfficiencyPanelFilter } from './primary-efficiency-panel-filter';
export { bagPanelPreFilter } from './bag-panel-pre-filter';
export { highMediumEfficiencyPanelFilterWithClapboard } from './high-medium-efficiency-panel-filter-with-clapboard';
export { hepaPanelAirFilterWithoutClapboard } from './hepa-panel-air-filter-without-clapboard';

// Export all panel air filter products as an array
export const panelAirFilters: Product[] = [
  primaryEfficiencyPanelFilter,
  bagPanelPreFilter,
  highMediumEfficiencyPanelFilterWithClapboard,
  hepaPanelAirFilterWithoutClapboard,
];
