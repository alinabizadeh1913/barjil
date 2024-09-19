'use client';

import React, { useCallback, useRef } from "react";
import Feedback from "../Feedback";
import Support from "../Support";
import Link from "next/link";
import { CategoryIcon, DownChevronIcon2, NextIcon, PrevIcon, RightIcon2, RightIcon3 } from "../Icons";
import { Montserrat } from "next/font/google";
import { TabsComponent } from "@/app/ui/MaterialUi";
import ProductCard from "../Products/ProductCard";
import Slider from "react-slick";
import useStore from "@/app/store/Store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ArticleCard from "../Articles/ArticleCard";


const Font = Montserrat({
    subsets : ['latin'],
    weight : ['900']
})

const SingleProductItems = (props) => {

    const {language} = useStore()

    const openClose = () => {
        const text = document.querySelector('#single-product-items .explanations .explanations-inner .text p');
        const overlay = document.querySelector('#single-product-items .explanations .explanations-inner .text .overlay');
        const svg = document.querySelector('#single-product-items .explanations .explanations-inner .read-more svg');
        text.classList.toggle('h-[145px]');
        overlay.classList.toggle('hidden');
        svg.classList.toggle('rotate-180');
    }

    const swiperRef = useRef(null);

    return (
        <>
            <section id="single-product-items" className="px-3 md:px-10">
                <div className="breadcrumb container mx-auto mt-4 mb-6 flex items-center">
                    <Link href="/" className="text-[#7b7b7b]">
                        Home
                    </Link>
                    <RightIcon2 className={`mx-2 ${language == 'en' ? '' : 'rotate-180'}`} fill="#7b7b7b" width="8" height="16"/>
                    <Link href="/products" className="text-[#7b7b7b]">
                        Products
                    </Link>
                    <RightIcon2 className={`mx-2 ${language == 'en' ? '' : 'rotate-180'}`} fill="#7b7b7b" width="8" height="16"/>
                    <span className="text-[#494949]">
                        {props.currentProduct}
                    </span>
                </div>

                <div className="product-information container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 px-3 order-last md:order-first">
                            <h1 className={`${Font.className} title text-[#333333] text-6xl`}>
                                This is {props.currentProduct}
                            </h1>
                            <div className="category flex items-center mt-4 mb-3">
                                <CategoryIcon stroke="#818181"/>
                                <span className="mx-2 text-[#818181]">
                                    minerals
                                </span>
                            </div>

                            <div className="tabs">
                                <TabsComponent />
                            </div>

                            <div className="link mt-5">
                                <a href="#" className="block w-full text-center text-white py-4 text-lg px-6 rounded-lg">
                                    {
                                        language === "en" ? 'Go To Request Box' : language == 'ar' ? 'انتقل إلى صندوق الطلبات' : 'درخواست باکس پر جائیں'
                                    }
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 order-first md:order-last mb-12 md:mb-0">
                            <div className={`product-slider ${language == 'en' ? 'lang-en' : 'lang-other'}`}>
                                <div className="slider-container" dir="ltr">
                                    <Swiper
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        slidesPerView={2}
                                        spaceBetween={10}
                                        loop={true}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="w-full h-full">
                                                <img src="/img/product-card.png" alt="product1" className="w-full h-[300px] md:h-[350px] rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full">
                                                <img src="/img/product-card-2.jpg" alt="product2" className="w-full h-[300px] md:h-[350px] rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full">
                                                <img src="/img/product-card-3.jpg" alt="product3" className="w-full h-[300px] md:h-[350px] rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full">
                                                <img src="/img/product-card-4.jpg" alt="product4" className="w-full h-[300px] md:h-[350px] rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full">
                                                <img src="/img/product-card-2.jpg" alt="product5" className="w-full h-[300px] md:h-[350px] rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full">
                                                <img src="/img/product-card-3.jpg" alt="product6" className="w-full h-[300px] md:h-[350px] rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full">
                                                <img src="/img/product-card-4.jpg" alt="product7" className="w-full h-[300px] md:h-[350px] rounded-lg border-[3px] border-[#32cd32] hover:border-[#006400] duration-300 cursor-pointer"/>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>

                                    <div className={`slider-controls mt-10 flex ${language == 'en' ? 'justify-end' : 'justify-start'}`}>
                                        <button
                                        className="custom-prev mx-6" 
                                        onClick={() => swiperRef.current.slidePrev()}
                                        >
                                            <PrevIcon stroke="#979797"/>
                                        </button>
                                        <button
                                        className="custom-next mx-6"
                                        onClick={() => swiperRef.current.slideNext()}
                                        >
                                            <NextIcon stroke="#979797"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="explanations container mx-auto mt-16">
                    <div className="title relative flex justify-center select-none w-fit mb-8">
                        <h1 className={`${Font.className} text-[#717171] text-2xl relative z-10`}>
                            {
                                language == 'en' ? 'Complementary Explanations' : language == 'ar' ? 'تفسيرات تكميلية' : 'تکمیلی وضاحتیں'
                            }
                        </h1>
                        <div className="back absolute bottom-[3px] w-[105%] h-[10px] rounded-full bg-[#FFA500]"></div>
                    </div>
                    <div className="explanations-inner border-2 border-[#D9D9D9] rounded-lg p-8">
                        <div className="text relative">
                            <p className="h-[145px] overflow-hidden">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit molestias, omnis aliquam adipisci ipsam quaerat, sapiente similique voluptates hic molestiae veniam repellat pariatur. Architecto libero ducimus et ipsam exercitationem. Natus ipsam, aliquam vitae aperiam hic esse animi suscipit quasi aspernatur! Obcaecati sit ipsum nam numquam eaque quidem optio inventore, aspernatur molestiae quas voluptate earum praesentium quo soluta. Eum porro adipisci explicabo illum dolorum placeat asperiores aliquid, accusamus excepturi veniam nemo consequatur optio vitae similique, dolores praesentium quia. Animi ea, quibusdam at explicabo consectetur, odio ut recusandae possimus dignissimos debitis aperiam eos sequi molestias, amet iusto beatae vel distinctio saepe et ratione ipsum excepturi adipisci libero aliquid! Dolores provident fugit ipsum neque similique explicabo commodi nemo possimus saepe ab. Repellendus quod pariatur quos molestiae quidem omnis placeat aliquam fuga distinctio, libero suscipit tenetur voluptas quo veritatis eligendi iste ex dicta sint earum provident voluptates facilis obcaecati minima! Officia aperiam repellendus fuga eius libero, fugit ex distinctio quod labore doloremque vel eos omnis consequuntur excepturi repellat vero, ratione similique ullam voluptate natus quae veritatis, laudantium ipsum alias! Non nemo hic vel sapiente quisquam doloremque rem debitis expedita id perferendis. Mollitia aliquam ullam error debitis tenetur inventore incidunt voluptatem, aut provident ab accusantium obcaecati! Illum distinctio porro sint nostrum soluta consequatur ducimus. Temporibus aspernatur alias similique recusandae ducimus odio neque est, quas suscipit laudantium doloremque nam fuga in nostrum, accusamus facilis, quae delectus voluptas quibusdam aperiam voluptates explicabo eum sunt? Impedit ullam ipsa consectetur, vitae eaque consequatur architecto itaque? Delectus voluptates eos ipsam repudiandae dolorem accusantium excepturi doloremque, facilis sunt adipisci expedita fugit quaerat voluptatibus voluptatem numquam est veniam neque, nulla labore laborum quia pariatur fuga et. Suscipit pariatur possimus qui, sapiente consectetur magni modi, perspiciatis soluta facilis accusantium vel ipsa dignissimos reiciendis eaque saepe non ea incidunt est voluptatem. Officiis, quo!
                            </p>

                            <div className="overlay absolute w-full h-[50px] bottom-0 right-0"></div>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <button className="read-more flex items-center" onClick={openClose}>
                                <span className="text-[#6d6d6d] mx-2">
                                    {
                                        language == 'en' ? 'read more' : language == 'ar' ? 'اقرأ المزيد' : 'مزید پڑھیں'
                                    }
                                </span>
                                <DownChevronIcon2 width="25" fill="#6d6d6d"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Support hasContainer="true" constant="true"/>

            <div className="related-articles px-3 md:px-10 container mx-auto mt-24">
                <div className="header flex justify-between">
                    <div className="title relative flex justify-center select-none">
                        <h1 className={`${Font.className} text-[#717171] text-2xl relative z-10`}>
                            {
                                language == 'en' ? 'Related Products' : language == 'ar' ? 'المنتجات ذات الصلة' : 'متعلقہ مصنوعات'
                            }
                        </h1>
                        <div className="back absolute bottom-[3px] w-[105%] h-[10px] rounded-full bg-[#FFA500]"></div>
                    </div>
                    <Link href={`${language == 'en' ? '/products' : language == 'ar' ? '/ar/products' : '/ur/products'}`} className="link flex items-center">
                        <span className="text-[#32CD32]">
                            {
                                language == 'en' ? 'view all products' : language == 'ar' ? 'عرض جميع المنتجات' : 'تمام مصنوعات دیکھیں'
                            }
                        </span>
                        <RightIcon3 width="9" className={`mx-2 ${language == 'en' ? '' : 'rotate-180'}`}/>
                    </Link>
                </div>
                <div className="body mt-16">
                    <div className="slider-container" dir="ltr">
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            breakpoints={{
                                578:{
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
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <Feedback />
        </>
    )
}

export default SingleProductItems;