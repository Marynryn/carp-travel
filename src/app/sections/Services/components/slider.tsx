"use client";

import React, { useState, useRef } from "react";
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
import Icon from "../../../components/icon-svg";
import Title from "@/app/components/title";

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
      className="relative w-full py-54 bg-cover slider flex justify-center md:py-16 xl:py-20 "
      style={{
        backgroundImage: `url(${data[activeIndex].bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center right -240px ",
      }}
    >
      <Container>
        <div className="md:flex xl:gap-40">
          <Title className="max-w-80 xl:max-w-lg xl:leading-tight">
            We<span className="font-medium"> Offer</span>
          </Title>
          <Heading
            tag="h3"
            className="text-4xl mb-2 text-right font-thin mr-0 ml-auto md:text-67 md:mb-0  md:leading-80 xl:text-98 xl:-tracking-3.92 xl:m-0 xl:leading-tight"
          >
            0{activeIndex + 1}
            <span className="text-4xl opacity-20 md:text-67 xl:text-98 xl:-tracking-3.92">
              /05
            </span>
          </Heading>
        </div>
        <Swiper
          modules={[Pagination, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          className="md:relative"
          effect="fade"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((slide: Slide, index: number) => (
            <SwiperSlide key={index}>
              <div
                className={`flex flex-col items-center justify-center h-full transition-opacity md:flex-row md:gap-5 md:mt-10 xl:mt-6 duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={608}
                  height={434}
                  className="w-image-mobile h-213 object-cover mb-2 md:w-463 md:h-370 xl:w-607 xl:h-429"
                />
                <div className="md:flex md:flex-col xl:flex-row xl:gap-12">
                  <Paragraph className=" xl:hidden text-xs mb-6 text-right font-extralight tracking-2.4 mr-0 ml-auto md:order-2 md:mb-8 md:mx-0">
                    {slide.title}
                  </Paragraph>
                  <ul className="custom-pagination mt-4 mb-8  flex flex-col gap-4 ml-0 mr-auto md:order-1 md:mt-0 md:mb-6 xl:order-none xl:mb-0 xl:mx-0 xl:w-button-mobile xl:gap-6">
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
                          className={`text-xl uppercase md:text-22 md:leading-5 xl:leading-6 xl:text-28 hover:font-normal ${
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
                  <div className=" md:order-3 xl:w-293">
                    <Paragraph className="hidden xl:block xl:text-xs xl:leading-6 xl:tracking-2.4 xl:font-extralight">
                      {slide.title}
                    </Paragraph>
                    <Paragraph className="text-sm  font-extralight leading-5 text-justify xl:order-none md:leading-normal md:text-13 xl:mt-60 xl:text-lg xl:leading-6 xl:tracking-normal">
                      {slide.description}
                    </Paragraph>
                  </div>
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
