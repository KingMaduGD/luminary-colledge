import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AwardsCarousel from "@/components/sections/AwardsCarousel";
import AcademicHighlights from "@/components/sections/AcademicHighlights";
import PrincipalMessage from "@/components/sections/PrincipalMessage";
import NewsPreview from "@/components/sections/NewsPreview";
import AdmissionsCTA from "@/components/sections/AdmissionsCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AcademicHighlights />
      <PrincipalMessage />
      <AwardsCarousel />
      <NewsPreview />
      <AdmissionsCTA />
    </>
  );
}
