import Heading from "@/components/heading";

export interface JourneyProps {}

const Journey = ({}: JourneyProps) => {
  return (
    <div className="mr-0 ml-auto w-118 md:w-230 text-center xl:mx-0 xl:w-295">
      <div>
        <Heading
          tag="h3"
          className="uppercase tracking--custom-heading text-custom-37 font-thin leading-custom-thin md:tracking-9.48 md:text-67 md:leading-none xl:text-98 xl:-tracking-3.92"
        >
          <span className="font-medium leading-custom-thin md:tracking-9.48  ">
            7
          </span>
          <span className=" font-thin relative md:-left-3 md:tracking-9.48 xl:tracking-wide">
            Days
          </span>
        </Heading>
      </div>
      <span className="uppercase tracking-8.71 text-xs font-light leading-custom-thin md:tracking-25.9 md:text-sm xl:text-base xl:tracking-36.48 xl:block">
        Journey
      </span>
    </div>
  );
};
export default Journey;
