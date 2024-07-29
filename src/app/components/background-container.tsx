export interface BackgroundContainerProps {
  children: React.ReactNode;
}
const BackgroundContainer = ({ children }: BackgroundContainerProps) => {
  return (
    <div
      className=" relative  h-full  bg-no-repeat w-full bg"
      style={{
        backgroundImage: "url('/img/bghero.webp')",
      }}
    >
      <div className="relative z-10 box">{children}</div>
    </div>
  );
};
export default BackgroundContainer;
