import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const images = [
    "/assets/students.jpeg",
    "/assets/students2.jpeg",
    "/assets/students3.jpeg",
  ];

  // Change background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOnClick = () => {
    // Handle button click
  };

  return (
    <div className="w-full h-max bg-[#00EDCF]">
      <Container className="mt-24 mb-12 relative">
        {/* Plane and Book Icons Surrounding Text */}
        <div
          className={`absolute left-0 top-[50%] transform -translate-y-[50%] transition-all duration-700 ease-in-out ${
            isScrolled ? "translate-x-[-150%]" : "translate-x-0"
          }`}
        >
          <span className="text-6xl">✈️</span>
        </div>
        <div
          className={`absolute right-0 top-[50%] transform -translate-y-[50%] transition-all duration-700 ease-in-out ${
            isScrolled ? "translate-x-[150%]" : "translate-x-0"
          }`}
        >
          <span className="text-6xl">📚</span>
        </div>

        {/* Section Content */}
        <section className="flex flex-col md:flex-row items-center md:items-stretch w-full h-[500px] rounded-lg overflow-hidden bg-[#01013A] relative z-10">
          <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
            <Image
              src={images[currentImage]}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="relative flex flex-col justify-center items-center p-8 md:p-12 w-full md:w-1/2 bg-[#00EDCF] text-white">
            <h3 className="text-3xl md:text-4xl font-bold text-[#01013A] mb-4">
              About Us
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-[#01013A] text-center">
              Founded in June 2021 Addis Ababa, Grace Africa Scholars empowers
              students across Ethiopia to reach their academic horizons. We are
              dedicated to providing a seamless and stress-free international
              travel experience for our clients.
            </p>
            <Button
              className="rounded-[64px] border-2 border-[#01013A] px-4 py-0.5 hover:bg-[#01013A] transition text-blue-500 hover:text-white"
              handleOnClick={handleOnClick}
              name="See More"
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutSection;
