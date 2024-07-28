import Heading from "@/app/components/heading";
import React from "react";

const Phone = () => {
  return (
    <div className="flex gap-5 justify-end">
      <ul className="">
        <li>
          <a
            className="text-sm font-normal hover:underline focus:underline"
            href="tel:380981234567"
          >
            +38 (098) 12 34 567
          </a>
        </li>
        <li>
          <a
            className="text-sm font-normal hover:underline focus:underline"
            href="tel:380981234567"
          >
            +38 (098) 12 34 567
          </a>
        </li>
      </ul>
      <Heading tag="h4" className="text-xs font-extralight mt-1 leading-5">
        Phone number
      </Heading>
    </div>
  );
};
export default Phone;
