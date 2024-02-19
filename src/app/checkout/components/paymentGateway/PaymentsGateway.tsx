import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import useCart from "@/hooks/useCart";
import { TOrderPayment } from "@/types/order/orderPayment";
import { TPaymentMethod } from "@/types/paymentMethod";
import { TRootState } from "@/types/rootState";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import SelectPaymentMethod from "./SelectPaymentMethod";

const PaymentsGateway = ({
  paymentBtn,
  paymentMethods,
  paymentInfoHandler,
}: {
  paymentBtn: RefObject<HTMLButtonElement>;
  paymentMethods: TPaymentMethod[];
  // eslint-disable-next-line no-unused-vars
  paymentInfoHandler: (data: TOrderPayment) => void;
}) => {
  const submitPaymentInfoRef = useRef<HTMLButtonElement>(null);
  const [countSubmitBtnClick, setCountSubmitBtnClick] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(paymentMethods[1]._id);
  const selectedShippingClass = useSelector(
    (state: TRootState) => state.shippingClass
  );
  const { totalCost, isLoading } = useCart();
  const findSelectedPaymentMethod = paymentMethods.find(
    (item) => item._id === selectedPaymentMethod
  );

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPaymentMethod]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const newPaymentInfo: TOrderPayment = {
      success: true,
      selectedPaymentMethod: findSelectedPaymentMethod?._id as string,
      transactionInfo: {
        accountInfo: {
          IDType:
            Object.keys(data)[0] !== "transactionId"
              ? Object.keys(data)[0]
              : Object.keys(data)[1],
          value: data[Object.keys(data)[0]],
        },
        transactionId: data.transactionId,
      },
    };
    paymentInfoHandler(newPaymentInfo);
  };

  const handlePaymentInfo = () => {
    if (!findSelectedPaymentMethod?.requiredFields?.length) {
      const newPaymentInfo: TOrderPayment = {
        success: true,
        selectedPaymentMethod: findSelectedPaymentMethod?._id as string,
      };
      paymentInfoHandler(newPaymentInfo);
    } else {
      submitPaymentInfoRef.current?.click();
      setCountSubmitBtnClick(countSubmitBtnClick + 1);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      const newPaymentInfo: TOrderPayment = {
        success: false,
      };
      paymentInfoHandler(newPaymentInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors, countSubmitBtnClick]);

  return (
    <Box>
      <BoxHeading>Payment info</BoxHeading>
      <SelectPaymentMethod
        paymentMethods={paymentMethods}
        selectedPaymentMethod={selectedPaymentMethod}
        setSelectedPaymentMethod={setSelectedPaymentMethod}
      />
      {selectedPaymentMethod && (
        <>
          <div className="mt-5">
            <h2 className="font-bold">
              {findSelectedPaymentMethod?.description}
            </h2>

            <div className="font-semibold flex gap-2 items-center mt-2">
              You need to pay
              {isLoading ? (
                <>
                  <Skeleton className="h-4 w-[100px]" />
                </>
              ) : (
                <span className="text-secondary font-bold">
                  &#2547; {totalCost + selectedShippingClass.amount}
                </span>
              )}
            </div>
            <div>
              {findSelectedPaymentMethod?.requiredFields?.length ? (
                <div className="mt-3">
                  <div className="flex gap-2 justify-between items-center">
                    <div>
                      <p>
                        <span className="font-bold">Account type: </span>
                        <span>
                          {findSelectedPaymentMethod?.merchantACInfo?.type}
                        </span>
                      </p>
                      <p>
                        <span className="font-bold">
                          {findSelectedPaymentMethod?.merchantACInfo?.name}:{" "}
                        </span>
                        <span>
                          {findSelectedPaymentMethod?.merchantACInfo?.accountNo}
                        </span>
                      </p>
                    </div>
                    <div>
                      <Image
                        src={findSelectedPaymentMethod?.image?.src as string}
                        alt={findSelectedPaymentMethod?.image?.alt as string}
                        width={200}
                        height={200}
                        className="w-16 h-16 rounded-md"
                      />
                      <p className="font-bold text-center">
                        {findSelectedPaymentMethod?.name}
                      </p>
                    </div>
                  </div>
                  <hr className="my-5" />
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {findSelectedPaymentMethod?.requiredFields.map((field) => (
                      <div key={field.fieldName} className="mt-4">
                        <Label className="font-bold pl-2 pb-2 block">
                          {field.fieldName}
                        </Label>
                        <Input
                          placeholder={field.placeHolder}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          {...register(field.fieldID, {
                            required: {
                              value: true,
                              message: `${field.fieldName} is required`,
                            },
                          })}
                        />
                        {errors[field.fieldID] && (
                          <ErrorMessage
                            message={errors[field.fieldID]?.message}
                          />
                        )}
                      </div>
                    ))}
                    <button
                      ref={submitPaymentInfoRef}
                      type="submit"
                      className="hidden"
                    ></button>
                  </form>
                </div>
              ) : null}
            </div>
            <button
              ref={paymentBtn}
              type="submit"
              className="hidden"
              onClick={handlePaymentInfo}
            ></button>
          </div>
        </>
      )}
    </Box>
  );
};

export default PaymentsGateway;
