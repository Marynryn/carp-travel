import React from "react";
export interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: TitleProps) => {
  return (
    <h2
      className={`uppercase text-custom font-thin tracking-custom-heading md:text-67 md:-tracking-2.68 md:leading-80 xl:text-98 xl:-tracking-3.92 xl:leading-tight ${className}`}
    >
      {children}
    </h2>
  );
};
export default Title;
