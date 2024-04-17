/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

const StoreLocationPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(to right, #00C1F1, #241F21)" }}
    >
      <Head>
        <title>Store Location - Banani, Dhaka | Your Company Name</title>
        <meta
          name="description"
          content="Find our store location in Banani, Dhaka"
        />
      </Head>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 relative">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 relative">
              <iframe
                className="w-full h-full rounded-t-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1068784985886!2d90.40931291538688!3d23.79314419438346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c717ea0e986b%3A0x5a5e160acef94391!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1645648631078!5m2!1sen!2sbd"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
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
        <div className="md:w-1/2 mt-8 md:mt-0 text-white flex flex-col justify-center items-center">
          <h2 className=" text-3xl md:text-5xl font-bold mb-4">
            Our Store Location
          </h2>
          <div className="bg-white h-1 w-16 mb-4"></div>
          <p className="text-xl text-center mb-4">
            Explore our products in person at our Banani location in Dhaka,
            Bangladesh.
          </p>
          <p className="text-lg text-center mb-8">
            We're conveniently located at:
          </p>
          <p className="text-2xl font-bold">456 Store Avenue</p>
          <p className="text-lg mb-4">Banani, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default StoreLocationPage;
