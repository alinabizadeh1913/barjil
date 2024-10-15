"use client";
import useStore from "@/app/store/Store";
import React, { useRef, useState, useEffect } from "react";
import { LeftIconGroup, RightIconGroup } from "../Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ProductCard from "../Products/ProductCard";
import { getProducts } from "@/app/server/api/apiRoutes";
import "swiper/css";

const TruckSlider = () => {
  const { language } = useStore();
  const [products, setProducts] = useState([]);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProducts(result);
      })
      .catch((e) => console.log(e));
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const truckSlider = document.querySelector("#truck-slider-wrapper");
  //     const sliderWrapper = document.querySelector(
  //       "#truck-slider-wrapper .swiper-wrapper"
  //     );
  //     const sectionTop = truckSlider.offsetTop;
  //     const scrollY = window.scrollY;

  //     if (scrollY + window.innerHeight >= sectionTop + 400) {
  //       sliderWrapper.classList.add("active");
  //       setTimeout(() => {
  //         sliderWrapper.classList.remove("active");
  //       }, 1000);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section id="truck-slider" className="mt-20 wrapper mx-auto">
      <div className="title-wrapper px-8 flex justify-between">
        <h1 className="text-base sm:text-lg md:text-2xl text-[#666666] font-black">
          {language === "en"
            ? "Our Products"
            : language === "ar"
            ? "منتجاتنا"
            : "ہمارے مصنوعات"}
        </h1>
        <div className="flex items-center" dir="ltr">
          <div ref={prevRef} className="cursor-pointer">
            <LeftIconGroup
              stroke="#737373"
              className={`w-[20px] h-[6px] sm:w-[24px] sm:h-[10px] md:w-[29px] md:h-[15px]`}
            />
          </div>
          <span className="mx-1 md:mx-2 text-[#737373] text-base sm:text-lg md:text-xl font-black select-none">
            {language === "en"
              ? "Drag Truck"
              : language === "ar"
              ? "سحب الشاحنة"
              : "ٹرک کھینچنا"}
          </span>
          <div ref={nextRef} className="cursor-pointer">
            <RightIconGroup
              stroke="#737373"
              className={`w-[20px] h-[6px] sm:w-[24px] sm:h-[10px] md:w-[29px] md:h-[15px]`}
            />
          </div>
        </div>
      </div>

      <div id="truck-slider-wrapper" dir="ltr" className="mt-10 select-none">
        <Swiper
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          onInit={(swiper) => {
            if (swiper?.params?.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init(); // Initialize navigation after assigning elements
            }
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="relative h-[530px] flex items-end">
              <div className="relative w-full h-[400px]">
                <Image src="/img/truck1.png" fill alt="truck" />
              </div>
            </div>
          </SwiperSlide>
          {products.length > 0 &&
            products.slice(0, 5).map((item, index) => (
              <SwiperSlide>
                <div className="relative h-[530px] flex items-end">
                  <div className="absolute top-0 right-0 h-2/3 px-4 z-10 w-full">
                    <ProductCard
                      text={`${
                        language == "en"
                          ? item?.translations?.en?.short_text
                          : language == "ar"
                          ? item?.translations?.ar?.short_text
                          : item?.translations?.ur?.short_text
                      }`}
                      title={`${
                        language == "en"
                          ? item?.translations?.en?.title
                          : language == "ar"
                          ? item?.translations?.ar?.title
                          : item?.translations?.ur?.title
                      }`}
                      category={
                        language == "en"
                          ? item?.category?.translations?.en?.title
                          : language == "ar"
                          ? item?.category?.translations?.ar?.title
                          : item?.category?.translations?.ur?.title
                      }
                      link={
                        language == "en"
                          ? `/products/${item?.slug}`
                          : language == "ar"
                          ? `/ar/products/${item?.slug}`
                          : `/ur/products/${item?.slug}`
                      }
                      image={item?.image}
                      alt={`${
                        language == "en"
                          ? item?.translations?.en?.title
                          : language == "ar"
                          ? item?.translations?.ar?.title
                          : item?.translations?.ur?.title
                      }`}
                      fit="true"
                    />
                  </div>
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={`/img/truck${index + 2}.png`}
                      fill
                      alt="truck"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TruckSlider;
