import { Product } from '../../../lib/types';

// Import all dust collector system products
import { dustCollectionSystemWoodworkingDustCollector } from './dust-collection-system-woodworking-dust-collector';
import { inclinedCartridgeDustCollector } from './inclined-cartridge-dust-collector';
import { industrialBagDustCollector } from './industrial-bag-dust-collector';
import { bigCapacityLowerCostDustCollectorEquipment } from './big-capacity-lower-cost-dust-collector-equipment';
import { baghouseDustCollectorIndustrialBagFilter } from './baghouse-dust-collector-industrial-bag-filter';

// Export individual products
export { dustCollectionSystemWoodworkingDustCollector } from './dust-collection-system-woodworking-dust-collector';
export { inclinedCartridgeDustCollector } from './inclined-cartridge-dust-collector';
export { industrialBagDustCollector } from './industrial-bag-dust-collector';
export { bigCapacityLowerCostDustCollectorEquipment } from './big-capacity-lower-cost-dust-collector-equipment';
export { baghouseDustCollectorIndustrialBagFilter } from './baghouse-dust-collector-industrial-bag-filter';

// Export all dust collector system products as an array
export const dustCollectorSystem: Product[] = [
  dustCollectionSystemWoodworkingDustCollector,
  inclinedCartridgeDustCollector,
  industrialBagDustCollector,
  bigCapacityLowerCostDustCollectorEquipment,
  baghouseDustCollectorIndustrialBagFilter,
];
