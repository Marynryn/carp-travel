import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import Paragraph from "@/app/components/paragraph";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover bg-no-repeat flex justify-center about"
      style={{
        padding: "55px 0 54px 0",
      }}
    >
      <Container>
        <Heading
          tag="h2"
          className="uppercase text-custom font-thin tracking-custom-heading"
        >
          WHO<span className="font-medium"> WE ARE</span>
        </Heading>
        <div className="w-paragraph-mobile leading-5 mb-5">
          <Paragraph className="font-extralight text-sm">
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </Paragraph>
        </div>
        <div className="w-paragraph-mobile leading-5 mb-10">
          <Paragraph className="font-extralight text-sm">
            <span className="font-normal">We believe</span>
            that nature has the power to inspire, strengthen character and
            provide new perspectives. Therefore, each of our tours is aimed at
            unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </Paragraph>
        </div>
        <div className="w-paragraph-mobile leading-5 mb-10 mr-0 ml-auto">
          <Paragraph className="font-normal text-sm uppercase">
            From vacationers
          </Paragraph>
          <Paragraph className="font-normal text-sm uppercase text-right">
            to active travelers
          </Paragraph>
          <Paragraph className="font-extralight text-sm tracking-custom-paragraph">
            we have a tour for everyone.
          </Paragraph>
        </div>
        <Paragraph className="font-extralight text-sm">
          <span className="font-normal">We use methods</span>
          that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.
        </Paragraph>
      </Container>
    </section>
  );
};

export default About;
