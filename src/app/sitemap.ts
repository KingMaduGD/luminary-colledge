import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://luminarycollege.edu.ng", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://luminarycollege.edu.ng/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://luminarycollege.edu.ng/academics", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://luminarycollege.edu.ng/admissions", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://luminarycollege.edu.ng/gallery", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://luminarycollege.edu.ng/news", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: "https://luminarycollege.edu.ng/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];
}
