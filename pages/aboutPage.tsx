import AccreditationSection from "@/components/sections/Accreditation";
import Image from "next/image";

const About = () => {
  return (
    <div className="">
      <div className="text-white py-16 px-6 bg-[#00EDCF]">
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
            <h2 className="text-4xl font-bold mb-6 text-[#01013A]">ABOUT US</h2>
            <p className="text-lg leading-relaxed">
              International Student Community(ISC){" "}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#01013A]">
                Founded on June 2021 Addis Ababa, ISC empowers students
                across Ethiopia to reach their academic horizons. We are dedicated to providing a
                seamless and stress-free international travel experience for our clients. We handle
                all aspects of your journey, from securing essential documentation and visa
                processing to arranging transportation and offering customized support
                throughout.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-[#01013A]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {/* Mission */}
        <div className="animate-slideInUp bg-[#02024B] p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div className="flex justify-center mb-4">
            <span className="text-[#00EDCF] text-4xl">
              🚀 {/* Icon Placeholder */}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">MISSION</h3>
          <p className="text-white leading-relaxed">
            To give African students the opportunity to gain foreign education and
            skills, thereby altering the African continent.
          </p>
        </div>

        {/* Vision */}
        <div className="animate-slideInUp delay-200 bg-[#02024B] p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div className="flex justify-center mb-4">
            <span className="text-[#00EDCF] text-4xl">
              🌍 {/* Icon Placeholder */}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">VISION</h3>
          <p className="text-white leading-relaxed">
            Double Learning with half the impact. Our ambition is to democratize
            education and foster equity worldwide by revolutionizing learning and
            igniting passion. We envision empowering potential, shaping the future
            of Ethiopia and Africa.
          </p>
        </div>

        {/* Value */}
        <div className="animate-slideInUp delay-400 bg-[#02024B] p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div className="flex justify-center mb-4">
            <span className="text-[#00EDCF] text-4xl">
              ⭐ {/* Icon Placeholder */}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">VALUES</h3>
          <ul className="text-white space-y-2 text-left">
            <li>✅ Customer Service</li>
            <li>✅ Commitment to Quality</li>
            <li>✅ Empowerment & Accountability</li>
            <li>✅ Intelligent Risk-taking</li>
            <li>✅ Integrity & Honesty</li>
          </ul>
        </div>

        {/* Objectives */}
        <div className="animate-slideInUp delay-600 bg-[#02024B] p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
          <div className="flex justify-center mb-4">
            <span className="text-[#00EDCF] text-4xl">
              🎯 {/* Icon Placeholder */}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">OBJECTIVES</h3>
          <p className="text-white leading-relaxed">
            To help students achieve their dreams of studying abroad through
            professional counseling, placement services, and tailored support.
          </p>
        </div>
      </div>
    </div>

      <AccreditationSection/>
    </div>
  );
};

export default About;
