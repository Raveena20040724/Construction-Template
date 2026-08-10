import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 'skyline-business-tower',
    title: 'Skyline Business Tower',
    slug: 'skyline-business-tower',
    category: 'Commercial',
    status: 'Completed',
    completionPercentage: 100,
    projectValue: '$120 Million',
    location: 'Downtown Financial District, NY',
    client: 'Skyline Real Estate Corp',
    startDate: 'Jan 2021',
    completionDate: 'Nov 2023',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Skyline Business Tower is a 45-story commercial skyscraper featuring double-glazed curtain walls, high-efficiency MEP engineering, and LEED Platinum sustainability certification.',
    scopeOfWork: [
      'Deep foundation piling and 4-level basement excavation',
      'Post-tensioned RCC floor slabs and central lift core',
      'High-speed destination-control elevator installation',
      'Curtain wall unitized glass façade installation',
      'Smart Building Management System (BMS) integration'
    ],
    methodology: 'Constructed using slip-form core technology and prefabricated unitized curtain wall panels to accelerate structural assembly by 4 months ahead of schedule.',
    materialsUsed: ['High-Strength Concrete C60', 'Low-E Double Glazed Glass', 'Structural Steel Grade 350', 'Recycled Fly-Ash Bricks'],
    equipmentUsed: ['Tower Cranes (3 Units)', 'Concrete Boom Pumpers', 'Curtain Wall Hoists'],
    challenges: 'Executing deep foundation piling in a congested urban downtown core directly adjacent to existing metro tunnels.',
    solutions: 'Utilized secant pile shoring walls with real-time laser deformation sensors to prevent ground settlement.',
    results: 'Delivered 3 months ahead of schedule, zero lost-time safety incidents across 1.2 million man-hours.',
    statistics: {
      builtUpArea: '850,000 sq.ft.',
      duration: '35 Months',
      workforce: '450 Workers/Day',
      floors: '45 Stories',
      completionPercentage: 100,
      projectCost: '$120M'
    }
  },
  {
    id: 'grand-city-mall',
    title: 'Grand City Mall',
    slug: 'grand-city-mall',
    category: 'Commercial',
    status: 'Completed',
    completionPercentage: 100,
    projectValue: '$185 Million',
    location: 'Metropolitan Central Plaza, IL',
    client: 'Grand Retail Holdings',
    startDate: 'Mar 2020',
    completionDate: 'Dec 2022',
    year: '2022',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A flagship retail destination spanning 1.5 million square feet with an expansive glass atrium, multiplex cinema complex, and multi-level parking deck for 3,000 vehicles.',
    scopeOfWork: [
      'Large span steel roof truss erection for central atrium',
      'Structural RCC superstructure with open retail floorplates',
      'Centralized chilled water air conditioning plant',
      'Multi-level vehicle ramp and deck construction'
    ],
    methodology: 'Integrated BIM Level 2 coordination across 14 specialized sub-contractors to avoid overhead ductwork clashes.',
    materialsUsed: ['Structural Steel Trusses', 'Italian Granite Flooring', 'Acoustic Glass'],
    equipmentUsed: ['Mobile All-Terrain Cranes', 'Scissor Lifts', 'Concrete Transit Mixers'],
    challenges: 'Erecting a 60-meter clear span glass atrium dome without temporary ground support towers.',
    solutions: 'Engineered a ground-assembled steel space frame hoisted into place in a single 12-hour lift operation.',
    results: 'Won National Commercial Construction Excellence Award in 2023.',
    statistics: {
      builtUpArea: '1,500,000 sq.ft.',
      duration: '33 Months',
      workforce: '600 Workers/Day',
      floors: '6 Floors + 3 Basements',
      completionPercentage: 100,
      projectCost: '$185M'
    }
  },
  {
    id: 'metro-infrastructure-project',
    title: 'Metro Infrastructure Project',
    slug: 'metro-infrastructure-project',
    category: 'Infrastructure',
    status: 'Completed',
    completionPercentage: 100,
    projectValue: '$340 Million',
    location: 'Metropolitan Urban Transit Zone',
    client: 'Department of Transportation',
    startDate: 'Jun 2019',
    completionDate: 'Aug 2023',
    year: '2023',
    heroImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800'
    ],
    description: '14.5 kilometer elevated metro rail corridor featuring 12 elevated passenger stations, power substations, and a state-of-the-art maintenance depot.',
    scopeOfWork: [
      '1,200 bored piling foundation piers',
      'Pre-cast segmental box girder casting and erection',
      'Structural steel canopy installation for 12 stations',
      'Track laying and third-rail electrification'
    ],
    methodology: 'Overhead segmental launching gantries utilized for nocturnal span erection, preserving daytime traffic flow below.',
    materialsUsed: ['Pre-stressed Concrete Girders', 'High-Grade Rail Steel', 'Composite Glass Canopies'],
    equipmentUsed: ['Segmental Launching Gantries (2 Units)', 'Hydraulic Piling Rigs', 'Flatbed Transporters'],
    challenges: 'Constructing elevated viaduct piers along a narrow 6-lane urban highway with high traffic density.',
    solutions: 'Deployment of specialized narrow-footprint piling rigs and implementation of night-time lane diversions.',
    results: 'Serves over 250,000 daily commuters with 99.8% operational reliability.',
    statistics: {
      builtUpArea: '14.5 Km Corridor',
      duration: '50 Months',
      workforce: '850 Workers/Day',
      floors: '12 Elevated Stations',
      completionPercentage: 100,
      projectCost: '$340M'
    }
  },
  {
    id: 'riverside-residential-complex',
    title: 'Riverside Residential Complex',
    slug: 'riverside-residential-complex',
    category: 'Residential',
    status: 'Completed',
    completionPercentage: 100,
    projectValue: '$95 Million',
    location: 'Riverside Waterfront District, CA',
    client: 'Pacific Living Developers',
    startDate: 'Feb 2021',
    completionDate: 'Jan 2024',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Luxury waterfront community consisting of four 18-story residential towers, landscaped parklands, infinity pool decks, and subterranean parking.',
    scopeOfWork: [
      'Monolithic aluminum formwork system concrete pouring',
      'Seismic dampening foundation engineering',
      'Energy-efficient double glazed balcony sliders',
      'Clubhouse and waterfront promenade landscaping'
    ],
    methodology: 'Mivan aluminum formwork technology enabled 7-day floor slab cycles per tower.',
    materialsUsed: ['Aluminum Formwork', 'Engineered Hardwood', 'Solar Roof Panels'],
    equipmentUsed: ['Concrete Pumps', 'Passenger Hoists', 'Tower Cranes'],
    challenges: 'High water table along the riverfront requiring deep dewatering operations.',
    solutions: 'Continuous deep well dewatering network paired with bentonite slurry diaphragm walls.',
    results: 'Fully sold out prior to structural handover; certified Gold Green Building.',
    statistics: {
      builtUpArea: '720,000 sq.ft.',
      duration: '35 Months',
      workforce: '380 Workers/Day',
      floors: '18 Stories x 4 Towers',
      completionPercentage: 100,
      projectCost: '$95M'
    }
  },
  {
    id: 'industrial-manufacturing-park',
    title: 'Industrial Manufacturing Park',
    slug: 'industrial-manufacturing-park',
    category: 'Industrial',
    status: 'Completed',
    completionPercentage: 100,
    projectValue: '$150 Million',
    location: 'Apex Logistics Hub, TX',
    client: 'Apex Global Manufacturing',
    startDate: 'Aug 2021',
    completionDate: 'Feb 2024',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Heavy industrial facility featuring 600,000 sq.ft. of production floor, 40 loading docks, high-density storage racking, and dedicated solar substation.',
    scopeOfWork: [
      'Heavy structural steel portal frame fabrication and erection',
      'Super-flat jointless laser screed concrete flooring',
      'Heavy overhead gantry crane runway beams',
      'Industrial wastewater treatment facility'
    ],
    methodology: 'Pre-Engineered Building (PEB) design reduced steel weight while providing 45-meter clear internal spans.',
    materialsUsed: ['PEB Structural Steel', 'Fiber Reinforced Concrete', 'Insulated Sandwich Panels'],
    equipmentUsed: ['50-Ton Crawler Cranes', 'Laser Screeds', 'Articulated Boom Lifts'],
    challenges: 'Strict floor flatness tolerances required for automated laser-guided forklift vehicles.',
    solutions: 'Laser screed pouring monitored by digital dipstick profilers achieving Ff 75 / Fl 50 super-flat ratings.',
    results: 'Operational ahead of peak manufacturing season with 1.2 MW rooftop solar array.',
    statistics: {
      builtUpArea: '600,000 sq.ft.',
      duration: '30 Months',
      workforce: '320 Workers/Day',
      floors: 'Single Story High Bay',
      completionPercentage: 100,
      projectCost: '$150M'
    }
  },
  {
    id: 'highway-expansion-project',
    title: 'Highway Expansion Project',
    slug: 'highway-expansion-project',
    category: 'Infrastructure',
    status: 'Completed',
    completionPercentage: 100,
    projectValue: '$210 Million',
    location: 'Interstate Expressway Corridor',
    client: 'Federal Highway Authority',
    startDate: 'Jan 2022',
    completionDate: 'May 2024',
    year: '2024',
    heroImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800'
    ],
    description: '32-kilometer highway expansion widening an active interstate corridor from 4 to 8 lanes with intelligent toll gantries and wildlife overpasses.',
    scopeOfWork: [
      '32 km asphalt concrete paving and earthworks',
      'Bridge widening for 6 existing river overpasses',
      'Intelligent Transportation Systems (ITS) fiber backbone',
      'Environmental noise barrier wall installation'
    ],
    methodology: 'Full-depth reclamation (FDR) recycling of existing asphalt roadbed into base layer material.',
    materialsUsed: ['Polymer-Modified Asphalt', 'Crushed Aggregate Sub-base', 'Pre-cast Concrete Guardrails'],
    equipmentUsed: ['Heavy Sensor Pavers', 'Vibratory Rollers', 'Asphalt Milling Machines'],
    challenges: 'Maintaining 4 lanes of active interstate traffic with 60,000 daily vehicles during construction.',
    solutions: 'Staged traffic shifting strategy using automated movable concrete barriers.',
    results: 'Reduced commuter transit times by 35% across peak hours.',
    statistics: {
      builtUpArea: '32 Km Expressway',
      duration: '28 Months',
      workforce: '500 Workers/Day',
      floors: '8 Lanes Expressway',
      completionPercentage: 100,
      projectCost: '$210M'
    }
  },
  {
    id: 'smart-city-development',
    title: 'Smart City Development',
    slug: 'smart-city-development',
    category: 'Government',
    status: 'Ongoing',
    completionPercentage: 65,
    projectValue: '$450 Million',
    location: 'Innovation Megacity Zone',
    client: 'National Urban Development Board',
    startDate: 'Sep 2022',
    completionDate: 'Dec 2025',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Integrated smart urban hub combining civic administrative buildings, utility tunnels, smart grid power, and automated waste disposal networks.',
    scopeOfWork: [
      'Underground utility trenching and duct banks',
      'Civic command & control center building construction',
      'Smart solar LED street lighting network',
      'District cooling plant installation'
    ],
    methodology: 'City-wide BIM GIS integration tracking all underground utilities with sub-centimeter accuracy.',
    materialsUsed: ['Ductile Iron Piping', 'High-Density Fiber Conducts', 'Solar Panels'],
    equipmentUsed: ['Trenchers', 'Excavators', 'Mobile Cranes'],
    challenges: 'Coordinating simultaneous subterranean trenching across 12 construction sectors.',
    solutions: 'Centralized GIS spatial schedule monitoring system updating site teams daily.',
    results: 'Currently 65% complete; on track for Q4 2025 commissioning.',
    statistics: {
      builtUpArea: '2,500 Acres Zone',
      duration: '39 Months',
      workforce: '950 Workers/Day',
      floors: 'Multi-building Campus',
      completionPercentage: 65,
      projectCost: '$450M'
    }
  },
  {
    id: 'green-valley-township',
    title: 'Green Valley Township',
    slug: 'green-valley-township',
    category: 'Residential',
    status: 'Ongoing',
    completionPercentage: 80,
    projectValue: '$130 Million',
    location: 'Suburban Growth Corridor',
    client: 'Green Valley Realty Group',
    startDate: 'Jan 2023',
    completionDate: 'Jun 2025',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Eco-conscious township featuring 500 sustainable villas, community recreation centers, rainwater harvesting lakes, and solar power generation.',
    scopeOfWork: [
      'Civil earthworks and 500 luxury villa RCC frames',
      'Central artificial lake and stormwater filtration system',
      'Perimeter security and smart home infrastructure'
    ],
    methodology: 'Modular pre-cast wall panel erection speeding up envelope completion.',
    materialsUsed: ['Autoclaved Aerated Concrete (AAC) Blocks', 'Solar Tiles', 'Rainwater Harvesters'],
    equipmentUsed: ['Tower Cranes', 'Backhoe Loaders', 'Concrete Mixers'],
    challenges: 'Protecting existing old-growth tree canopies across 150 acres during excavation.',
    solutions: 'Tree protection zones established using GPS geofencing and manual hand-trenching around roots.',
    results: '80% completed; Phase 1 handover underway.',
    statistics: {
      builtUpArea: '1,200,000 sq.ft.',
      duration: '30 Months',
      workforce: '420 Workers/Day',
      floors: '500 Luxury Villas',
      completionPercentage: 80,
      projectCost: '$130M'
    }
  },
  {
    id: 'airport-expansion',
    title: 'Airport Terminal 3 Expansion',
    slug: 'airport-expansion',
    category: 'Infrastructure',
    status: 'Ongoing',
    completionPercentage: 45,
    projectValue: '$520 Million',
    location: 'International Airport District',
    client: 'Aviation Authority',
    startDate: 'May 2023',
    completionDate: 'Nov 2026',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Major international terminal addition featuring 18 new boarding gates, automated baggage handling systems, and 4,000-meter concrete taxiways.',
    scopeOfWork: [
      'Structural steel terminal concourse erection',
      'Heavy concrete apron & taxiway pavement',
      'High-security perimeter fencing & blast walls',
      'Baggage handling system steel structure'
    ],
    methodology: 'Strict airside safety procedures managed through specialized airside-certified construction crews.',
    materialsUsed: ['Heavy Structural Steel', 'Blast-Resistant Laminate Glass', 'Heavy Airfield Concrete PQC'],
    equipmentUsed: ['100-Ton Crawler Cranes', 'Concrete Slipform Pavers', 'Telescopic Booms'],
    challenges: 'Operating heavy cranes within active flight paths without breaching FAA height radar limits.',
    solutions: 'Low-profile boom cranes equipped with real-time GPS height limiting sensors.',
    results: '45% completed; taxiways operational for flight trials.',
    statistics: {
      builtUpArea: '2,100,000 sq.ft.',
      duration: '42 Months',
      workforce: '1,100 Workers/Day',
      floors: '4 Level Terminal + Apron',
      completionPercentage: 45,
      projectCost: '$520M'
    }
  },
  {
    id: 'industrial-corridor',
    title: 'Industrial Freight Corridor',
    slug: 'industrial-corridor',
    category: 'Industrial',
    status: 'Ongoing',
    completionPercentage: 55,
    projectValue: '$280 Million',
    location: 'Regional Logistics Expressway',
    client: 'National Freight Logistics Board',
    startDate: 'Nov 2022',
    completionDate: 'Oct 2025',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Dedicated freight corridor connecting major industrial parks with seaport terminals via heavy-duty concrete roadways and logistics hubs.',
    scopeOfWork: [
      'Heavy concrete freight lane construction',
      '3 major rail flyover overpasses',
      'Automated weigh-in-motion truck inspection stations'
    ],
    methodology: 'Continuously Reinforced Concrete Pavement (CRCP) eliminating transverse joints.',
    materialsUsed: ['Heavy Duty Steel Mesh', 'C50 Grade PQC Concrete', 'Fiber Optic Cable Systems'],
    equipmentUsed: ['Slipform Concrete Pavers', 'Vibratory Compactors', 'Excavators'],
    challenges: 'Traversing marshy wetland terrain prone to ground subsidence.',
    solutions: 'Installing prefabricated vertical drains (PVD) and surcharge embankments to accelerate soil consolidation.',
    results: '55% completed; on schedule for Q4 2025 completion.',
    statistics: {
      builtUpArea: '45 Km Dedicated Freight Line',
      duration: '35 Months',
      workforce: '620 Workers/Day',
      floors: 'Dedicated Freight Highway',
      completionPercentage: 55,
      projectCost: '$280M'
    }
  },
  {
    id: 'urban-housing-development',
    title: 'Urban Housing Renewal',
    slug: 'urban-housing-development',
    category: 'Government',
    status: 'Ongoing',
    completionPercentage: 75,
    projectValue: '$110 Million',
    location: 'Metro North Re-development Zone',
    client: 'Municipal Housing Authority',
    startDate: 'Mar 2023',
    completionDate: 'Aug 2025',
    year: '2025',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Affordable high-density urban residential development providing 1,200 modern housing units equipped with solar water heating and community facilities.',
    scopeOfWork: [
      'Construction of six 14-story residential towers',
      'Community healthcare center & daycare building',
      'Rainwater detention basin & green parks'
    ],
    methodology: 'Tunnel formwork system enabling 4-day structural cycle per floor per tower.',
    materialsUsed: ['Tunnel Form Steel Shuttering', 'Fly Ash Blocks', 'Solar Thermal Collector Panels'],
    equipmentUsed: ['Climbing Tower Cranes', 'Concrete Boom Pumps', 'Scaffolding Systems'],
    challenges: 'High-density construction site surrounded by active residential neighborhoods.',
    solutions: 'Acoustic sound curtains, dust mist cannons, and restricted delivery hours.',
    results: '75% completed; structural tops achieved on all 6 towers.',
    statistics: {
      builtUpArea: '980,000 sq.ft.',
      duration: '29 Months',
      workforce: '480 Workers/Day',
      floors: '14 Stories x 6 Towers',
      completionPercentage: 75,
      projectCost: '$110M'
    }
  }
];
