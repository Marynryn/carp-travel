import React from "react";
import Phone from "./phone";
import Email from "./email";
import SocialLinks from "./social-links";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-6 text-right mt-9 mb-3 md:flex-row md:gap-24 ">
      <div className="md:ml-8">
        <Phone />
        <Email />
      </div>

      <SocialLinks />
    </div>
  );
};
export default Contacts;
