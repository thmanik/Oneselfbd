"use client";
/* eslint-disable no-console */
import React, { useState } from "react";
import ProductTable from "../productsTable/ProductsTable";

type Product = {
  orderedPhoneNumber: string;
  warrantyCode: string;
  image: string;
  productName: string;
  price: number;
  quantity: number;
  warrantyDate: string;
  subtotal: number;
};

const SearchProduct = () => {
  const [warrantyCodes, setWarrantyCodes] = useState<string[]>([]);
  const [newWarrantyCode, setNewWarrantyCode] = useState("");
  const [orderedPhoneNumber, setOrderedPhoneNumber] = useState("");
  const [warrantyCodeError, setWarrantyCodeError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const [notFoundProducts, setNotFoundProducts] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWarrantyCode(event.target.value);
  };

  // Function to add warranty code
  const handleAddCode = () => {
    if (newWarrantyCode.trim() !== "") {
      setWarrantyCodes([...warrantyCodes, newWarrantyCode.trim()]);
      setNewWarrantyCode("");
    }
  };

  // Function to remove warranty code
  const handleRemoveCode = (index: number) => {
    setWarrantyCodes(warrantyCodes.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if warranty codes are provided
    if (warrantyCodes.length === 0) {
      setWarrantyCodeError("পন্যের ওয়ারেন্টি কোডগুলি লিখুন");
      return;
    } else {
      setWarrantyCodeError("");
    }

    // Check if ordered phone number is provided
    if (!orderedPhoneNumber.trim()) {
      setPhoneNumberError("অর্ডারকৃত ফোন নম্বরটি লিখুন");
      return;
    } else {
      setPhoneNumberError("");
    }

    const data: Product[] = [
      {
        image: "/images/day-night-sensor/day_night_1.jpg",
        price: 49.99,
        quantity: 2,
        warrantyDate: "2024-08-01",
        subtotal: 99.98,
        orderedPhoneNumber: "01631205714",
        warrantyCode: "575757",
        productName: "Daynight sensor",
      },
      {
        image: "/images/day-night-sensor/day_night_2.jpg",
        price: 29.99,
        quantity: 1,
        warrantyDate: "2024-09-15",
        subtotal: 29.99,
        orderedPhoneNumber: "01631205714",
        warrantyCode: "585858",
        productName: "day night sensor",
      },
    ];

    // Filter search results based on provided data
    const foundProducts: Product[] = [];
    const notFound: string[] = [];

    warrantyCodes.forEach((code) => {
      const product = data.find(
        (p) =>
          p.warrantyCode === code && p.orderedPhoneNumber === orderedPhoneNumber
      );
      if (product) {
        foundProducts.push(product);
      } else {
        notFound.push(code);
      }
    });

    // Update search results or show error message
    if (foundProducts.length > 0) {
      setSearchResult(foundProducts);
    }
    if (notFound.length > 0) {
      setNotFoundProducts(notFound);
    } else {
      setError("");
    }
  };

  return (
    <div className="flex justify-center items-center my-10 md:my-20">
      <div className="text-center w-full">
        <div className="mb-8 w-full md:w-2/3 mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            আপনার পন্য নির্বাচন করুন
          </h1>
          <p className="text-gray-700 text-md md:text-lg mx-5">
            পন্যের প্যাকেটের গায়ে থাকা ওয়ারেন্টি কোড দিয়ে পন্য বাছাই করুন
          </p>
        </div>

        <form className="w-[85%] ms:w-[97%] m-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
            <div>
              <label
                className="block text-gray-700 text-left text-sm font-bold mb-2"
                htmlFor="warrantyCode"
              >
                পন্যের ওয়ারেন্টি কোড -
              </label>
              <div className="flex">
                <input
                  value={newWarrantyCode}
                  onChange={handleInputChange}
                  className="appearance-none outline-none border border-gray-300 rounded-l-md py-2 px-3 focus:ring-0 w-full h-12"
                  id="warrantyCode"
                  type="text"
                  placeholder="প্যাকেটের গায়ে থাকা ওয়ারেন্টি কোডটি লিখুন"
                  style={{ fontSize: "0.9rem" }}
                />
                <button
                  className="bg-blue-500 text-white rounded-r-md py-2 px-4 hover:bg-blue-600"
                  onClick={handleAddCode}
                  type="button"
                >
                  Add
                </button>
              </div>
              {warrantyCodeError && (
                <p className="text-red-500 text-sm">{warrantyCodeError}</p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {warrantyCodes.map((code, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-full px-3 py-1 flex items-center"
                  >
                    <span className="mr-2">{code}</span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveCode(index)}
                      aria-label={`Remove ${code}`}
                    >
                      &#10005;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label
                className="block text-gray-700 text-left text-sm font-bold mb-2"
                htmlFor="orderedPhoneNumber"
              >
                অডারকৃত মোবাইল নম্বর-
              </label>
              <input
                value={orderedPhoneNumber}
                onChange={(e) => {
                  setOrderedPhoneNumber(e.target.value);
                  setPhoneNumberError("");
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
                id="orderedPhoneNumber"
                type="text"
                placeholder="অর্ডারকৃত ফোন নম্বরটি লিখুন"
                style={{ fontSize: "0.9rem" }}
              />
              {phoneNumberError && (
                <p className="text-red-500 text-sm">{phoneNumberError}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
            >
              অনুসন্ধান করুন
            </button>
          </div>
        </form>

        {/* Display search result or error */}
        <ProductTable
          searchResult={searchResult}
          notFoundProducts={notFoundProducts}
          error={error}
        />
      </div>
    </div>
  );
};

export default SearchProduct;
