import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import AwardsCarousel from "@/components/sections/AwardsCarousel";
import AcademicHighlights from "@/components/sections/AcademicHighlights";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import Testimonials from "@/components/sections/Testimonials";
import NewsPreview from "@/components/sections/NewsPreview";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Luminary College, Abuja — where academic excellence meets character formation. Admissions open for 2025/2026.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnapshot />
      <AwardsCarousel />
      <AcademicHighlights />
      <PrincipalMessage />
      <Testimonials />
      <NewsPreview />
      <AdmissionsCTA />
    </>
  );
}
