import Heading from "@/app/components/heading";

export interface JourneyProps {}

const Journey = ({}: JourneyProps) => {
  return (
    <div className="mr-0 ml-auto w-118 md:w-230 text-center ">
      <div>
        <Heading
          tag="h3"
          className="uppercase tracking--custom-heading text-custom-37 font-thin leading-custom-thin md:tracking-9.48 md:text-67 md:leading-none"
        >
          <span className="font-medium leading-custom-thin md:tracking-9.48  ">
            7
          </span>
          <span className="relative md:-left-3 md:tracking-9.48 ">Days</span>
        </Heading>
      </div>
      <span className="uppercase tracking-9.48 text-xs font-light leading-custom-thin md:tracking-25.9 md:text-sm ">
        Journey
      </span>
    </div>
  );
};
export default Journey;
