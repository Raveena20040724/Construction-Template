export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  employmentType: 'Full-time' | 'Contract' | 'Part-time';
  salaryRange: string;
  postedDate: string;
  shortDescription: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
}
