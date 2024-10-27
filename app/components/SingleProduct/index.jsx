"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProductFeedback } from "../Feedback";
import Support from "../Support";
import Link from "next/link";
import {
  CategoryIcon,
  DownChevronIcon2,
  NextIcon,
  PrevIcon,
  RightIcon2,
  RightIcon3,
} from "../Icons";
import { Montserrat } from "next/font/google";
import ProductCard from "../Products/ProductCard";
import useStore from "@/app/store/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { getProductsBySlug } from "@/app/server/api/apiRoutes";

const Font = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

const SingleProductItems = ({ currentProduct }) => {
  const { language } = useStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsBySlug(currentProduct).then((result) => {
      setProduct(result);
    });
  }, []);

  const openClose = () => {
    const text = document.querySelector(
      "#single-product-items .explanations .explanations-inner .text .text-inner"
    );
    const overlay = document.querySelector(
      "#single-product-items .explanations .explanations-inner .text .overlay"
    );
    const svg = document.querySelector(
      "#single-product-items .explanations .explanations-inner .read-more svg"
    );
    text.classList.toggle("h-[70px]");
    overlay.classList.toggle("hidden");
    svg.classList.toggle("rotate-180");
  };

  const swiperRef = useRef(null);

  return (
    <>
      <section id="single-product-items" className="px-3 md:px-10">
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
          <Link href="/products" className="text-[#7b7b7b]">
            Products
          </Link>
          <RightIcon2
            className={`mx-2 ${language == "en" ? "" : "rotate-180"}`}
            fill="#7b7b7b"
            width="8"
            height="16"
          />
          <span className="text-[#494949]">{currentProduct}</span>
        </div>

        <div className="product-information container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 order-last md:order-first">
              <h1 className={`${Font.className} title text-[#333333] text-5xl`}>
                {language == "en"
                  ? product?.translations?.en?.title
                  : language == "ar"
                  ? product?.translations?.ar?.title
                  : product?.translations?.ur?.title}
              </h1>
              <div className="category flex items-center mt-4 mb-3">
                <CategoryIcon stroke="#818181" />
                <span className="mx-2 text-[#818181]">
                  {language == "en"
                    ? product?.category?.translations?.en?.title
                    : language == "ar"
                    ? product?.category?.translations?.ar?.title
                    : product?.category?.translations?.ur?.title}
                </span>
              </div>

              <div className="tabs-wrapper border-2 border-[#ccc] rounded-lg">
                <div className="tab-header flex items-stretch justify-between border-b-2 border-b-[#ccc]">
                  <div
                    className={`tabs-control w-full p-3 text-center flex justify-center`}
                  >
                    <p className="text-lg md:text-xl text-[#666666] w-fit hover:text-[#3f3f3f] duration-300 select-none">
                      {language == "en"
                        ? "Description"
                        : language == "ar"
                        ? "الوصف"
                        : "تفصیل"}
                    </p>
                  </div>
                </div>
                <div
                  className="tab-body p-5"
                  dangerouslySetInnerHTML={{
                    __html:
                      language == "en"
                        ? product?.translations?.en?.short_text
                        : language == "ar"
                        ? product?.translations?.ar?.short_text
                        : product?.translations?.ur?.short_text,
                  }}
                ></div>
              </div>

              <div className="link mt-5">
                <Link
                  href="#support"
                  className="block w-full text-center text-white py-4 text-lg px-6 rounded-lg"
                >
                  {language === "en"
                    ? "Go To Request Box"
                    : language == "ar"
                    ? "انتقل إلى صندوق الطلبات"
                    : "درخواست باکس پر جائیں"}
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 order-first md:order-last mb-12 md:mb-0">
              <div
                className={`product-slider ${
                  language == "en" ? "lang-en" : "lang-other"
                }`}
              >
                <div className="slider-container" dir="ltr">
                  <Swiper
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1.4,
                      },
                      600: {
                        slidesPerView: 2,
                      },
                    }}
                    loop={true}
                    className="mySwiper select-none"
                  >
                    {product?.gallery?.map((item, index) => (
                      <SwiperSlide>
                        <div className="w-full h-full">
                          <div className="w-full h-[300px] md:h-[350px] relative">
                            <Image
                              src={
                                process.env.NEXT_PUBLIC_BASE_URL + item?.image
                              }
                              alt={product?.translations?.en?.title}
                              fill
                              objectFit="cover"
                              className="rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {product?.gallery?.length > 2 && (
                    <div
                      className={`slider-controls mt-10 flex ${
                        language == "en" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <button
                        className="custom-prev mx-4"
                        onClick={() => swiperRef.current.slidePrev()}
                      >
                        <PrevIcon stroke="#979797" />
                      </button>
                      <button
                        className="custom-next mx-4"
                        onClick={() => swiperRef.current.slideNext()}
                      >
                        <NextIcon stroke="#979797" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="explanations container mx-auto mt-16">
          <div className="title relative flex justify-center select-none w-fit mb-8">
            <h1
              className={`${Font.className} text-[#717171] text-2xl relative z-10`}
            >
              {language == "en"
                ? "Complementary Explanations"
                : language == "ar"
                ? "تفسيرات تكميلية"
                : "تکمیلی وضاحتیں"}
            </h1>
            <div className="back absolute bottom-[3px] w-[105%] h-[10px] rounded-full bg-[#FFA500]"></div>
          </div>
          <div className="explanations-inner border-2 border-[#D9D9D9] rounded-lg p-8">
            <div className="text relative">
              <div
                className="text-inner h-[70px] overflow-hidden"
                dangerouslySetInnerHTML={{
                  __html:
                    language == "en"
                      ? product?.translations?.en?.text
                      : language == "ar"
                      ? product?.translations?.ar?.text
                      : product?.translations?.ur?.text,
                }}
              ></div>

              <div className="overlay absolute w-full h-[22px] bottom-0 right-0"></div>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="read-more flex items-center"
                onClick={openClose}
              >
                <span className="text-[#6d6d6d] mx-2">
                  {language == "en"
                    ? "read more"
                    : language == "ar"
                    ? "اقرأ المزيد"
                    : "مزید پڑھیں"}
                </span>
                <DownChevronIcon2 width="25" fill="#6d6d6d" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Support hasContainer="true" constant="true" />

      <div className="related-articles px-3 md:px-10 container mx-auto mt-24">
        <div className="header flex justify-between">
          <div className="title relative flex justify-center select-none">
            <h1
              className={`${Font.className} text-[#717171] text-2xl relative z-10`}
            >
              {language == "en"
                ? "Related Products"
                : language == "ar"
                ? "المنتجات ذات الصلة"
                : "متعلقہ مصنوعات"}
            </h1>
            <div className="back absolute bottom-[3px] w-[105%] h-[10px] rounded-full bg-[#FFA500]"></div>
          </div>
          <Link
            href={`${
              language == "en"
                ? `/${product?.category?.slug}`
                : language == "ar"
                ? `/ar/${product?.category?.slug}`
                : `/ur/${product?.category?.slug}`
            }`}
            className="link flex items-center"
          >
            <span className="text-[#32CD32]">
              {language == "en"
                ? "view all products"
                : language == "ar"
                ? "عرض جميع المنتجات"
                : "تمام مصنوعات دیکھیں"}
            </span>
            <RightIcon3
              width="9"
              className={`mx-2 ${language == "en" ? "" : "rotate-180"}`}
            />
          </Link>
        </div>
        <div className="body mt-16">
          <div className="slider-container" dir="ltr">
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
              {product?.related_products?.map((item, index) => (
                <SwiperSlide>
                  <ProductCard
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
                        ? `/products/${item?.slug}`
                        : language == "ar"
                        ? `/ar/products/${item?.slug}`
                        : `/ur/products/${item?.slug}`
                    }
                    image={process.env.NEXT_PUBLIC_BASE_URL + item?.image}
                    text={`${
                      language == "en"
                        ? item?.translations?.en?.short_text
                        : language == "ar"
                        ? item?.translations?.ar?.short_text
                        : item?.translations?.ur?.short_text
                    }`}
                    fit="true"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <ProductFeedback
        number={product?.id}
        comments={product?.comments}
      />
    </>
  );
};

export default SingleProductItems;
