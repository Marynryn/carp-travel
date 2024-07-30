"use client";

import React from "react";
import { UseFormRegister, Path, UseFormSetValue } from "react-hook-form";
import Icon from "../../../components/icon-svg";
import { FormValues } from "./join-form";

interface CheckboxProps {
  name: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  register,
  setValue,
  error,
}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    setValue(name, !isChecked);
  };

  return (
    <div className="">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          id={name}
          {...register(name)}
          className="hidden"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <button
          onClick={handleCheckboxChange}
          type="button"
          className="w-6 h-6 border border-white inline-block "
          style={{ padding: "3px" }}
        >
          {isChecked ? (
            <div className="w-4 h-4 bg-white "></div>
          ) : (
            <div className="w-4 h-4 bg-white opacity-30 "></div>
          )}
        </button>
        <span className="text-xs font-extralight leading-6">
          I confirm my consent to the processing of personal data.
        </span>
      </label>

      {error ? (
        <div
          className=" h-4 flex text-xs items-center justify-end"
          style={{ color: "var(--error-color)" }}
        >
          <Icon id="icon-x" width={16} height={16} fill="var(--error-color)" />
          <span className="font-extralight text-xs tracking-2.4 leading-5">
            {error}
          </span>
        </div>
      ) : (
        <div className="h-4"></div>
      )}
    </div>
  );
};

export default Checkbox;
