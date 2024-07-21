interface IconProps {
  id: string;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const Icon = ({
  id,
  width = 24,
  height = 24,
  fill = "currentColor",
  className = "",
}: IconProps) => (
  <svg width={width} height={height} fill={fill} className={className}>
    <use xlinkHref={`/sprite.svg#${id}`} />
  </svg>
);

export default Icon;
