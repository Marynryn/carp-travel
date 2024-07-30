import Image from "next/image";

import { Karantina } from "next/font/google";

const font = Karantina({ subsets: ["latin"], weight: ["400"] });
interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`text-center ${className}`} style={{ width: "61px" }}>
      <div className="relative h-5 w-61">
        <picture>
          <source srcSet="/img/logo1x.webp" type="image/webp" />
          <source srcSet="/img/logo2x.webp" type="image/webp" />
          <Image
            src="/img/logo1x.webp"
            alt="Company Logo"
            width={61}
            height={22}
            priority
            className=""
          />
        </picture>
      </div>
      <span
        className={`${font.className} tracking-2.4 text-sm block leading-custom-tight`}
      >
        CarpTravel
      </span>
    </div>
  );
};

export default Logo;
