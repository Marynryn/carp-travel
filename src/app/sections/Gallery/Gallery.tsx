"use client";

import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import React from "react";
import SliderGallery from "./components/slider-gallery";
const Gallery = () => {
  return (
    <section
      className=" bg-cover flex justify-center"
      style={{
        backgroundImage: "url('/img/bggallery.webp')",
        backgroundPosition: " center top",
        padding: "56px 0",
      }}
    >
      <Container>
        <Heading
          tag="h2"
          className="uppercase text-custom font-thin tracking-custom-heading leading-56"
        >
          our <span className="font-medium">gallery</span>
        </Heading>
        <SliderGallery />
      </Container>
    </section>
  );
};

export default Gallery;
