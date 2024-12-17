"use client"
import AboutSection from "@/components/sections/AboutSection";
import DestinationsSection from "@/components/sections/Destinations";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/TestemonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <DestinationsSection/>
      <Testimonials/>
    </div>
  );
}
