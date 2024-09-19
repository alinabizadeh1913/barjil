"use client";
import useStore from "@/app/store/Store";
import React from "react";
import { LeftIconGroup, RightIconGroup } from "../Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { loadTruckSlider } from "@/app/utils/script";
import ProductCard from "../Products/ProductCard";

const TruckSlider = () => {
  const { language } = useStore();

  const [readyToDisplayTruck, setReadyToDisplayTruck] = useState(false);

  useEffect(() => {
    const truckSlider = document.querySelector("#truck-slider-wrapper");
    const sliderWrapper = document.querySelector("#truck-slider-wrapper .swiper-wrapper");

    const handleScroll = () => {
      const sectionTop = truckSlider.offsetTop;
      const scrollY = window.scrollY;

      if (scrollY + window.innerHeight >= sectionTop + 200) {
        setReadyToDisplayTruck(true);
      }
    };

    if(readyToDisplayTruck) {
      sliderWrapper.classList.add("active");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section id="truck-slider" className="mt-20 wrapper mx-auto">
      <div className="title-wrapper px-8 flex justify-between">
        <h1 className="text-base sm:text-lg md:text-2xl text-[#666666] font-black">
          {language === "en"
            ? "Our Products"
            : language == "ar"
            ? "منتجاتنا"
            : "ہمارے مصنوعات"}
        </h1>
        <div className="flex items-center">
          <LeftIconGroup
            stroke="#737373"
            className={`${language == "en" ? "" : "rotate-180"} w-[20px] h-[6px] sm:w-[24px] sm:h-[10px] md:w-[29px] md:h-[15px]`}
          />
          <span className="mx-1 md:mx-2 text-[#737373] text-base sm:text-lg md:text-xl font-black">
            {language === "en"
              ? "Drag Truck"
              : language == "ar"
              ? "سحب الشاحنة"
              : "ٹرک کھینچنا"}
          </span>
          <RightIconGroup
            stroke="#737373"
            className={`${language == "en" ? "" : "rotate-180"} w-[20px] h-[6px] sm:w-[24px] sm:h-[10px] md:w-[29px] md:h-[15px]`}
          />
        </div>
      </div>

      <div
        id="truck-slider-wrapper"
        dir="ltr"
        className="mt-10"
      >
        <Swiper 
          slidesPerView={4}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576 : {
              slidesPerView: 1.5,
            },
            768: {
            slidesPerView: 2,
            },
            1024: {
            slidesPerView: 3,
          },
          1280 : {
            slidesPerView: 4,
            }
        }}
          >
          <SwiperSlide>
          <div className="relative h-[530px] flex items-end">
            <div className="relative w-full h-[400px]">
              <Image src="/img/truck1.png" fill alt="truck" />
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-[530px] flex items-end">
              <div className="absolute top-0 right-0 h-2/3 px-4 z-10">
                <ProductCard fit="true"/>
              </div>
              <div className="relative w-full h-[400px]">
                <Image src="/img/truck2.png" fill alt="truck" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[530px] flex items-end">
              <div className="absolute top-0 right-0 h-2/3 px-4 z-10">
                <ProductCard fit="true"/>
              </div>
              <div className="relative w-full h-[400px]">
                <Image src="/img/truck3.png" fill alt="truck" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-[530px] flex items-end">
              <div className="absolute top-0 right-0 h-2/3 px-4 z-10">
                <ProductCard fit="true"/>
              </div>
              <div className="relative w-full h-[400px]">
                <Image src="/img/truck4.png" fill alt="truck" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ marginLeft: "-0.01562px" }}>
          <div className="relative h-[530px] flex items-end">
              <div className="absolute top-0 right-0 h-2/3 px-4 z-10">
                <ProductCard fit="true"/>
              </div>
              <div className="relative w-full h-[400px]">
                <Image src="/img/truck5.png" fill alt="truck" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-[530px] flex items-end">
              <div className="absolute top-0 right-0 h-2/3 px-4 z-10">
                <ProductCard fit="true"/>
              </div>
              <div className="relative w-full h-[400px]">
                <Image src="/img/truck6.png" fill alt="truck" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TruckSlider;