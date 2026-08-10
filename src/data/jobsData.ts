import type { Job } from '../types/job';

export const jobsData: Job[] = [
  {
    id: 'civil-engineer',
    title: 'Senior Civil Engineer',
    department: 'Civil Engineering',
    location: 'Mumbai (BKC Headquarters / Site Offices)',
    experience: '6 - 10 Years',
    employmentType: 'Full-time',
    salaryRange: '₹14 - ₹20 Lakhs / year',
    postedDate: 'August 1, 2026',
    shortDescription: 'Lead site civil works, geotechnical earthworks, foundation piling, and structural RCC executions on heavy infrastructure projects.',
    responsibilities: [
      'Supervise on-site civil works, concrete pours, and structural alignments.',
      'Coordinate with structural design consultants and municipal surveyors.',
      'Enforce IS 456 quality control standards and bar bending schedule (BBS) audits.',
      'Review daily site execution logs and resolve technical RFI engineering queries.'
    ],
    requirements: [
      'Bachelor’s Degree in Civil Engineering (B.E / B.Tech).',
      'Minimum 6 years of hands-on site civil engineering experience.',
      'Proficiency in AutoDesk AutoCAD, Civil 3D, and Primavera P6.',
      'Strong knowledge of soil mechanics, piling, and IS code concrete standards.'
    ],
    skills: ['AutoCAD', 'Structural RCC', 'Site Management', 'Geotechnical Surveying', 'BBS Verification'],
    benefits: ['Comprehensive Medical & Health Insurance', 'EPF & Gratuity Benefits', 'Performance Annual Bonus', 'Site Allowance & Fuel Allowance']
  },
  {
    id: 'structural-engineer',
    title: 'Principal Structural Engineer',
    department: 'Design & Engineering',
    location: 'Bengaluru Tech Hub',
    experience: '8 - 12 Years',
    employmentType: 'Full-time',
    salaryRange: '₹18 - ₹26 Lakhs / year',
    postedDate: 'July 28, 2026',
    shortDescription: 'Lead structural FEA computer modeling, post-tensioned slab calculations, seismic design, and peer audits for high-rise towers.',
    responsibilities: [
      'Perform 3D structural analysis using ETABS, SAP2000, and SAFE software.',
      'Draft structural detail drawings and steel connection design reports.',
      'Conduct dynamic wind tunnel CFD and seismic IS 1893 response spectrum evaluations.',
      'Lead design coordination meetings with project architects and clients.'
    ],
    requirements: [
      'Master’s Degree in Structural Engineering (M.E / M.Tech).',
      '8+ years of high-rise commercial or heavy civil structural design experience.',
      'Expert mastery of ETABS, SAP2000, REVIT Structure, and Indian Standard (IS) codes.'
    ],
    skills: ['ETABS', 'SAP2000', 'Revit BIM', 'Seismic Design', 'Steel Connection Design'],
    benefits: ['Medical Insurance', 'Flexible Hybrid Work Days', 'Professional Charter Membership Reimbursement']
  },
  {
    id: 'site-engineer',
    title: 'Site Construction Engineer',
    department: 'Site Execution',
    location: 'Delhi NCR Metro Zone',
    experience: '3 - 5 Years',
    employmentType: 'Full-time',
    salaryRange: '₹8 - ₹12 Lakhs / year',
    postedDate: 'August 3, 2026',
    shortDescription: 'Direct daily contractor crews, shuttering assembly, rebar placement inspections, and site safety protocol compliance.',
    responsibilities: [
      'Conduct daily site inspections of formwork, rebar steel layout, and concrete pouring.',
      'Maintain daily site execution logs and material consumption reports.',
      'Verify sub-contractor billings against actual measured site work.'
    ],
    requirements: [
      'Diploma or B.Tech in Civil Engineering.',
      '3-5 years of direct site execution experience on commercial or metro projects.',
      'Working knowledge of AutoDesk AutoCAD and MS Excel.'
    ],
    skills: ['Site Execution', 'Rebar Inspection', 'Quantity Surveying', 'Safety Auditing'],
    benefits: ['Health Insurance', 'On-Site Accommodation Allowance', 'Travel Reimbursement']
  },
  {
    id: 'bim-manager',
    title: 'BIM / VDC Technical Manager',
    department: 'Virtual Design & Construction',
    location: 'Hyderabad Infrastructure Division',
    experience: '7 - 10 Years',
    employmentType: 'Full-time',
    salaryRange: '₹16 - ₹22 Lakhs / year',
    postedDate: 'July 20, 2026',
    shortDescription: 'Manage 3D/4D/5D Building Information Modeling (BIM) digital twin coordination, clash detection, and Navisworks federation.',
    responsibilities: [
      'Lead Navisworks spatial clash detection reviews across MEP, structural, and architectural models.',
      'Establish project BIM Execution Plans (BEP) adhering to ISO 19650 standards.',
      'Generate 4D construction schedule simulations integrated with Primavera P6.'
    ],
    requirements: [
      'Degree in Architecture or Civil Engineering.',
      '7+ years in BIM / VDC coordination on major commercial developments.',
      'Mastery of Revit, Navisworks Manage, BIM 360 / ACC, and Dynamo.'
    ],
    skills: ['Revit BIM', 'Navisworks Manage', 'Clash Detection', '4D Scheduling', 'Dynamo Scripting'],
    benefits: ['Medical Insurance', 'EPF & Gratuity', 'Latest High-Performance Engineering Workstation']
  },
  {
    id: 'safety-director',
    title: 'Site Safety Director (HSE)',
    department: 'Health, Safety & Environment',
    location: 'Pan-India Project Sites',
    experience: '10 - 15 Years',
    employmentType: 'Full-time',
    salaryRange: '₹20 - ₹28 Lakhs / year',
    postedDate: 'July 15, 2026',
    shortDescription: 'Oversee corporate EHS governance, zero-incident site policies, hazard risk assessments, and ISO 45001 safety compliance.',
    responsibilities: [
      'Formulate and enforce corporate Health, Safety & Environmental (HSE) manuals.',
      'Conduct unannounced site safety audits and accident root-cause investigations.',
      'Direct mandatory site safety induction and high-risk work permit protocols.'
    ],
    requirements: [
      'Degree in Engineering with NEBOSH IGC / ADIS Certification.',
      '10+ years of HSE leadership in heavy civil or high-rise construction.',
      'Deep expertise in ISO 45001 and ISO 14001 EHS management systems.'
    ],
    skills: ['NEBOSH IGC', 'ISO 45001', 'Hazard Risk Assessment', 'EHS Governance', 'Incident Investigation'],
    benefits: ['Executive Health Package', 'Corporate Car Allowance', 'Annual EHS Excellence Bonus']
  },
  {
    id: 'mep-coordinator',
    title: 'MEP Services Coordinator',
    department: 'MEP Engineering',
    location: 'Chennai Industrial Hub',
    experience: '6 - 9 Years',
    employmentType: 'Full-time',
    salaryRange: '₹12 - ₹18 Lakhs / year',
    postedDate: 'July 10, 2026',
    shortDescription: 'Coordinate HVAC chilled water plants, electrical HT/LT panels, plumbing, and fire protection systems installation.',
    responsibilities: [
      'Review composite MEP coordination drawings and vertical riser shaft layouts.',
      'Supervise HVAC ducting, chilled water piping, and HT transformer testing.',
      'Ensure compliance with NBC National Building Code fire protection standards.'
    ],
    requirements: [
      'B.Tech / B.E in Mechanical or Electrical Engineering.',
      '6+ years in MEP coordination on commercial malls, hospitals, or industrial plants.'
    ],
    skills: ['HVAC Design', 'Electrical HT/LT', 'Fire Fighting Systems', 'Plumbing Engineering', 'MEP BIM'],
    benefits: ['Full Family Medical Insurance', 'EPF & Gratuity', 'Skill Enhancement Allowance']
  }
];
