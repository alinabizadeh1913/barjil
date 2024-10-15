import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  CategoryIcon,
  LikeIcon,
  RightIcon2,
  RightIcon3,
  ShareIcon,
} from "../Icons";
import { Montserrat } from "next/font/google";
import Feedback from "../Feedback";
import ArticleCard from "../Articles/ArticleCard";
import useStore from "@/app/store/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Font = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

const SingleArticleItems = ({ article, currentArticle }) => {
  const { language } = useStore();

  const dateCreated = article?.date_created;

  function formatDate(dateString) {
    const options = { weekday: "long", day: "numeric", month: "long" };
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  const formattedDate = dateCreated && formatDate(dateCreated);

  return (
    <section id="single-article-items" className="px-3 md:px-10">
      <div className="breadcrumb container mx-auto mt-4 mb-6 flex items-center">
        <Link href="/" className="text-[#7b7b7b]">
          Home
        </Link>
        <RightIcon2
          className={`mx-2 ${language == "en" ? "" : "rotate-180"}`}
          fill="#7b7b7b"
          width="8"
          height="16"
        />
        <Link href="/articles" className="text-[#7b7b7b]">
          Articles
        </Link>
        <RightIcon2
          className={`mx-2 ${language == "en" ? "" : "rotate-180"}`}
          fill="#7b7b7b"
          width="8"
          height="16"
        />
        <span className="text-[#494949]">{currentArticle}</span>
      </div>

      <div className="title container mx-auto flex items-center">
        <div className="w-full md:w-8/12">
          <h1 className={`text-[#333333] text-6xl ${Font.className}`}>
            {language == "en"
              ? article?.translations?.en?.title
              : language == "ar"
              ? article?.translations?.ar?.title
              : article?.translations?.ur?.title}
          </h1>
        </div>
        <div className="w-full hidden md:flex md:w-4/12 icons justify-end">
          <LikeIcon
            stroke="#7b7b7b"
            width="40"
            className="cursor-pointer mx-2"
          />
          <ShareIcon
            stroke="#7b7b7b"
            width="40"
            className="cursor-pointer mx-2"
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap mt-6 relative justify-center pb-5">
        <div className="line1 absolute h-[2px] bottom-[-25px] w-full bg-[#c9c9c9] hidden md:block"></div>
        <div className="line2 absolute h-[2px] bottom-[-20px] w-[95%] bg-[#d3d3d3] hidden md:block"></div>
        <div className="line3 absolute h-[2px] bottom-[-15px] w-[90%] bg-[#D9D9D9] hidden md:block"></div>
        <div className="content-wrapper w-full md:w-8/12 px-2">
          <div className="content-inner">
            <div className="information flex items-center mb-12">
              {/* <div className="image w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
                <Image src="/img/person3.jpg" alt="writer" />
              </div> */}
              <p className="text-xs md:text-base text-[#676767] mx-2 md:mx-4">
                {article?.writer}
              </p>
              <div className="dot w-[6px] h-[6px] bg-[#a8a8a8] rounded-full"></div>
              <div className="text-xs md:text-base date text-[#676767] mx-2 md:mx-4">
                {formattedDate}
              </div>
            </div>

            <div
              className="text pb-4"
              dangerouslySetInnerHTML={{
                __html:
                  language == "en"
                    ? article?.translations?.en?.text
                    : language == "ar"
                    ? article?.translations?.ar?.text
                    : article?.translations?.ur?.text,
              }}
            ></div>

            {/* <div className="information flex justify-between items-center py-6 border-t-2 border-t-[#D9D9D9]">
              <div className="first flex items-center">
                <div className="image w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
                  <Image src="/img/person3.jpg" alt="" />
                </div>
                <p className="text-xs md:text-base text-[#676767] mx-2 md:mx-4">
                  {
                  article?.writer
                }
                </p>
                <div className="dot w-[6px] h-[6px] bg-[#a8a8a8] rounded-full"></div>
                <div className="text-xs md:text-base date text-[#676767] mx-2 md:mx-4">
                  {formattedDate}
                </div>
              </div>
              <div className="last flex justify-center items-center">
                <LikeIcon
                  stroke="#7b7b7b"
                  width="30"
                  className="cursor-pointer mx-1"
                />
                <ShareIcon
                  stroke="#7b7b7b"
                  width="30"
                  className="cursor-pointer mx-1"
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="sidebar-wrapper w-full md:w-4/12 px-2">
          <div className="sidebar-inner sticky top-[20%] border-2 border-[#b2b2b2] py-3 px-6 rounded-lg">
            <h1 className="${Font.className} title text-[#666666] text-[22px] font-black pb-3 border-b border-[#b9b9b9]">
              {language == "en"
                ? "top articles"
                : language == "ar"
                ? "المقالات الرئيسية"
                : "اہم مضامین"}
            </h1>

            {article?.top_articles &&
              article?.top_articles.map((item, index) => (
                <Link
                  href={
                    language == "en"
                      ? `/papers/${item?.slug}`
                      : language == "ar"
                      ? `/ar/papers/${item?.slug}`
                      : `/ur/papers/${item?.slug}`
                  }
                >
                  <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                    <div className="image">
                      <div className="w-[60px] h-[50px] relative">
                        <Image
                          src={process.env.NEXT_PUBLIC_BASE_URL + item?.image}
                          alt=""
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="content mx-3">
                      <h1 className="text-lg text-[#626262]">
                        {language == "en"
                          ? item?.translations?.en?.title
                          : language == "ar"
                          ? item?.translations?.ar?.title
                          : item?.translations?.ur?.title}
                      </h1>
                      <div className="category flex items-center">
                        <CategoryIcon stroke="#626262" />
                        <span className="mx-2 text-[#626262]">
                          {language == "en"
                            ? item?.category?.translations?.en?.title
                            : language == "ar"
                            ? item?.category?.translations?.ar?.title
                            : item?.category?.translations?.ur?.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Feedback
        type={article}
        number={article?.id}
        comments={article?.comments}
      />

      <div className="related-articles container mx-auto mt-24">
        <div className="header flex justify-between">
          <div className="title relative flex justify-center select-none">
            <h1
              className={`${Font.className} text-[#717171] text-lg sm:text-xl md:text-2xl relative z-10`}
            >
              {language == "en"
                ? "Related Articles"
                : language == "ar"
                ? "المقالات ذات الصلة"
                : "متعلقہ مضامین"}
            </h1>
            <div className="back absolute bottom-[3px] w-[105%] h-[10px] rounded-full bg-[#FFA500]"></div>
          </div>
          <Link
            href={`${
              language == "en"
                ? `/papers/category/${article?.category?.slug}`
                : language == "ar"
                ? `/ar/papers/category/${article?.category?.slug}`
                : `/ur/papers/category/${article?.category?.slug}`
            }`}
            className="link flex items-center"
          >
            <span className="text-[#32CD32] text-sm sm:text-[15px] md:text-base">
              {language == "en"
                ? "view all articles"
                : language == "ar"
                ? "عرض جميع المقالات"
                : "تمام مضامین دیکھیں"}
            </span>
            <RightIcon3
              width="9"
              className={`mx-2 ${language == "en" ? "" : "rotate-180"}`}
            />
          </Link>
        </div>
        <div className="body mt-16">
          <div className="slider-container">
            <Swiper
              spaceBetween={30}
              loop={true}
              breakpoints={{
                578: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {article?.related_articles &&
                article.related_articles.map((item, index) => (
                  <SwiperSlide>
                    <ArticleCard
                      title={`${
                        language == "en"
                          ? item?.translations?.en?.title
                          : language == "ar"
                          ? item?.translations?.ar?.title
                          : item?.translations?.ur?.title
                      }`}
                      category={`${
                        language == "en"
                          ? item?.category?.translations?.en?.title
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
                      image={process.env.NEXT_PUBLIC_BASE_URL + item?.image}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleArticleItems;
