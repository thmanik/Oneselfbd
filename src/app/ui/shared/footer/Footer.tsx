"use client";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <div className="grid md:grid-cols-12 ps-16  mt-10 bg-blue-gray-100  py-8 ">
      <div className="md:col-span-3 sm:col-span-12">
        <div>Company logo</div>
        <div className="flex my-2">
          <div>
            <PhoneArrowDownLeftIcon></PhoneArrowDownLeftIcon>
          </div>
          <div>+88 0123456789</div>
        </div>
        <div className="my-2">
          <h4 className="font-bold">Contact Info</h4>
          <p>Dhaka, BanglaDesh</p>
        </div>
      </div>
      <div className="md:col-span-3 sm:col-span-12">
        <h2 className="font-bold">Find It First</h2>
        <div>
          <div className="my-1 text-gray-900">
            <a href="">Link 1</a>
          </div>
          <div className="my-1 text-gray-900">
            <a href="">Link 2</a>
          </div>
          <div className="my-1 text-gray-900">
            <a href="">Link 3</a>
          </div>
          <div className="my-1 text-gray-900">
            <a href="">Link 4</a>
          </div>
          <div className="my-1 text-gray-900">
            <a href="">Link 5</a>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 sm:col-span-12 text-gray-900">
        <div className="mt-7 mb-1 ">
          <a href="">About</a>
        </div>
        <div className="my-1">
          <a href="">Contact</a>
        </div>
        <div className="my-1">
          <a href="">Wishlist</a>
        </div>
        <div className="my-1">
          <a href="">Compare</a>
        </div>
        <div className="my-1">
          <a href="">FAQ</a>
        </div>
      </div>
      <div className="md:col-span-3 sm:col-span-12">
        <h2 className="font-bold">Customer Care</h2>
        <div className="text-gray-900">
          <div className="my-1">
            <a href="">My Account</a>
          </div>
          <div className="my-1">
            <a href="">Track Your Order</a>
          </div>
          <div className="my-1">
            <a href="">Customer Service</a>
          </div>
          <div className="my-1">
            <a href="">Returns/Exchange</a>
          </div>
          <div className="my-1">
            <a href="">Product Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
