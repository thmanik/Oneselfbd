import EcButton from "@/components/EcButton/EcButton";
import CartTotalCalculations from "@/components/cartTotalCalculations/CartTotalCalculations";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import config from "@/config/config";
import { TSingleProduct } from "@/types/products/singleProduct";
import TShippingCharges from "@/types/shippingCharge";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
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
  quantity,
  setQuantity,
  isSuccess,
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
}) => {
  return (
    <>
      <Box className="bg-white">
        <BoxHeading>Your order</BoxHeading>
        <div>
          <div className="flex justify-between">
            <h2>Product</h2>
            <h2>Subtotal</h2>
          </div>
          <hr />
          <div className="py-2 flex justify-between gap-2 items-center">
            <div className="flex gap-2">
              <Image
                src={`${config.base_url}/${product?.image?.thumbnail?.src}`}
                alt={product?.image?.thumbnail?.alt as string}
                width={100}
                height={100}
                className="w-20 h-20 rounded-md"
              />
              <div className="flex flex-col justify-between">
                <h2>{product?.title}</h2>
                {/* <h2>
                  {product?.price?.salePrice
                    ? product?.price?.salePrice
                    : product?.price?.regularPrice}
                </h2> */}
                {/* <Input
                  value={quantity}
                  type="number"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setQuantity(Number(e.target.value))
                  }
                  className="w-20"
                /> */}
                <Quantity quantity={quantity} setQuantity={setQuantity} />
              </div>
            </div>
            <p className="min-w-14 text-center">{totalCost} &#2547; </p>
          </div>
        </div>
        <CartTotalCalculations
          shippingCharges={shippingCharges}
          totalCost={totalCost}
          costLoading={costLoading}
        />
        {errorMessages.length ? (
          <div className="py-5">
            {errorMessages.map((message, index) => (
              <div
                key={index}
                className="flex gap-1 items-center text-red-600 "
              >
                <MdErrorOutline />
                <ErrorMessage message={message} className="!mt-0" />
              </div>
            ))}
          </div>
        ) : null}
        <EcButton
          className="w-full font-bold text-white"
          variant="secondary"
          onClick={handleOrder}
          loading={isLoading || isSuccess}
          disabled={isLoading || isSuccess}
          loadingText="Creating order"
        >
          Order now
        </EcButton>
      </Box>
    </>
  );
};

export default SalesPageOrderNow;
