"use client";
import React, { useState } from "react";

const SearchProduct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/products?search=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.products);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="container p-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl  font-bold text-gray-700">
            আপনার পন্য নির্বাচন করুন
          </h1>
          <p className="text-gray-600 md:text-lg ">
            পন্যের প্যাকেটের গায়ে থাকা ওয়ারেন্টি কোড দিয়ে পন্য বাছাই করুন
          </p>
        </div>
        {/* Search Bar */}
        <div className="flex justify-center items-center">
          <div className="w-full sm:w-2/4 flex overflow-hidden rounded-full">
            <input
              type="search"
              className="p-5 w-full sm:w-[90%] outline-none border-2 rounded-full rounded-r-none border-r-0 border-secondary h-[45px]"
              placeholder="প্যাকেটের গায়ে থাকা ওয়ারেন্টি কোডটি লিখুন"
              value={searchQuery}
              onChange={handleInputChange}
              name="searchValue"
            />
            <button
              onClick={handleSearch}
              className="font-bold w-[10%] sm:w-[10%] flex justify-center items-center bg-secondary h-[45px] text-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="w-6 h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="flex justify-center items-center my-8">
          <div className="border  border-gray-300 rounded-lg flex justify-center items-center  w-full md:w-[1030px] h-auto md:h-[360px]">
            <div className=" w-full md:w-auto mb-5">
              {loading ? (
                <p className="text-center text-gray-700">Loading...</p>
              ) : searchResults.length > 0 ? (
                searchResults.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                  >
                    {/* Product Image */}
                    <div className="h-64 md:h-[300px] bg-gray-300"></div>
                    {/* Product Details */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{product}</h3>
                      <p className="text-gray-700">{product}</p>
                      <div className="mt-4 flex justify-between items-center">
                        {/* Add to Cart button or other actions */}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center  text-gray-700 mt-8">
                  কোনো পন্য পাওয়া যায়নি!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
