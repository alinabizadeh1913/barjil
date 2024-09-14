'use client';

import React, { useCallback, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextIcon, PrevIcon } from "../Icons";
import ArticleCard from "../Articles/ArticleCard";
import { Montserrat } from 'next/font/google';
import { loadArticleSlider } from "@/app/utils/script";
import useStore from "@/app/store/Store";
const Font = Montserrat({
    subsets : ['latin'],
    weight :['900']
})

const ArticleSlider = () => {

    const sliderRef = useRef(null);
    const { language } = useStore();

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
        dots : false,
        arrows: false,
        initialSlide: 0,
        rtl: language == 'en' ? false : true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "200px",
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "120px",
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "80px",
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "60px",
              }
            }
          ]
      };


      useEffect(() => {
        const slider = document.querySelector('#article-slider');

        const handleScroll = () => {
            const sectionTop = slider.offsetTop;
            const scrollY = window.scrollY;
    
            // مقایسه دقیق‌تر موقعیت سکشن با موقعیت اسکرول
            if (scrollY + window.innerHeight >= sectionTop + 150) {
              loadArticleSlider();
            }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        // پاک کردن event listener هنگام unmount کامپوننت
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
      },[])


    return (
        <section id="article-slider" className="mt-40">

            <div className={`main-title ${language == 'en' ? 'mb-[-10px] md:mb-[-35px]' : ''}`}>
                <h1 className={`${Font.className} text-6xl md:text-9xl text-[#bebebe] text-center font-black`}>
                {
                  language == 'en' ? 'Articles' : language == 'ar' ? 'المقالات' : 'مضامین'
                }
                </h1>
            </div>

            <div id="slider">
                <div className={`slider-container ${language == 'en' ? 'lang-en' : ''} relative py-12`}>

                    <Slider ref={sliderRef} {...settings}>
                        <div className='slider-item rounded-md px-3'>
                            <ArticleCard background="bg-white" title="Article number 1" image="/img/article-card.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-3'>
                            <ArticleCard background="bg-white" title="Article number 2" image="/img/product-card.png"/>
                        </div>
                        <div className='slider-item rounded-md px-3'>
                            <ArticleCard background="bg-white" title="Article number 3" image="/img/gallery.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-3'>
                            <ArticleCard background="bg-white" title="Article number 4" image="/img/about-us.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-3'>
                            <ArticleCard background="bg-white" title="Article number 5" image="/img/article-card.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-3'>
                            <ArticleCard background="bg-white" title="Article number 6" image="/img/minerals.jpg"/>
                        </div>
                        <div className='slider-item rounded-md px-3'>
                            <ArticleCard background="bg-white" title="Article number 7" image="/img/product-card-2.jpg"/>
                        </div>
                    </Slider>

                    <div className="w-full flex justify-center">
                      <div className={`slider-controls flex ${language == 'en' ? '' : 'flex-row-reverse'} justify-center py-2 px-8 mt-6 w-1/2`}>
                          <button onClick={prevSlide} className="slider-prev mx-8">
                          <PrevIcon width="50" height="50"/>
                          </button>
                          <button onClick={nextSlide} className="slider-next mx-8">
                          <NextIcon width="50" height="50"/>
                          </button>
                      </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ArticleSlider;