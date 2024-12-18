"use client"
import { useState } from "react";
import Image from "next/image";

const AccreditationSection = () => {
  const accreditations = [
    { src: "/assets/c1.png", alt: "Accreditation Badge", title: "ACCREDITATION", id: 1, description: "#123" },
    { src: "/assets/c2.png", alt: "ITAC Certification", title: "ITAC", description: "#349", id: 2 },
    { src: "/assets/c3.png", alt: "USCG Certification", title: "USCG", description: "#448", id: 3 },
    { src: "/assets/c4.png", alt: "ISO Certification", title: "ISO 9001", description: "#234", id: 4 },
    { src: "/assets/c5.png", alt: "CE Certification", title: "CE CERTIFIED", description: "#556", id: 5 },
    { src: "/assets/c6.png", alt: "QA Certification", title: "QA VERIFIED", description: "#789", id: 6 },
    { src: "/assets/c7.png", alt: "Safety Certification", title: "SAFETY CHECK", description: "#998", id: 7 },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  console.log(selectedImage)
  const displayedAccreditations = showAll ? accreditations : accreditations.slice(0, 3);

  return (
    <section className="py-12 bg-[#EBEBEB]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
          ACCREDITATION & CERTIFICATIONS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedAccreditations.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.src)} 
              className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
                className="object-contain shadow-lg rounded-lg"
              />
            </div>
          ))}
        </div>

 
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-[#00EDCF] text-white rounded-full hover:text-[#00EDCF] hover:bg-[#01013A] transition-colors duration-300"
          >
            {showAll ? "Show Less" : "See All"}
          </button>
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
  );
};

export default AccreditationSection;
