'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getBanners } from '@/app/server/api/apiRoutes';
import useStore from '@/app/store/Store';
import { NextIcon, PrevIcon } from '../Icons';
import Link from 'next/link';
import Image from 'next/image';


const Content = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const { setImgSrc, language } = useStore();
  const [banners, setBanners] = useState([]);

  const sliderRef = useRef(null);

  useEffect(() => {
    getBanners().then(result => {
      console.log(result);
      setBanners(result);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots : false,
    arrows: false,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    rtl: language == 'en' ? false : true,
    afterChange: (index) => {
      updateContent(index);
    }
  };

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
  
  const updateContent = (newIndex) => {
    if (banners.length > 0) {
      setCurrentContent(newIndex);
      setImgSrc(`${process.env.NEXT_PUBLIC_BASE_URL}/${banners[newIndex].file}`);
    }
  };

  const getTitle = () => {
    if (banners.length > 0) {
      const currentBanner = banners[currentContent]?.translations;
      if (language === 'en') {
        return currentBanner?.en?.title;
      } else if (language === 'ar') {
        return currentBanner?.ar?.title;
      } else {
        return currentBanner?.ur?.title;
      }
    }
    return "Loading...";
  };

  const getDescription = () => {
    if (banners.length > 0) {
      const currentBanner = banners[currentContent]?.translations;
      if (language === 'en') {
        return currentBanner?.en?.text
      }else if (language == 'ar') {
        return currentBanner?.ar?.text
      }else{
        return currentBanner?.ur?.text
      }
    }
    return "Loading...";
  }

  const getLink = () => {
    if (banners.length > 0) {
      const currentBanner = banners[currentContent]?.link;
      return currentBanner;
    }
  }


  return (
    <section id="header-content" className="absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center bg-zinc-800 bg-opacity-25">
      <div className="w-full">
        <div className="flex flex-wrap w-full items-center pt-20">
          <div className="w-full md:w-5/12 px-2 mb-2">
            <div className={`${language == 'en' ? 'lang-en' : 'lang-other'} content-inner px-7`}>
              <h1 className="title text-2xl sm:text-4xl md:text-[43px] overflow-hidden">
                <span className={`leading-[45px] md:leading-[50px] block w-fit`}>
                  {getTitle()}
                </span>
              </h1>
              <p className="description my-3 overflow-hidden text-[15px] md:text-[18px]">
                <span className='block w-fit'>
                  {getDescription()}
                </span>
              </p>
              <div className="button-group mt-6 flex flex-wrap">
                <a href={`${language == 'en' ? getLink() : language == 'ar' ? '/ar/' + getLink() : '/ur/' + getLink()}`} className="collaboration-btn flex items-center justify-center w-[150px] h-[35px] md:h-[45px] p-2 rounded-md mb-2 mx-1">
                  {language == 'en' ? 'collaboration' : language == 'ar' ? 'التعاون' : 'تعاون'}
                </a>
                <a href={`${language == 'en' ? '/about' : language == 'ar' ? '/ar/about' : '/ur/about'}`} className="about-us-btn flex items-center justify-center w-[150px] h-[35px] md:h-[45px] border-2 border-white rounded-md p-2 text-white mb-2 mx-1">
                  {language == 'en' ? 'about us' : language == 'ar' ? 'من نحن' : 'ہمارے بارے میں'}
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 px-2 md:pt-40 relative">
            <div className={`slider-container ${language == 'en' ? 'lang-en' : 'lang-other'} relative`}>
               {banners.length > 0 ? (
                <>
                  <div className={`slider-controls flex ${language == 'en' ? 'justify-end' : 'flex-row-reverse justify-start'} py-2 px-8 mb-2 sm:mb-3 md:mb-5`}>
                    <button onClick={prevSlide} className="slider-prev mx-1">
                      <PrevIcon width="30" height="30"/>
                    </button>
                    <button onClick={nextSlide} className="slider-next mx-1">
                      <NextIcon width="30" height="30"/>
                    </button>
                  </div>

                  <Slider ref={sliderRef} {...settings}>
                  {banners.map(item => (
                    <div className='slider-item border-2 border-white bg-transparent rounded-md' key={item.id}>
                      <Link href="#" className='relative'>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.file}`} alt={item.translations.en.title} layout="responsive" objectFit='cover' width={800} height={450} placeholder='blur' blurDataURL={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.thumbnail}`} className='rounded-[4px] h-[150px] sm:h-[135px] md:h-[150px] xl:h-[25vh] w-full'/>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </>
                ) : (
                  <div className='spinner flex justify-end'>
                    <img src="/img/spinner.svg" alt="loading ..." className='w-[220px]'/>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="scroll-down absolute bottom-0 w-full right-0 left-0 flex justify-center p-1">
        <div className="scroll-wrapper">
          <div className="circle-wrapper w-full h-full flex justify-center">
            <div className="circle"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Content;
