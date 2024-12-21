"use client";

import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

import AboutSection from "@/components/sections/AboutSection";
import ContactPage from "@/components/sections/ContactSection";
import DestinationsSection from "@/components/sections/Destinations";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/TestemonialsSection";
import Image from "next/image";

export default function Home() {
  const handleOnClick = () => {
    window.open(" https://t.me/isc_italy", "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
      mirror: true,
      delay:600
    });
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div data-aos="fade-down">
        <AboutSection />
      </div>

      {/* Services Section */}
      <div data-aos="fade-right">
        <ServicesSection />
      </div>

      {/* Destinations Section */}
      <div data-aos="fade-left">
        <DestinationsSection />
      </div>

      {/* Testimonials */}
      <div data-aos="fade-up">
        <Testimonials />
      </div>

      {/* Contact Page */}
      <div data-aos="fade-left">
        <ContactPage />
      </div>

      {/* Telegram Button */}
      <button
        onClick={handleOnClick}
        className="fixed z-50 bottom-4 right-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all animate-bounce"
      >
        <Image width={60} height={60} alt="telegram icon" src="/assets/telegram.png" />
      </button>
    </div>
  );
}
