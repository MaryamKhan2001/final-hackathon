"use client";

import React, { useState } from "react";

// Define the product type
interface Product {
  name: string;
}

const sampleProducts: Product[] = [
  { name: "Sofa" },
  { name: "Table" },
  { name: "Chair" },
  { name: "Bed" },
  { name: "Bookshelf" },
];

const FurnitureSearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      const filteredSuggestions = sampleProducts
        .filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term!");
      return;
    }
    alert(`Searching for "${searchTerm}"...`);
  };

  return (
    <div className="flex flex-col items-center w-full sm:w-[600px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Furniture Search</h1>
      <div className="relative w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for furniture (e.g., 'sofa', 'table')"
          className="w-full h-[50px] border border-gray-300 rounded-lg px-4 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {suggestions.length > 0 && (
        <div className="w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg">
          {suggestions.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchTerm(item.name);
                setSuggestions([]);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FurnitureSearchBar;
