import * as Yup from "yup";

export const shippingInfo = Yup.object({
  fullName: Yup.string()
    .required("Name is required")
    .max(20, "Name can not be greater than 20 character."),
  phoneNumber: Yup.string()
    .required("Phone number is required.")
    .matches(
      /^(?!.*[a-zA-Z])01\d{9}$/,
      "Please provide a valid mobile number starting with 01 and with a total of 11 digits."
    ),
  fullAddress: Yup.string().required("Full address is required"),
  email: Yup.string().email("Invalid email address").optional().nullable(),
  notes: Yup.string().optional().nullable(),
});
