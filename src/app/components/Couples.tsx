import React from 'react';
import Image from 'next/image';

const Couples = () => {
  return (
    <main>
      <div className="w-full bg-white flex flex-col lg:flex-row justify-center items-center lg:items-start">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative h-[682px] w-[904px] ml-72">
            <Image
              src="/couple.png"
              alt="Asian couple"
              width={704} // Set the width for the image
              height={682} // Set the height for the image
              className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[725px] lg:h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 px-5 lg:px-10 mt-8 lg:mt-10">
          <h5 className="text-gray-400 text-sm lg:text-base font-bold mb-3">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[#737373] text-sm sm:text-base lg:text-lg leading-6 mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <div className="flex flex-wrap gap-4">
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
