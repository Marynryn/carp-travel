"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { sliderItems } from "../data-gallery";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";

const SliderGallery: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full h-[500px]">
      {/* Слайдер */}
      <Swiper
        slidesPerView={3} // Отображать несколько слайдов за раз
        spaceBetween={30} // Расстояние между слайдами
        loop={true} // Включить бесконечный скролл
        pagination={false} // Отключить встроенную пагинацию
        navigation={false} // Отключить встроенные навигационные кнопки
        modules={[Pagination, Navigation]} // Подключение необходимых модулей
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }} // Сохраняем реф
        className="mySwiper"
        watchSlidesProgress // Включаем отслеживание прогресса слайдов
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive, isPrev, isNext, isVisible }) => (
              <div
                className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 ${
                  isActive
                    ? "scale-110 z-10"
                    : isVisible
                    ? "scale-90 opacity-50"
                    : "opacity-0"
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  layout="fill" // Используем layout="fill"
                  objectFit="cover" // Используем objectFit="cover"
                  className="absolute inset-0" // Устанавливаем размеры изображения на всю доступную область
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кнопка "Back" */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        Back
      </button>

      {/* Кнопка "Next" */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black px-4 py-2 rounded"
        onClick={() => swiperRef.current?.slideNext()}
      >
        Next
      </button>
    </div>
  );
};

export default SliderGallery;
