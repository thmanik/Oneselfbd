/* eslint-disable react/no-unescaped-entities */
"use client";
import { useCheckWarrantyQuery } from "@/redux/features/warrantyApi/warrantyApiSlice";
import React, { useEffect, useState } from "react";
import { Product, ProductItem } from "../commonTypes/CommonTypes";
import ProductTable from "../productsTable/ProductsTable";

type ApiError = {
  data?: {
    errorMessages?: {
      path: string;
      message: string;
    }[];
  };
};

const SearchProduct = () => {
  const [warrantyCodes, setWarrantyCodes] = useState<string[]>([]);
  const [newWarrantyCode, setNewWarrantyCode] = useState("");
  const [orderedPhoneNumber, setOrderedPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [notFoundProducts, setNotFoundProducts] = useState<string[]>([]);
  const [searched, setSearched] = useState<boolean>(false);

  const [validCodes, setValidCodes] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWarrantyCode(event.target.value);
  };

  const handleAddCode = () => {
    if (newWarrantyCode?.trim() !== "") {
      if (warrantyCodes?.includes(newWarrantyCode?.trim())) {
        setError("দুঃখিত, এই ওয়ারেন্টি কোডটি ইতিমধ্যে যুক্ত করা হয়েছে");
        return;
      }
      setWarrantyCodes([...warrantyCodes, newWarrantyCode?.trim()]);
      setNewWarrantyCode("");
    }
  };

  const handleRemoveCode = (index: number) => {
    setWarrantyCodes(warrantyCodes?.filter((_, i) => i !== index));

    if (orderedPhoneNumber?.length < 11) {
      setSearched(false);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value.trim();

    if (!/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError("ফোন নম্বর অবশ্যই সংখ্যার অংশ হতে হবে");
      setOrderedPhoneNumber(phoneNumber);
      return;
    }

    setOrderedPhoneNumber(phoneNumber);
    setPhoneNumberError("");

    if (phoneNumber?.length !== 11) {
      setPhoneNumberError("ফোন নম্বর ১১ টি সংখ্যা হতে হবে");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (warrantyCodes?.length === 0) {
      setError("পন্যের ওয়ারেন্টি কোডগুলি লিখুন");
      return;
    }

    if (orderedPhoneNumber?.length !== 11) {
      setPhoneNumberError("অর্ডারকৃত ফোন নম্বরটি লিখুন");
      return;
    }

    setSearched(true);
  };

  const shouldSkipApiCall =
    !searched || phoneNumberError !== "" || orderedPhoneNumber?.length < 11;

  const {
    data: searchResultData,
    isLoading,
    isError,
    error: apiError,
  } = useCheckWarrantyQuery(
    {
      phoneNumber: orderedPhoneNumber,
      warrantyCodes: warrantyCodes,
    },
    { skip: shouldSkipApiCall }
  );

  useEffect(() => {
    if (searched && !isError && searchResultData) {
      const foundCodes: string[] = [];
      const invalidCodes: string[] = [];
      if (searchResultData?.data?.length === 0) {
        setError("কোনো তথ্য পাওয়া যায়নি");
        setNotFoundProducts([]);
      }
      // Iterate through the data and match warranty codes
      searchResultData?.data?.forEach((order: Product) => {
        order?.products?.forEach((product: ProductItem) => {
          if (product?.warranty) {
            product?.warranty?.warrantyCodes?.forEach((code) => {
              // If the warranty code is valid, add it to foundCodes
              if (warrantyCodes.includes(code.code)) {
                foundCodes.push(code.code);
              } else {
                // If it's invalid, add it to invalidCodes
                invalidCodes.push(code.code);
              }
            });
          }
        });
      });

      // Update the state with all valid codes
      setValidCodes(foundCodes);

      // Set the not found products (for invalid codes)
      setNotFoundProducts(
        warrantyCodes.filter((code) => !foundCodes.includes(code))
      );

      // Handle valid and invalid codes
      if (foundCodes.length > 0) {
        // If valid codes are found, don't show an error message
        setError("");
      } else if (invalidCodes.length > 0) {
        // If no valid codes found, show error message
        setError("এই কোডগুলির সাথে মিল নেই: " + invalidCodes.join(", "));
      }
    } else {
      // Reset error and not found products if search result is empty or has an error
      setNotFoundProducts([]);
      setError("");
    }

    // Handle API error if occurs
    if (isError && apiError) {
      const errorMessage =
        (apiError as ApiError).data?.errorMessages?.[0]?.message ||
        "Unknown error";
      setError(errorMessage);
    }
  }, [searched, isError, searchResultData, warrantyCodes, apiError]);

  // useEffect(() => {
  //   if (searched && !isError && searchResultData) {
  //     const foundCodes: string[] = [];
  //     const invalidCodes: string[] = [];
  //     let adjustedQuantity = 0;

  //     // Iterate through the data and match warranty codes
  //     searchResultData?.data?.forEach((order: Product) => {
  //       order?.products?.forEach((product: ProductItem) => {
  //         if (product?.warranty) {
  //           product?.warranty?.warrantyCodes?.forEach((code) => {
  //             // If the warranty code is valid, add it to foundCodes
  //             if (warrantyCodes.includes(code.code)) {
  //               foundCodes.push(code.code);
  //               adjustedQuantity += 1; // Increase quantity for valid codes
  //             } else {
  //               // If it's invalid, add it to invalidCodes
  //               invalidCodes.push(code.code);
  //             }
  //           });
  //         }
  //       });
  //     });

  //     // Update the state with all valid codes
  //     setValidCodes(foundCodes);

  //     // Set the quantity and the not found products (for invalid codes)
  //     setQuantity(adjustedQuantity);
  //     setNotFoundProducts(
  //       warrantyCodes.filter((code) => !foundCodes.includes(code))
  //     );

  //     // Handle valid and invalid codes
  //     if (foundCodes.length > 0) {
  //       // If valid codes are found, don't show an error message
  //       setError("");
  //     } else if (invalidCodes.length > 0) {
  //       // If no valid codes found, show error message
  //       setError("এই কোডগুলির সাথে মিল নেই: " + invalidCodes.join(", "));
  //     } else {
  //       // If there are no codes at all, handle it as an error
  //       setError("এই ওয়ারেন্টি কোডগুলি সঠিক নয়");
  //     }
  //   } else {
  //     // Reset error and not found products if search result is empty or has an error
  //     setNotFoundProducts([]);
  //     setError("");
  //   }

  //   // Handle API error if occurs
  //   if (isError && apiError) {
  //     const errorMessage =
  //       (apiError as ApiError).data?.errorMessages?.[0]?.message ||
  //       "Unknown error";
  //     setError(errorMessage);
  //   }
  // }, [searched, isError, searchResultData, warrantyCodes, apiError]);

  return (
    <div className="flex justify-center items-center my-10 mx-2 md:my-20">
      <div className="text-center w-full">
        <div className="mb-8 w-full md:w-2/3 mx-auto">
          <h1 className="xms:text-lg xls:text-lg sm:text-xl md:text-4xl font-bold text-gray-800 mb-4">
            আপনার পন্য নির্বাচন করুন
          </h1>
          <p className="text-gray-700 xms:text-xs xls:text-xs sm:text-sm md:text-lg mx-5">
            পন্যের গায়ে থাকা ওয়ারেন্টি কোড দিয়ে পন্য বাছাই করুন
          </p>
        </div>

        <form className="w-full md:w-[97%] m-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-4">
            <div>
              <label
                className="block text-gray-700 text-left text-sm font-bold mb-2"
                htmlFor="warrantyCode"
              >
                পন্যের ওয়ারেন্টি কোড -(ওয়ারেন্টি কোড এড করতে প্রতিটি ওয়ারেন্টি
                কোড লিখে একবার করে "Add" বাটনে ক্লিক করুন )
              </label>
              <div className="flex">
                <input
                  value={newWarrantyCode}
                  onChange={handleInputChange}
                  className="appearance-none outline-none border border-gray-300 rounded-l-md py-2 px-3 focus:ring-0 w-full sm:h-5 md:h-12"
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
                    <span className="mr-2 xms:text-xs xls:text-xs sm:text-sm md:text-sm">
                      {code}
                    </span>
                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveCode(index)}
                      aria-label={`Remove ${code}`}
                    >
                      &#10005;
                    </button>
                    {notFoundProducts.includes(code) && (
                      <p className="text-red-500 xms:text-[9px] xls:text-[9px] sm:text-xs ml-2">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:h-5 md:h-12"
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

          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="bg-blue-500 xls:text-xs sm:text-sm md:text-lg text-white rounded-md py-2 px-2 md:px-4 hover:bg-blue-600"
            >
              অনুসন্ধান করুন
            </button>
          </div>
        </form>

        {isLoading && <p>Loading...</p>}

        {/* <div className="text-center w-full mt-2">
          {notFoundProducts?.length > 0 && (
            <p className="text-red-500">{` কোডগুলি সঠিক নয়: ${notFoundProducts.join(
              ", "
            )}`}</p>
          )} */}

        {/* </div> */}
        {error && <p className="text-red-500">{error}</p>}
        {searched && !isLoading && !error && (
          <ProductTable
            searchResult={searchResultData?.data || []}
            notFoundProducts={notFoundProducts}
            error={error}
            validCodes={validCodes}
          />
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
