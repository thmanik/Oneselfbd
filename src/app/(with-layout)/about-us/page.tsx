/* eslint-disable react/no-unescaped-entities */
// pages/about.tsx

import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Illuminate your world with Oneselfbd
          </p>
        </div>
        <div className="text-lg text-gray-700">
          <p>
            Welcome to Oneselfbd, where we are passionate about illuminating
            spaces and enriching lives with our innovative products and
            unparalleled service.
          </p>
          <p className="mt-4">
            Our journey began in [year] with a vision to revolutionize the
            lighting industry. Since then, we have been committed to providing
            our customers with the finest selection of bulbs and lighting
            fixtures, carefully curated to meet every style and need.
          </p>
          <p className="mt-4">
            At Oneselfbd, we believe in quality, innovation, and sustainability.
            That's why we strive to offer products that not only meet the
            highest standards of performance and reliability but also contribute
            to a greener, more sustainable future.
          </p>
          <p className="mt-4">
            Whether you're looking to brighten your home, office, or commercial
            space, we have the perfect lighting solution for you. Explore our
            collection, and let us help you illuminate your world.
          </p>
          <p className="mt-8">
            Thank you for choosing Oneselfbd. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
