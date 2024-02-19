import * as Yup from "yup";

export const shippingInfo = Yup.object({
  fullName: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone number is required."),
  fullAddress: Yup.string().required("Full address is required"),
  email: Yup.string().email("Invalid email address"),
});
