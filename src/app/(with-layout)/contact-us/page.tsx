/* eslint-disable react/no-unescaped-entities */
"use client";
import EcButton from "@/components/EcButton/EcButton";
import { useForm } from "react-hook-form";

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div>
      <div>
        <div className="w-full relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.ibb.co/SxthxLM/2148430882.jpg')",
            }}
          ></div>
          <div className="bg-gray-100 flex items-center justify-center">
            <div
              className="w-full h-[380px] bg-white p-8 relative flex flex-col justify-center items-center"
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
                <br /> questions about our products, need help with your order,
                or just want to say hello,
                <br /> we'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact form */}
      <div className="h-full md:col-span-5 sm:col-span-12 bg-gray-100 flex items-center justify-center relative">
        <div
          className="md:w-2/6 bg-white p-8 rounded-lg shadow-lg"
          style={{ position: "relative", zIndex: "1", top: "-6rem" }}
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Your Name"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Your Email"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                placeholder="Your Message"
              ></textarea>
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <EcButton type="submit" className="w-full text-white">
                Submit
              </EcButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
