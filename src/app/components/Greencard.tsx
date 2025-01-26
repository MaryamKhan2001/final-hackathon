import React from "react";
import Image from "next/image";

function Greencard() {
  return (
    <div className="w-full bg-[#23856D] border">
      <div className="w-full h-[709px]">
        <div className="container mx-auto h-[709px] py-[112px] flex gap-[80px]">
          <div className="flex-1 flex flex-col gap-[30px] pt-[60px]">
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white">
              SUMMER 2020
            </h4>
            <h1 className="font-Montserrat font-bold text-[58px] leading-[80px] text-white">
              Vita Classic Product
            </h1>
            <p className="font-Montserrat font-medium text-[14px] leading-[20px] text-white">
              We know how large objects will act, We know how are objects will
              act, We know
            </p>
            <div className="flex gap-[34px]">
              <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-white">
                $16.48
              </h3>
              <button className="rounded-[5px] px-[40px] bg-[#2DC071] py-[15px]">
                <h1 className="font-Montserrat text-[14px] leading-[22px] text-white text-center">
                  ADD TO CART
                </h1>
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/boy.png"
              alt="picman"
              width={443}
              height={685}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greencard;