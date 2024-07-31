export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ disabled, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={` bg-transparent border-none uppercase cursor-pointer inline-block transform duration-300 hover:scale-105 focus:scale-105 ${className}`}
    />
  );
};
export default Button;
