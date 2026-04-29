export interface Award {
  id: string;
  year: number;
  name: string;
  issuer: string;
  description: string;
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  subject: string;
  bio: string;
  image: string;
}

export interface NewsPost {
  id: string;
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'Academics' | 'Sports' | 'Events' | 'Facilities';
  title: string;
  image: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}
