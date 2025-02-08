"use client";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
  Phone,
  Mail,
  Menu,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Define the product list
const products = [
  { id: 1, name: "Rustic Vase Set" },
  { id: 2, name: "Timber Craft" },
  { id: 3, name: "Amber Haven" },
  { id: 4, name: "The Dandy Chair" },
  { id: 5, name: "Vase Set" },
  { id: 6, name: "Syltherine" },
  { id: 7, name: "Marble Ease" },
  { id: 8, name: "Wood Chair" },
  { id: 9, name: "Retro Vibe" },
  { id: 10, name: "The Lucky Lamp" },
  { id: 11, name: "Serene Seat" },
  { id: 12, name: "Cloud Haven Chair" },
  { id: 13, name: "Bed" },
  { id: 14, name: "Pure Aura" },
  { id: 15, name: "Zen Table" },
  { id: 16, name: "Tropical Vibe" },
  { id: 17, name: "Sleek Living" },
  { id: 18, name: "Nordic Elegance" },
  { id: 19, name: "Timeless Elegance" },
  { id: 20, name: "Reflective Haven" },
  { id: 21, name: "Sunny Chic" },
  { id: 22, name: "Bold Nest" },
  { id: 23, name: "Bright Space" },
  { id: 24, name: "Modern Serenity" },
];

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() !== "") {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 md:flex-nowrap">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <h6 className="text-sm">(225) 555-0118</h6>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <h6 className="text-sm">michelle.rivera@example.com</h6>
        </div>

        <h6 className="hidden md:block text-sm font-bold">
          Follow us and get a chance to win 80% off!
        </h6>

        <div className="flex items-center gap-3">
          <h6 className="text-sm font-bold">Follow Us:</h6>
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md relative">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold">
            MIMI CHIC
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Product">Shop</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/pages">Pages</Link>
            </li>
          </ul>

          {/* Utility Links (Visible on All Devices) */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearchBar}>
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart">
              <ShoppingCart className="w-5 h-5" />
            </Link>
            <Heart className="w-5 h-5" />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <Sheet>
              <SheetTrigger>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>MIMI CHIC</SheetTitle>
                </SheetHeader>
                <ul className="space-y-4 mt-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/Product">Shop</Link>
                  </li>
                  <li>
                    <Link href="/About">About</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/Contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/pages">Pages</Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchVisible && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg p-4 z-50">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search for products..."
              className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* Search Suggestions */}
            {filteredProducts.length > 0 && (
              <div className="mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(product.name);
                      setFilteredProducts([]);
                      setIsSearchVisible(false);
                    }}
                  >
                    {product.name}
                  </div>
                ))}
              </div>
            )}

            {/* No Results */}
            {searchTerm && filteredProducts.length === 0 && (
              <p className="mt-2 text-sm text-gray-500">No products found.</p>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}
