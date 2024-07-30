"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../sections/Career/components/join-form";
import Icon from "./icon-svg";

interface InputFieldProps {
  name: keyof FormValues;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = "text",
  placeholder,
  register,
  error,
  className,
}) => {
  return (
    <>
      <input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full border-none mt-1 h-6 text-13 pl-2 xl:text-xl ${className} ${
          error ? "text-red-700 placeholder:text-red-700" : ""
        } placeholder:text-13  placeholder:font-extralight `}
        style={{ backgroundColor: "var(--input-field)" }}
      />
      {error ? (
        <div
          className="flex h-4 text-xs items-center justify-end  mr-o ml-auto"
          style={{ color: "var(--error-color)" }}
        >
          <Icon id="icon-x" width={16} height={16} fill="var(--error-color)" />
          <span
            className="font-extralight text-xs tracking-2.4 leading-5 h-4"
            style={{ color: "var(--error-color)" }}
          >
            {error}
          </span>
        </div>
      ) : (
        <div className="h-4"></div>
      )}
    </>
  );
};

export default InputField;
