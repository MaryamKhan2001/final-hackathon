import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Mail, Menu } from 'lucide-react';
import Link from 'next/link';
import React from "react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-700">Bandage</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="/Product" className="text-gray-700 hover:text-blue-500">
            Product
          </a>
          <a href="/Pricing" className="text-gray-700 hover:text-blue-500">
            Help
          </a>
          <a href="/Contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Mobile Navigation (Menu Icon) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Mimi chic</SheetTitle>
              </SheetHeader>
              <ul className="space-y-4 mt-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Product">Shop</Link></li>
                <li><Link href="/Pricing">Pricing</Link></li>
                <li><Link href="/About">About</Link></li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Shop Button */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Shop Now
        </button>
      </header>

      {/* Contact Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">Get in touch today!</h2>
            <p className="text-gray-600 mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <p className="mt-4">
              <strong>Phone:</strong> +451 215 215
              <br />
              <strong>Fax:</strong> +451 215 215
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/family.png"
              alt="Happy family shopping"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Visit Office Section */}
      <section className="px-6 py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">
            Visit Our Office
          </h3>
          <h4 className="text-xl font-bold text-gray-700 mt-2">
            We help small businesses with big ideas
          </h4>
          {/* Grid for Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Phone Section */}
            <div className="text-center bg-white text-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-300">
                <i className="fas fa-map-marker-alt text-4xl"></i>
              </div>
              <div className="flex justify-center items-center">
                <Phone className="text-blue-400 w-[51px] h-[67px]" />
              </div>
              <p className="mt-4 text-black">
                georgia.young@example.com
                <br />
                georgia.young@pie.com
              </p>
              <a href="#" className="text-black hover:underline">
                Get Support
              </a>
              {/* Centered Submit Request Button */}
              <div className="flex justify-center mt-4">
                <button className="px-4 py-2 bg-blue-400 text-white border border-blue-300 rounded hover:bg-blue-800">
                  Submit Request
                </button>
              </div>
            </div>

            {/* Map Section */}
            <div className="text-center bg-[#252B42] text-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-300">
                <i className="fas fa-map-marker-alt text-4xl"></i>
              </div>
              <div className="flex justify-center items-center">
                <MapPin className="text-blue-400 w-[51px] h-[67px]" />
              </div>

              <p className="mt-4 text-gray-200">
                georgia.young@example.com
                <br />
                georgia.young@pie.com
              </p>
              <a href="#" className="text-blue-300 hover:underline">
                Get Support
              </a>
              {/* Centered Submit Request Button */}
              <div className="flex justify-center mt-4">
                <button className="px-4 py-2 bg-blue-400 text-white border border-blue-300 rounded hover:bg-blue-800">
                  Submit Request
                </button>
              </div>
            </div>

            {/* Email Section */}
            <div className="text-center bg-white text-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-300">
                <i className="fas fa-map-marker-alt text-4xl"></i>
              </div>
              <div className="flex justify-center items-center">
                <Mail className="text-blue-400 w-[51px] h-[67px]" />
              </div>
              <p className="mt-4 text-black">
                georgia.young@example.com
                <br />
                georgia.young@pie.com
              </p>
              <a href="#" className="text-black hover:underline">
                Get Support
              </a>
              {/* Centered Submit Request Button */}
              <div className="flex justify-center mt-4">
                <button className="px-4 py-2 bg-blue-400 text-white border border-blue-300 rounded hover:bg-blue-800">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold text-gray-700">Lets Talk</h4>
          <p className="text-gray-600 mt-4">We cant wait to meet you!</p>
          <button className="px-6 py-3 mt-6 bg-blue-500 text-white rounded hover:bg-blue-600">
            Try a Free Call
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Bendage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;