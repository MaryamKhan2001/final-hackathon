import React from 'react';
import Image from 'next/image';

const Couples = () => {
  return (
    <main>
      <div className="w-full bg-white flex flex-col lg:flex-row justify-center items-center lg:items-start">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm  lg:ml-36 sm:max-w-md lg:mt-20 lg:max-w-[725px] h-auto px-4 lg:px-0">
            <Image
              src="/couple.png"
              alt="Asian couple"
              width={704}
              height={682}
              className="object-cover w-full rounded-md"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:px-12  mt-8 lg:mt-40 text-center lg:text-left">
          <h5 className="text-gray-400 text-xs sm:text-sm lg:text-base font-bold mb-2">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-xl sm:text-2xl lg:text-4xl font-bold leading-snug mb-4">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[#737373] text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              BUY NOW
            </button>
            <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Couples;