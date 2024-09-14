'use client';

import React, { useCallback, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Feedback from "../Feedback";
import Support from "../Support";
import Link from "next/link";
import { CategoryIcon, DownChevronIcon2, NextIcon, PrevIcon, RightIcon2, RightIcon3 } from "../Icons";
import { Montserrat } from "next/font/google";
import { TabsComponent } from "@/app/ui/MaterialUi";
import ProductCard from "../Products/ProductCard";
import Slider from "react-slick";


const Font = Montserrat({
    subsets : ['latin'],
    weight : ['900']
})

const SingleProductItems = (props) => {

    const openClose = () => {
        const text = document.querySelector('#single-product-items .explanations .explanations-inner .text p');
        const overlay = document.querySelector('#single-product-items .explanations .explanations-inner .text .overlay');
        const svg = document.querySelector('#single-product-items .explanations .explanations-inner .read-more svg');
        const read = document.querySelector('#single-product-items .explanations .explanations-inner .read-more span');
        text.classList.toggle('h-[145px]');
        overlay.classList.toggle('hidden');
        svg.classList.toggle('rotate-180');

        read.textContent === 'read more' ? read.textContent = 'read less' : read.textContent = 'read more';
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots : false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: "60px",
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "120px",
              }
            }
          ]
      };

    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots : false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: "60px",
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: "120px",
              }
            }
          ]
      };

      const sliderRef = useRef(null);

      const nextSlide = useCallback(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, []);
      
      const prevSlide = useCallback(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      }, []);


    return (
        <>
            <section id="single-product-items" className="px-3 md:px-10">
                <div className="breadcrumb container mx-auto mt-4 mb-6 flex items-center">
                    <Link href="/" className="text-[#7b7b7b]">
                        Home
                    </Link>
                    <RightIcon2 className="mx-2" fill="#7b7b7b" width="8" height="16"/>
                    <Link href="/products" className="text-[#7b7b7b]">
                        Products
                    </Link>
                    <RightIcon2 className="mx-2" fill="#7b7b7b" width="8" height="16"/>
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
                                    Go To Request Box
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 order-first md:order-last mb-12 md:mb-0">
                            <div className="product-slider">
                                <div className="slider-container">
                                    <Slider {...settings2} ref={sliderRef} className="outline-0">
                                        <div className='slider-item rounded-md outline-0'>
                                            <img src="/img/product-card.png" alt="" className="w-full h-[350px] block outline-0 rounded-lg border-[3px] border-[#32CD32] hover:border-[#319131] duration-300"/>
                                        </div>
                                        <div className='slider-item rounded-md'>
                                            <img src="/img/product-card-2.jpg" alt="" className="w-full h-[350px] block outline-0 rounded-lg border-[3px] border-[#32CD32] hover:border-[#319131] duration-300"/>
                                        </div>
                                        <div className='slider-item rounded-md'>
                                            <img src="/img/product-card-3.jpg" alt="" className="w-full h-[350px] block outline-0 rounded-lg border-[3px] border-[#32CD32] hover:border-[#319131] duration-300"/>
                                        </div>
                                        <div className='slider-item rounded-md'>
                                            <img src="/img/product-card.png" alt="" className="w-full h-[350px] block outline-0 rounded-lg border-[3px] border-[#32CD32] hover:border-[#319131] duration-300"/>
                                        </div>
                                        <div className='slider-item rounded-md'>
                                            <img src="/img/product-card-3.jpg" alt="" className="w-full h-[350px] block outline-0 rounded-lg border-[3px] border-[#32CD32] hover:border-[#319131] duration-300"/>
                                        </div>
                                    </Slider>

                                    <div className="slider-controls flex justify-end py-2 px-8 mb-5">
                                        <button onClick={prevSlide} className="slider-prev mx-1">
                                            <PrevIcon width="40" height="40" stroke="#B3B3B3" className="mx-4"/>
                                        </button>
                                        <button onClick={nextSlide} className="slider-next mx-1">
                                            <NextIcon width="40" height="40" stroke="#B3B3B3" className="mx-4"/>
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
                            Complementary Explanations
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
                                    read more
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
                            Related Products
                        </h1>
                        <div className="back absolute bottom-[3px] w-[105%] h-[10px] rounded-full bg-[#FFA500]"></div>
                    </div>
                    <Link href="/products" className="link flex items-center">
                        <span className="text-[#32CD32]">
                            view all products
                        </span>
                        <RightIcon3 width="9" className="mx-2"/>
                    </Link>
                </div>
                <div className="body mt-16">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='slider-item rounded-md px-3'>
                                <ProductCard title="Product 1"/>
                            </div>
                            <div className='slider-item rounded-md px-3'>
                                <ProductCard title="Product 2"/>
                            </div>
                            <div className='slider-item rounded-md px-3'>
                                <ProductCard title="Product 3"/>
                            </div>
                            <div className='slider-item rounded-md px-3'>
                                <ProductCard title="Product 4"/>
                            </div>
                            <div className='slider-item rounded-md px-3'>
                                <ProductCard title="Product 5"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <Feedback />
        </>
    )
}

export default SingleProductItems;