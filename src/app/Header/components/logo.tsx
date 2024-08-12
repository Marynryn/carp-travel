import Image from "next/image";
import { Karantina } from "next/font/google";

const font = Karantina({ subsets: ["latin"], weight: ["400"] });
interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="relative w-[59px] h-5 lg:w-61">
        <Image
          src="/img/logo1x.webp"
          sizes="(max-width:768px ) 59px, 61px"
          alt="Company Logo"
          width={61}
          height={22}
          priority
          className=""
        />
      </div>
      <span
        className={`${font.className} tracking-2.4 text-sm block leading-custom-tight `}
      >
        CarpTravel
      </span>
    </div>
  );
};

export default Logo;
