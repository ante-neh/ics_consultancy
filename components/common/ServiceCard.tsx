import Image, { StaticImageData } from "next/image";
import { FC } from "react";

const ServiceCard: FC<{ icon: string | StaticImageData; name: string , description: string}> = ({ name, icon, description }) => {
  return (
    <div className="group relative bg-blue-600 text-white p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 overflow-hidden">
      {/* Floating Background Icon */}
      <div
        className={`absolute -top-6 -left-6 opacity-10 group-hover:opacity-30 transition-opacity duration-700 text-white`}
      >
        <Image width={60} height={60} src={icon} alt={`${name} icon`} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Icon Animation */}
        <div className="flex justify-center items-center text-3xl mb-4 group-hover:animate-spin-slow">
          <Image width={60} height={60} src={icon} alt={`${name} icon`} />
        </div>
        {/* Title with Underline Animation */}
        <h3 className="text-xl font-bold text-center mb-2 relative after:absolute after:w-0 after:h-[3px] after:bg-[#00EDCF] after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
          {name}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
