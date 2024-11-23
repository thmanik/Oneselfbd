// import EcButton from "@/components/EcButton/EcButton";
// import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
// import ErrorMessage from "@/components/errorMessage/ErrorMessage";
// import Box from "@/components/ui/ec/Box";
// import BoxHeading from "@/components/ui/ec/BoxHeading";
// import config from "@/config/config";
// import { TSingleProduct } from "@/types/products/singleProduct";
// import TShippingCharges from "@/types/shippingCharge";
// import Image from "next/image";
// import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
// import { MdErrorOutline } from "react-icons/md";
// import Quantity from "./Quantity";

// const SalesPageOrderNow = ({
//   shippingCharges,
//   errorMessages,
//   handleOrder,
//   isLoading,
//   totalCost,
//   costLoading,
//   product,
//   setTotalCost,
//   quantity,
//   setQuantity,
//   isSuccess,
//   setSelectedVariationId,
// }: {
//   shippingCharges: TShippingCharges[];
//   errorMessages: string[];
//   handleOrder: () => Promise<void>;
//   isLoading?: boolean;
//   totalCost?: number;
//   costLoading?: boolean;
//   product?: TSingleProduct;
//   quantity: number;
//   setQuantity: Dispatch<SetStateAction<number>>;
//   isSuccess: boolean;
//   setTotalCost: Dispatch<SetStateAction<number>>;
//   setSelectedVariationId: Dispatch<SetStateAction<string | null>>;
// }) => {
//   const [selectedOptions, setSelectedOptions] = useState<{
//     [key: string]: string;
//   }>({});
//   const [totalExpenseState, setTotalExpense] = useState<number>(totalCost || 0);
//   const [isReadyToOrder, setIsReadyToOrder] = useState(false);

//   useEffect(() => {
//     if (product?.variations?.length) {
//       const defaultVariation = product.variations[0];
//       setSelectedVariationId(defaultVariation.id);
//       const defaultPrice =
//         defaultVariation.price?.salePrice ||
//         defaultVariation.price?.regularPrice ||
//         0;
//       setTotalCost(defaultPrice);
//       setTotalExpense(defaultPrice);
//     }
//   }, [product, setSelectedVariationId, setTotalCost]);

//   useEffect(() => {
//     if (product?.variations?.length) {
//       const selectedVariation = product.variations.find((variation) =>
//         Object.keys(selectedOptions).every(
//           (attributeKey) =>
//             variation.attributes[attributeKey] === selectedOptions[attributeKey]
//         )
//       );

//       if (selectedVariation) {
//         const variationPrice =
//           selectedVariation.price?.salePrice ||
//           selectedVariation.price?.regularPrice ||
//           0;

//         const updatedTotal = variationPrice * (quantity || 1);
//         setTotalCost(updatedTotal);
//         setTotalExpense(updatedTotal);
//       }
//     } else if (product?.price) {
//       const basePrice =
//         product.price.salePrice || product.price.regularPrice || 0;

//       const updatedTotal = basePrice * (quantity || 1);
//       setTotalCost(updatedTotal);
//       setTotalExpense(updatedTotal);
//     }
//   }, [quantity, selectedOptions, product, setTotalCost]);

//   useEffect(() => {
//     const allAttributesSelected =
//       product?.variations &&
//       Object.keys(product.variations[0]?.attributes || {}).every(
//         (key) => selectedOptions[key]
//       );
//     setIsReadyToOrder(!!selectedOptions && !!allAttributesSelected);
//   }, [selectedOptions, product]);

//   const handleAttributeSelection = (key: string, value: string) => {
//     setSelectedOptions((prevSelectedOptions) => {
//       const updatedOptions = { ...prevSelectedOptions, [key]: value };

//       const selectedVariation = product?.variations?.find((variation) =>
//         Object.keys(updatedOptions).every((attributeKey) => {
//           const productValue = variation.attributes[attributeKey];
//           const selectedValue = updatedOptions[attributeKey];
//           return productValue === selectedValue;
//         })
//       );

//       if (selectedVariation) {
//         const variationPrice =
//           selectedVariation.price?.salePrice ||
//           selectedVariation.price?.regularPrice ||
//           0;

//         if (variationPrice && !isNaN(variationPrice)) {
//           const updatedTotal = variationPrice * (quantity || 1);
//           setTotalCost(updatedTotal);
//           setTotalExpense(updatedTotal);
//         }

//         setSelectedVariationId(selectedVariation._id || null);
//       } else {
//         setSelectedVariationId(null);
//       }

//       return updatedOptions;
//     });
//   };

//   const uniqueValues = useMemo(
//     () => (key: string) => {
//       const values: string[] = [];
//       product?.variations?.forEach((variation) => {
//         const attributeValue = variation?.attributes[key];
//         const attributeValues = Array.isArray(attributeValue)
//           ? attributeValue
//           : [attributeValue]; // Ensure it's always an array
//         attributeValues.forEach((value) => {
//           if (!values.includes(value)) values.push(value);
//         });
//       });
//       return values;
//     },
//     [product?.variations]
//   );

