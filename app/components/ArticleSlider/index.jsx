'use client';

import React, { useCallback, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { NextIcon, PrevIcon } from "../Icons";
import ArticleCard from "../Articles/ArticleCard";
import { Montserrat } from 'next/font/google';
const Font = Montserrat({
    subsets : ['latin'],
    weight :['900']
})

const ArticleSlider = () => {

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

      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        dots : false,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <section id="article-slider" className="mt-40">

            <div className="title mb-[-10px] md:mb-[-35px]">
                <h1 className={`${Font.className} text-5xl md:text-9xl text-[#33333338] text-center font-black`}>
                    ARTICLES
                </h1>
            </div>

            <div id="slider">
                <div className="slider-container relative">

                    <div className="slider-controls flex justify-end py-2 px-8 mb-2">
                        <button onClick={prevSlide} className="slider-prev mx-1">
                        <PrevIcon width="30" height="30"/>
                        </button>
                        <button onClick={nextSlide} className="slider-next mx-1">
                        <NextIcon width="30" height="30"/>
                        </button>
                    </div>

                    <Slider ref={sliderRef} {...settings}>
                        <div className='slider-item rounded-md px-4'>
                            <ArticleCard background="bg-white" title="Article number 1" image="/img/article-card.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-4'>
                            <ArticleCard background="bg-white" title="Article number 2" image="/img/product-card.png"/>
                        </div>
                        <div className='slider-item rounded-md px-4'>
                            <ArticleCard background="bg-white" title="Article number 3" image="/img/gallery.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-4'>
                            <ArticleCard background="bg-white" title="Article number 4" image="/img/about-us.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-4'>
                            <ArticleCard background="bg-white" title="Article number 5" image="/img/article-card.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-4'>
                            <ArticleCard background="bg-white" title="Article number 6" image="/img/minerals.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-4'>
                            <ArticleCard background="bg-white" title="Article number 7" image="/img/product-card-2.jpg"/>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default ArticleSlider;