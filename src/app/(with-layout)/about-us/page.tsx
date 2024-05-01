/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full p-8 bg-white ">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-700 mt-2">
            Illuminate your life with our customized lighting solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="flex items-center justify-center md:order-first lg:order-first relative">
            <div className=" relative">
              <div
                className="absolute inset-0 rounded-sm"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,193,241,0.3), rgba(36,31,33,0.3))",
                }}
              ></div>
              <Image
                width={600}
                height={400}
                className="rounded-lg"
                src="/images/about_us.jpg"
                alt="Founder"
              />
            </div>
          </div>

          <div className="text-lg text-gray-800 leading-relaxed md:order-last lg:order-last">
            <p>
              Welcome to <span>Oneself</span>, where we are passionate about
              illuminating spaces and enriching lives with our innovative
              products and unparalleled service.
            </p>

            <p className="mt-4">
              At <span>Oneself</span>, we believe in quality, innovation, and
              sustainability. That's why we strive to offer products that not
              only meet the highest standards of performance and reliability but
              also contribute to a greener, more sustainable future.
            </p>
            <p className="mt-4">
              Whether you're looking to brighten your home, office, or
              commercial space, we have the perfect lighting solution for you.
              Explore our collection, and let us help you illuminate your world.
            </p>
            <p className="mt-8">
              Thank you for choosing <span>Oneself</span>. We look forward to
              serving you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
