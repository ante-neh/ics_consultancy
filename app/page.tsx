"use client"
import AboutSection from "@/components/sections/AboutSection";
import ContactPage from "@/components/sections/ContactSection";
import DestinationsSection from "@/components/sections/Destinations";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/TestemonialsSection";
import Image from "next/image";

export default function Home() {
  const handleOnClick = ()=>{
    window.open("https://t.me/graceconsultancy", "_blank", "noopener,noreferrer")
  }
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <DestinationsSection/>
      <Testimonials/>
      <ContactPage/>
      <button
        onClick={handleOnClick}
        className="fixed z-50 bottom-4 right-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all animate-bounce"
      >
        <Image width={60} height={60} alt="telegram icon" src="/assets/telegram.png"/>
      </button>
    </div>
  );
}
