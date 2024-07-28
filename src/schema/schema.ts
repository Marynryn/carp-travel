import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "  Name must be at least 2 characters")
    .matches(
      /^[a-zA-Zа-яА-Я\s]*$/,
      " First Name can only contain letters and spaces"
    ),
  email: yup.string().email("Incorrect email ").required("Email is required"),
  position: yup.string().required("Position is required"),
  phone: yup
    .string()
    .matches(/^(?:\(\d{3}\)|\d{3})\d{7}$/, "Incorrect Phone")
    .max(10, " Incorrect Phone")
    .required("Phone is required"),
  message: yup.string(),
  termsAccepted: yup
    .boolean()
    .oneOf([true], "You must accept the terms ")
    .required("You must accept the terms "),
});

export const contactSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "  Name must be at least 2 characters")
    .matches(
      /^[a-zA-Zа-яА-Я\s]*$/,
      " First Name can only contain letters and spaces"
    ),
  email: yup.string().email("Incorrect email ").required("Email is required"),
  message: yup.string(),
});
