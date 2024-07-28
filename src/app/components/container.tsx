export interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" relative px-5 w-full h-full z-20 sm:w-440  md:w-704 md:px-8 xl:w-1232 xl:mx-auto">
      {children}
    </div>
  );
};
export default Container;
