"use client";

import config from "@/config/config";
import { useFindSearchProductQuery } from "@/redux/features/searchProduct/searchProuctApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegUser, FaSearch, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import CartData from "./CartData";
import { ApiResponse, Product } from "./searchProductType/SearchProductType";

const isApiResponse = (response: unknown): response is ApiResponse => {
  return (
    typeof response === "object" &&
    response !== null &&
    "success" in response &&
    "data" in response
  );
};

const CartLinksAndAccount = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useFindSearchProductQuery<ApiResponse>(searchValue, {
    skip: !searchValue.trim(),
  });

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/shop?search=${encodeURIComponent(searchValue)}`);
    setIsSearchVisible(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setShowSuggestions(true);
  };

  const handleProductClick = (productId: string): void => {
    router.push(`/product/${productId}`);
    setShowSuggestions(false);
    setIsSearchVisible(false);
  };

  let products: Product[] = [];

  if (isApiResponse(searchResults)) {
    products = searchResults.data;
  }

  return (
    <>
      {isSmallScreen ? (
        <>
          <FaSearch
            className="w-6 h-6 cursor-pointer"
            onClick={toggleSearchBar}
          />
          <form
            onSubmit={handleSearchSubmit}
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center transition-opacity duration-300 ${
              isSearchVisible
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`bg-primary p-4 rounded-md flex items-center w-full max-w-md mx-auto transition-transform duration-300 transform ${
                isSearchVisible ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 rounded border pr-10"
                  name="searchValue"
                  value={searchValue}
                  onChange={handleInputChange}
                  onFocus={() => setShowSuggestions(true)}
                />
                <button className="absolute right-2 top-2" type="submit">
                  <FaSearch className="w-7 h-7 p-1 bg-primary text-white" />
                </button>
              </div>
              {showSuggestions && searchValue.trim() !== "" && (
                <div className="absolute mt-0.5 top-full left-1/2 transform -translate-x-1/2 w-[95%]  max-w-md bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-y-auto max-h-60">
                  {isLoading && <p className="p-2">Loading...</p>}

                  {!isLoading && !isError && products.length > 0 ? (
                    products.map((product: Product) => (
                      <div
                        key={product._id}
                        className="flex items-center px-2 py-0.5 md:px-2 md:py-2 border-b border-gray-200 last:border-0  cursor-pointer  "
                        onClick={() => handleProductClick(product._id)}
                      >
                        <Image
                          width={55}
                          height={55}
                          src={`${config.base_url}/${product.thumbnail?.src}`}
                          alt={product.thumbnail?.alt}
                          className="suggestion-image"
                        />
                        <div className="ml-2">
                          <p className="text-sm font-semibold">
                            {product.title}
                          </p>
                          <div>
                            {product.salePrice ? (
                              <>
                                <span className="text-muted text-xs">
                                  &#2547;
                                  <del>
                                    {product.price && product.regularPrice}
                                  </del>
                                </span>
                                <span className="font-bold ">
                                  {" "}
                                  &#2547;{product.salePrice}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="font-bold">
                                  &#2547;{product.regularPrice}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="p-2">No results found.</p>
                  )}
                </div>
              )}
              <FaTimes
                className="w-6 h-6 cursor-pointer text-white ml-2"
                onClick={toggleSearchBar}
              />
            </div>
          </form>
        </>
      ) : (
        <Link href="/my-account">
          <FaRegUser className="w-6 h-6" />
        </Link>
      )}

      <Link href="/cart" className="flex text-md font-bold items-center">
        <CartData />
      </Link>
    </>
  );
};

export default CartLinksAndAccount;
