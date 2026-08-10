import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { StatsCounter } from '../components/home/StatsCounter';
import { AboutPreview } from '../components/home/AboutPreview';
import { ProjectsPreview } from '../components/home/ProjectsPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { EquipmentShowcase } from '../components/home/EquipmentShowcase';
import { SafetySection } from '../components/home/SafetySection';
import { SustainabilitySection } from '../components/home/SustainabilitySection';
import { ClientCarousel } from '../components/home/ClientCarousel';
import { TestimonialSlider } from '../components/home/TestimonialSlider';
import { QuoteCTABanner } from '../components/home/QuoteCTABanner';
import { FAQAccordion } from '../components/shared/FAQAccordion';


export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="BuildCore Constructions | Building Strong Foundations for a Better Future"
        description="Premier general contractor delivering top-tier commercial, residential, industrial, and infrastructure construction with safety, precision, and innovation."
      />

      <main className="overflow-hidden">
        <Hero />
        <StatsCounter />
        <AboutPreview />
        <ProjectsPreview />
        <WhyChooseUs />
        <ProcessTimeline />
        <EquipmentShowcase />
        <SafetySection />
        <SustainabilitySection />
        <ClientCarousel />
        <TestimonialSlider />

        <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQAccordion />
          </div>
        </section>

        <QuoteCTABanner />
      </main>
    </>
  );
};
