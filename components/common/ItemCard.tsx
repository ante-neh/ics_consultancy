import React, { FC } from 'react'
import Image from 'next/image'

const ItemCard : FC<{name:string, description:string, imageSrc:string}>= ({name, description, imageSrc}) => {
  return (
    <div className="w-[250px] h-[300px] mx-4 rounded-lg bg-transparent cursor-pointer group perspective">
      <div
          className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div className="absolute backface-hidden border-2 w-full h-full rounded-lg">
            <Image src={imageSrc} className="w-full h-full"  width={200} height={200} alt='' />
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            <div
              className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 className="text-3xl font-semibold">{name}</h1>
              
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ItemCard