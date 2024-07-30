import React from "react";
import Heading from "@/app/components/heading";

const Email = () => {
  return (
    <div className="flex gap-5 justify-end xl:justify-start xl:mt-16">
      <a
        className="text-sm font-normal hover:underline focus:underline md:text-base xl:w-220 xl:text-lg"
        href="mailto:support@carptravel.com"
      >
        support@carptravel.com
      </a>
      <div className="w-20 text-left">
        <Heading tag="h4" className="text-xs font-extralight leading-5">
          E-mail
        </Heading>
      </div>
    </div>
  );
};
export default Email;
