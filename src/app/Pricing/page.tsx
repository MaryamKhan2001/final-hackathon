
import React from "react";

const Pricing: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Bandage</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="/productui" className="text-gray-600 hover:text-blue-600">
              Product
            </a>
            <a href="/Pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="/Contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </nav>
          <div className="space-x-2">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Login
            </a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Become a Member
            </a>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-gray-600 mb-8">
            Problems trying to resolve the conflict between the two major realms
            of classical physics: Newtonian mechanics.
          </p>
          <div className="inline-flex bg-gray-200 rounded-full p-1 mb-8">
            <button className="px-6 py-2 bg-white rounded-full shadow">
              Monthly
            </button>
            <button className="px-6 py-2 text-gray-600">
              Yearly <span className="text-green-600">(Save 20%)</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Free Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">FREE</h3>
            <p className="text-gray-600 mb-4">Organize across all apps by hand</p>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="text-gray-600 mb-4">
              <li>✔ Unlimited product updates</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Choose Plan
            </button>
          </div>
          {/* Standard Plan */}
          <div className="bg-[#252B42] text-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">STANDARD</h3>
            <p className="text-gray-200 mb-4">
              Organize across all apps by hand
            </p>
            <p className="text-4xl font-bold mb-4">
              $9.99 <span className="text-lg font-normal">/mo</span>
            </p>
            <ul className="text-gray-200 mb-4">
              <li>✔ Unlimited product updates</li>
            </ul>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md">
              Choose Plan
            </button>
          </div>
          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">PREMIUM</h3>
            <p className="text-gray-600 mb-4">Organize across all apps by hand</p>
            <p className="text-4xl font-bold mb-4">
              $19.99 <span className="text-lg font-normal">/mo</span>
            </p>
            <ul className="text-gray-600 mb-4">
              <li>✔ Unlimited product updates</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>Trusted by over 4000 big companies</p>
        </div>
      </footer>
      <div className="bg-gray-50 text-gray-800">
      {/* Logo Section */}
      <div className="flex justify-center gap-6 py-8">
        <img src="/hooli.png" alt="Logo 1" className="h-8" />
        <img src="/lyft.png" alt="Logo 2" className="h-8" />
        <img src="/leaf.png" alt="Logo 3" className="h-8" />
        <img src="/stripe.png" alt="Logo 4" className="h-8" />
        <img src="/aws.png" alt="Logo 5" className="h-8" />
        <img src="/robot.png" alt="Logo 6" className="h-8" />
      </div>

      {/* Pricing FAQs Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Pricing FAQs</h2>
        <p className="text-gray-600 mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg">The quick fox jumps over the lazy dog</h3>
                <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, voluptate.
                </p>
              </div>
            ))}
        </div>

        {/* Contact Support */}
        <p className="mt-8 text-gray-600">
          Havent got your answer?{' '}
          <a href="#" className="text-blue-500 underline">
            Contact our support
          </a>
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Start your 14 days free trial</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">
            Try it free now
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="#">
            <img src="twitter.png" alt="Twitter" className="h-6" />
          </a>
          <a href="#">
            <img src="facebook.png" alt="Facebook" className="h-6" />
          </a>
          <a href="#">
            <img src="insta.png" alt="Instagram" className="h-6" />
          </a>
          <a href="#">
            <img src="linkedin.png" alt="LinkedIn" className="h-6" />
          </a>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Pricing;