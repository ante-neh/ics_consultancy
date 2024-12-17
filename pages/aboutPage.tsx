import AccreditationSection from "@/components/sections/Accreditation";
import Image from "next/image";
// import Container from "@/components/common/Container";

const About = () => {
  return (
    <div className="">
      <div className="text-white py-16 px-6 bg-[#00EDCF]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/about-illustration.png" 
              alt="About Grace Africa Scholars"
              width={500}
              height={500}
              className="mx-auto animate-fadeIn"
              priority
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
            <p className="text-lg leading-relaxed">
              LEFOPS is an Ethiopian recognized service provider with License No.{" "}
              <span className="text-[#00EDCF] font-semibold">
                05/1/1101497
              </span>{" "}
              that specializes in educational, social, and professional
              development.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Since 2005, LEFOPS has assisted thousands of students in achieving
              their educational objectives by providing effective and
              individualized advising and placement services to great schools
              worldwide. We aim to identify universities that suit their career
              aspirations at a fair rate.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 bg-[#01013A]">  
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-slideInUp">
            <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">MISSION</h3>
            <p className="text-white leading-relaxed">
              To give African students the opportunity to gain foreign education
              and skills, thereby altering the African continent.
            </p>
          </div>

          <div className="animate-slideInUp delay-200">
            <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">VISION</h3>
            <p className="text-white leading-relaxed">
              To become the leading education consultants in Africa and the
              world at large.
            </p>
          </div>

          <div className="animate-slideInUp delay-400">
            <h3 className="text-2xl font-bold mb-4 text-[#00EDCF]">VALUE</h3>
            <ul className="text-white space-y-2">
              <li>Customer Service</li>
              <li>Commitment to Quality</li>
              <li>Empowerment & Accountability</li>
              <li>Intelligent Risk-taking</li>
              <li>Integrity & Honesty</li>
            </ul>
          </div>

          <div className="animate-slideInUp delay-600">
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
