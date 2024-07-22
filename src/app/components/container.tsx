export interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className="px-5 w-70 h-full">{children}</div>;
};
export default Container;
