export interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" relative px-5 w-full h-full z-20 sm:w-480  md:w-768 md:px-8 xl:w-1280 xl:mx-auto">
      {children}
    </div>
  );
};
export default Container;
