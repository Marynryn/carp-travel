import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import Journey from "./components/journey";
import Paragraph from "@/app/components/paragraph";
import Button from "@/app/components/button";
import JoinButton from "./components/join-button";

const Hero: React.FC = () => {
  return (
    <section className="  pb-14 bg-cover bg-center bg-no-repeat ">
      <Container>
        <Journey />
        <div className="w-button-mobile">
          <Heading
            tag="h1"
            className="uppercase text-custom font-thin tracking-custom-heading mt-6"
          >
            <span className="font-medium">Uncover</span> Carpathian’s Secrets
          </Heading>
        </div>
        <div style={{ width: "157px" }}>
          <Paragraph className="text-custom-10  text-justify font-extralight py-6">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </Paragraph>
        </div>
        <Paragraph className="font-extralight text-justify text-sm ">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </Paragraph>
        <JoinButton />
      </Container>
    </section>
  );
};
export default Hero;
