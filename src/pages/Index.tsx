import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MarqueeStrip from "@/components/MarqueeStrip";
import AcademicResultsBanner from "@/components/AcademicResultsBanner";
import JEEAdditionalToppers from "@/components/JEEAdditionalToppers";
import ManagementSection from "@/components/ManagementSection";
import TrusteesSection from "@/components/TrusteesSection";
import WhyImpulse from "@/components/WhyImpulse";
import CoursesSection from "@/components/CoursesSection";
import WavekotaFaculty from "@/components/WavekotaFaculty";
import SupportingFaculty from "@/components/SupportingFaculty";



import ExcellenceSection from "@/components/ExcellenceSection";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import StickyEnquiryBar from "@/components/StickyEnquiryBar";
import SlideInCTA from "@/components/SlideInCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import JEEResultPopupHero from "@/components/JEEResultPopupHero";
import AdmissionsPopup from "@/components/AdmissionsPopup";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 sm:pb-0">
      <StickyEnquiryBar />
      <SlideInCTA />
      <ExitIntentPopup />
      <JEEResultPopupHero />
      <AdmissionsPopup />
      <TopInfoBar />
      <Navbar />
      <HeroCarousel />
      <MarqueeStrip />
      <AcademicResultsBanner />
      <JEEAdditionalToppers />
      <ManagementSection />
      <TrusteesSection />
      <WhyImpulse />
      <CoursesSection />
      <WavekotaFaculty />
      <SupportingFaculty />
      <MarqueeStrip />
      <ExcellenceSection />
      <StatsSection />
      <GallerySection />
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Index;
