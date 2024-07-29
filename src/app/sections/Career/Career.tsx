import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import Paragraph from "@/app/components/paragraph";
import React from "react";
import lists, { List } from "./career-data";
import ContactForm from "./components/join-form";
import Title from "@/app/components/title";

const Career = () => {
  return (
    <section id="career">
      <div
        className=" bg-cover py-54 career flex justify-center md:py-16"
        style={{
          backgroundImage: "url('/img/bgcareer.webp')",
          backgroundPosition: " center top",
        }}
      >
        <Container>
          <div className="md:flex md:justify-between">
            <Title>
              Choose <span className="font-medium">US</span>
            </Title>
            <div className="w-paragraph-mobile text-left mr-0 ml-auto mt-6 mb-9 md:w-220 md:m-0">
              <Paragraph className="font-extralight text-sm leading-5 md:text-13">
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.{" "}
              </Paragraph>
            </div>
          </div>
          <div className="w-paragraph-mobile text-left mr-0 ml-auto mt-6 mb-9 md:mt-1 md:text-left md:ml-20 md:mr-auto md:mb-14">
            <Heading
              tag="h3"
              className="text-3xl font-extralight mt-9 uppercase md:mt-0 "
            >
              Why us ?
            </Heading>
          </div>
          <div className="md:flex">
            <ul className=" text-right mr-auto ml-0 w-paragraph-mobile md:w-225 md:-mt-6 md:mr-5">
              {lists.map((el: List, index: number) => (
                <li key={index} className="mt-4 md:mt-6">
                  <Heading
                    tag="h4"
                    className="leading-5 font-normal text-sm mb-2 md:text-base"
                  >
                    {el.title}
                  </Heading>
                  <Paragraph className="leading-5 font-extralight text-xs ">
                    {el.description}
                  </Paragraph>
                </li>
              ))}
            </ul>
            <div className="hidden md:block">
              <Paragraph className="font-extralight text-sm leading-5 w-paragraph-mobile mr-0 ml-auto md:mx-0 md:text-13">
                Don`t miss your opportunity! Fill out the form right now and
                join our team!
              </Paragraph>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
      <div
        className=" bg-cover  career flex justify-center md:hidden"
        style={{
          backgroundImage: "url('/img/bgcareer.webp')",
          backgroundPosition: " center top",
          padding: "56px 0",
        }}
      >
        <Container>
          <Paragraph className="font-extralight text-sm leading-5 w-paragraph-mobile mr-0 ml-auto">
            Don`t miss your opportunity! Fill out the form right now and join
            our team!
          </Paragraph>
          <ContactForm />
        </Container>
      </div>
    </section>
  );
};
export default Career;
