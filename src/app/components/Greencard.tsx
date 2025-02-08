import React from "react";
import Image from "next/image";

function Greencard() {
  return (
    <div className="w-full bg-[#23856D] border">
      <div className="w-full h-auto sm:h-[500px] lg:h-[600px]"> {/* Increased height for laptops */}
        <div className="container mx-auto h-auto sm:h-[500px] lg:h-[600px] py-[30px] sm:py-[50px] flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] items-center">
          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-[15px] lg:gap-[20px] lg:ml-40 px-[20px] lg:px-0">
            <h4 className="font-Montserrat font-normal text-[14px] lg:text-[18px] leading-[20px] lg:leading-[24px] text-white tracking-wider uppercase">
              Summer 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-[36px] sm:leading-[50px] lg:leading-[64px] text-white">
              Vita Classic Product
            </h1>
            <p className="font-Montserrat font-medium text-[12px] sm:text-[14px] lg:text-[16px] leading-[16px] sm:leading-[20px] lg:leading-[24px] text-white max-w-[500px]">
              We know how large objects will act. We know how objects will 
              interact. Explore the timeless classic.
            </p>
            <div className="flex items-center gap-[15px] lg:gap-[20px]">
              <h3 className="font-Montserrat font-bold text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] lg:leading-[30px] text-white">
                $16.48
              </h3>
              <button className="rounded-[5px] px-[25px] sm:px-[30px] lg:px-[40px] bg-[#2DC071] py-[10px] sm:py-[12px] lg:py-[14px] hover:bg-[#1F9D67] transition-all duration-300">
                <h1 className="font-Montserrat text-[12px] sm:text-[14px] lg:text-[16px] leading-[16px] lg:leading-[20px] text-white text-center">
                  Add to Cart
                </h1>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-[300px] lg:w-[400px] flex justify-center md:w-[180px] lg:justify-end">
            <Image
              src="/boy.png"
              alt="picman"
              width={400}
              height={600}
              className="w-full lg:w-auto h-auto lg:mr-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greencard;
