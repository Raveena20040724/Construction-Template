export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ConstructionService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  heroImage: string;
  overviewImages: string[];
  keyFeatures: string[];
  keyBenefits: string[];
  processSteps: {
    number: number;
    title: string;
    description: string;
  }[];
  equipmentUsed: string[];
  safetyStandards: string[];
  estimatedTimeline: string;
  targetIndustries: string[];
  relatedProjectIds: string[];
  faqs: ServiceFAQ[];
}
