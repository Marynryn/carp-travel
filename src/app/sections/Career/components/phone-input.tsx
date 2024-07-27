"use client";

import React, { ChangeEvent, FC, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "./contact-form";
import Icon from "@/app/components/icon";

interface PhoneInputProps {
  register: UseFormRegister<FormValues>;
  error?: string;
}

const PhoneInput: FC<PhoneInputProps> = ({ register, error }) => {
  const [phone, setPhone] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/\D/g, "");
    setPhone(cleanValue);
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <span
          className="absolute left-0 pl-2 text-13 h-6 top-0 font-extralight leading-6 text-center"
          style={{ marginTop: "5px" }}
        >
          + 38
        </span>
        <input
          type="text"
          placeholder="(097) 12 34 567"
          className={`w-full border-none mt-1 h-6 text-13 font-extralight pl-10  ${
            error ? "text-red-700" : ""
          } placeholder:text-13 placeholder:font-extralight `}
          style={{ backgroundColor: "var(--input-field)" }}
          {...register("phone", {
            onChange: handleChange,
          })}
        />
      </div>
      {error ? (
        <div
          className="flex text-xs h-4 items-center justify-end  "
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

export default PhoneInput;
