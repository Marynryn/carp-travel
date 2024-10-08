import Container from "@/components/container";
import Heading from "@/components/heading";
import Paragraph from "@/components/paragraph";
import Journey from "./components/journey";
import JoinButton from "./components/join-button";

const Hero: React.FC = () => {
  return (
    <section className=" relative pb-14 pt-0  flex justify-center md:pb-16 xl:pb-20 hero">
      <Container>
        <div
          className="md:flex md:mt-7 md:gap-12 xl:mt-0 xl:gap-72
        "
        >
          <div>
            <div className="md:hidden">
              <Journey />
            </div>

            <div className="w-button-mobile md:w-full">
              <Heading
                tag="h1"
                className="uppercase text-custom font-thin tracking-custom-heading mt-6 md:text-67 md:-tracking-2.68 md:mt-0 md:leading-80 xl:text-98 xl:-tracking-3.92 xl:leading-tight"
              >
                <span className="font-medium">Uncover</span> Carpathian’s
                Secrets
              </Heading>
            </div>
            <div className="w-157 md:w-275 xl:w-full">
              <Paragraph className="text-custom-10  text-justify font-extralight my-6 md:text-sm md:-tracking-custom-heading md:mt-16 md:mb-0 xl:text-base xl:mt-32">
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
                Bukovel
              </Paragraph>
            </div>
          </div>
          <div>
            <div className=" hidden md:block">
              <Journey />
            </div>
            <Paragraph className="font-extralight text-justify text-sm md:mt-14 md:mb-7 md:text-base md:leading-5 md:tracking-wide xl:mt-44 xl:leading-6 xl:text-lg">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </Paragraph>
            <JoinButton />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
