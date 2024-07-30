"use client";

import Container from "@/app/components/container";
import Heading from "@/app/components/heading";
import React from "react";
import SliderGallery from "./components/slider-gallery";
import Title from "@/app/components/title";
const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-54 bg-cover md:py-16 xl:py-20 flex justify-center"
      style={{
        backgroundImage: "url('/img/bggallery.webp')",
        backgroundPosition: " center top",
      }}
    >
      <Container>
        <Title>
          our <span className="font-medium">gallery</span>
        </Title>
        <SliderGallery />
      </Container>
    </section>
  );
};

export default Gallery;
