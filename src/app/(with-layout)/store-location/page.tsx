/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

const StoreLocationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#00C1F1] to-[#241F21] p-6">
      <Head>
        <title>Store Location - Khulna, Bangladesh | Your Company Name</title>
        <meta
          name="description"
          content="Find our store location in Khulna, Bangladesh"
        />
      </Head>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        {/* Map Section */}
        <div className="md:w-1/2 relative mb-8 md:mb-0">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-96 relative">
              <iframe
                className="w-full h-full rounded-t-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9861474227663!2d89.56666931537636!3d22.84564118503652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a004f97c9d5bdb1%3A0x4baf0b0a13c1670b!2sKhulna%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1645648631078!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                title="Google Map - Khulna"
              ></iframe>
              {/* Map Marker */}
              <svg
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C7.524 0 4 3.524 4 8C4 12.945 11.4 20.26 12 21C12.6 20.26 20 12.945 20 8C20 3.524 16.476 0 12 0ZM12 11C10.346 11 9 9.654 9 8C9 6.346 10.346 5 12 5C13.654 5 15 6.346 15 8C15 9.654 13.654 11 12 11Z"
                  fill="#FF0000"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-pulse">
            Our Store Location
          </h2>
          <div className="bg-white h-1 w-24 rounded mb-6"></div>
          <p className="text-lg md:text-xl text-center mb-4">
            Explore our products in person at our Khulna location in Bangladesh.
          </p>
          <p className="text-md md:text-lg text-center mb-8 italic">
            We're conveniently located at:
          </p>
          <p className="text-2xl font-bold tracking-wide mb-2">
            Khulna, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreLocationPage;
