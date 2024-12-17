"use client";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Image from "next/image";

const HeroSection = () => {

  const handleOnClick = () => {

    window.open("https://forms.gle/JnB6RwbwyLhNB4kt8", "_blank", "noopener,noreferrer");
  };
  return (
    <Container className="mt-24 mb-12">
      <section className="bg-[#01013A] text-white flex flex-col md:flex-row items-center gap-8 w-full justify-between relative">
        <div className="max-w-[550px] text-center md:text-left">
          <h2 className="text-2xl sm:text-6xl leading-tight font-euclid font-semibold">
            Your trusted <br />
            education <span className="text-[#00EDCF]">advisor!</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300 font-medium">
            ISC empowers Ethiopian students to achieve their academic dreams,
            handling everything from documentation and visas to transportation
            and personalized support.
          </p>
          <Button
            className="bg-[#00EDCF] text-[#01013A] font-medium px-4 py-2 mt-6 hover:bg-[#00CBAE] transition rounded-[64px]"
            handleOnClick={handleOnClick}
            name="Study abroad"
          />
        </div>

        <div className="relative w-full sm:w-[492px] h-[300px] sm:h-[400px] flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/assets/landingPageImage.svg"
            alt="Students"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />

          <div className="absolute top-[-16px] left-[80px] h-8 w-8 sm:h-10 sm:w-10 bg-white p-1 sm:p-2 rounded-full grid place-content-center shadow-md">
            ✈️
          </div>

          <div className="absolute bottom-[50px] right-[-10px] h-8 w-8 sm:h-10 sm:w-10 bg-white p-1 sm:p-2 rounded-full grid place-content-center shadow-md">
            📚
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
