import React from 'react';
import { House } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
const Shop = () => {
  return (
    <div className="p-8">
      {/* Product Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Section: Image Gallery */}
        <div>
          <div className="mb-4 flex items-center">
            <House />
            <ChevronRight />
            <h1>Shop</h1>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="/yellosofa.png"
              alt="Thumbnail 1"
              className="w-full rounded-lg h-auto max-w-[500px]" // Make Thumbnail 1 larger
            />
            <div className="flex gap-4">
              <img
                src="/smallchair.png"
                alt="Thumbnail 2"
                className="w-1/4 rounded-lg"
              />
              <img
                src="/smallbag.jpg"
                alt="Thumbnail 3"
                className="w-1/4 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Floating Phone</h1>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 text-lg mr-2">⭐</span>
            <span className="text-gray-600">10 Reviews</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">$1,139.33</h2>
          <p className="text-green-600 mb-4">Availability: In Stock</p>
          <p className="text-gray-600 mb-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold">Select Color:</span>
            <div className="flex gap-2">
              <button className="w-6 h-6 bg-blue-600 rounded-full"></button>
              <button className="w-6 h-6 bg-red-600 rounded-full"></button>
              <button className="w-6 h-6 bg-green-600 rounded-full"></button>
              <button className="w-6 h-6 bg-black rounded-full"></button>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Select Options
          </button>
        </div>
      </div>

      {/* Tab Section */}
    {/* Tab Section */}
<div className="mt-12 border-t pt-6">
  <div className="flex gap-8 text-gray-600 mb-4">
    <span className="font-semibold cursor-pointer border-b-2 border-black pb-2">
      Description
    </span>
    <span className="cursor-pointer">Additional Information</span>
    <span className="cursor-pointer">Reviews (0)</span>
  </div>
  <div className="grid grid-cols-2 gap-8 text-gray-700">
    {/* Left Column */}
    <div className="flex items-center gap-4">
      <Image
        src="/pinkchair.png"
        alt="Image"
        height={200}
        width={100}
        className="rounded-lg"
      />
      <div>
        <h3 className="text-lg font-bold mb-2">The quick fox jumps over</h3>
        <p className="mb-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
        <p>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </p>
      </div>
    </div>
    {/* Right Column */}
    <div>
      <h3 className="text-lg font-bold mb-2">The quick fox jumps over</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>The quick fox jumps over the lazy dog</li>
        <li>The quick fox jumps over the lazy dog</li>
        <li>The quick fox jumps over the lazy dog</li>
        <li>The quick fox jumps over the lazy dog</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  );
};

export default Shop;
