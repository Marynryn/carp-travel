export interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className="px-4 w-70 ">{children}</div>;
};
export default Container;
