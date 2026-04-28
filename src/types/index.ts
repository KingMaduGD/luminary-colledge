export interface Award {
  id: number;
  title: string;
  year: number;
  body: string;
  icon: string;
}

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
}

export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  author: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
}
