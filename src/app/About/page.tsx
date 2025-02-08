import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const About: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-lg font-bold">Bandage</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-blue-500">
            Home
          </a>
          <a href="/Product" className="text-gray-600 hover:text-blue-500">
            Product
          </a>
          <a href="/Pricing" className="text-gray-600 hover:text-blue-500">
            Pricing
          </a>
          <a href="/Contact" className="text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </nav>
        <div className="flex space-x-4 items-center">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Become a Member
          </a>
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
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-16 px-6 lg:px-32 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-blue-500 uppercase font-semibold mb-2">
              About Company
            </h3>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              We know how large objects will act but things on a small scale.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
              Get Quote Now
            </button>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/background.png"
              alt="Shopping Lady"
              width={1440}
              height={719}
              className="rounded-lg w-full h-auto max-h-[500px] sm:max-h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 px-6 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-red-500 font-semibold -mt-10 mb-2">Problems trying</h3>
            <p className="text-gray-600 font-bold">
              Met minim Mollie non desert <br />Alamo est sit cliquey dolor do <br /> met
              sent.
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12 px-6 lg:px-32">
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-8">
          {[{ title: "15K", subtitle: "Happy Customers" }, { title: "150K", subtitle: "Monthly Visitors" }, { title: "15", subtitle: "Countries Worldwide" }, { title: "100+", subtitle: "Top Partners" }].map((stat, index) => (
            <div key={index}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.title}</h2>
              <p className="text-gray-600">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 lg:px-32">
        <div className="text-center">
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <Image
              src="/scapeland.png"
              alt="Video Thumbnail"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 transition">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6V4z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-32 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ name: "Jessica", role: "Web Developer", img: "/yellow.png" }, { name: "Emily", role: "UI Designer", img: "/red.jpg" }, { name: "Chris", role: "Product Manager", img: "/sweatshirt.jpg" }].map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="h-[150px] w-[150px] mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Facebook
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  Twitter
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-800">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-gray-100 py-16 px-6 lg:px-32 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Big Companies Are Here</h2>
        <p className="text-gray-600 mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics.
        </p>
        <div className="flex justify-center gap-[30px] py-8 flex-wrap">
          <img src="/hooli.png" alt="Logo 1" className="h-8" />
          <img src="/lyft.png" alt="Logo 2" className="h-8" />
          <img src="/leaf.png" alt="Logo 3" className="h-8" />
          <img src="/stripe.png" alt="Logo 4" className="h-8" />
          <img src="/aws.png" alt="Logo 5" className="h-8" />
          <img src="/robot.png" alt="Logo 6" className="h-8" />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-6 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="bg-[#2A7CC7] text-white p-8 rounded-lg flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold">Work With Us</h3>
            <h2 className="text-3xl font-bold mt-2">Now Lets Grow Yours</h2>
            <p className="text-white text-opacity-80 mt-4">
              The gradual accumulation of information about atomic and small scale behaviour...
            </p>
            <button className="bg-white text-blue-500 px-6 py-3 mt-6 rounded hover:bg-gray-100">
              Get Started
            </button>
          </div>

          <div className="flex justify-center items-center h-full">
            <Image
              src="/pinki.png" // Replace with your image path
              alt="Feature Image"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;