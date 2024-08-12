import React from "react";

interface HeadingProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ tag, children, className = "" }: HeadingProps) => {
  return React.createElement(tag, { className }, children);
};

export default Heading;
