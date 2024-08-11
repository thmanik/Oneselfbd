// components/AboutPage.tsx

import EcButton from "@/components/EcButton/EcButton";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaAward,
  FaGlobe,
  FaHandsHelping,
  FaLightbulb,
} from "react-icons/fa";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* Simplified Hero Section */}
      <section className="py-3 md:py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-4xl  font-bold mb-4">
            Welcome to oneselfbd
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mx-auto">
            Your destination for high-quality, innovative, and sustainable
            lighting solutions.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-3 md:py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl mt-3 font-semibold text-gray-600 text-center mb-4 md:mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div className="p-3 md:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaLightbulb className="text-2xl md:text-4xl text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly innovate to provide the latest in lighting
                technology and design.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaGlobe className="text-2xl md:text-4xl text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our products are designed with sustainability in mind,
                minimizing environmental impact.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaHandsHelping className="text-2xl md:text-4xl text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize our customers, offering top-notch service and
                products tailored to their needs.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaAward className=" text-2xl md:text-4xl text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering only the highest quality products
                to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" py-6 md:py-12 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Illuminate Your Space Today
          </h2>
          <p className="text-md md:text-xl mb-4">
            Discover our range of innovative lighting solutions designed to
            brighten your home and enhance your lifestyle.
          </p>
          <div className="text-center">
            <Link href="/shop">
              <EcButton className="text-white">
                Shop Now <FaArrowRight className="ms-2" />
              </EcButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
