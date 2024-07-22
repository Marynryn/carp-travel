import React from "react";

export interface NavigationProps {}

const Navigation = (props: NavigationProps) => {
  return (
    <nav className="" style={{ letterSpacing: " 1.8px" }}>
      <ul className="flex flex-col gap-12 text-center text-lg">
        <li>
          <a href="#about" className="">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="">
            Services
          </a>
        </li>
        <li>
          <a href="#career" className="">
            Career
          </a>
        </li>
        <li>
          <a href="#gallery" className="">
            Gallery
          </a>
        </li>
        <li>
          <a href="#contacts" className="">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
