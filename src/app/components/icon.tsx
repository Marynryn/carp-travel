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
}: IconProps) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    className={className}
  >
    <use xlinkHref={`/svg/symbol-defs.svg#${id}`} />
  </svg>
);

export default Icon;
