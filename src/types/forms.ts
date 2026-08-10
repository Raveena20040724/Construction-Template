export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  projectType: string;
  projectLocation: string;
  estimatedBudget: string;
  expectedStartDate: string;
  expectedCompletionDate: string;
  requiredServices: string[];
  projectDescription: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface JobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  linkedinProfile?: string;
  coverLetter: string;
}
