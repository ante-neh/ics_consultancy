"use client"
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <AboutSection/>
    </div>
  );
}
