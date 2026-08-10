export type ProjectStatus = 'Completed' | 'Ongoing';

export type ProjectCategory = 
  | 'Residential' 
  | 'Commercial' 
  | 'Industrial' 
  | 'Infrastructure' 
  | 'Government';

export interface ProjectStats {
  builtUpArea: string;
  duration: string;
  workforce: string;
  floors: string;
  completionPercentage: number;
  projectCost: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  status: ProjectStatus;
  completionPercentage: number;
  projectValue: string;
  location: string;
  client: string;
  startDate: string;
  completionDate: string;
  year: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  scopeOfWork: string[];
  methodology: string;
  materialsUsed: string[];
  equipmentUsed: string[];
  challenges: string;
  solutions: string;
  results: string;
  statistics: ProjectStats;
}
