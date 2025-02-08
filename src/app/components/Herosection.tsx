import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Herosection = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[716px]">
      {/* Background Image */}
      <Image
        src="/maingirl.jpg"
        alt="maingirl"
        height={716}
        width={1440}
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-4 sm:px-12">
        <div className="w-full sm:w-[599px] flex flex-col items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
          <h5 className="font-montserrat font-bold text-[12px] sm:text-[16px] leading-[16px] sm:leading-[24px] tracking-[0.1px] text-white uppercase">
            Summer 2020
          </h5>
          <h1 className="font-montserrat font-bold text-[32px] sm:text-[58px] leading-[40px] sm:leading-[80px] tracking-[0.2px] text-white">
            New Collection
          </h1>
          <h4 className="font-montserrat font-normal text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
            We know how large objects will act, 
            but things on a small scale.
          </h4>
          <Link
            href="/productui"
            className="w-full sm:w-auto bg-[#2DC071] py-3 sm:py-4 px-8 sm:px-16 rounded-md text-center text-white font-montserrat text-[14px] sm:text-[16px]">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
