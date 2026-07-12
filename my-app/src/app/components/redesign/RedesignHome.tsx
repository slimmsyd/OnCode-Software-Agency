"use client";

import RedesignNav from "./RedesignNav";
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

import Testimonials from "../Testimonials";

// OnCode homepage redesign: diagnostic-first assembly.
export default function RedesignHome() {
  return (
    <div className="relative bg-white pb-20">
      <RedesignNav />
      <Hero />
      <HeroProofBand />
      <AuditSection />
      <ServicesSection />
      <WorkSection />
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