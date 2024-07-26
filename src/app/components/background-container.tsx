import Gradient from "./gradient";

export interface BackgroundContainerProps {
  children: React.ReactNode;
}
const BackgroundContainer = ({ children }: BackgroundContainerProps) => {
  return (
    <div
      className=" relative h-full h-screen"
      style={{
        background:
          "url('/img/mobile/bghero.webp') lightgray 50% / cover no-repeat",
      }}
    >
      <Gradient />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
export default BackgroundContainer;
