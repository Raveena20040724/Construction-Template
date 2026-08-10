export type EquipmentAvailability = 'Available' | 'On Site' | 'Maintenance';

export interface Equipment {
  id: string;
  name: string;
  type: string;
  capacity: string;
  usage: string;
  availability: EquipmentAvailability;
  imageUrl: string;
  specifications: {
    enginePower: string;
    operatingWeight: string;
    maxReach: string;
  };
}
