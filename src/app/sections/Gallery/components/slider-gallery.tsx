"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/a11y";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { sliderItems } from "../data-gallery";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import { useMediaQuery } from "react-responsive";

const SliderGallery: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const visibleItems = sliderItems.slice(0, 3);
  return (
    <div className="relative md:mt-16 xl:mt-5">
      {isMobile ? (
        <div className="flex flex-col gap-6 mt-6">
          {visibleItems.map((item) => (
            <div key={item.id} className="relative w-full h-187">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Swiper
            centeredSlides
            slidesPerView={3} // Отображать несколько слайдов за раз
            spaceBetween={0} // Расстояние между слайдами
            loop={true} // Включить бесконечный скролл
            pagination={false} // Отключить встроенную пагинацию
            navigation={false} // Отключить встроенные навигационные кнопки
            modules={[Pagination, Navigation, A11y]} // Подключение необходимых модулей
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }} // Сохраняем реф
            className="mySwiper"
          >
            {sliderItems.map((item) => (
              <SwiperSlide key={item.id}>
                {({ isActive, isPrev, isNext, isVisible }) => (
                  <div
                    className={`relative flex items-center justify-center transition-transform duration-500
                   ${
                     isActive
                       ? " z-10 w-415 h-294 relative -left-24 ml-1 xl:w-607 xl:h-429 xl:ml-0"
                       : isPrev
                       ? "scale-90 opacity-30 w-121 h-87 mt-24 xl:w-312 xl:h-255 xl:mt-16"
                       : isNext &&
                         "scale-90 opacity-30 w-121 h-87 mt-24 flex  ml-auto xl:w-312 xl:h-255 xl:mt-16"
                   } 
                `}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="absolute bottom-0 left-10 uppercase text-32 font-thin transform -translate-y-1/2 cursor-pointer inline-block z-20 duration-300 hover:scale-110 focus:scale-110 xl:left-48 xl:-bottom-8"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            Back
          </button>

          <button
            className="absolute bottom-0 right-10 text-32 uppercase font-thin transform -translate-y-1/2 cursor-pointer inline-block z-20  duration-300 hover:scale-110 focus:scale-110 xl:right-48 xl:-bottom-8"
            onClick={() => swiperRef.current?.slideNext()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderGallery;
