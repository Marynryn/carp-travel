import React from "react";
import { Link } from "react-scroll";
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
    <nav className="" style={{ letterSpacing: " 1.8px" }}>
      <ul className="flex flex-col gap-12 text-center text-lg md:flex-row md:gap-6 md:text-sm md:tracking-1.26 xl:gap-14">
        <li>
          <Link
            to="about"
            onClick={handleLinkClick}
            smooth={true}
            duration={500}
            className=""
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            onClick={handleLinkClick}
            smooth={true}
            duration={500}
            className=""
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="career"
            onClick={handleLinkClick}
            smooth={true}
            duration={500}
            className=""
          >
            Career
          </Link>
        </li>
        <li>
          <Link
            to="gallery"
            onClick={handleLinkClick}
            smooth={true}
            duration={500}
            className=""
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="contacts"
            onClick={handleLinkClick}
            smooth={true}
            duration={500}
            className=""
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
