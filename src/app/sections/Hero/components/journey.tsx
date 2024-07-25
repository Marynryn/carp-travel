import Heading from "@/app/components/heading";

export interface JourneyProps {}

const Journey = ({}: JourneyProps) => {
  return (
    <div className="mr-0 ml-auto" style={{ width: "118px" }}>
      <div style={{ letterSpacing: "1.665px" }}>
        <Heading
          tag="h3"
          className="uppercase text-custom-37 font-thin leading-custom-thin"
        >
          <span className="font-medium">7</span>
          Days
        </Heading>
      </div>
      <span
        className="uppercase text-xs font-light leading-custom-thin"
        style={{
          letterSpacing: "9.48px",
        }}
      >
        Journey
      </span>
    </div>
  );
};
export default Journey;
