"use client";
import EcButton from "@/components/EcButton/EcButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useClaimRequestMutation } from "@/redux/features/warrantyApi/warrantyApiSlice";
import { TRootState } from "@/types/rootState";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
type FormData = {
  purchaseDate: string;
  warrantyCodes: string;
  issueDescription: string;
  customerFiles: File[];
  fullName: string;
  phoneNumber: string;
  fullAddress: string;
  orderedPhoneNumber: string;
};

const WarrantyForm = () => {
  const TableData = useSelector((state: TRootState) => state.tableData);
  const initialCustomerData = {
    fullName: TableData[0]?.shippingDetails?.fullName || "",
    phoneNumber: TableData[0]?.shippingDetails?.phoneNumber || "",
    fullAddress: TableData[0]?.shippingDetails?.fullAddress || "",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [fileDragged, setFileDragged] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [addressOption, setAddressOption] = useState<"keep" | "change">("keep");
  const [customerData, setCustomerData] = useState(initialCustomerData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const router = useRouter();

  const [claimRequest, { isLoading }] = useClaimRequestMutation();

  useEffect(() => {
    if (
      !customerData.fullName &&
      !customerData.phoneNumber &&
      !customerData.fullAddress &&
      addressOption !== "change"
    ) {
      router.push("/warranty/find-your-product");
    }
  }, [customerData, addressOption, router]);
  const { toast } = useToast();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = new FormData();
    formData.append("phoneNumber", TableData[0]?.shippingDetails?.phoneNumber);
    formData.append("problemInDetails", data.issueDescription);

    // Append warranty codes as an array
    const warrantyCodesArray = data.warrantyCodes
      .split(",")
      .map((code) => code.trim());
    warrantyCodesArray.forEach((code) =>
      formData.append("warrantyCodes[]", code)
    );

    // Append shipping details
    formData.append("shipping[fullName]", data.fullName);
    formData.append("shipping[fullAddress]", data.fullAddress);
    formData.append("shipping[phoneNumber]", data.phoneNumber);

    // Append selected files with the correct field name
    selectedFiles.forEach((file) => {
      formData.append("files", file, file.name);
    });

    try {
      await claimRequest(formData).unwrap();
      setIsModalOpen(true);
      setIsFormSubmitted(true);
    } catch (error: unknown) {
      toast({
        description: "Error submitting warranty claim request",
        className: "text-red-500",
      });
    }
  };

  // const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
  //   e.preventDefault();
  //   setFileDragged(true);
  // };

  // const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   setFileDragged(false);
  //   const files = Array.from(e.dataTransfer.files);
  //   if (files.length > 0) {
  //     setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  //   }
  // };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setFileDragged(true); // Highlight the drop area when dragging files
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFileDragged(false); // Reset the border color after drop

    const files = Array.from(e.dataTransfer.files);

    // Ensure the files are added only once (to avoid duplicates)
    const uniqueFiles = files.filter(
      (newFile) =>
        !selectedFiles.some(
          (existingFile) => existingFile.name === newFile.name
        )
    );

    if (uniqueFiles.length > 0) {
      // Update the selected files and clear validation errors
      setSelectedFiles((prevFiles) => [...prevFiles, ...uniqueFiles]);
      clearErrors("customerFiles"); // Clear validation errors for files
    }
  };

  // const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files || []);
  //   setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  // };
  // const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files || []);
  //   setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

  //   if (files.length > 0) {
  //     clearErrors("customerFiles");
  //   }
  // };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);

    // Filter out any files that are already in selectedFiles
    const uniqueNewFiles = newFiles.filter(
      (newFile) =>
        !selectedFiles.some(
          (existingFile) => existingFile.name === newFile.name
        )
    );

    // Update the state with the new unique files
    setSelectedFiles((prevFiles) => [...prevFiles, ...uniqueNewFiles]);

    if (uniqueNewFiles.length > 0) {
      clearErrors("customerFiles"); // Clear validation errors if files are selected
    }
  };

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };
  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal
    router.push("/"); // Redirect to home page
  };

  const renderSelectedFiles = () => {
    if (selectedFiles.length === 0) return null;

    return (
      <div>
        {selectedFiles.map((file, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="mr-2">{file.name}</span>
            <FaTrashAlt
              onClick={() => handleDeleteFile(index)}
              className="text-red-500 cursor-pointer"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="my-10">
      <div>
        <h2 className=" xms:text-lg xls:text-lg sm:text-xl md:text-3xl text-center mb-4 md:mb-10 font-semibold">
          ওয়ারেন্টি দাবি ফর্ম
        </h2>
        <h3 className="xms:text-sm xls:text-sm sm:text-lg md:text-3xl my-1">
          ক্রয়ের তথ্যঃ-
        </h3>
      </div>
      <div className="border border-gray-200 p-2 md:p-4 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="mb-4">
              <label
                htmlFor="orderedPhoneNumber"
                className="block mb-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
              >
                অডারকৃত মোবাইল নম্বর-
              </label>
              <input
                type="text"
                id="orderedPhoneNumber"
                {...register("orderedPhoneNumber")}
                className="w-full border border-gray-300 rounded-md p-2"
                defaultValue={TableData[0]?.shippingDetails?.phoneNumber}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="warrantyCodes"
                className="block mb-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
              >
                পন্যের ওয়ারেন্টি কোড -
              </label>
              <input
                type="text"
                id="warrantyCodes"
                {...register("warrantyCodes")}
                className="w-full border border-gray-300 rounded-md p-2"
                defaultValue={TableData[0]?.warrantyCodes.join(", ") || ""}
                readOnly
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="issueDescription"
              className="block mb-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
            >
              সমস্যাটি বর্ণনা করুন-
            </label>
            <textarea
              id="issueDescription"
              {...register("issueDescription", { required: true })}
              className="w-full border h-[150px] border-gray-300 rounded-md p-2"
              placeholder="আপনি যে সমস্যা দেখে পরিবর্তন করতে চাচ্ছেন   উক্ত সমস্যাটি বিস্তারিত ভাবে লিখুন"
            />
            {errors.issueDescription && (
              <p className="text-red-500 xms:text-xs xls:text-xs sm:text-sm md:text-lg">
                আপনি যে সমস্যা দেখে পরিবর্তন করতে চাচ্ছেন উক্ত সমস্যাটি
                বিস্তারিত ভাবে লিখুন
              </p>
            )}
          </div>

          <div
            className={`${
              fileDragged ? "border-blue-500" : "border-gray-300"
            } border border-dashed rounded-md p-4 mb-4 flex justify-center items-center cursor-pointer`}
            onDragOver={handleDragOver} // Trigger drag over
            onDrop={handleDrop} // Handle drop of files
            style={{
              minHeight: "160px",
              width: "100%",
              background: "#ffffff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <input
              type="file"
              id="customerFile"
              {...register("customerFiles", {
                required: "Please select a file.",
                validate: () =>
                  selectedFiles.length > 0 ||
                  "Please select at least one file.",
              })}
              className="hidden"
              onChange={handleFileInputChange}
              multiple
              onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
            />
            <label
              htmlFor="customerFile"
              className="flex justify-center items-center text-black py-2 px-4 rounded-md cursor-pointer"
              onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
              style={{
                borderRadius: "4px",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
              <AiOutlineCloudUpload
                size={30}
                className="mr-2 xms:text-[9px] xls:text-[9px] sm:text-sm md:text-lg"
              />
              নষ্ট পন্যের ছবি/ভিডিও নির্বাচন করুন
            </label>
          </div>

          {/* Display selected files */}
          <div className="mt-4">
            {selectedFiles.length > 0 ? (
              selectedFiles.map((file, index) => (
                <div key={index} className="text-sm text-gray-700">
                  {}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No files selected</p>
            )}
          </div>

          {/* Error message */}
          {errors.customerFiles && (
            <p className="text-red-500 xms:text-[9px] xls:text-[9px] sm:text-sm md:text-lg">
              {errors.customerFiles.message}
            </p>
          )}

          {renderSelectedFiles()}
          <div>
            <h2 className="xms:text-sm xls:text-sm sm:text-lg md:text-3xl sm:mb-1 md:mb-4">
              ক্রেতার তথ্য
            </h2>
            <div className="mb-4">
              <input
                type="radio"
                id="keepAddress"
                name="addressOption"
                value="keep"
                onChange={() => {
                  setAddressOption("keep");
                  setCustomerData(initialCustomerData);
                }}
                checked={addressOption === "keep"}
              />
              <label
                htmlFor="keepAddress"
                className="ml-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
              >
                পূর্বের ঠিকানা রাখুন
              </label>
              <input
                type="radio"
                id="changeAddress"
                name="addressOption"
                value="change"
                onChange={() => {
                  setAddressOption("change");
                  setCustomerData({
                    fullName: "",
                    phoneNumber: "",
                    fullAddress: "",
                  });
                }}
                checked={addressOption === "change"}
                className="ml-4"
              />
              <label
                htmlFor="changeAddress"
                className="ml-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
              >
                ঠিকানা পরিবর্তন করুন
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="mb-1 md:mb-4">
                <label
                  htmlFor="fullName"
                  className="block mb-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
                >
                  ক্রেতার নাম-
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName", { required: true })}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="ক্রেতার নাম"
                  value={customerData.fullName}
                  readOnly={addressOption === "keep"}
                  onChange={(e) =>
                    setCustomerData((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                />
                {errors.fullName && (
                  <p className="text-red-500 xms:text-xs xls:text-xs sm:text-sm md:text-lg">
                    ক্রেতার নাম প্রয়োজন
                  </p>
                )}
              </div>
              <div className=" mb-1 md:mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
                >
                  মোবাইল নম্বর-
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /^[0-9]*$/,
                  })}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="মোবাইল নম্বর"
                  value={customerData.phoneNumber}
                  readOnly={addressOption === "keep"}
                  onChange={(e) =>
                    setCustomerData((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 xms:text-xs xls:text-xs sm:text-sm md:text-lg">
                    মোবাইল নম্বর প্রয়োজন
                  </p>
                )}
              </div>
            </div>
            <div className="mb-2 md:mb-4">
              <label
                htmlFor="fullAddress"
                className="block mb-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg"
              >
                ঠিকানা-
              </label>
              <input
                type="text"
                id="fullAddress"
                {...register("fullAddress", { required: true })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="ঠিকানা"
                value={customerData.fullAddress}
                readOnly={addressOption === "keep"}
                onChange={(e) =>
                  setCustomerData((prev) => ({
                    ...prev,
                    fullAddress: e.target.value,
                  }))
                }
              />
              {errors.fullAddress && (
                <p className="text-red-500 xms:text-xs xls:text-xs sm:text-sm md:text-lg">
                  ঠিকানা প্রয়োজন
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            {!isFormSubmitted && ( // Render the button only if the form is not submitted
              <EcButton
                type="submit"
                className="text-white"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </EcButton>
            )}
            {isFormSubmitted && (
              <EcButton type="submit" className="text-white" disabled>
                Form Submitted
              </EcButton>
            )}
          </div>
        </form>

        <div>
          <Dialog
            open={isModalOpen}
            onOpenChange={(open) => {
              if (!open) handleModalClose();
            }}
          >
            <DialogContent className="w-11/12 max-w-[630px] mx-auto p-4">
              <DialogHeader>
                <DialogTitle className="text-center my-2 xms:text-xs xls:text-xs sm:text-sm md:text-lg font-bold">
                  অনুরোধ সফলভাবে গ্রহণ করা হয়েছে
                </DialogTitle>
                <DialogDescription className="text-center p-3 text-sm">
                  আপনার অনুরোধটি গ্রহণ করা হয়েছে। আমাদের দক্ষ টিম আপনার সাথে
                  যোগাযোগ করবে, ততক্ষণ পর্যন্ত অপেক্ষা করুন। ধন্যবাদ...
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mx-auto my-1">
                <Link href="/">
                  <EcButton className="text-white ">Go back home</EcButton>
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default WarrantyForm;
