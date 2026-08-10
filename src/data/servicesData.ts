import type { ConstructionService } from '../types/service';

export const servicesData: ConstructionService[] = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    slug: 'residential-construction',
    shortDescription: 'Custom home building, luxury apartments, and residential communities built with modern architectural precision.',
    fullDescription: 'BuildCore Constructions delivers bespoke residential construction services ranging from ultra-luxury private villas to large-scale multi-family apartment complexes. We integrate sustainable building techniques, energy-efficient HVAC, and premium architectural finishes to create homes designed to endure for generations.',
    iconName: 'Home',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Custom villa design & turnkey execution',
      'Multi-story residential housing complexes',
      'Smart home automation integration',
      'Earthquake-resistant RCC framed structures',
      'LEED-certified green residential planning'
    ],
    keyBenefits: [
      'On-time completion backed by financial guarantee',
      'Transparent milestone-based progress tracking',
      'Strict adherence to municipal zoning codes',
      '10-year structural warranty on all residential projects'
    ],
    processSteps: [
      { number: 1, title: 'Architectural Blueprint & Site Survey', description: 'Comprehensive site assessment, soil testing, and drafting of 3D architectural renders.' },
      { number: 2, title: 'Foundation & Framing', description: 'Excavation, deep foundation piling, and structural RCC frame erection.' },
      { number: 3, title: 'MEP Installation', description: 'Precision installation of electrical conduits, plumbing networks, and central air systems.' },
      { number: 4, title: 'Interior Finishing & Handover', description: 'Custom carpentry, tiling, painting, fixture installation, and final quality audit.' }
    ],
    equipmentUsed: ['Concrete Pump Trucks', 'Tower Cranes', 'Mini Excavators', 'Scaffolding Systems'],
    safetyStandards: ['OSHA Compliance', '100% Fall Protection Rigging', 'Daily Tool-box Safety Meetings'],
    estimatedTimeline: '12 - 24 Months',
    targetIndustries: ['Real Estate Developers', 'Private Homeowners', 'Housing Cooperatives'],
    relatedProjectIds: ['riverside-residential-complex', 'green-valley-township'],
    faqs: [
      { question: 'Do you offer architectural planning alongside construction?', answer: 'Yes, BuildCore provides full end-to-end design-build services including structural engineering, architectural layout, and interior execution.' },
      { question: 'What structural warranty is provided for residential projects?', answer: 'We offer a comprehensive 10-year warranty covering all structural elements and RCC frameworks.' }
    ]
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    slug: 'commercial-construction',
    shortDescription: 'State-of-the-art office towers, shopping centers, corporate headquarters, and multi-tenant commercial hubs.',
    fullDescription: 'We specialize in executing high-rise commercial structures, mixed-use retail plazas, and corporate office parks tailored for modern commerce. Our engineering team combines high-efficiency curtain walls, intelligent energy management systems, and flexible floor layouts.',
    iconName: 'Building2',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'High-rise curtain wall glass façade structures',
      'Underground multi-level parking garages',
      'Central HVAC & Building Automation Systems (BAS)',
      'Acoustic soundproofing & office space partitioning',
      'High-speed elevator core installations'
    ],
    keyBenefits: [
      'Fast-track steel-composite construction methodology',
      'Optimized usable carpet area per square foot',
      'Full compliance with commercial fire & life safety codes'
    ],
    processSteps: [
      { number: 1, title: 'Feasibility & Permitting', description: 'Zoning approvals, traffic impact assessment, and environmental clearance.' },
      { number: 2, title: 'Substructure & Steel Core', description: 'Deep basement diaphragm walls, heavy steel column placement, and concrete core pouring.' },
      { number: 3, title: 'Façade Cladding & Utilities', description: 'Double-glazed glass curtain wall mounting and riser MEP installation.' },
      { number: 4, title: 'Commissioning & Tenant Fit-out', description: 'Testing life safety systems and preparing floorplates for commercial occupancy.' }
    ],
    equipmentUsed: ['Heavy Duty Tower Cranes', 'Concrete Batching Plants', 'Boom Lifts', 'Mobile Telescopic Cranes'],
    safetyStandards: ['Zero-Accident Safety Protocol', 'ISO 45001 Certified Procedures', 'Automated Safety Barrier Systems'],
    estimatedTimeline: '18 - 36 Months',
    targetIndustries: ['Corporate Clients', 'Retail Conglomerates', 'Real Estate Investment Trusts'],
    relatedProjectIds: ['skyline-business-tower', 'grand-city-mall'],
    faqs: [
      { question: 'Can commercial construction be executed while adjacent facilities operate?', answer: 'Yes, we implement advanced acoustic barriers, dust control systems, and off-peak heavy logistics to minimize site disruption.' }
    ]
  },
  {
    id: 'industrial-construction',
    title: 'Industrial Construction',
    slug: 'industrial-construction',
    shortDescription: 'Heavy manufacturing plants, logistics warehouses, processing facilities, and industrial parks.',
    fullDescription: 'BuildCore constructs heavy-duty industrial infrastructure designed for high load capacities, complex mechanical operations, and rigorous environmental compliance. From automated logistics hubs to chemical processing units, we ensure structural resilience.',
    iconName: 'Factory',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Pre-Engineered Building (PEB) structural steel design',
      'Heavy equipment machine foundation pads',
      'High-tolerance flat industrial flooring',
      'Hazardous material containment zones',
      'Substation and high-voltage power integration'
    ],
    keyBenefits: [
      'Rapid steel portal frame erection',
      'Heavy floor loading specifications up to 10 tons/m²',
      'Integrated logistics loading dock bays'
    ],
    processSteps: [
      { number: 1, title: 'Geotechnical Soil Improvement', description: 'Soil stabilization, vibro-replacement, and foundation pad preparation.' },
      { number: 2, title: 'PEB Frame Assembly', description: 'Precision bolt assembly of steel girders, trusses, and wall girts.' },
      { number: 3, title: 'Industrial Flooring', description: 'Laser-screed fiber reinforced concrete pouring for jointless flat floors.' },
      { number: 4, title: 'Process Machinery Rigging', description: 'Anchor installation and heavy machinery positioning.' }
    ],
    equipmentUsed: ['50-Ton Crawler Cranes', 'Laser Concrete Screeds', 'Forklifts', 'Scissor Lifts'],
    safetyStandards: ['HazMat Safety Protocol', 'Permit-to-Work System', 'Lockout-Tagout (LOTO) Compliance'],
    estimatedTimeline: '8 - 18 Months',
    targetIndustries: ['Manufacturing Companies', 'Logistics & Supply Chain', 'Automotive & Heavy Industry'],
    relatedProjectIds: ['industrial-manufacturing-park', 'industrial-corridor'],
    faqs: [
      { question: 'Do you handle Pre-Engineered Building (PEB) structures?', answer: 'Yes, PEB design and fabrication is one of our primary industrial construction specialties.' }
    ]
  },
  {
    id: 'infrastructure-development',
    title: 'Infrastructure Development',
    slug: 'infrastructure-development',
    shortDescription: 'National transportation systems, urban transit networks, utility corridors, and public works.',
    fullDescription: 'Empowering economic growth through nation-building infrastructure. BuildCore undertakes large-scale municipal, state, and federal infrastructure contracts including mass transit corridors, water treatment networks, and public utilities.',
    iconName: 'Landmark',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Urban elevated metro viaducts & underground stations',
      'Water storage reservoirs & distribution mains',
      'Stormwater drainage channels & flood control systems',
      'Airport runways and taxiway concrete paving',
      'Smart grid underground cabling ducts'
    ],
    keyBenefits: [
      'Proven track record with government authorities',
      'Strict compliance with international civil engineering standards',
      'Robust disaster-resilient structural engineering'
    ],
    processSteps: [
      { number: 1, title: 'Environmental Impact Assessment', description: 'Feasibility studies, land acquisition support, and utility relocation.' },
      { number: 2, title: 'Substructure & Piling', description: 'Large diameter bored piles and pier cap casting.' },
      { number: 3, title: 'Segmental Girders Placement', description: 'Launching gantry deployment for bridge and elevated transit decks.' },
      { number: 4, title: 'Systems Integration & Trial Runs', description: 'Testing electrical, signaling, and traffic management networks.' }
    ],
    equipmentUsed: ['Gantry Launchers', 'Tunnel Boring Machines (TBM)', 'Heavy Excavators', 'Transit Mixers'],
    safetyStandards: ['ISO 14001 Environmental Standard', 'Public Protection Safety Barriers', '24/7 Traffic Control Teams'],
    estimatedTimeline: '24 - 48 Months',
    targetIndustries: ['Government Organizations', 'Infrastructure Companies', 'Transportation Authorities'],
    relatedProjectIds: ['metro-infrastructure-project', 'airport-expansion'],
    faqs: [
      { question: 'What experience do you have with government public works?', answer: 'BuildCore has completed over 45 major public infrastructure projects valued at over $1.2 Billion.' }
    ]
  },
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    slug: 'civil-engineering',
    shortDescription: 'Comprehensive earthworks, geotechnical solutions, foundation engineering, and structural analysis.',
    fullDescription: 'Our civil engineering division provides expert structural modeling, foundation design, slope stabilization, and land development services. We utilize advanced BIM software and finite element analysis to ensure structural integrity across complex geological conditions.',
    iconName: 'HardHat',
    heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Geotechnical investigation & soil mechanics',
      'Retaining wall & soil nailing systems',
      'Deep foundation caissons & diaphragm walls',
      'Hydrological analysis & land grading',
      '3D Building Information Modeling (BIM)'
    ],
    keyBenefits: [
      'Optimized structural material quantities',
      'Mitigation of ground settlement risks',
      'Seamless digital twin modeling for project lifecycle'
    ],
    processSteps: [
      { number: 1, title: 'Geotechnical Soil Testing', description: 'Core drilling, standard penetration tests, and laboratory soil shear analysis.' },
      { number: 2, title: 'Structural Finite Element Analysis', description: 'Computerized stress modeling and load distribution optimization.' },
      { number: 3, title: 'Earth Retention & Shoring', description: 'Installation of sheet piles, ground anchors, and secant pile walls.' },
      { number: 4, title: 'Structural Certification', description: 'Third-party peer review and structural stability sign-off.' }
    ],
    equipmentUsed: ['Rig Boring Machines', 'Soil Testing Trailers', 'Piling Rigs', 'Total Station Survey Equipment'],
    safetyStandards: ['Slope Stability Monitoring', 'Deep Excavation Safety Checks', 'Continuous Vibration Sensors'],
    estimatedTimeline: '3 - 12 Months',
    targetIndustries: ['Real Estate Developers', 'Industrial Corporations', 'Municipal Bodies'],
    relatedProjectIds: ['smart-city-development', 'metro-infrastructure-project'],
    faqs: [
      { question: 'Do you conduct independent soil mechanics reports?', answer: 'Yes, our accredited geotechnical lab provides certified soil bearing capacity and settlement reports.' }
    ]
  },
  {
    id: 'road-construction',
    title: 'Road Construction',
    slug: 'road-construction',
    shortDescription: 'Expressways, arterial urban roads, asphalt paving, concrete highways, and corridor expansions.',
    fullDescription: 'BuildCore manufactures and lays durable asphalt and rigid concrete highways built to withstand heavy axle loads and extreme climatic conditions. We handle complete road corridor construction including embankments, drainage, lighting, and safety barriers.',
    iconName: 'Truck',
    heroImage: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Asphalt concrete & stone matrix paving',
      'Rigid Pavement Quality Concrete (PQC) laying',
      'Sub-base stabilization & geotextile reinforcement',
      'Stormwater roadside culverts & gutters',
      'Thermoplastic road marking & intelligent signages'
    ],
    keyBenefits: [
      'Ultra-smooth pavement rideability indices (IRI)',
      'High rut-resistant asphalt mix designs',
      'Rapid night-shift paving capabilities'
    ],
    processSteps: [
      { number: 1, title: 'Subgrade Preparation', description: 'Excavation, grading, compaction, and moisture testing of subgrade soil.' },
      { number: 2, title: 'Granular Sub-Base (GSB) Laying', description: 'Spreading aggregate layers and heavy vibratory roller compaction.' },
      { number: 3, title: 'Asphalt / Concrete Paving', description: 'Sensor paver laying hot-mix asphalt or slipform concrete paving.' },
      { number: 4, title: 'Road Markings & Furniture', description: 'Guardrail installation, reflector studs, and solar street lighting.' }
    ],
    equipmentUsed: ['Sensor Pavers', 'Double Drum Vibratory Rollers', 'Asphalt Batch Mix Plants', 'Motor Graders'],
    safetyStandards: ['Work Zone Traffic Management (WZTM)', 'High-Visibility LED Barricades', 'Flagger Operations'],
    estimatedTimeline: '6 - 24 Months',
    targetIndustries: ['Highway Authorities', 'Municipal Corporations', 'Private Industrial Parks'],
    relatedProjectIds: ['highway-expansion-project', 'industrial-corridor'],
    faqs: [
      { question: 'What is the lifespan of your concrete highway paving?', answer: 'Our PQC rigid concrete highways are designed for a 30-year design life with minimal maintenance.' }
    ]
  },
  {
    id: 'bridge-construction',
    title: 'Bridge Construction',
    slug: 'bridge-construction',
    shortDescription: 'Cable-stayed, segmental box girder, arch, and river crossing flyovers designed with engineering mastery.',
    fullDescription: 'Connecting communities over rivers, valleys, and busy urban corridors. BuildCore’s bridge engineering team executes complex cable-stayed structures, pre-stressed concrete girders, and steel truss bridges across challenging topographies.',
    iconName: 'Compass',
    heroImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Pre-stressed concrete box girders',
      'Cable-stayed bridge towers & stays',
      'Deep river pier foundations & cofferdams',
      'Expansion joint & pot bearing installations',
      'Wind tunnel dynamic vibration testing'
    ],
    keyBenefits: [
      'Iconic architectural landmark bridge designs',
      'Extreme seismic resistance ratings',
      'Minimal aquatic ecosystem disruption during river works'
    ],
    processSteps: [
      { number: 1, title: 'Hydrological & Sub-surface Survey', description: 'Bathymetric soundings and underwater foundation drilling.' },
      { number: 2, title: 'Cofferdam & Abutment Pouring', description: 'Dewatering river caissons and pouring reinforced pier walls.' },
      { number: 3, title: 'Girder Launching & Cable Tensioning', description: 'Pre-cast segment erection using heavy launching gantries.' },
      { number: 4, title: 'Bridge Deck Paving & Load Testing', description: 'Waterproofing membrane application and heavy vehicle static load testing.' }
    ],
    equipmentUsed: ['Launching Gantries', 'Piling Barge Cranes', 'Hydraulic Jacking Systems', 'Concrete Boom Pumps'],
    safetyStandards: ['Marine Safety Lifeboat Standby', 'Certified Rigger Rigging Protocols', 'Wind Anemometer Cutoffs'],
    estimatedTimeline: '18 - 36 Months',
    targetIndustries: ['National Highway Agencies', 'Railways & Transport Ministries'],
    relatedProjectIds: ['metro-infrastructure-project', 'highway-expansion-project'],
    faqs: [
      { question: 'How do you execute bridge piers in active rivers?', answer: 'We construct temporary sheet pile cofferdams or submerged caissons to isolate the pier foundation area.' }
    ]
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    slug: 'building-construction',
    shortDescription: 'General building contracting for educational campuses, healthcare facilities, and civic centers.',
    fullDescription: 'From municipal administrative headquarters to modern university campuses, BuildCore provides turnkey general contracting services. We manage all phases from site preparation to MEP integration and final architectural finishes.',
    iconName: 'Wrench',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Turnkey general contracting',
      'Institutional, civic, & healthcare facilities',
      'Structural steel & reinforced concrete frames',
      'Energy Star & LEED architectural envelope',
      'Integrated fire suppression & emergency egress'
    ],
    keyBenefits: [
      'Single point of accountability across sub-contractors',
      'Strict ISO 9001 quality audit checks',
      'Comprehensive maintenance warranty'
    ],
    processSteps: [
      { number: 1, title: 'Pre-construction Planning', description: 'Value engineering, material procurement schedules, and site logistics setup.' },
      { number: 2, title: 'Structural Framework', description: 'Erection of columns, beams, slab decking, and exterior masonry walls.' },
      { number: 3, title: 'Enclosure & Systems Installation', description: 'Windows, roofing, elevator shafts, and HVAC ductwork installation.' },
      { number: 4, title: 'Commissioning & Handover', description: 'Full system testing, air balancing, and occupancy certification.' }
    ],
    equipmentUsed: ['Mobile Cranes', 'Concrete Pumps', 'Scaffolding Towers', 'Material Hoists'],
    safetyStandards: ['General Site Safety Guidelines', 'Fall Arrest Nets', 'PPE Enforced Zones'],
    estimatedTimeline: '12 - 24 Months',
    targetIndustries: ['Healthcare Organizations', 'Educational Institutions', 'Government Bodies'],
    relatedProjectIds: ['skyline-business-tower', 'green-valley-township'],
    faqs: [
      { question: 'Can you work under strict LEED green building criteria?', answer: 'Yes, our team includes certified LEED AP engineers experienced in sustainable material sourcing.' }
    ]
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    slug: 'renovation-remodeling',
    shortDescription: 'Structural retrofitting, historic restoration, building modernization, and adaptive reuse projects.',
    fullDescription: 'Breathing new life into legacy structures. BuildCore retrofits existing commercial, industrial, and historical assets to meet modern energy, safety, and functional standards without compromising structural heritage.',
    iconName: 'Hammer',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Carbon fiber (CFRP) structural reinforcement',
      'Seismic retrofitting & base isolation',
      'Historic facade preservation & masonry restoration',
      'HVAC & MEP system modernization',
      'Interior space re-configuration & expansion'
    ],
    keyBenefits: [
      'Extends asset lifespan by 30+ years',
      'Substantially lowers building carbon footprint',
      'Cost-effective compared to full demolition & rebuild'
    ],
    processSteps: [
      { number: 1, title: '3D Laser Scanning & Structural Audit', description: 'High-definition point cloud survey to map existing structural integrity.' },
      { number: 2, title: 'Demolition & Shoring', description: 'Controlled interior demolition while installing temporary steel shoring props.' },
      { number: 3, title: 'Structural Retrofitting', description: 'Application of carbon fiber wraps, micro-concrete jacketings, and steel beams.' },
      { number: 4, title: 'Modern Refurbishment', description: 'Installing high-efficiency glazing, updated lighting, and smart building controls.' }
    ],
    equipmentUsed: ['3D Laser Scanners', 'Hydro-demolition Equipment', 'Mini Skid Steers', 'Concrete Cutters'],
    safetyStandards: ['Asbestos & Lead Remediation Safety', 'Structural Shoring Load Sensors', 'Dust Containment Seals'],
    estimatedTimeline: '4 - 14 Months',
    targetIndustries: ['Real Estate Investors', 'Corporate Office Owners', 'Heritage Preservation Boards'],
    relatedProjectIds: ['grand-city-mall', 'urban-housing-development'],
    faqs: [
      { question: 'How do you ensure building safety during major structural renovations?', answer: 'We install real-time electronic strain gauges and temporary hydraulic shoring towers monitored 24/7.' }
    ]
  },
  {
    id: 'structural-engineering',
    title: 'Structural Engineering',
    slug: 'structural-engineering',
    shortDescription: 'Advanced structural design, seismic resilience modeling, load distribution, and peer review audits.',
    fullDescription: 'Our structural engineering consultancy crafts rigorous computational models to optimize steel, concrete, and composite building frameworks. We ensure long-term structural integrity against extreme wind, seismic events, and dynamic operational loads.',
    iconName: 'DraftingCompass',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Advanced ETABS / SAP2000 structural modeling',
      'Seismic dynamic spectrum analysis',
      'Post-tensioned concrete slab design',
      'Wind tunnel computational fluid dynamics (CFD)',
      'Independent structural peer review'
    ],
    keyBenefits: [
      'Reduces steel and rebar tonnage via optimized design',
      'Guarantees safety compliance under code revisions',
      'Clear digital BIM execution plans'
    ],
    processSteps: [
      { number: 1, title: 'Concept Load Criteria', description: 'Establishing live, dead, wind, and seismic loading codes for project location.' },
      { number: 2, title: 'Computerized Structural Simulation', description: '3D FEA modeling to test deflection, drift, and stress concentrations.' },
      { number: 3, title: 'Detailing & Rebar Schedules', description: 'Generating accurate CAD shop drawings and bar bending schedules (BBS).' },
      { number: 4, title: 'On-site Inspection', description: 'Verifying rebar placement and concrete strength before every major pour.' }
    ],
    equipmentUsed: ['Structural FEA Software Workstations', 'Ultrasonic Concrete Testers', 'Rebar Scanners'],
    safetyStandards: ['ISO 9001 Design Verification', 'Dual Peer Audit System'],
    estimatedTimeline: '2 - 8 Months',
    targetIndustries: ['Architectural Firms', 'Commercial Developers', 'Industrial Plants'],
    relatedProjectIds: ['skyline-business-tower', 'smart-city-development'],
    faqs: [
      { question: 'Do you provide structural stability certificates for existing structures?', answer: 'Yes, our chartered engineers conduct non-destructive testing (NDT) to issue structural health certificates.' }
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    slug: 'project-management',
    shortDescription: 'Comprehensive construction supervision, cost engineering, risk management, and quality assurance.',
    fullDescription: 'BuildCore’s Project Management Consultancy (PMC) delivers end-to-end oversight for complex construction projects. We manage master schedules, budget allocations, vendor procurement, site safety, and quality assurance to keep projects on target.',
    iconName: 'Briefcase',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Earned Value Management (EVM) tracking',
      'Primavera P6 & MS Project master scheduling',
      'Contract & claims management (FIDIC)',
      'Supply chain & material procurement control',
      'Site Quality Assurance / Quality Control (QA/QC)'
    ],
    keyBenefits: [
      'Eliminates cost overruns and project schedule slippage',
      'Transparent real-time client reporting dashboard',
      'Mitigates contractual risks'
    ],
    processSteps: [
      { number: 1, title: 'Baseline Schedule & Budget Setup', description: 'Creating WBS, critical path analysis, and cash flow projections.' },
      { number: 2, title: 'Contractor & Vendor Tendering', description: 'Pre-qualifying sub-contractors and evaluating commercial bids.' },
      { number: 3, title: 'Construction Monitoring', description: 'Daily site audits, progress reporting, and invoice verification.' },
      { number: 4, title: 'Final Reconciliation & Closeout', description: 'Punch list resolution, commissioning documentation, and final account audit.' }
    ],
    equipmentUsed: ['Cloud PM Software', 'Drone Site Surveying Fleet', 'Thermal Imaging Cameras'],
    safetyStandards: ['PMI PMBOK Standards', 'ISO 21500 Project Management Guidelines'],
    estimatedTimeline: 'Full Project Lifecycle',
    targetIndustries: ['Real Estate Investors', 'Corporate Clients', 'Government Agencies'],
    relatedProjectIds: ['grand-city-mall', 'airport-expansion'],
    faqs: [
      { question: 'What software tools do you use for construction tracking?', answer: 'We utilize Primavera P6, Procore, and custom cloud analytics dashboards to provide real-time updates.' }
    ]
  },
  {
    id: 'interior-construction',
    title: 'Interior Construction',
    slug: 'interior-construction',
    shortDescription: 'High-end interior fit-outs, acoustic ceiling systems, architectural joinery, and custom lighting.',
    fullDescription: 'Transforming shell-and-core spaces into functional, luxurious interiors. Our interior construction team executes commercial office fit-outs, luxury hotel lobbies, retail flagship stores, and high-end residential interiors with flawless craftsmanship.',
    iconName: 'Palette',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    overviewImages: [
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=800'
    ],
    keyFeatures: [
      'Turnkey commercial interior fit-outs',
      'Custom millwork & architectural woodwork',
      'Acoustic ceiling panels & partition walls',
      'Architectural lighting & electrical automation',
      'Marble, hardwood, & epoxy specialty flooring'
    ],
    keyBenefits: [
      'Seamless execution from 3D design to physical reality',
      'Premium imported material sourcing',
      'Rapid turnover with night-shift installation capability'
    ],
    processSteps: [
      { number: 1, title: 'Interior Layout & Material Selection', description: 'Moodboards, material samples selection, and MEP coordination.' },
      { number: 2, title: 'Drywall & Ceiling Framing', description: 'Installing steel studs, acoustic insulation, and ceiling hangers.' },
      { number: 3, title: 'Joinery & Custom Finishes', description: 'Mounting custom cabinetry, wall paneling, and flooring tiles.' },
      { number: 4, title: 'Lighting & Soft Furnishing', description: 'Fixtures installation, smart lighting programming, and final handover.' }
    ],
    equipmentUsed: ['Laser Levels', 'Dust Extraction Saws', 'Pneumatic Nailers'],
    safetyStandards: ['Low-VOC Paints & Adhesive Usage', 'Indoor Air Quality Protection'],
    estimatedTimeline: '2 - 6 Months',
    targetIndustries: ['Corporate Offices', 'Luxury Hospitality', 'High-End Retail Stores'],
    relatedProjectIds: ['skyline-business-tower', 'riverside-residential-complex'],
    faqs: [
      { question: 'Do you use eco-friendly and low-emission interior materials?', answer: 'Yes, we prioritize non-toxic, low-VOC materials certified by Green Seal and Greenguard.' }
    ]
  }
];
