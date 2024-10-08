import React from "react";
import Heading from "@/components/heading";

const Phone = () => {
  return (
    <div className="flex gap-5 justify-end xl:justify-start">
      <ul className="xl:w-220">
        <li>
          <a
            className="text-sm font-normal hover:underline focus:underline md:text-base xl:text-lg"
            href="tel:380981234567"
          >
            +38 (098) 12 34 567
          </a>
        </li>
        <li>
          <a
            className="text-sm font-normal hover:underline focus:underline md:text-base xl:text-lg"
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
