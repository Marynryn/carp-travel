import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import Journey from "./components/journey";
import Paragraph from "@/app/components/paragraph";

const Hero: React.FC = () => {
  return (
    <section className="  pb-9 bg-cover bg-center bg-no-repeat">
      <Container>
        <Journey />
        <Heading
          tag="h1"
          className="uppercase text-custom font-thin tracking-custom-heading mt-6"
        >
          <span className="font-medium">Uncover</span> Carpathian’s Secrets
        </Heading>
        <Paragraph className="">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </Paragraph>
      </Container>
    </section>
  );
};
export default Hero;
