/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import contact_us from "../../../../public/images/contact_us.jpg";

const ContactUsPage = () => {
  return (
    <div>
      <div className="w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${contact_us.src})`,
          }}
        ></div>
        <div className="bg-gray-100 flex items-center justify-center">
          <div
            className="w-full h-[380px] bg-primary p-8 relative flex flex-col justify-center items-center"
            style={{
              background:
                "linear-gradient(to right, rgba(0,193,241,0.5), rgba(36,31,33,0.5))",
            }}
          >
            <h1 className="text-4xl font-bold text-center text-white mb-3">
              Get in Touch
            </h1>
            <div className="bg-white h-1 w-16 mb-4"></div>
            <p className="text-lg text-gray-100 text-center mb-8">
              We're always ready to assist you. Whether you have
              <br /> questions about our products, need help with your order, or
              just want to say hello,
              <br /> we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Get in Touch with Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Phone Number */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <FaPhoneAlt className="text-4xl text-cyan-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+8801967214215</p>
              <p className="text-gray-600">24/7 service</p>
            </div>

            {/* Email */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <FaEnvelope className="text-4xl text-cyan-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">oneselfbd@gmail.com</p>
              <p className="text-gray-600">24/7 Online Support</p>
            </div>

            {/* Location */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <FaMapMarkerAlt className="text-4xl text-cyan-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Khulna, Bangladesh</p>
              <p className="text-gray-600">Visit Us Anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
