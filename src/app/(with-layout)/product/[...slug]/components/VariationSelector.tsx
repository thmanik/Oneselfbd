"use client";

import { TSingleProduct } from "@/types/products/singleProduct";
import { useEffect, useState } from "react";

type VariationSelectorProps = {
  variations: TSingleProduct["variations"];
  initialPrice: {
    regularPrice: number;
    salePrice: number;
    discountPercent?: number;
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
    const attributeKeys =
      variations?.length > 0 ? Object.keys(variations[0].attributes) : [];

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

    if (attributeKeys.every((key) => selectedOptions[key])) {
      const matchedVariation = variations?.find((variation) =>
        attributeKeys.every(
          (key) => variation.attributes[key] === selectedOptions[key]
        )
      );
      if (matchedVariation) {
        onVariationChange(matchedVariation);
      }
    }

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

  // Determine the displayed and original prices based on variation selection
  const displayedPrice =
    filteredVariations?.length > 0 && filteredVariations[0].price?.salePrice
      ? filteredVariations[0].price.salePrice
      : initialPrice.salePrice;

  const originalPrice =
    filteredVariations?.length > 0 && filteredVariations[0].price?.regularPrice
      ? filteredVariations[0].price.regularPrice
      : initialPrice.regularPrice;

  // Use discountPercent directly from variations or the initial product price
  const discountPercent =
    filteredVariations?.length > 0 &&
    filteredVariations[0].price?.discountPercent
      ? filteredVariations[0].price.discountPercent
      : initialPrice.discountPercent
        ? initialPrice.discountPercent
        : originalPrice > displayedPrice
          ? Math.round(((originalPrice - displayedPrice) / originalPrice) * 100)
          : 0;

  return (
    <div>
      <div className="text-2xl my-5">
        {displayedPrice < originalPrice ? (
          <>
            <del className="text-muted text-xl">&#2547;{originalPrice}</del>
            <span className="text-primary ms-1 text-3xl">
              &#2547;{displayedPrice}
            </span>

            {discountPercent > 0 && (
              <span className="px-2 ms-1 mb-2 text-sm text-white bg-red-500">
                {discountPercent}% OFF
              </span>
            )}
          </>
        ) : (
          <span>{displayedPrice}&#2547;</span>
        )}
      </div>

      <div className="my-4">
        {variations?.[0]?.attributes &&
          Object.keys(variations[0].attributes).map((key, index) => {
            const showAttribute =
              index === 0 ||
              (Object.keys(selectedOptions)[index - 1] &&
                selectedOptions[Object.keys(selectedOptions)[index - 1]]);
            if (showAttribute) {
              return (
                <div className="mb-6" key={key}>
                  <h3 className="text-md font-semibold">Select {key}:</h3>
                  <div className="flex flex-wrap my-2">
                    {uniqueValues(key).map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAttributeSelection(key, value)}
                        className={`m-1 py-1 px-2 border w-16 rounded-md text-sm uppercase cursor-pointer ${
                          selectedOptions[key] === value
                            ? "bg-primary text-white"
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
        <p className="text-red-500 text-sm mt-2 mb-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default VariationSelector;

// "use client";

// import { TSingleProduct } from "@/types/products/singleProduct";
// import { useEffect, useState } from "react";

// type VariationSelectorProps = {
//   variations: TSingleProduct["variations"];
//   initialPrice: {
//     regularPrice: number;
//     salePrice: number;
//   };
//   // eslint-disable-next-line no-unused-vars
//   onVariationChange: (variation: TSingleProduct["variations"][0]) => void;
// };

// const VariationSelector = ({
//   variations,
//   initialPrice,
//   onVariationChange,
// }: VariationSelectorProps) => {
//   const [selectedOptions, setSelectedOptions] = useState<{
//     [key: string]: string | null;
//   }>({});
//   const [filteredVariations, setFilteredVariations] =
//     useState<TSingleProduct["variations"]>(variations);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const attributeKeys =
//       variations.length > 0 ? Object.keys(variations[0].attributes) : [];

//     let filtered = variations;
//     attributeKeys.forEach((key) => {
//       const value = selectedOptions[key];
//       if (value) {
//         filtered = filtered.filter(
//           (variation) => variation.attributes[key] === value
//         );
//       }
//     });
//     setFilteredVariations(filtered);

//     if (attributeKeys.every((key) => selectedOptions[key])) {
//       const matchedVariation = variations.find((variation) =>
//         attributeKeys.every(
//           (key) => variation.attributes[key] === selectedOptions[key]
//         )
//       );
//       if (matchedVariation) {
//         onVariationChange(matchedVariation);
//       }
//     }

//     if (
//       attributeKeys.length > 0 &&
//       !attributeKeys.every((key) => selectedOptions[key])
//     ) {
//       setErrorMessage("Please select variation before adding to cart.");
//     } else {
//       setErrorMessage(null);
//     }
//   }, [selectedOptions, variations, onVariationChange]);

//   const handleAttributeSelection = (key: string, value: string) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const uniqueValues = (key: string) => {
//     return Array.from(
//       new Set(variations.map((variation) => variation.attributes[key]))
//     );
//   };

//   const displayedPrice =
//     filteredVariations?.length > 0 && filteredVariations[0].price?.salePrice
//       ? filteredVariations[0].price.salePrice
//       : initialPrice.salePrice;
//   const originalPrice =
//     filteredVariations?.length > 0 && filteredVariations[0].price?.regularPrice
//       ? filteredVariations[0].price.regularPrice
//       : initialPrice.regularPrice;

//   // Calculate discount percentage
//   const discountPercent =
//     originalPrice > 0
//       ? Math.round(((originalPrice - displayedPrice) / originalPrice) * 100)
//       : 0;

//   return (
//     <div>
//       <div className="text-2xl my-5 ">
//         {displayedPrice < originalPrice ? (
//           <>
//             <del className="text-muted text-xl">&#2547;{originalPrice}</del>
//             <span className="text-primary text-3xl">
//               {" "}
//               &#2547;{displayedPrice}{" "}
//             </span>

//             <span className="px-2 ms-1 mb-2 text-sm text-white bg-red-500">
//               {discountPercent}% OFF
//             </span>
//           </>
//         ) : (
//           <span>{displayedPrice}&#2547; </span>
//         )}
//       </div>
//       <div className="my-4">
//         {Object.keys(variations[0]?.attributes || {}).map((key, index) => {
//           const showAttribute =
//             index === 0 ||
//             (Object.keys(selectedOptions)[index - 1] &&
//               selectedOptions[Object.keys(selectedOptions)[index - 1]]);
//           if (showAttribute) {
//             return (
//               <div className="mb-6" key={key}>
//                 <h3 className="text-md font-semibold">Select {key}:</h3>
//                 <div className="flex flex-wrap my-2">
//                   {uniqueValues(key).map((value) => (
//                     <button
//                       key={value}
//                       onClick={() => handleAttributeSelection(key, value)}
//                       className={`m-1 py-1 px-2 border w-16 rounded-md text-sm uppercase cursor-pointer ${
//                         selectedOptions[key] === value
//                           ? "bg-primary text-white"
//                           : "bg-gray-200"
//                       }`}
//                     >
//                       {value}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>

//       {errorMessage && (
//         <p className="text-red-500 text-sm mt-2 mb-1">{errorMessage}</p>
//       )}
//     </div>
//   );
// };

// export default VariationSelector;
