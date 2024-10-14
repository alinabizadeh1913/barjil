"use client";

import React, { useEffect, useRef, useState } from "react";
import { NextIcon2, PrevIcon2 } from "../Icons";
import ArticleCard from "../Articles/ArticleCard";
import { Montserrat } from "next/font/google";
import { loadArticleSlider } from "@/app/utils/script";
import useStore from "@/app/store/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { getArticles } from "@/app/server/api/apiRoutes";

const Font = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

const ArticleSlider = () => {
  const { language } = useStore();
  const swiperRef = useRef(null);
  const [articleItems, setArticleItems] = useState([]);

  const fetchArticles = async () => {
    const data = await getArticles();
    setArticleItems(data.results);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    const slider = document.querySelector("#article-slider");

    const handleScroll = () => {
      const sectionTop = slider.offsetTop;
      const scrollY = window.scrollY;

      if (scrollY + window.innerHeight >= sectionTop + 150) {
        loadArticleSlider();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="article-slider" className="mt-20 wrapper mx-auto">
      <div
        className={`main-title ${
          language == "en"
            ? "mb-[-10px] md:mb-[-35px]"
            : language == "ar"
            ? "mb-[-22px] md:mb-[-50px]"
            : "mb-[-22px] md:mb-[-30px]"
        }`}
      >
        <h1
          className={`${Font.className} text-6xl md:text-9xl text-[#bebebe] text-center font-black`}
        >
          {language == "en"
            ? "Articles"
            : language == "ar"
            ? "المقالات"
            : "مضامین"}
        </h1>
      </div>

      <div
        id="slider"
        className="relative sm:h-[220px] rounded-br-[30%] rounded-bl-[30%] sm:rounded-none z-10 px-[6px] sm:px-[3px] md:px-[3px] border-b-[5px] sm:border-0 border-[#2bb12b]"
      >
        <div
          className={`slider-container ${
            language == "en" ? "lang-en" : ""
          } relative pt-6 md:pt-12 pb-12 px-[2px]`}
          dir="ltr"
        >
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={5}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              578: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {articleItems.length > 0 &&
              articleItems.slice(0, 8).map((item, index) => (
                <SwiperSlide key={index}>
                  <ArticleCard
                    background="bg-white"
                    title={`${
                      language == "en"
                        ? item?.translations?.en?.title
                        : language == "ar"
                        ? item?.translations?.ar?.title
                        : item?.translations?.ur?.title
                    }`}
                    category={`${
                      language == "en"
                        ? item.category.translations?.en?.title
                        : language == "ar"
                        ? item?.category?.translations?.ar?.title
                        : item?.category?.translations?.ur?.title
                    }`}
                    link={
                      language == "en"
                        ? `/papers/${item?.slug}`
                        : language == "ar"
                        ? `/ar/papers/${item?.slug}`
                        : `/ur/papers/${item?.slug}`
                    }
                    image={item?.image}
                    description={`${
                      language == "en"
                        ? item?.translations?.en?.short_text
                        : language == "ar"
                        ? item?.translations?.ar?.short_text
                        : item?.translations?.ur?.short_text
                    }`}
                    hasLink="true"
                  />
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="w-full flex justify-center md:mt-0">
            <div
              className={`slider-controls flex justify-between py-2 px-8 mt-6 w-11/12 sm:w-10/12 md:w-1/2`}
            >
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="custom-prev shadow-none border-0 outline-0 bg-transparent px-3"
              >
                <PrevIcon2 className="w-[55px] sm:w-[75px] md:w-[90px] shadow-none border-0 outline-0 bg-transparent" />
              </button>
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="custom-next shadow-none border-0 outline-0 bg-transparent px-3"
              >
                <NextIcon2 className="w-[55px] sm:w-[75px] md:w-[90px] shadow-none border-0 outline-0 bg-transparent" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="oval w-full hidden sm:block h-[500px] sm:h-[510px] md:h-[515px] bg-[#218b21] rounded-bl-[35%] rounded-br-[35%] sm:rounded-br-[40%] sm:rounded-bl-[40%] md:rounded-bl-[100%] md:rounded-br-[100%] mt-[-190px] md:mt-[-130px] sm:border-[4px] md:border-[3px] border-[#0e420e]"></div>
    </section>
  );
};

export default ArticleSlider;
