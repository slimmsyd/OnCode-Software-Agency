"use client";

import HomeNavigation from "./HomeNavigation";
import Hero from "./Hero";
import HeroProofBand from "./HeroProofBand";
import AuditSection from "./AuditSection";
import ServicesSection from "./ServicesSection";
import WorkSection from "./WorkSection";
import CaseStudy from "./CaseStudy";
import Process from "./Process";
import Founder from "./Founder";
import SubstackSection from "./SubstackSection";
import FaqSection from "./FaqSection";
import BookingSection from "./BookingSection";
import RedesignFooter from "./RedesignFooter";
import StickyAuditBar from "./StickyAuditBar";
import IntroGate from "./IntroGate";

import Testimonials from "../Testimonials";

// OnCode homepage redesign: diagnostic-first assembly.
export default function RedesignHome() {
  return (
    <div className="relative bg-white pb-20">
      <IntroGate />
      <HomeNavigation variant="home" />
      <Hero />
      <HeroProofBand />
      <WorkSection />
      <AuditSection />
      <ServicesSection />
      <CaseStudy />
      <Process />
      <Founder />
      <SubstackSection />
      <FaqSection />
      <BookingSection />
      <Testimonials />
      <RedesignFooter />
      <StickyAuditBar />
    </div>
  );
}
