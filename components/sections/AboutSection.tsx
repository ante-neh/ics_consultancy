"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter()

  const images = [
    "/assets/students.jpeg",
    "/assets/students2.jpeg",
    "/assets/students3.jpeg",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

 
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
    router.push("/about")
  };

  return (
    <div className="w-full h-max bg-[#00EDCF]">
      <Container className="mt-24 mb-12 relative px-16">
        <div
          className={`absolute left-4 top-[50%] transform -translate-y-[50%] transition-all z-50 duration-700 ease-in-out ${
            isScrolled ? "translate-x-[-50%]" : "translate-x-0"
          }`}
        >
          <span className="text-xl sm:text-3xl md:text-4xl">✈️</span>
        </div>

        <div
          className={`absolute right-4 top-[50%] transform -translate-y-[50%] transition-all z-50 duration-700 ease-in-out ${
            isScrolled ? "translate-x-[50%]" : "translate-x-0"
          }`}
        >
          <span className="text-xl sm:text-3xl md:text-4xl">📚</span>
        </div>

        <section className="flex flex-col md:flex-row items-center md:items-stretch w-full h-[500px] rounded-lg overflow-hidden bg-[#01013A] relative z-10">
          <div className="relative w-full h-[500px] md:h-auto">
            <Image
              src={images[currentImage]}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="relative flex flex-col justify-center items-center p-4 md:p-8  w-full bg-[#00EDCF] text-white">
            <h3 className="text-3xl md:text-4xl font-bold text-[#01013A] mb-4">
              About Us
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-[#01013A]  text-start">
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
