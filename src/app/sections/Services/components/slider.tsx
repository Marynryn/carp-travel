// src/app/sections/Section1/Section1Slider.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import data, { Slide } from "../services-data";
import Heading from "@/app/components/heading";
import Container from "@/app/components/container";
import { Swiper as SwiperType } from "swiper/types";
const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    // Log the active slide index for debugging purposes
    console.log(`Active slide index: ${activeIndex}`);
  }, [activeIndex]);

  return (
    <div
      className="relative w-full max-w-screen-lg mx-auto"
      style={{
        backgroundImage: `url(${data[activeIndex].bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          onSlideChange={handleSlideChange}
        >
          {data.map((slide: Slide, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative flex items-center h-full">
                <Heading
                  tag="h2"
                  className="uppercase text-custom font-thin tracking-custom-heading absolute top-0 left-0 m-4"
                >
                  We<span className="font-medium"> Offer</span>
                </Heading>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black bg-opacity-50">
                  <h3 className="text-2xl mb-2">
                    0{slide.id}
                    <span className="text-lg">/05</span>
                  </h3>
                  <h2 className="text-4xl mb-4">{slide.title}</h2>
                  <p className="text-lg">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
