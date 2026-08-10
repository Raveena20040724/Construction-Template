export type GalleryCategory =
  | 'All'
  | 'Building Construction'
  | 'Infrastructure'
  | 'Industrial'
  | 'Residential'
  | 'Commercial'
  | 'Interior'
  | 'Equipment'
  | 'Construction Sites';

export interface ProjectGalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  location: string;
  year: string;
  description: string;
}
