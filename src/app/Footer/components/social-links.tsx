import Heading from "@/app/components/heading";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 justify-end xl:justify-start xl:ml-8">
      <Heading
        tag="h4"
        className="text-xs font-extralight leading-5 mt-1 xl:order-2"
      >
        Follow us
      </Heading>
      <ul className="w-20 text-left xl:order-1 xl:w-220 xl:text-right">
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-sm font-normal  hover:underline focus:underline md:text-base xl:text-lg"
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
            className="text-sm font-normal hover:underline focus:underline md:text-base xl:text-lg"
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
            className="text-sm font-normal hover:underline focus:underline md:text-base xl:text-lg"
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
            className="text-sm font-normal hover:underline focus:underline md:text-base xl:text-lg"
          >
            tiktok
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialLinks;
