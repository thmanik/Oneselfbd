/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useCheckWarrantyQuery } from "@/redux/features/api/apiSlice";
import React, { useEffect, useState } from "react";
import ProductTable from "../productsTable/ProductsTable";

type Product = {
  _id: string;
  orderId: string;
  products: ProductItem[];
};

type ProductItem = {
  _id: string;
  productId: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };

  warranty: {
    duration: string;
    startDate: string;
    endsDate: string;
    warrantyCodes: { code: string }[];
  } | null;
  unitPrice: number;
  quantity: number;
};

const SearchProduct = () => {
  const [warrantyCodes, setWarrantyCodes] = useState<string[]>([]);
  const [newWarrantyCode, setNewWarrantyCode] = useState("");
  const [orderedPhoneNumber, setOrderedPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notFoundProducts, setNotFoundProducts] = useState<string[]>([]);
  const [searched, setSearched] = useState(false);
  const [phoneNumberChanged, setPhoneNumberChanged] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWarrantyCode(event.target.value);
  };

  const handleAddCode = () => {
    if (newWarrantyCode.trim() !== "") {
      if (warrantyCodes.includes(newWarrantyCode.trim())) {
        setError("দুঃখিত, এই ওয়ারেন্টি কোডটি ইতিমধ্যে যুক্ত করা হয়েছে");
        return;
      }
      setWarrantyCodes([...warrantyCodes, newWarrantyCode.trim()]);
      setNewWarrantyCode("");
    }
  };

  const handleRemoveCode = (index: number) => {
    setWarrantyCodes(warrantyCodes.filter((_, i) => i !== index));

    // Check if the orderedPhoneNumber length is less than 11 after removing digits
    if (orderedPhoneNumber.length < 11) {
      setSearched(false); // Reset searched state to false
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value.trim();
    setOrderedPhoneNumber(phoneNumber);
    setPhoneNumberChanged(true); // Set the state to true when the phone number is changed

    if (phoneNumber.length !== 11) {
      setPhoneNumberError("ফোন নম্বর ১১ টি সংখ্যা হতে হবে");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (warrantyCodes.length === 0) {
      setError("পন্যের ওয়ারেন্টি কোডগুলি লিখুন");
      return;
    } else {
      setError("");
    }

    if (orderedPhoneNumber.length !== 11) {
      setPhoneNumberError("অর্ডারকৃত ফোন নম্বরটি লিখুন");
      return;
    }

    setSearched(true);
  };

  const {
    data: searchResultData,
    isLoading,
    isError,
    refetch,
  } = useCheckWarrantyQuery(
    {
      phoneNumber: orderedPhoneNumber,
      warrantyCodes: warrantyCodes,
    },
    { skip: !searched || orderedPhoneNumber.length < 11 } // Skip the API call if the phone number digits are less than 11
  );

  useEffect(() => {
    if (searched && !isError) {
      if (searchResultData) {
        if (searchResultData.data.length === 0) {
          setError("কোনো তথ্য পাওয়া যায়নি");
          setNotFoundProducts([]);
        } else {
          const foundCodes: string[] = [];
          searchResultData.data.forEach((order: Product) => {
            order.products.forEach((product: ProductItem) => {
              if (product.warranty) {
                product.warranty.warrantyCodes.forEach((code) => {
                  foundCodes.push(code.code);
                });
              }
            });
          });
          const notFound = warrantyCodes.filter(
            (code) => !foundCodes.includes(code)
          );
          setNotFoundProducts(notFound);
          setError(notFound.length > 0 ? "এই ওয়ারেন্টি কোডগুলি সঠিক নয়" : null);
        }
      } else {
        setNotFoundProducts([]);
        setError("");
      }
    }
  }, [searched, isError, searchResultData, warrantyCodes]);

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
                  className="appearance-none outline-none border border-gray-300 rounded-l-md py-2 px-3 focus:ring-0 w-full
                  h-12"
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
              <div className="flex flex-wrap gap-2 mt-2">
                {warrantyCodes.map((code, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-full flex items-center py-1 px-3"
                  >
                    <span className="mr-2">{code}</span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveCode(index)}
                      aria-label={`Remove ${code}`}
                    >
                      &#10005;
                    </button>
                    {notFoundProducts.includes(code) && (
                      <p className="text-red-500 text-sm ml-2">
                        এই ওয়ারেন্টি কোডটি সঠিক নয়
                      </p>
                    )}
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
                onChange={handlePhoneNumberChange}
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

        {isLoading && <p>Loading...</p>}
        {isError && !notFoundProducts.length && <p>Internal Server Error</p>}

        {/* Render the table with error message and not found products */}
        <div className="text-center w-full mt-5">
          {/* Render the error message above the table if there are notFoundProducts */}
          {notFoundProducts.length > 0 && (
            <p className="text-red-500 text-sm mb-4">
              এই ওয়ারেন্টি কোডগুলি সঠিক নয়:{" "}
              {notFoundProducts.map((code, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ", "}
                  {code}
                </React.Fragment>
              ))}
            </p>
          )}

          <ProductTable
            searchResult={searchResultData?.data || []}
            notFoundProducts={notFoundProducts}
            error={error}
          />
        </div>

        {/* Display not found products */}
        <div className="my-10">
          {/* Render the error message below the table if there are no notFoundProducts */}
          {!notFoundProducts.length && error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {notFoundProducts.length > 0 && (
            <ProductTable
              searchResult={[]}
              notFoundProducts={notFoundProducts}
              error={error}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
