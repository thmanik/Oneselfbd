import { TPaymentMethod } from "@/types/paymentMethod";

const paymentMethods: TPaymentMethod[] = [
  {
    _id: "1",
    name: "Cash on delivery",
    image: {
      src: "/images/payment_methods/cod.jpg",
      alt: "alt",
    },
    requiredFields: [],
    description: "Pay after receiving your product.",
  },
  {
    _id: "2",
    name: "Nagad",
    image: {
      src: "/images/payment_methods/nagad.png",
      alt: "alt",
    },
    requiredFields: [
      {
        fieldID: "email",
        fieldName: "Email",
        placeHolder: "Enter your email number",
      },
      {
        fieldID: "transactionId",
        fieldName: "Transaction ID",
        placeHolder: "Enter the transaction ID",
      },
    ],
    description:
      "Make PAYMENT to the number below, enter your Nagad number and transaction ID in the form.",
    merchantACInfo: {
      name: "Account number",
      type: "Personal",
      accountNo: "1241245",
    },
  },
  {
    _id: "3",
    name: "Rocket",
    image: {
      src: "/images/payment_methods/rocket.png",
      alt: "alt",
    },
    requiredFields: [
      {
        fieldID: "phoneNumber",
        fieldName: "Phone number",
        placeHolder: "Enter your rocket number",
      },
      {
        fieldID: "transactionId",
        fieldName: "Transaction ID",
        placeHolder: "Enter the transaction ID",
      },
    ],
    description:
      "Make PAYMENT to the number below, enter your Rocket number and transaction ID in the form.",
    merchantACInfo: {
      name: "Account number",
      type: "Personal",
      accountNo: "1-091248",
    },
  },
  {
    _id: "4",
    name: "Bkash",
    image: {
      src: "/images/payment_methods/bkash.png",
      alt: "alt",
    },
    requiredFields: [
      {
        fieldID: "phoneNumber",
        fieldName: "Phone number",
        placeHolder: "Enter your bkash number",
      },
      {
        fieldID: "transactionId",
        fieldName: "Transaction ID",
        placeHolder: "Enter the transaction ID",
      },
    ],
    description:
      "Make PAYMENT to the number below, enter your Bkash number and transaction ID in the form.",
    merchantACInfo: {
      name: "Account number",
      type: "Personal",
      accountNo: "62938",
    },
  },
];

export default paymentMethods;
