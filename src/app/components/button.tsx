export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ disabled, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={` bg-transparent border-none uppercase cursor-pointer inline-block transform duration-300 hover:scale-110 focus:scale-110 ${className}`}
    />
  );
};
export default Button;
