import type { Equipment } from '../types/equipment';

export const equipmentData: Equipment[] = [
  {
    id: 'excavator-cat-349',
    name: 'CAT 349 Heavy Hydraulic Excavator',
    type: 'Earthmoving Excavator',
    capacity: '52 Tons / 3.2 m³ Bucket',
    usage: 'Deep trench excavation, foundation earthworks, and rock quarrying.',
    availability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '425 HP (317 kW)',
      operatingWeight: '50,600 kg',
      maxReach: '12.1 meters'
    }
  },
  {
    id: 'tower-crane-potain-mdt',
    name: 'Potain MDT 389 Topless Tower Crane',
    type: 'Tower Crane',
    capacity: '16 Tons Max Lift / 75m Jib',
    usage: 'High-rise commercial tower steel erection and concrete bucket hoisting.',
    availability: 'On Site',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '100 HP Electric Motor',
      operatingWeight: '110 Tons Freestanding',
      maxReach: '75 meters Jib Radius'
    }
  },
  {
    id: 'bulldozer-cat-d8',
    name: 'CAT D8T Crawler Bulldozer',
    type: 'Heavy Crawler Dozer',
    capacity: '38 Tons / SU Blade 8.7 m³',
    usage: 'Land clearing, subgrade compaction grading, and heavy soil pushing.',
    availability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '354 HP (264 kW)',
      operatingWeight: '39,750 kg',
      maxReach: 'Single-Shank Heavy Ripper'
    }
  },
  {
    id: 'concrete-mixer-schwing',
    name: 'Schwing Stetter 10 m³ Transit Concrete Mixer',
    type: 'Transit Concrete Mixer',
    capacity: '10 m³ Drum Volume',
    usage: 'Transporting ready-mix concrete from central batching plant to pour site.',
    availability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '380 HP Chassis Motor',
      operatingWeight: '32,000 kg GVW',
      maxReach: '3-stage Swivel Discharge Chute'
    }
  },
  {
    id: 'dump-truck-volvo-fm',
    name: 'Volvo FMX 8x4 Heavy Tipper Dump Truck',
    type: 'Off-Road Heavy Tipper',
    capacity: '24 m³ Tipper Body / 32 Tons Payload',
    usage: 'Hauling excavated earth, aggregate, and crushed stone to disposal zones.',
    availability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '460 HP Euro VI',
      operatingWeight: '48,000 kg GVW',
      maxReach: 'Hydraulic Rear End Tipper'
    }
  },
  {
    id: 'road-roller-hamm-3411',
    name: 'Hamm 3411 Heavy Vibratory Soil Compactor',
    type: 'Road Roller',
    capacity: '11 Tons / 2.14m Drum Width',
    usage: 'Compacting granular soil sub-base and asphalt road surface layers.',
    availability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '134 HP Deutz Diesel',
      operatingWeight: '11,300 kg',
      maxReach: 'Dual Frequency Vibration'
    }
  },
  {
    id: 'forklift-manitou-mrt',
    name: 'Manitou MRT 2550 Rotating Telehandler Forklift',
    type: 'Telescopic Forklift',
    capacity: '5 Tons / 25m Lift Height',
    usage: 'Material handling, pallet placement, and high-reach facade installation.',
    availability: 'On Site',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '156 HP Mercedes Engine',
      operatingWeight: '18,900 kg',
      maxReach: '24.9 meters Vertical Lift'
    }
  },
  {
    id: 'mobile-crane-liebherr',
    name: 'Liebherr LTM 1250-5.1 All-Terrain Mobile Crane',
    type: 'Mobile Telescopic Crane',
    capacity: '250 Tons Max Lift / 60m Main Boom',
    usage: 'Erecting heavy pre-cast concrete girders and industrial PEB steel trusses.',
    availability: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    specifications: {
      enginePower: '544 HP Liebherr 6-Cylinder',
      operatingWeight: '60,000 kg Axle Load',
      maxReach: '108 meters Max Hoist Height'
    }
  }
];
