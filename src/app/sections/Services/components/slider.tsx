"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade } from "swiper/modules";
import data, { Slide } from "../services-data";
import Heading from "@/app/components/heading";
import Container from "@/app/components/container";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import Paragraph from "@/app/components/paragraph";
import Icon from "@/app/components/icon";
import { before } from "node:test";
import Gradient from "@/app/components/gradient";

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div
      className="relative w-full bg-cover slider "
      style={{
        backgroundImage: `url(${data[activeIndex].bgImage})`,

        padding: "54px 0 56px 0",
        backgroundSize: "cover",
        backgroundPosition: "center right -240px ",
      }}
    >
      <Container>
        <Heading
          tag="h2"
          className="uppercase text-custom font-thin tracking-custom-heading mb-6"
        >
          We<span className="font-medium"> Offer</span>
        </Heading>
        <Swiper
          modules={[Pagination, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          effect="fade"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((slide: Slide, index: number) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col items-center justify-center h-full transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Heading
                  tag="h3"
                  className="text-4xl mb-2 font-thin mr-0 ml-auto"
                >
                  0{slide.id}
                  <span className="text-4xl opacity-20">/05</span>
                </Heading>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={280}
                  height={224}
                  className="object-cover mb-2"
                />
                <Paragraph className="text-xs mb-6 font-extralight tracking-2.4 mr-0 ml-auto">
                  {slide.title}
                </Paragraph>
                <ul className="custom-pagination mt-4 mb-8  flex flex-col gap-4 ml-0 mr-auto">
                  {data.map((item, idx) => (
                    <li
                      key={idx}
                      className={`cursor-pointer  flex items-center  `}
                      onClick={() => handlePaginationClick(idx)}
                    >
                      {idx === activeIndex && (
                        <Icon
                          id="icon-Rectangle-32"
                          width={6}
                          height={6}
                          fill="var(--main-color)"
                        />
                      )}
                      <Paragraph
                        className={`text-xl uppercase ${
                          idx === activeIndex
                            ? "font-medium ml-2 opacity-100"
                            : "font-extralight opacity-50"
                        } `}
                      >
                        {item.name}
                      </Paragraph>
                    </li>
                  ))}
                </ul>
                <Paragraph className="text-sm font-extralight leading-5 text-justify ">
                  {slide.description}
                </Paragraph>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Slider;
