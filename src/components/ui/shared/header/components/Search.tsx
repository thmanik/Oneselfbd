"use client";
import { FormEventHandler } from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const searchValue = (
      event.target as unknown as { searchValue: { value: string } }
    ).searchValue.value;
    // eslint-disable-next-line no-console
    console.log(searchValue);
  };
  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex justify-center items-center overflow-hidden rounded-full">
        <input
          type="search"
          className="p-5 w-[90%] outline-none border-2 rounded-full rounded-r-none border-r-0 border-base-100 h-[45px]"
          placeholder="Search for products"
          name="searchValue"
        />

        <button className="font-bold w-[10%] flex justify-center items-center bg-secondary h-[43px] text-white">
          <FaSearch className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
};

export default Search;
