import type { Industry } from '../types/industry';

export const industriesData: Industry[] = [
  {
    id: 'residential',
    name: 'Residential',
    slug: 'residential',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    description: 'Custom luxury residences, multi-family housing complexes, and master-planned residential townships.',
    overview: 'BuildCore partners with private homeowners and master community developers to deliver high-quality, sustainable residential environments. From luxury high-rise apartments to single-family gated communities, we blend architectural aesthetic with structural longevity.',
    keySolutions: ['Turnkey Luxury Villas', 'Multi-family Apartment Towers', 'Master-planned Gated Communities', 'LEED-certified Green Homes'],
    featuredProjectIds: ['riverside-residential-complex', 'green-valley-township']
  },
  {
    id: 'commercial',
    name: 'Commercial',
    slug: 'commercial',
    iconName: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    description: 'High-rise corporate office towers, business parks, tech campuses, and commercial plazas.',
    overview: 'Creating inspiring workplaces that boost productivity and business growth. We deliver state-of-the-art office buildings equipped with smart building automation, double-glazed curtain walls, and flexible open floorplates.',
    keySolutions: ['Corporate Headquarters', 'High-rise Glass Office Towers', 'Business Parks & Tech Hubs', 'Underground Parking Structures'],
    featuredProjectIds: ['skyline-business-tower', 'grand-city-mall']
  },
  {
    id: 'industrial',
    name: 'Industrial',
    slug: 'industrial',
    iconName: 'Factory',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: 'Logistics hubs, automated warehouses, heavy manufacturing plants, and processing facilities.',
    overview: 'Industrial facilities require heavy load capacity, wide clear spans, and robust infrastructure. BuildCore engineers PEB structures, high-tolerance laser-screed concrete floors, and heavy machinery foundations tailored for 24/7 operations.',
    keySolutions: ['Automated Warehouses & Logistics Hubs', 'Heavy Manufacturing Facilities', 'Cold Storage & Distribution Centers', 'Chemical Processing Plants'],
    featuredProjectIds: ['industrial-manufacturing-park', 'industrial-corridor']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    slug: 'healthcare',
    iconName: 'HeartPulse',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    description: 'Hospitals, medical research laboratories, outpatient clinics, and specialized care centers.',
    overview: 'Healthcare facility construction demands absolute precision in MEP engineering, cleanroom isolation, negative pressure rooms, and radiation shielding. We build life-saving medical spaces that prioritize patient comfort and staff efficiency.',
    keySolutions: ['Specialty Multi-specialty Hospitals', 'Cleanroom Laboratories', 'Outpatient Surgical Centers', 'Medical Research Facilities'],
    featuredProjectIds: ['smart-city-development']
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    iconName: 'GraduationCap',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    description: 'University campuses, STEM research buildings, secondary schools, and athletic complexes.',
    overview: 'Inspiring future generations through modern educational infrastructure. BuildCore constructs flexible lecture halls, high-tech science laboratories, student housing, and athletic facilities designed for safety and collaboration.',
    keySolutions: ['University Campuses & Academic Wings', 'STEM Innovation Labs', 'Student Dormitory Towers', 'Indoor Sports Arenas'],
    featuredProjectIds: ['urban-housing-development']
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    slug: 'hospitality',
    iconName: 'Hotel',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    description: 'Five-star luxury hotels, eco-resorts, convention centers, and entertainment complexes.',
    overview: 'Hospitality environments must combine architectural grandeur with flawless acoustic and interior finishing. We construct world-class hotels featuring grand atrium lobbies, banquet halls, infinity pools, and luxury suite fit-outs.',
    keySolutions: ['5-Star Luxury Hotels & Resorts', 'Convention & Exhibition Centers', 'Boutique Eco-Lodges', 'Event Arenas'],
    featuredProjectIds: ['grand-city-mall']
  },
  {
    id: 'retail',
    name: 'Retail',
    slug: 'retail',
    iconName: 'ShoppingBag',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    description: 'Shopping malls, retail lifestyle centers, flagship brand stores, and hypermarket hubs.',
    overview: 'Delivering dynamic retail spaces designed to maximize foot traffic and customer engagement. Our retail construction expertise includes multi-tier shopping malls, food court arcades, and luxury brand flagship build-outs.',
    keySolutions: ['Regional Shopping Malls', 'Open-air Lifestyle Centers', 'Flagship Retail Showrooms', 'Supermarket Outlets'],
    featuredProjectIds: ['grand-city-mall']
  },
  {
    id: 'government',
    name: 'Government',
    slug: 'government',
    iconName: 'Landmark',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    description: 'Civic administrative centers, courthouses, public safety buildings, and defense facilities.',
    overview: 'Partnering with government entities to build public assets adhering to strict regulatory, security, and budgetary standards. BuildCore delivers high-security government headquarters, municipal centers, and public safety buildings.',
    keySolutions: ['Civic Administrative Headquarters', 'High-Security Judicial Courthouses', 'Emergency Operations Centers', 'Public Transit Depots'],
    featuredProjectIds: ['smart-city-development', 'urban-housing-development']
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    slug: 'infrastructure',
    iconName: 'Waypoints',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800',
    description: 'Highways, bridges, mass transit lines, water treatment plants, and utility corridors.',
    overview: 'Developing resilient infrastructure that connects cities and drives national commerce. Our civil engineering teams execute mega-scale transit viaducts, expressways, deep water intake tunnels, and bridge flyovers.',
    keySolutions: ['Expressways & Arterial Highways', 'Mass Rapid Transit Viaducts & Stations', 'Cable-Stayed & Steel Bridges', 'Water Treatment Works'],
    featuredProjectIds: ['metro-infrastructure-project', 'highway-expansion-project', 'airport-expansion']
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    slug: 'energy',
    iconName: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800',
    description: 'Solar power farms, electrical substations, wind turbine foundations, and utility grids.',
    overview: 'Powering the clean energy transition through specialized civil and structural engineering for utility-scale solar farms, wind turbine concrete gravity bases, electrical substations, and transmission line foundations.',
    keySolutions: ['Solar Farm Civil Works & Mounting Racks', 'Wind Turbine Reinforced Foundations', 'Electrical Substations (GIS / AIS)', 'Smart Utility Corridors'],
    featuredProjectIds: ['industrial-manufacturing-park', 'smart-city-development']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    slug: 'manufacturing',
    iconName: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
    description: 'Semiconductor fabs, automotive assembly plants, consumer electronics factories, and food processing plants.',
    overview: 'High-precision manufacturing environments requiring vibration-isolated flooring, ultra-pure water piping systems, and controlled cleanroom atmospheres for high-tech assembly lines.',
    keySolutions: ['Semiconductor Cleanroom Fabs', 'Automotive Assembly Lines', 'Food & Beverage Processing Plants', 'Vibration-Isolated Foundation Slabs'],
    featuredProjectIds: ['industrial-manufacturing-park']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    slug: 'real-estate',
    iconName: 'Building',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    description: 'Mixed-use urban developments, master-planned townships, asset modernizations, and land plotting.',
    overview: 'Unlocking maximum asset value for real estate developers and institutional funds through turnkey development, joint ventures, and value-engineered construction execution.',
    keySolutions: ['Mixed-Use Retail & Office Towers', 'Master-Planned Land Plotting', 'Asset Refurbishment & Retrofitting', 'Turnkey EPC Partnerships'],
    featuredProjectIds: ['green-valley-township', 'riverside-residential-complex']
  }
];
