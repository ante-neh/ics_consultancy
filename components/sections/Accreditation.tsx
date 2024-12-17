// components/AccreditationSection.tsx

import Image from "next/image";

const AccreditationSection = () => {
  return (
    <section className="py-12 bg-[#EBEBEB]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">ACCREDITATION</h2>
          <div className="flex justify-center">
            <Image
              src="/accreditation-badge.png"
              alt="Accreditation Badge"
              width={112} 
              height={112}
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">CERTIFICATION</h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <Image
                src="/itac-cert.png"
                alt="ITAC Certification"
                width={64} 
                height={64}
                className="object-contain mx-auto"
              />
              <p className="font-semibold mt-2">ITAC</p>
              <p className="text-sm text-gray-500">#349</p>
            </div>
            <div className="text-center">
              <Image
                src="/uscg-cert.png"
                alt="USCG Certification"
                width={64}
                height={64}
                className="object-contain mx-auto"
              />
              <p className="font-semibold mt-2">USCG</p>
              <p className="text-sm text-gray-500">#448</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
