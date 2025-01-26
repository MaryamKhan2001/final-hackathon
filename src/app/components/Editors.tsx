import Image from "next/image";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-[10px] bg-[#f5f5f5]">
      <div className="w-[1050px] h-auto flex flex-col gap-[30px] bg-[#FAFAFA] p-[40px]">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
            EDITORS PICK
          </h3>
          <p className="w-[347px] h-auto font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full h-[500px] flex gap-[30px]">
          {/* Men Image */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/men.png"
              alt="men"
              height={500}
              width={510}
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[16px] leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/women.png"
              alt="women"
              height={500}
              width={240}
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center bg-white shadow-md">
              <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>

          {/* Accessories and Kids */}
          <div className="w-[240px] h-[500px] flex flex-col gap-[30px]">
            {/* Accessories Image */}
            <div className="relative flex flex-col items-center">
              <Image
                src="/accessories.png"
                alt="accessories"
                height={242}
                width={240}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative flex flex-col items-center">
              <Image
                src="/kids.png"
                alt="kids"
                height={242}
                width={240}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
