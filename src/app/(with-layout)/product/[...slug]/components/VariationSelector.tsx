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
  onVariationChange: (variation: TSingleProduct["variations"][0]) => void; // Callback to pass the selected variation
};

const VariationSelector = ({
  variations,
  initialPrice,
  onVariationChange,
}: VariationSelectorProps) => {
  const hasVariations = variations.length > 0;
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(event.target.value, 10);
    setSelectedVariationIndex(index);
    // Notify parent component of the selected variation
    onVariationChange(variations[index]);
  };

  // Determine the selected variation
  const selectedVariation = hasVariations
    ? variations[selectedVariationIndex]
    : undefined;

  // Determine the price to display based on selected variation
  const displayedPrice =
    selectedVariation?.price?.salePrice || initialPrice.salePrice;
  const originalPrice =
    selectedVariation?.price?.regularPrice || initialPrice.regularPrice;

  useEffect(() => {
    // Debugging: Log the selected variation ID to ensure correct value
    // console.log(
    //   "Selected Variation ID in VariationSelector:",
    //   selectedVariation?._id
    // );
  }, [selectedVariation]);

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
      {hasVariations ? (
        <div className="flex flex-wrap">
          <select
            onChange={handleSelection}
            value={selectedVariationIndex}
            className="border py-1 px-2 rounded-md text-sm md:text-md cursor-pointer"
          >
            {variations.map((variation, index) => (
              <option key={variation._id} value={index}>
                {Object.values(variation.attributes).join(" + ")}
              </option>
            ))}
          </select>
          <p className="mt-2 text-md">
            Selected Variation ID: {selectedVariation?._id}
          </p>
        </div>
      ) : (
        <p className="text-md mt-2"></p>
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
