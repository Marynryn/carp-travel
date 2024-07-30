"use client";

import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import InputField from "@/app/components/input-field";
import { contactSchema } from "@/schema/schema";
import Button from "@/app/components/button";

export interface ContactFormValues {
  fullName: string;
  email: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (
    data: ContactFormValues
  ) => {
    try {
      localStorage.setItem("ContactFormData", JSON.stringify(data));

      toast.success("Form submitted successfully!");
      reset();
    } catch (error: any) {
      toast.error("Error submitting form: " + error.message);
    }
  };

  const onError: SubmitErrorHandler<ContactFormValues> = (errors) => {
    console.error("Error submitting:", errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="mt-6 md:mt-16 md:flex md:gap-5 xl:w-full xl:block"
    >
      <div className="md:w-220 xl:w-full xl:flex xl:gap-28">
        <div className="block xl:w-full">
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

        <div className="xl:w-full">
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
      </div>
      <div className="w-full xl:mt-4">
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
            className="w-full border-none mt-2  h-36 text-13 font-extralight  resize-none md:mt-1 md:h-220"
            style={{ backgroundColor: "var(--input-field)" }}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="border-none bg-transparent  uppercase text-3xl font-medium  inline-block"
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
