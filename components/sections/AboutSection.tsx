"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../common/Container";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { RevealWrapper } from "next-reveal";


const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
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


  const handleOnClick = () => {
    router.push("/about")
  };

  return (
      <div className="w-full h-max bg-[#EBEBEB]">
        <Container className="mt-24 relative px-16 max-w-[1300px]">
          <RevealWrapper>
              <section className="flex flex-col md:flex-row items-center md:items-stretch w-full h-max overflow-hidden bg-[#EBEBEB] relative z-10 py-2 rounded-xl">
                <div className="relative w-full h-[500px] rounded-lg">
                  <Image
                    src={images[currentImage]}
                    alt="About Us"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="rounded-xl"
                  />
                </div>

                <div className="relative flex flex-col justify-center items-center p-4 md:p-8  w-full   text-[#00EDCF]">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#00EDCF] mb-4 text-center md:text-left font-montserrat">
                    About Us
                  </h3>
                  <p className="text-lg leading-relaxed mb-6 text-[#01013A] text-center md:text-left font-normal font-montserrat">
                  The International Student Community (ISC) is a pioneering organization founded by Ethiopian students in Italy to empower
                  Ethiopian students to achieve their academic dreams on a global scale.
                  Established with the vision of bridging the gap between ambition and opportunity,
                  ISC supports students aspiring to study abroad through a comprehensive network of resources, 
                  professional counseling, and a vibrant community.
                  </p>
                  <Button
                    className="bg-[#00EDCF] text-[#01013A] font-medium px-4 py-2 mt-6 hover:bg-[#00CBAE] md:self-start transition rounded-[64px] font-montserrat"
                    handleOnClick={handleOnClick}
                    name="See More"
                  />
                </div>
              </section>
          </RevealWrapper>
        </Container>
      </div>

  );
};

export default AboutSection;
