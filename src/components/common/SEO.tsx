import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'BuildCore Constructions | Building Strong Foundations for a Better Future',
  description = 'BuildCore Constructions delivers premier commercial, residential, industrial, and infrastructure civil engineering solutions with uncompromised safety and precision.',
  keywords = 'construction company, civil engineering, infrastructure development, commercial building, general contractor, structural design, industrial construction',
  ogImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
}) => {
  const fullTitle = title.includes('BuildCore') ? title : `${title} | BuildCore Constructions`;

  useEffect(() => {
    document.title = fullTitle;

    // Description Meta Tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Keywords Meta Tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', fullTitle);
      document.head.appendChild(ogTitle);
    }

    // Open Graph Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', ogImage);
    } else {
      ogImg = document.createElement('meta');
      ogImg.setAttribute('property', 'og:image');
      ogImg.setAttribute('content', ogImage);
      document.head.appendChild(ogImg);
    }
  }, [fullTitle, description, keywords, ogImage]);

  return null;
};
