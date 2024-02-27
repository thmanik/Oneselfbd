import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import Box from "@/components/ui/ec/Box";
import BoxHeading from "@/components/ui/ec/BoxHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useBaseUrl } from "@/hooks/useBaseUrl";
import useCart from "@/hooks/useCart";
import {
  setPaymentInfo,
  setPaymentInfoError,
} from "@/redux/features/order/paymentInfo";
import { TPaymentInfo } from "@/types/order/paymentInfo";
import { TPaymentMethod } from "@/types/paymentMethod";
import { TRootState } from "@/types/rootState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SelectPaymentMethod from "./SelectPaymentMethod";
const PaymentsGateway = ({
  paymentMethods,
}: {
  paymentMethods: TPaymentMethod[];
}) => {
  const dispatch = useDispatch();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(paymentMethods[1]?._id);
  const selectedShippingClass = useSelector(
    (state: TRootState) => state.shippingClass
  );
  const { totalCost, isLoading } = useCart();
  const findSelectedPaymentMethod = paymentMethods.find(
    (item) => item._id === selectedPaymentMethod
  );
  const baseUrl = useBaseUrl();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldFocusError: false });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    const paymentInfo: TPaymentInfo = {
      selectedPaymentMethod: findSelectedPaymentMethod as TPaymentMethod,
      phoneNumber: data?.phoneNumber,
      transactionId: data?.transactionId,
    };
    dispatch(setPaymentInfo(paymentInfo));
    dispatch(setPaymentInfoError({ errors: null }));
  };

  useEffect(() => {
    const paymentInfo: TPaymentInfo = {
      selectedPaymentMethod: findSelectedPaymentMethod as TPaymentMethod,
      phoneNumber: null,
      transactionId: null,
    };
    dispatch(setPaymentInfo(paymentInfo));
    dispatch(setPaymentInfoError([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPaymentMethod]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      const errorMessages = Object?.keys(errors).map(
        (item) => errors![item]?.message
      );
      dispatch(setPaymentInfoError({ errors: errorMessages }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Object.keys(errors).length, dispatch, errors]);

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
              {findSelectedPaymentMethod?.isPaymentDetailsNeeded ? (
                <div className="mt-3">
                  <div className="flex gap-2 justify-between items-center">
                    <div>
                      <p>
                        <span className="font-semibold">Account type: </span>
                        <span>
                          {
                            findSelectedPaymentMethod?.merchantACInfo
                              ?.accountType
                          }
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">Account No : </span>
                        <span>
                          {findSelectedPaymentMethod?.merchantACInfo?.accountNo}
                        </span>
                      </p>
                    </div>
                    <div>
                      <Image
                        src={`${baseUrl}/${findSelectedPaymentMethod?.image?.src}`}
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
                  <form onBlur={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <Label className="font-semibold">Phone number :</Label>
                      <Input
                        {...register("phoneNumber", {
                          required: {
                            value: true,
                            message: "Payment phone number is required",
                          },
                          pattern: {
                            value: /^(?!.*[a-zA-Z])01\d{9}$/,
                            message:
                              "Please provide a valid mobile number starting with 01 and with a total of 11 digits.",
                          },
                        })}
                        placeholder={`Provide your ${findSelectedPaymentMethod.name} phone number.`}
                      />
                      {errors.phoneNumber && (
                        <ErrorMessage message={errors.phoneNumber.message} />
                      )}
                    </div>
                    <div>
                      <Label className="font-semibold">Transaction ID :</Label>
                      <Input
                        {...register("transactionId", {
                          required: {
                            value: true,
                            message: "Transaction ID is required",
                          },
                        })}
                        placeholder={`Transaction ID.`}
                      />
                      {errors.transactionId && (
                        <ErrorMessage message={errors.transactionId.message} />
                      )}
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </>
      )}
    </Box>
  );
};

export default PaymentsGateway;
