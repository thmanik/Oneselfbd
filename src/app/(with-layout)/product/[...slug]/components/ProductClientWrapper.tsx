"use client";

import { useState } from "react";

import { TSingleProduct } from "@/types/products/singleProduct";
import SingleProductClientContent from "./SingleProductClientContent";
import VariationSelector from "./VariationSelector";

type ProductClientWrapperProps = {
  product: TSingleProduct;
  initialVariationPrice: {
    regularPrice: number;
    salePrice: number;
  };
};

const ProductClientWrapper = ({
  product,
  initialVariationPrice,
}: ProductClientWrapperProps) => {
  const [selectedVariation, setSelectedVariation] = useState<
    TSingleProduct["variations"][0] | undefined
  >(undefined);

  return (
    <div>
      <VariationSelector
        variations={product.variations}
        initialPrice={initialVariationPrice}
        onVariationChange={setSelectedVariation} // Pass state update function
      />
      <SingleProductClientContent
        product={product}
        selectedVariation={selectedVariation}
      />
    </div>
  );
};

export default ProductClientWrapper;
