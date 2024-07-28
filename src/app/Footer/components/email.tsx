import Heading from "@/app/components/heading";
import React from "react";

const Email = () => {
  return (
    <div className="flex gap-5 justify-end">
      <a
        className="text-sm font-normal hover:underline focus:underline"
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
