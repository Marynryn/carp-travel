import React from "react";
import Container from "@/app/components/container";
import Paragraph from "@/app/components/paragraph";
import Title from "@/app/components/title";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-cover py-54 bg-no-repeat flex justify-center about md:py-16 md:px-0 xl:py-20"
    >
      <Container>
        <div className="md:flex md:justify-between md:mb-4 xl:gap-6 xl:justify-normal">
          <Title>
            WHO<span className="font-medium"> WE ARE</span>
          </Title>
          <div className="w-paragraph-mobile  mb-5 md:mt-2 md:mb-0 md:w-220 xl:mt-0 xl:w-295">
            <Paragraph className="font-extralight text-sm leading-5 md:leading-5 md:text-base xl:text-lg xl:leading-6">
              <span className="font-normal">a team of enthusiasts</span> who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </Paragraph>
          </div>
        </div>
        <div className="md:flex md:justify-between md:mb-16 xl:block xl:mb-0">
          <div className="w-paragraph-mobile leading-5 mb-10 md:order-2 md:mb-0 md:w-220 xl:order-none xl:ml-630 ">
            <Paragraph className="font-extralight text-sm md:leading-5 md:text-base xl:text-lg xl:leading-6">
              <span className="font-normal">We believe</span>
              that nature has the power to inspire, strengthen character and
              provide new perspectives. Therefore, each of our tours is aimed at
              unlocking your potential, enriching your spiritual world and
              creating unforgettable memories.
            </Paragraph>
          </div>
          <div className="md:order-1 xl:flex xl:gap-80 xl:mt-72">
            <div className="hidden xl:block xl:w-605">
              {" "}
              <Paragraph className="font-extralight text-sm md:text-base xl:text-lg xl:leading-6">
                <span className="font-normal">We use methods</span>
                that are time-tested and proven. Our expert guides with in-depth
                knowledge of the Carpathian landscapes lead you safely through
                the mysteries of these mountains.
              </Paragraph>
            </div>
            <div className="w-paragraph-mobile leading-5 mb-10 mr-0 ml-auto  md:mx-0 md:mt-auto md:mb-0 md:w-220 xl:w-295 ">
              <Paragraph className="font-normal text-sm uppercase md:text-base xl:text-lg xl:leading-6">
                From vacationers
              </Paragraph>
              <Paragraph className="font-normal text-sm uppercase text-right md:text-base xl:text-lg xl:leading-6">
                to active travelers
              </Paragraph>
              <Paragraph className="font-extralight text-sm tracking-custom-paragraph md:text-base xl:text-lg xl:leading-6">
                we have a tour for everyone.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="md:w-463 md:mr-0 md:ml-auto">
          <Paragraph className="font-extralight text-sm md:text-base xl:hidden">
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
