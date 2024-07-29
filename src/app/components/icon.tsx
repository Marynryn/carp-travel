"use client";

interface IconProps {
  id: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}

const Icon = ({ id, width, height, fill, stroke, className }: IconProps) => {
  const href = `/svg/symbol-defs.svg#${id}`;

  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      className={className}
    >
      <use xlinkHref={href} />
    </svg>
  );
};

export default Icon;
