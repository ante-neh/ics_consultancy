import Image from "next/image";
import { FC, useState } from "react";

interface TestimonialCardProps {
  image: string;
  name: string;
  country: string;
  level: string;
  comment: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  image,
  name,
  country,
  level,
  comment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center p-0 w-full md:w-[300px] lg:w-[350px] bg-[#01013A] rounded-lg shadow-lg backdrop-blur-md transition-transform duration-700 hover:scale-105 overflow-hidden ${
        isExpanded ? "h-auto" : "h-auto"
      }`}
    >
      <div className="relative w-full h-[450px]">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-6 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-[#00EDCF] font-montserrat mb-1">{name}</h3>
        <p className="text-sm text-gray-300 mb-2 font-montserrat">
          {level} {" "} {country}
        </p>
        <p
          className={`text-gray-100 text-center md:text-left leading-relaxed italic font-monserrat font-light ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          &quot;{comment}&quot;
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-sm text-[#00EDCF] underline focus:outline-none"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
