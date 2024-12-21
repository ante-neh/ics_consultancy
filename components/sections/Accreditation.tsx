"use client"
import { useState } from "react";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

const AccreditationSection = () => {
  const accreditations = [
    { src: "/assets/c1.jpg", alt: "Accreditation Badge", title: "ACCREDITATION", id: 1, description: "#123" },
    { src: "/assets/c2.jpg", alt: "ITAC Certification", title: "ITAC", description: "#349", id: 2 },
    { src: "/assets/c3.jpg", alt: "USCG Certification", title: "USCG", description: "#448", id: 3 },
  ];


  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <RevealWrapper origin="bottom" duration={3000} distance="100px" delay={600} reset={true}>
      <section className="py-12 bg-[#EBEBEB]">
        
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
            ACCREDITATION & CERTIFICATIONS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {accreditations.map((item) => (
            
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item.src)} 
                    className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={400}
                      className="object-contain shadow-lg rounded-lg"
                    />
                  </div>
            ))}
          </div>
        </div>
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[9999]"
              onClick={() => setSelectedImage(null)} 
            >
              <div className="relative">
                <button
                  className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </button>
                <img
                  src={selectedImage}
                  alt="Magnified Image"
                  className="object-contain rounded-lg w-[600px] h-auto"
                />
              </div>
            </div>
          )}

      </section>


    </RevealWrapper>
  );
};

export default AccreditationSection;
