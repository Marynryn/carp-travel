"use client";

import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../schema/schema";
import toast from "react-hot-toast";

import InputField from "@/app/components/input-field";
import Checkbox from "./checkbox";
import PhoneInputField from "./phone-input";

export interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message?: string;
  termsAccepted: boolean;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    const fullPhoneNumber = `+38${data.phone}`;
    const fullData = { ...data, phone: fullPhoneNumber };

    try {
      localStorage.setItem("formData", JSON.stringify(fullData));

      toast.success("Form submitted successfully!");
      reset();
    } catch (error: any) {
      toast.error("Error submitting form: " + error.message);
    }
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) => {
    console.error("Error submitting:", errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="mt-6">
      <div className="block ">
        <label
          htmlFor="fullName"
          className={`block text-left text-xs font-extralight tracking-2.4 leading-6  ${
            errors.fullName?.message ? "text-red-700" : ""
          }`}
        >
          Full name
        </label>
        <InputField
          name="fullName"
          placeholder="John Smith"
          register={register}
          error={errors.fullName?.message}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className={`block text-left text-xs font-extralight tracking-2.4 leading-6  ${
            errors.email?.message ? "text-red-700" : ""
          }`}
        >
          Email
        </label>
        <InputField
          name="email"
          type="email"
          placeholder="johnrosie@gmail.com"
          register={register}
          error={errors.email?.message}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className={`block text-left text-xs font-extralight tracking-2.4 leading-6  ${
            errors.phone?.message ? "text-red-700" : ""
          }`}
        >
          Phone
        </label>
        <PhoneInputField register={register} error={errors.phone?.message} />
      </div>

      <div>
        <label
          htmlFor="position"
          className={`block text-left text-xs font-extralight tracking-2.4 leading-6  ${
            errors.position?.message ? "text-red-700" : ""
          }`}
        >
          Position
        </label>
        <InputField
          name="position"
          placeholder="Movie maker"
          register={register}
          error={errors.position?.message}
        />
      </div>

      <div className=" mb-4">
        <label
          htmlFor="message"
          className="block text-left text-xs font-extralight tracking-2.4 leading-6"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="w-full border-none mt-2  h-36 text-13 font-extralight  resize-none"
          style={{ backgroundColor: "var(--input-field)" }}
        />
      </div>
      <Checkbox
        name="termsAccepted"
        register={register}
        setValue={setValue}
        error={errors.termsAccepted?.message}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="border-none bg-transparent  uppercase text-3xl font-medium  inline-block"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
