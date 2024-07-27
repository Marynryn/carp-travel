import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import React from "react";
const Gallery = () => {
  return (
    <section
      className=" bg-cover  career"
      style={{
        backgroundImage: "url('/img/bggallery.webp')",
        backgroundPosition: " center top",
        padding: "56px 0",
      }}
    >
      <Container>
        <Heading
          tag="h2"
          className="uppercase text-custom font-thin tracking-custom-heading"
        >
          our <span className="font-medium">gallery</span>
        </Heading>
      </Container>
    </section>
  );
};

export default Gallery;
