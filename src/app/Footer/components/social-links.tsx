import Heading from "@/app/components/heading";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 justify-end">
      <Heading tag="h4" className="text-xs font-extralight leading-5 mt-1">
        Follow us
      </Heading>
      <ul className="w-20 text-left">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-sm font-normal  hover:underline focus:underline md:text-base"
          >
            facebook
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-sm font-normal hover:underline focus:underline md:text-base"
          >
            instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-sm font-normal hover:underline focus:underline md:text-base"
          >
            youtube
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-sm font-normal hover:underline focus:underline md:text-base"
          >
            tiktok
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialLinks;