//   return (
//     <Box className="bg-white">
//       <BoxHeading>Your order</BoxHeading>
//       <div>
//         <div className="flex justify-between">
//           <h2>Product</h2>
//           <h2>Amount</h2>
//         </div>
//         <hr />
//         <div className="py-2 flex justify-between gap-2 items-center">
//           <div className="flex gap-2">
//             <Image
//               src={`${config.base_url}/${product?.thumbnail?.src || ""}`}
//               alt={product?.thumbnail?.alt || "Product image"}
//               width={100}
//               height={100}
//               className="w-20 h-20 rounded-md"
//             />
//             <div className="flex flex-col justify-between">
//               <h2>{product?.title}</h2>
//               <Quantity quantity={quantity} setQuantity={setQuantity} />
//             </div>
//           </div>
//           <p className="min-w-14 text-center">{totalExpenseState} &#2547;</p>
//         </div>
//       </div>

//       {product?.variations?.[0]?.attributes && (
//         <div className="my-4">
//           {Object.keys(product.variations[0].attributes).map((key, index) => {
//             const showAttribute =
//               index === 0 ||
//               selectedOptions[Object.keys(selectedOptions)[index - 1]];

//             if (showAttribute) {
//               return (
//                 <div className="mb-6" key={key}>
//                   <h3 className="text-md font-semibold">Select {key}:</h3>
//                   <div className="flex flex-wrap my-2">
//                     {uniqueValues(key).map((value) => (
//                       <button
//                         key={value}
//                         onClick={() => handleAttributeSelection(key, value)}
//                         className={`m-1 py-1 px-2 border w-16 rounded-md text-sm uppercase cursor-pointer ${
//                           selectedOptions[key] === value
//                             ? "bg-primary text-white"
//                             : "bg-gray-200"
//                         }`}
//                       >
//                         {value}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       )}

//       <CartTotalCalculations
//         shippingCharges={shippingCharges}
//         totalCost={totalExpenseState || 0}
//         costLoading={costLoading}
//       />

//       {errorMessages.length > 0 && (
//         <div className="py-5">
//           {errorMessages.map((message, index) => (
//             <div key={index} className="flex gap-1 items-center text-red-600">
//               <MdErrorOutline />
//               <ErrorMessage message={message} className="!mt-0" />
//             </div>
//           ))}
//         </div>
//       )}

//       {!isReadyToOrder && (
//         <div className="py-5">
//           <div className="flex gap-1 items-center text-red-600">
//             <MdErrorOutline />
//             <ErrorMessage
//               message="আপনার অর্ডার সম্পূর্ণ করতে পন্যের Variation নির্বাচন করুন"
//               className="!mt-0"
//             />
//           </div>
//         </div>
//       )}

//       <EcButton
//         className="w-full font-bold text-white"
//         variant="secondary"
//         onClick={handleOrder}
//         loading={isLoading || isSuccess}
//         disabled={isLoading || isSuccess || !isReadyToOrder}
//         loadingText="Creating order"
//       >
//         Order now
//       </EcButton>
//     </Box>
//   );
// };

// export default SalesPageOrderNow;

import EcButton from "@/components/EcButton/EcButton";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import config from "@/config/config";
import { TSingleProduct } from "@/types/products/singleProduct";
import TShippingCharges from "@/types/shippingCharge";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import Quantity from "./Quantity";

