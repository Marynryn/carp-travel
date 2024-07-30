"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "@/app/components/container";
import Title from "@/app/components/title";
import SliderGallery from "./components/slider-gallery";
import { sliderItems } from "./data-gallery";
import { Item } from "./data-gallery";

const Gallery = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="gallery"
      className="py-54 bg-cover md:py-16 xl:py-20 flex justify-center gallery"
    >
      <Container>
        <Title>
          our <span className="font-medium">gallery</span>
        </Title>
        {isMobile ? (
          <ul className="flex flex-col gap-6 mt-6 justify-center">
            {sliderItems.slice(0, 3).map((item: Item) => (
              <li key={item.id} className="relative flex justify-center">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  height={187}
                  width={280}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </li>
            ))}
          </ul>
        ) : (
          <SliderGallery />
        )}
      </Container>
    </section>
  );
};

export default Gallery;
