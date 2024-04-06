/* eslint-disable no-console */
"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

type FormData = {
  purchaseDate: string;
  warrantyCode: string;
  issueDescription: string;
  customerFiles: File[];
  customerName: string;
  mobileNumber: string;
  address: string;
  orderedPhoneNumber: string;
};

const WarrantyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [fileDragged, setFileDragged] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const formDataWithFiles = { ...data, customerFiles: selectedFiles };
    console.log("Form Data with Files:", formDataWithFiles);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setFileDragged(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFileDragged(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
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

  useEffect(() => {
    console.log("Selected Files:", selectedFiles);
  }, [selectedFiles]);

  return (
    <div className="my-10">
      <div>
        <h2 className="text-3xl text-center mb-10 font-semibold">
          ওয়ারেন্টি দাবি ফর্ম
        </h2>
        <h3 className="text-3xl my-1">ক্রয়ের তথ্যঃ-</h3>
      </div>
      <div className="border border-gray-200 p-4 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="mb-4">
              <label htmlFor="purchaseDate" className="block mb-2">
                ক্রয়ের তারিখ-
              </label>
              <input
                type="date"
                id="purchaseDate"
                {...register("purchaseDate", { required: true })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="ক্রয়ের তারিখ"
              />
              {errors.purchaseDate && (
                <p className="text-red-500">ক্রয়ের তারিখ প্রয়োজন</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="warrantyCode" className="block mb-2">
                পন্যের ওয়ারেন্টি কোড -
              </label>
              <input
                type="text"
                id="warrantyCode"
                {...register("warrantyCode", { required: true })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="পন্যের ওয়ারেন্টি কোড টি  লিখুন"
              />
              {errors.warrantyCode && (
                <p className="text-red-500">পন্যের ওয়ারেন্টি কোড টি লিখুন</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="orderedPhoneNumber" className="block mb-2">
              অডারকৃত মোবাইল নম্বর-
            </label>
            <input
              type="text"
              id="orderedPhoneNumber"
              {...register("orderedPhoneNumber", {
                required: true,
                pattern: /^[0-9]*$/,
              })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="যে মোবাইল নম্বরথেকে পন্যটি অর্ডার করেছেন ঐ মোবাইল নম্বরটি লিখুন"
            />
            {errors.orderedPhoneNumber && (
              <p className="text-red-500">
                যে মোবাইল নম্বর থেকে পন্যটি অর্ডার করেছেন ঐ মোবাইল নম্বর টি
                লিখুন
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="issueDescription" className="block mb-2">
              সমস্যাটি বর্ণনা করুন-
            </label>
            <textarea
              id="issueDescription"
              {...register("issueDescription", { required: true })}
              className="w-full border h-[150px] border-gray-300 rounded-md p-2"
              placeholder="আপনি যে সমস্যা দেখে পরিবর্তন করতে চাচ্ছেন উক্ত সমস্যাটি বিস্তারিত ভাবে লিখুন"
            />
            {errors.issueDescription && (
              <p className="text-red-500">
                আপনি যে সমস্যা দেখে পরিবর্তন করতে চাচ্ছেন উক্ত সমস্যাটি
                বিস্তারিত ভাবে লিখুন
              </p>
            )}
          </div>

          {/* File input field */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={`${
                fileDragged ? "border-blue-500" : "border-gray-300"
              } border border-dashed rounded-md p-4 mb-4 flex justify-center items-center cursor-pointer`}
              onDragOver={(e) => {
                e.preventDefault();
                handleDragOver(e);
              }}
              onDrop={(e) => {
                e.preventDefault();
                handleDrop(e);
              }}
              style={{
                minHeight: "160px",
                width: "100%",
                background: "#ffffff",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => document.getElementById("customerFile")?.click()}
            >
              <input
                type="file"
                id="customerFile"
                {...register("customerFiles", { required: true })}
                className="hidden"
                onChange={handleFileInputChange}
                multiple
                onClick={(e) => e.stopPropagation()}
                style={{ width: "100%" }}
              />

              <label
                htmlFor="customerFile"
                className="flex justify-center items-center text-black py-2 px-4 rounded-md cursor-pointer"
                style={{
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                <AiOutlineCloudUpload size={30} className="mr-2" />
                নষ্ট পন্যের ছবি/ভিডিও নির্বাচন করুন
              </label>
            </div>
            {errors.customerFiles && (
              <p className="text-red-500">
                নষ্ট পন্যের ছবি/ভিডিও নির্বাচন করুন
              </p>
            )}
          </div>

          {renderSelectedFiles()}

          <h2 className="text-xl mb-4">ক্রেতার তথ্য</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="mb-4">
              <label htmlFor="customerName" className="block mb-2">
                ক্রেতার নাম-
              </label>
              <input
                type="text"
                id="customerName"
                {...register("customerName", { required: true })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="ক্রেতার নাম"
              />
              {errors.customerName && (
                <p className="text-red-500">ক্রেতার নাম প্রয়োজন</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block mb-2">
                মোবাইল নম্বর-
              </label>
              <input
                type="text"
                id="mobileNumber"
                {...register("mobileNumber", {
                  required: true,
                  pattern: /^[0-9]*$/,
                })}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="মোবাইল নম্বর"
              />
              {errors.mobileNumber && (
                <p className="text-red-500">মোবাইল নম্বর প্রয়োজন</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">
              ঠিকানা-
            </label>
            <input
              type="text"
              id="address"
              {...register("address", { required: true })}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="ঠিকানা"
            />
            {errors.address && <p className="text-red-500">ঠিকানা প্রয়োজন</p>}
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WarrantyForm;
