export type ClientCategory =
  | 'Government Organizations'
  | 'Real Estate Developers'
  | 'Manufacturing Companies'
  | 'Infrastructure Companies'
  | 'Healthcare Organizations'
  | 'Educational Institutions'
  | 'Retail Companies'
  | 'Corporate Clients';

export interface Client {
  id: string;
  name: string;
  category: ClientCategory;
  logoUrl: string;
  location: string;
  partnerSince: string;
}
