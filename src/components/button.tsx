export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ disabled, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={` bg-transparent border-none uppercase cursor-pointer inline-block transform duration-300 hover:underline focus:underline ${className}`}
    />
  );
};
export default Button;
