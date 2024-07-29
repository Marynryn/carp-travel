"use client";
interface IconProps {
  id: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}

const Icon = ({
  id,
  width = 24,
  height = 24,
  fill = "currentColor",
  stroke = "currentColor",
  className = "",
}: IconProps) => {
  const href = `/svg/symbol-defs.svg#${id}`;

  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      className={className}
      aria-hidden="true"
    >
      <use xlinkHref={href} />
    </svg>
  );
};

export default Icon;
