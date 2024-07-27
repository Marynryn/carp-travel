import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import Paragraph from "@/app/components/paragraph";
import React from "react";
import lists, { List } from "./career-data";
import ContactForm from "./components/join-form";

const Career = () => {
  return (
    <section>
      <div
        className=" bg-cover  career"
        style={{
          backgroundImage: "url('/img/bgcareer.webp')",
          backgroundPosition: " center top",
          padding: "56px 0",
        }}
      >
        <Container>
          <Heading
            tag="h2"
            className="uppercase text-custom font-thin tracking-custom-heading"
          >
            Choose <span className="font-medium">US</span>
          </Heading>
          <div className="w-paragraph-mobile text-left mr-0 ml-auto mt-6 mb-9">
            <Paragraph className="font-extralight text-sm leading-5">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.{" "}
            </Paragraph>
            <Heading
              tag="h3"
              className="text-3xl font-extralight mt-9 uppercase "
            >
              Why us ?
            </Heading>
          </div>
          <ul className=" text-right mr-auto ml-0 " style={{ width: "181px" }}>
            {lists.map((el: List, index: number) => (
              <li key={index} className="mt-4">
                <Heading
                  tag="h4"
                  className="leading-5 font-normal text-sm mb-2"
                >
                  {el.title}
                </Heading>
                <Paragraph className="leading-5 font-extralight text-xs">
                  {el.description}
                </Paragraph>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div
        className=" bg-cover  career"
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
