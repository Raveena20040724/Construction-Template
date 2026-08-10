export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  heroImage: string;
  shortDescription: string;
  contentParagraphs: string[];
  tags: string[];
  relatedPostIds: string[];
}