const SalesPageOrderNow = ({
  shippingCharges,
  errorMessages,
  handleOrder,
  isLoading,
  totalCost,
  costLoading,
  product,
  setTotalCost,
  quantity,
  setQuantity,

  setSelectedVariationId,
}: {
  shippingCharges: TShippingCharges[];
  errorMessages: string[];
  handleOrder: () => Promise<void>;
  isLoading?: boolean;
  totalCost?: number;
  costLoading?: boolean;
  product?: TSingleProduct;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  isSuccess: boolean;
  setTotalCost: Dispatch<SetStateAction<number>>;
  setSelectedVariationId: Dispatch<SetStateAction<string | null>>;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[]; // Allows multiple selections for each attribute
  }>({});
  const [totalExpenseState, setTotalExpense] = useState<number>(totalCost || 0);
  const [isReadyToOrder, setIsReadyToOrder] = useState(false);

  useEffect(() => {
    if (product?.variations?.length) {
      const defaultVariation = product.variations[0];
      setSelectedVariationId(defaultVariation.id);
      const defaultPrice =
        defaultVariation.price?.salePrice ||
        defaultVariation.price?.regularPrice ||
        0;
      setTotalCost(defaultPrice);
      setTotalExpense(defaultPrice);
    }
  }, [product, setSelectedVariationId, setTotalCost]);

  useEffect(() => {
    if (product?.variations?.length) {
      // Filter the variations based on selected options
      const selectedVariations = product?.variations?.filter((variation) =>
        Object.keys(selectedOptions).every((attributeKey) =>
          selectedOptions[attributeKey]?.includes(
            variation.attributes[attributeKey]
          )
        )
      );

      if (selectedVariations?.length) {
        // Calculate the total cost by summing up the prices of the selected variations
        const updatedTotal = selectedVariations.reduce((total, variation) => {
          const variationPrice =
            variation.price?.salePrice || variation.price?.regularPrice || 0;
          return total + variationPrice * (quantity || 1);
        }, 0);

        setTotalCost(updatedTotal);
        setTotalExpense(updatedTotal);
      }
    } else if (product?.price) {
      const basePrice =
        product.price.salePrice || product.price.regularPrice || 0;

      const updatedTotal = basePrice * (quantity || 1);
      setTotalCost(updatedTotal);
      setTotalExpense(updatedTotal);
    }
  }, [quantity, selectedOptions, product, setTotalCost]);

  useEffect(() => {
    const allAttributesSelected =
      product?.variations &&
      Object.keys(product.variations[0]?.attributes || {}).every(
        (key) => selectedOptions[key] && selectedOptions[key].length > 0
      );
    setIsReadyToOrder(!!selectedOptions && !!allAttributesSelected);
  }, [selectedOptions, product]);

  const handleAttributeSelection = (key: string, value: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };

      if (updatedOptions[key]?.includes(value)) {
        // Deselect the value if it already exists
        updatedOptions[key] = updatedOptions[key].filter(
          (item) => item !== value
        );
      } else {
        // Add the value to the selection
        updatedOptions[key] = [...(updatedOptions[key] || []), value];
      }

      const selectedVariations = product?.variations?.filter((variation) =>
        Object.keys(updatedOptions).every((attributeKey) =>
          updatedOptions[attributeKey]?.includes(
            variation.attributes[attributeKey]
          )
        )
      );

      if (selectedVariations?.length) {
        // Calculate the total cost by summing up the prices of selected variations
        const updatedTotal = selectedVariations.reduce((total, variation) => {
          const variationPrice =
            variation.price?.salePrice || variation.price?.regularPrice || 0;
          return total + variationPrice * (quantity || 1);
        }, 0);

        setTotalCost(updatedTotal);
        setTotalExpense(updatedTotal);
      }

      return updatedOptions;
    });
  };

  const uniqueValues = useMemo(
    () => (key: string) => {
      const values: string[] = [];
      product?.variations?.forEach((variation) => {
        const attributeValue = variation?.attributes[key];
        const attributeValues = Array.isArray(attributeValue)
          ? attributeValue
          : [attributeValue];
        attributeValues.forEach((value) => {
          if (!values.includes(value)) values.push(value);
        });
      });
      return values;
    },
    [product?.variations]
  );

  return (
    <Box className="bg-white">
      <BoxHeading>Your order</BoxHeading>
      <div>
        <div className="flex justify-between">
          <h2>Product</h2>
          <h2>Amount</h2>
        </div>
        <hr />
        <div className="py-2 flex justify-between gap-2 items-center">
          <div className="flex gap-2">
            <Image
              src={`${config.base_url}/${product?.thumbnail?.src || ""}`}
              alt={product?.thumbnail?.alt || "Product image"}
              width={100}
              height={100}
              className="w-20 h-20 rounded-md"
            />
            <div className="flex flex-col justify-between">
              <h2>{product?.title}</h2>
              <Quantity quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <p className="min-w-14 text-center">{totalExpenseState} &#2547;</p>
        </div>
      </div>

      {product?.variations?.[0]?.attributes && (
        <div className="my-4">
          {Object.keys(product.variations[0].attributes).map((key, index) => {
            const showAttribute =
              index === 0 ||
              selectedOptions[Object.keys(selectedOptions)[index - 1]];

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
                          selectedOptions[key]?.includes(value)
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
      )}

      <CartTotalCalculations
        shippingCharges={shippingCharges}
        totalCost={totalExpenseState || 0}
        costLoading={costLoading}
      />

      {errorMessages.length > 0 && (
        <div className="py-5">
          {errorMessages.map((message, index) => (
            <div key={index} className="flex gap-1 items-center text-red-600">
              <MdErrorOutline />
              <ErrorMessage message={message} className="!mt-0" />
            </div>
          ))}
        </div>
      )}

      {!isReadyToOrder && (
        <div className="py-5">
          <ErrorMessage message="Please select variations to proceed." />
        </div>
      )}

      <EcButton
        className="w-full mt-4"
        onClick={handleOrder}
        loading={isLoading || !isReadyToOrder}
        disabled={isLoading || !isReadyToOrder}
      >
        Order Now
      </EcButton>
    </Box>
  );
};

export default SalesPageOrderNow;
