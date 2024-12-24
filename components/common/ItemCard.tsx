import React, { FC } from 'react';
import Image from 'next/image';

const ItemCard: FC<{ name: string; description: string; imageSrc: string }> = ({
  name,
  description,
  imageSrc,
}) => {
  return (
    <div className="group mx-4 w-[300px] h-[300px] rounded-xl bg-transparent cursor-pointer perspective">
      <div
        className="relative preserve-3d group-hover:scale-105 group-hover:my-rotate-y-180 w-full h-full duration-700 ease-in-out shadow-lg rounded-xl"
      >
        {/* Front Side */}
        <div className="absolute backface-hidden w-full h-full rounded-xl overflow-hidden border border-gray-200">
          <Image
            src={imageSrc}
            className="w-full h-full object-cover"
            width={250}
            height={300}
            alt={name}
          />
        </div>

        {/* Back Side */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 pb-6">
            <h1 className="text-2xl font-semibold font-montserrat mb-2">
              {name}
            </h1>
            <p className="font-montserrat font-light text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
