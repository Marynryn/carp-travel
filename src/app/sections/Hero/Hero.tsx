import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import Journey from "./components/journey";
import Paragraph from "@/app/components/paragraph";
import Button from "@/app/components/button";
import JoinButton from "./components/join-button";

const Hero: React.FC = () => {
  return (
    <section className="  pb-14 bg-cover bg-center pt-0 bg-no-repeat flex justify-center md:pb-16">
      <Container>
        <div className="md:flex md:mt-7 md:gap-12">
          <div>
            <div className="md:hidden">
              <Journey />
            </div>

            <div className="w-button-mobile md:w-full">
              <Heading
                tag="h1"
                className="uppercase text-custom font-thin tracking-custom-heading mt-6 md:text-67 md:-tracking-2.68 md:mt-0 md:leading-80"
              >
                <span className="font-medium">Uncover</span> Carpathian’s
                Secrets
              </Heading>
            </div>
            <div className="w-157 md:w-275">
              <Paragraph className="text-custom-10  text-justify font-extralight my-6 md:text-sm md:-tracking-custom-heading md:mt-16 md:mb-0">
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
                Bukovel
              </Paragraph>
            </div>
          </div>
          <div>
            <div className=" hidden md:block">
              <Journey />
            </div>
            <Paragraph className="font-extralight text-justify text-sm md:mt-14 md:mb-7 md:text-base md:leading-5 md:tracking-wide">
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
