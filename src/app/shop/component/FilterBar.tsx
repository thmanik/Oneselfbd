import React, { useState } from "react";

const FilterBar: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleFilterByPrice = () => {
    // Implement filter logic by price
    // eslint-disable-next-line no-console
    console.log("Filter by price:", minPrice, maxPrice);
  };

  const handleFilterByProperty = () => {
    // Implement filter logic by property
    // eslint-disable-next-line no-console
    console.log("Filter by property:", selectedProperty);
  };

  const handleFilterByCategory = () => {
    // Implement filter logic by category
    // eslint-disable-next-line no-console
    console.log("Filter by category:", selectedCategory);
  };

  return (
    <div className="flex justify-between items-center bg-gray-200 p-4">
      <div className="flex items-center space-x-4">
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          className="border-gray-300 rounded-md p-1"
        />
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="border-gray-300 rounded-md p-1"
        />
        <button
          onClick={handleFilterByPrice}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Filter by Price
        </button>
      </div>
      <div>
        <select
          value={selectedProperty || ""}
          onChange={(e) => setSelectedProperty(e.target.value || null)}
          className="border-gray-300 rounded-md p-1"
        >
          <option value="">Select Property</option>
          {/* Add options for properties */}
          <option value="property1">Property 1</option>
          <option value="property2">Property 2</option>
        </select>
        <button
          onClick={handleFilterByProperty}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
        >
          Filter by Property
        </button>
      </div>
      <div>
        <select
          value={selectedCategory || ""}
          onChange={(e) => setSelectedCategory(e.target.value || null)}
          className="border-gray-300 rounded-md p-1"
        >
          <option value="">Select Category</option>
          {/* Add options for categories */}
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <button
          onClick={handleFilterByCategory}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
        >
          Filter by Category
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
