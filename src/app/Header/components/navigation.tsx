import React from "react";
import { Link } from "react-scroll";
import { Item, links } from "./data-navigation";

export interface NavigationProps {
  onClose?: () => void;
}

const Navigation = ({ onClose }: NavigationProps) => {
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav style={{ letterSpacing: "1.8px" }}>
      <ul className="flex flex-col gap-12 text-center text-lg md:flex-row md:gap-6 md:text-sm md:tracking-1.26 xl:gap-14">
        {links.map((link: Item, index) => (
          <li key={index}>
            <Link
              to={link.to}
              onClick={handleLinkClick}
              smooth={true}
              duration={500}
              role="link"
              tabIndex={0}
              className="cursor-pointer  inline-block transform transition-transform duration-300 hover:underline focus:underline "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
