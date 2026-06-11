"use client";

import RedesignNav from "./RedesignNav";
import Hero from "./Hero";
import AuditSection from "./AuditSection";
import ServicesSection from "./ServicesSection";
import WorkSection from "./WorkSection";
import CaseStudy from "./CaseStudy";
import Process from "./Process";
import Founder from "./Founder";
import FinalCTA from "./FinalCTA";
import RedesignFooter from "./RedesignFooter";

import LogoCarousel from "../LogoCarousel";
import Testimonials from "../Testimonials";

// OnCode homepage redesign: diagnostic-first assembly.
export default function RedesignHome() {
  return (
    <div className="relative bg-white">
      <RedesignNav />
      <Hero />
      <LogoCarousel />
      <AuditSection />
      <ServicesSection />
      <WorkSection />
      <CaseStudy />
      <Process />
      <Founder />
      <Testimonials />
      <FinalCTA />
      <RedesignFooter />
    </div>
  );
}
