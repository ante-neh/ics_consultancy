"use client";
import AccreditationSection from "@/components/sections/Accreditation";
import { useEffect } from "react";
import { init as initAOS } from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    initAOS({ duration: 2000, delay: 100 });
  }, []);
  return (
     <div className="">
        <div className="text-white py-16 px-6 bg-[#EBEBEB]" data-aos="fade-up">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/assets/graduation.jpeg"
                alt="About Grace Africa Scholars"
                width={500}
                height={500}
                className="mx-auto animate-fadeIn rounded-lg"
                priority
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold font-montserrat mb-6 text-[#00EDCF]">
                ABOUT US
              </h2>
              <p className="text-lg leading-relaxed text-[#00EDCF] font-montserrat">
                International Student Community(ISC){" "}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#01013A] text-center md:text-left font-montserrat">
                The International Student Community (ISC) is a pioneering
                organization founded by Ethiopian students in Italy to empower
                Ethiopian students to achieve their academic dreams on a global
                scale. Established with the vision of bridging the gap between
                ambition and opportunity, ISC supports students aspiring to
                study abroad through a comprehensive network of resources,
                professional counseling, and a vibrant community. ISC is not
                just about facilitating education; it &apos s about fostering
                connections, exchanging knowledge, and creating solidarity among
                Ethiopian students globally. Whether helping students navigate
                complex university applications, secure scholarships, or adapt
                to new cultures, ISC ensures a seamless experience for its
                members.
              </p>
            </div>
          </div>
        </div>
        <div className="py-16 px-6 bg-[#01013A]" data-aos="fade-up">
          <div className="container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {/* Mission */}
            <div className="animate-slideInUp bg-blue-600 p-6 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center">
              <div className="flex justify-center mb-4">
                <span className="text-[#00EDCF] text-4xl">
                  🚀 {/* Icon Placeholder */}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#00EDCF] font-montserrat">
                MISSION
              </h3>
              <p className="text-white leading-relaxed text-center md:text-left font-montserrat">
                ISC&aposs mission is to empower Ethiopian students with the
                tools, knowledge, and opportunities to pursue higher education
                abroad. It is dedicated to making education abroad accessible
                and sustainable for Ethiopian students while protecting them
                from exploitation and supporting them in their academic
                journeys.
              </p>
            </div>

            {/* Vision */}
            <div className="animate-slideInUp delay-200 bg-blue-600 p-6 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center">
              <div className="flex justify-center mb-4">
                <span className="text-[#00EDCF] text-4xl">
                  🌍 {/* Icon Placeholder */}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#00EDCF] font-montserrat">VISION</h3>
              <p className="text-white leading-relaxed text-center md:text-left font-montserrat">
                ISC envisions creating a brighter future for Ethiopian students
                through education by bridging information gaps, fostering a
                global network of support, and shaping a generation of educated
                leaders equipped to drive Ethiopia &apos s development.
              </p>
            </div>

            {/* Values */}
            <div className="animate-slideInUp delay-400 bg-blue-600 p-6 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center" data-aos="zoom-in"
            data-aos-delay="400">
              <div className="flex justify-center mb-4">
                <span className="text-[#00EDCF] text-4xl">
                  ⭐ {/* Icon Placeholder */}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">
                OBJECTIVES
              </h3>
              <ul className="text-white space-y-2 text-center md:text-left font-montserrat">
                <li>✅ Open Doors to International Education:</li>
                <li>✅ Build a Stronger Ethiopia through Education</li>
                <li>✅ Protect Students from Exploitation</li>
                <li>✅ Create a Network of Support</li>
              </ul>
            </div>
          </div>
        </div>

      <AccreditationSection />
    </div>
  );
};

export default About;
