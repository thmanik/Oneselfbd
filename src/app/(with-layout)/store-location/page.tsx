/* eslint-disable react/no-unescaped-entities */
import {
  FaFacebook,
  FaHeadset,
  FaUsers,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const StoreLocationPage = () => {
  return (
    <div className="min-h-screen  bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[150px] md:h-[250px] bg-gradient-to-r from-[#00C1F1] to-[#005F73] text-white shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg animate-pulse">
            Welcome to Our Store
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover a world of quality products!
          </p>
        </div>
      </section>

      {/* Store Info and Map Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto flex flex-col md:flex-row gap-12">
          {/* Map Section */}
          <div className="md:w-1/2 relative mb-8 md:mb-0">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className=" h-96 min-h-[200px] md:min-h-[425px] relative">
                <iframe
                  className="w-full h-full rounded-t-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9861474227663!2d89.56666931537636!3d22.84564118503652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a004f97c9d5bdb1%3A0x4baf0b0a13c1670b!2sKhulna%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1645648631078!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                  title="Google Map - Khulna"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Store Info */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-center ">
              <h2 className="text-2xl md:text-4xl text-gray-700 font-extrabold mb-2 ">
                Our Store Location
              </h2>
              <div className="bg-gray-300 h-1 w-24 rounded mb-3"></div>
              <p className="text-md text-gray-500 md:text-lg text-center mb-2">
                Explore our products in person at our Khulna location in
                Bangladesh.
              </p>
              <p className="text-md md:text-lg text-center text-gray-500 mb-2 italic">
                We're conveniently located at:
              </p>
              <p className=" text-md font-bold text-gray-600 tracking-wide mb-2">
                Khulna, Bangladesh
              </p>
              <h3 className="text-md md:text-xl font-semibold text-gray-600 mb-2">
                Helpline:
              </h3>
              <a
                href="tel:+8801967214215"
                className="flex items-center justify-center space-x-3 hover:text-blue-600 transition-all duration-300"
              >
                <div className="flex items-center bg-[#00C1F1] text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition">
                  <FaHeadset className="mr-2 mt-1 text-2xl md:text-3xl animate-bounce" />
                  <p className="text-md md:text-xl">+88 01967214215</p>
                </div>
              </a>

              <h2 className="text-md md:text-xl font-semibold mt-8 mb-4 text-center">
                Follow Us on Social Media
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-6 justify-center">
                <a
                  href="https://www.facebook.com/oneselfbd?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-4xl text-blue-600 hover:text-blue-700 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook title="Facebook Page" />
                </a>
                <a
                  href="http://wa.me/8801967214215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-4xl text-green-500 hover:text-green-600 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp title="WhatsApp" />
                </a>
                <a
                  href="https://www.facebook.com/groups/1246098009387414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-4xl text-blue-600 hover:text-blue-700 transition"
                  aria-label="Facebook Group"
                >
                  <FaUsers title="Facebook Group" />
                </a>
                <a
                  href="https://www.youtube.com/@oneselfbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl md:text-4xl text-red-600 hover:text-red-700 transition"
                  aria-label="YouTube"
                >
                  <FaYoutube title="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
    </div>
  );
};

export default StoreLocationPage;
