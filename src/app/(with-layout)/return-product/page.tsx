"use client";
import EcButton from "@/components/EcButton/EcButton";
import React from "react";

const ReturnPolicyPage: React.FC = () => {
  const handleRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/1dB5WDBUcWtlxp3NTgET5uxUIjk8OTc_IQxVg4OJ_b54/edit",
      "_blank"
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-14">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ONESELF রিটার্ন পলিসি
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">ভূমিকা:</h2>
        <p className="mt-2">
          প্রিয় গ্রাহক! Oneself গ্রাহকদের সর্বোত্তম সেবা নিশ্চিত করার জন্য
          প্রতিশ্রুতিবদ্ধ। আমরা চাই আপনি আমাদের পণ্য কিনে সন্তুষ্ট হোন। তবে কোনো
          কারণে যদি আপনাকে পণ্য ফেরত দিতে হয়, তাহলে এই নীতিমালা আপনাকে সঠিক
          পদ্ধতি সম্পর্কে জানাবে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">রিটার্নের সময়সীমা:</h2>
        <p className="mt-2">
          পণ্যটি পাওয়ার ২৪ ঘন্টার মধ্যে রিটার্নের জন্য আবেদন করতে হবে।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">কখন পণ্য ফেরত নেয়া হবে:</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>
            দোষপূর্ণ পণ্য: যদি কোন পণ্যে ম্যানুফ্যাকচারিং এর দোষ থাকে বা পণ্য
            কাজ না করে।
          </li>
          <li>ভুল পণ্য: যদি আপনাকে ভুল পণ্য পাঠানো হয়।</li>
          <li>ক্ষতিগ্রস্ত পণ্য: যদি পণ্য ডেলিভারির সময় ক্ষতিগ্রস্ত হয়।</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">কখন পণ্য ফেরত নেয়া হবে না:</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>
            গ্রাহকের ব্যবহারজনিত ক্ষতি: যদি পণ্যটি ব্যবহারের কারণে ক্ষতিগ্রস্ত
            হয়।
          </li>
          <li>
            প্যাকেজিং ক্ষতিগ্রস্ত: যদি পণ্যের মূল প্যাকেজিং ক্ষতিগ্রস্ত হয়।
          </li>
          <li>
            অনুমোদিত সময়ের বাইরে: নির্ধারিত সময়ের পরে পণ্য ফেরত দিতে আসলে।
          </li>
          <li>সেলের আইটেম: সেলের আইটেম সাধারণত ফেরতযোগ্য হয় না।</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">পণ্য ফেরতের পদ্ধতি:</h2>
        <p className="mt-2">
          পণ্য ফেরত দেওয়ার জন্য কারণ উল্লেখ করে আমাদের কাস্টমার কেয়ারে দ্রুত
          যোগাযোগ করুন। পণ্যের দোষ বা সমস্যার ছবি বা ভিডিও প্রমাণ হিসেবে সংরক্ষণ
          করুন। পণ্যটিকে মূল প্যাকেজিংসহ সব ধরনের এক্সেসরিস এবং ওয়ারেন্টি
          কার্ডসহ ফেরত দিন। এবং আমাদের নির্দেশনা অনুযায়ী পণ্যটি আমাদের কাছে
          ফেরত পাঠান।
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">টাকা রিফান্ড প্রক্রিয়া:</h2>
        <p className="mt-2">
          রিটার্ন পণ্যটি আমাদের হাতে পৌঁছানোর পরে পণ্যটি পরীক্ষা করে নিশ্চিত
          হওয়ার পর ৩ কার্যদিবসের মধ্যে আপনার পেমেন্ট ফেরত দেওয়া হইবে। রিফান্ডের
          জন্য আপনি যে পেমেন্ট পদ্ধতি ব্যবহার করবেন, সেই পদ্ধতিতে টাকা ফেরত
          দেয়া হবে।
        </p>
      </section>

      <div className="flex justify-center">
        <EcButton onClick={handleRedirect} className=" text-white py-2 px-6 ">
          রিটার্নের জন্য আবেদন করুন
        </EcButton>
      </div>

      <section className="mt-8 mx-auto flex">
        <h2 className="text-xl font-semibold">যোগাযোগ:</h2>
        <p className=" ms-2 text-xl">01967 214 215</p>
      </section>
    </div>
  );
};

export default ReturnPolicyPage;
