import Image from "next/image";
import Link from "next/link";
import { Karantina } from "next/font/google";

const font = Karantina({ subsets: ["latin"], weight: ["400"] });
interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div
     
      className={`text-center ${className}`}
      style={{ width: "61px" }}
    >
      <div className="relative" style={{ width: "59px", height: "20px" }}>
        <Image
          src="/img/logo1x.webp"
          alt="Company Logo"
          width={59}
          height={20}
          priority
          className="object-contain"
        />
      </div>
      <span
        className={`${font.className} tracking-custom text-sm block leading-custom-tight`}
      >
        CarpTravel
      </span>
    </div>
  );
};

export default Logo;
