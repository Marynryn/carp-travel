import Container from "@/app/components/container";

import Paragraph from "@/app/components/paragraph";
import Title from "@/app/components/title";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover py-54 bg-no-repeat flex justify-center about md:py-16 md:px-0"
    >
      <Container>
        <div className="md:flex md:justify-between md:mb-4">
          <Title>
            WHO<span className="font-medium"> WE ARE</span>
          </Title>
          <div className="w-paragraph-mobile  mb-5 md:mt-2 md:mb-0 md:w-220">
            <Paragraph className="font-extralight text-sm leading-5 md:leading-5 md:text-base">
              <span className="font-normal">a team of enthusiasts</span> who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </Paragraph>
          </div>
        </div>
        <div className="md:flex md:justify-between md:mb-16">
          <div className="w-paragraph-mobile leading-5 mb-10 md:order-2 md:mb-0 md:w-220">
            <Paragraph className="font-extralight text-sm md:leading-5 md:text-base">
              <span className="font-normal">We believe</span>
              that nature has the power to inspire, strengthen character and
              provide new perspectives. Therefore, each of our tours is aimed at
              unlocking your potential, enriching your spiritual world and
              creating unforgettable memories.
            </Paragraph>
          </div>
          <div className="w-paragraph-mobile leading-5 mb-10 mr-0 ml-auto md:order-1 md:mx-0 md:mt-auto md:mb-0 md:w-220">
            <Paragraph className="font-normal text-sm uppercase md:text-base">
              From vacationers
            </Paragraph>
            <Paragraph className="font-normal text-sm uppercase text-right md:text-base">
              to active travelers
            </Paragraph>
            <Paragraph className="font-extralight text-sm tracking-custom-paragraph md:text-base">
              we have a tour for everyone.
            </Paragraph>
          </div>
        </div>
        <div className="md:w-463 md:mr-0 md:ml-auto">
          <Paragraph className="font-extralight text-sm md:text-base">
            <span className="font-normal">We use methods</span>
            that are time-tested and proven. Our expert guides with in-depth
            knowledge of the Carpathian landscapes lead you safely through the
            mysteries of these mountains.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default About;
