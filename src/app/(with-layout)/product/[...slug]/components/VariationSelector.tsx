"use client";

import { TSingleProduct } from "@/types/products/singleProduct";
import { useEffect, useState } from "react";

type VariationSelectorProps = {
  variations: TSingleProduct["variations"];
  initialPrice: {
    regularPrice: number;
    salePrice: number;
  };
  // eslint-disable-next-line no-unused-vars
  onVariationChange: (variation: TSingleProduct["variations"][0]) => void;
};

const VariationSelector = ({
  variations,
  initialPrice,
  onVariationChange,
}: VariationSelectorProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null;
  }>({});
  const [filteredVariations, setFilteredVariations] =
    useState<TSingleProduct["variations"]>(variations);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Get attribute keys dynamically from the first variation object
    const attributeKeys =
      variations.length > 0 ? Object.keys(variations[0].attributes) : [];

    let filtered = variations;
    attributeKeys.forEach((key) => {
      const value = selectedOptions[key];
      if (value) {
        filtered = filtered.filter(
          (variation) => variation.attributes[key] === value
        );
      }
    });
    setFilteredVariations(filtered);

    // Update the selected variation for price calculation
    if (attributeKeys.every((key) => selectedOptions[key])) {
      const matchedVariation = variations.find((variation) =>
        attributeKeys.every(
          (key) => variation.attributes[key] === selectedOptions[key]
        )
      );
      if (matchedVariation) {
        onVariationChange(matchedVariation);
      }
    }

    // Set an error message if not all options are selected
    if (
      attributeKeys.length > 0 &&
      !attributeKeys.every((key) => selectedOptions[key])
    ) {
      setErrorMessage("Please select variation before adding to cart.");
    } else {
      setErrorMessage(null);
    }
  }, [selectedOptions, variations, onVariationChange]);

  const handleAttributeSelection = (key: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const uniqueValues = (key: string) => {
    return Array.from(
      new Set(variations.map((variation) => variation.attributes[key]))
    );
  };

  const displayedPrice =
    filteredVariations.length > 0 && filteredVariations[0].price?.salePrice
      ? filteredVariations[0].price.salePrice
      : initialPrice.salePrice;
  const originalPrice =
    filteredVariations.length > 0 && filteredVariations[0].price?.regularPrice
      ? filteredVariations[0].price.regularPrice
      : initialPrice.regularPrice;

  return (
    <div>
      <h2 className="text-3xl my-2">
        {displayedPrice < originalPrice ? (
          <>
            <del className="text-muted text-base">{originalPrice}&#2547;</del>
            <span> {displayedPrice}&#2547; </span>
          </>
        ) : (
          <span>{displayedPrice}&#2547; </span>
        )}
      </h2>
      <div className="my-4">
        {Object.keys(variations[0]?.attributes || {}).map((key, index) => {
          const showAttribute =
            index === 0 ||
            (Object.keys(selectedOptions)[index - 1] &&
              selectedOptions[Object.keys(selectedOptions)[index - 1]]);
          if (showAttribute) {
            return (
              <div className="mb-4" key={key}>
                <h3 className="text-md font-semibold">Select {key}:</h3>
                <div className="flex flex-wrap">
                  {uniqueValues(key).map((value) => (
                    <button
                      key={value}
                      onClick={() => handleAttributeSelection(key, value)}
                      className={`m-1 py-1 px-2 border w-16 rounded-md text-sm uppercase cursor-pointer ${
                        selectedOptions[key] === value
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default VariationSelector;

// "use client";

// import { Tvariations } from "@/types/products/singleProduct";
// import { useEffect, useState } from "react";

// type VariationSelectorProps = {
//   variations: Tvariations[];
//   initialPrice: {
//     regularPrice: number;
//     salePrice: number;
//   };
// };

// const VariationSelector = ({
//   variations,
//   initialPrice,
// }: VariationSelectorProps) => {
//   // Initialize selectedVariation with the first variation if it exists
//   const [selectedVariation, setSelectedVariation] = useState<Tvariations>(
//     variations[0] || ({} as Tvariations) // Handle the case where variations might be empty
//   );
//   const [displayedPrice, setDisplayedPrice] = useState(initialPrice);

//   useEffect(() => {
//     if (selectedVariation) {
//       setDisplayedPrice(selectedVariation.price);
//       // Log the _id of the selected variation on initial load
//       console.log("Selected Variation ID on Mount:", selectedVariation._id);
//     } else {
//       setDisplayedPrice(initialPrice);
//     }
//   }, [selectedVariation, initialPrice]);

//   const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedIndex = parseInt(event.target.value, 10);
//     const variation = variations[selectedIndex];
//     setSelectedVariation(variation);
//   };

//   const formatVariationLabel = (variation: Tvariations) => {
//     return Object.values(variation.attributes).join(" + ");
//   };

//   return (
//     <div>
//       <h2 className="text-3xl my-2">
//         {displayedPrice?.salePrice ? (
//           <>
//             <del className="text-muted text-base">
//               {displayedPrice?.regularPrice}&#2547;
//             </del>
//             <span> {displayedPrice?.salePrice}&#2547; </span>
//           </>
//         ) : (
//           <span>{displayedPrice?.regularPrice}&#2547; </span>
//         )}
//       </h2>
//       <div className="flex flex-wrap">
//         <select
//           value={variations.indexOf(selectedVariation)}
//           onChange={handleSelection}
//           className="border py-1 px-2 rounded-md text-sm md:text-md cursor-pointer"
//         >
//           {variations.map((variation, index) => (
//             <option key={variation._id} value={index}>
//               {formatVariationLabel(variation)}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default VariationSelector;

// 2nd

// "use client";

// import { TSingleProduct } from "@/types/products/singleProduct";
// import { useEffect, useState } from "react";

// type VariationSelectorProps = {
//   variations: TSingleProduct["variations"];
//   initialPrice: {
//     regularPrice: number;
//     salePrice: number;
//   };
//   // Callback to pass the selected variation
//   // eslint-disable-next-line no-unused-vars
//   onVariationChange: (variation: TSingleProduct["variations"][0]) => void;
// };

// const VariationSelector = ({
//   variations,
//   initialPrice,
//   onVariationChange,
// }: VariationSelectorProps) => {
//   const [selectedAttribute, setSelectedAttribute] = useState<string | null>(
//     null
//   );
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [selectedSecondOption, setSelectedSecondOption] = useState<
//     string | null
//   >(null);
//   const [filteredVariations, setFilteredVariations] =
//     useState<TSingleProduct["variations"]>(variations);

//   useEffect(() => {
//     if (selectedAttribute && selectedOption && selectedSecondOption) {
//       const matchedVariation = variations.find(
//         (variation) =>
//           variation.attributes[selectedAttribute] === selectedOption &&
//           variation.attributes[secondKey!] === selectedSecondOption
//       );
//       if (matchedVariation) {
//         onVariationChange(matchedVariation);
//       }
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     selectedAttribute,
//     selectedOption,
//     selectedSecondOption,
//     variations,
//     onVariationChange,
//   ]);

//   useEffect(() => {
//     if (selectedAttribute && selectedOption) {
//       const filtered = variations.filter(
//         (variation) =>
//           variation.attributes[selectedAttribute] === selectedOption
//       );
//       setFilteredVariations(filtered);
//     }
//   }, [selectedAttribute, selectedOption, variations]);

//   const attributeKeys =
//     variations.length > 0 ? Object.keys(variations[0].attributes) : [];
//   const firstKey = attributeKeys[0];
//   const secondKey = attributeKeys[1];

//   const handleAttributeSelection = (key: string, value: string) => {
//     if (key === firstKey) {
//       setSelectedAttribute(key);
//       setSelectedOption(value);
//       setSelectedSecondOption(null); // Reset second selection
//     } else if (key === secondKey) {
//       setSelectedSecondOption(value);
//     }
//   };

//   const uniqueValues = (key: string) => {
//     return Array.from(
//       new Set(variations.map((variation) => variation.attributes[key]))
//     );
//   };

//   // Determine the selected variation for price calculation
//   const selectedVariation = filteredVariations.find(
//     (variation) =>
//       variation.attributes[firstKey] === selectedOption &&
//       variation.attributes[secondKey!] === selectedSecondOption
//   );

//   const displayedPrice =
//     selectedVariation?.price?.salePrice || initialPrice.salePrice;
//   const originalPrice =
//     selectedVariation?.price?.regularPrice || initialPrice.regularPrice;

//   return (
//     <div>
//       <h2 className="text-3xl my-2">
//         {displayedPrice < originalPrice ? (
//           <>
//             <del className="text-muted text-base">{originalPrice}&#2547;</del>
//             <span> {displayedPrice}&#2547; </span>
//           </>
//         ) : (
//           <span>{displayedPrice}&#2547; </span>
//         )}
//       </h2>
//       <div className="my-4">
//         {/* Render buttons for the first attribute */}
//         {firstKey && (
//           <div className="mb-4">
//             <h3 className="text-md font-semibold">
//               Please Select {firstKey} :
//             </h3>
//             <div className="flex flex-wrap">
//               {uniqueValues(firstKey).map((value) => (
//                 <button
//                   key={value}
//                   onClick={() => handleAttributeSelection(firstKey, value)}
//                   className={`m-1 py-1 px-2 border w-16 rounded-md text-sm cursor-pointer ${
//                     selectedOption === value
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {value}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Conditionally render buttons for the second attribute if the first attribute is selected */}
//         {selectedOption && secondKey && (
//           <div className="mb-4">
//             <h3 className="text-md font-semibold">
//               Please Select {secondKey} :
//             </h3>
//             <div className="flex flex-wrap">
//               {uniqueValues(secondKey).map((value) => (
//                 <button
//                   key={value}
//                   onClick={() => handleAttributeSelection(secondKey, value)}
//                   className={`m-1 py-1 px-2 border w-16 rounded-md text-sm cursor-pointer ${
//                     selectedSecondOption === value
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {value}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VariationSelector;
