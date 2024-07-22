export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ disabled, ...rest }: ButtonProps) => {
  return <button {...rest} className="bg-transparent border-none uppercase" />;
};
export default Button;
