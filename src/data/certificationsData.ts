import type { Certification } from '../types/certification';

export const certificationsData: Certification[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015 Quality Management System',
    code: 'ISO-QMS-9001',
    logoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=300',
    issuingOrganization: 'International Organization for Standardization (TÜV SÜD Audit)',
    issueYear: '2016',
    validUntil: '2027',
    description: 'Certified for rigorous quality control, standardized construction protocols, and continuous process improvement across all engineering sectors.',
    scope: 'Turnkey General Contracting, Heavy Civil Engineering, and Structural Construction.'
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2015 Environmental Management System',
    code: 'ISO-EMS-14001',
    logoUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=300',
    issuingOrganization: 'Bureau Veritas Quality International',
    issueYear: '2018',
    validUntil: '2026',
    description: 'Certified for sustainable construction waste management, carbon footprint reduction, and environmental compliance on all job sites.',
    scope: 'Site Environmental Protection, Resource Efficiency & Eco-friendly Sourcing.'
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001:2018 Occupational Health & Safety Management',
    code: 'ISO-OHSMS-45001',
    logoUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=300',
    issuingOrganization: 'DNV GL Business Assurance',
    issueYear: '2019',
    validUntil: '2028',
    description: 'Gold-standard certification for zero-harm workplace safety, proactive risk hazard identification, and mandatory PPE site protocols.',
    scope: 'Occupational Health & Safety Protocols across High-Rise & Heavy Civil Works.'
  },
  {
    id: 'green-building-certification',
    name: 'LEED Gold Certified Construction Partner',
    code: 'USGBC-LEED-GOLD',
    logoUrl: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=300',
    issuingOrganization: 'U.S. Green Building Council (USGBC)',
    issueYear: '2020',
    validUntil: 'Lifetime Certified Partner',
    description: 'Recognized for executing energy-efficient building envelopes, low-emitting material integration, and high-performance HVAC systems.',
    scope: 'Green Building Design-Build & Sustainable Energy Integration.'
  },
  {
    id: 'safety-certification',
    name: 'OSHA VPP Star National Safety Excellence',
    code: 'OSHA-VPP-STAR',
    logoUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=300',
    issuingOrganization: 'Occupational Safety and Health Administration (OSHA)',
    issueYear: '2021',
    validUntil: '2027',
    description: 'Awarded to contractors demonstrating exemplary worker safety programs with incident rates significantly below national industry averages.',
    scope: 'National Site Safety Execution & Workforce Protection.'
  },
  {
    id: 'quality-certification',
    name: 'ASCE Outstanding Civil Engineering Achievement',
    code: 'ASCE-OCEA-2023',
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300',
    issuingOrganization: 'American Society of Civil Engineers (ASCE)',
    issueYear: '2023',
    validUntil: 'Permanent Award',
    description: 'Honored for structural innovation, environmental stewardship, and community impact on the Metro Infrastructure Project.',
    scope: 'Infrastructure Engineering & Complex Urban Bridge Construction.'
  }
];
