export interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className=" relative px-5 w-70 h-full z-20 ">{children}</div>;
};
export default Container;
