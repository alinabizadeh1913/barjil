'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Montserrat } from 'next/font/google';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getBanners } from '@/app/server/api/apiRoutes';
import useStore from '@/app/store/Store';
import { NextIcon, PrevIcon } from '../Icons';
import Link from 'next/link';
import Image from 'next/image';


const Font = Montserrat({
  subsets: ['latin'],
  weight: ['800'],
});

const Content = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const { setImgSrc } = useStore();
  const [banners, setBanners] = useState([]);
  const [skeleton,setSkeleton] = useState([
    {
      id : 1,
      img : "/img/preview.jpg"
    },
    {
      id : 2,
      img : "/img/preview.jpg"
    },
    {
      id : 3,
      img : "/img/preview.jpg"
    },
    {
      id : 4,
      img : "/img/preview.jpg"
    },
  ]);
  const sliderRef = useRef(null);

  useEffect(() => {
    getBanners().then(result => {
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

  return (
    <section id="header-content" className="absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center bg-zinc-800 bg-opacity-25">
      <div className="w-full">
        <div className="flex flex-wrap w-full items-center pt-20">
          <div className="w-full md:w-5/12 px-2 mb-2">
            <div className="content-inner px-7">
              <h1 className="title text-4xl md:text-[43px] overflow-hidden">
                <span className={`${Font.className} leading-[45px] md:leading-[50px] block w-fit`}>
                  {banners.length > 0 ? banners[currentContent].title : 'Plaster Production Company'}
                </span>
              </h1>
              <p className="description my-3 overflow-hidden text-[20px] md:text-[16px]">
                <span className='block w-fit'>
                  {banners.length > 0 ? banners[currentContent].text : 'Proudly, the first producer and exporter of plaster in Iran'}
                </span>
              </p>
              <div className="button-group mt-6 flex flex-wrap">
                <a href="#collaboration" className="collaboration-btn py-2 px-7 mr-2 rounded-md mb-2 ">
                  collaboration
                </a>
                <a href="#about" className="about-us-btn border-2 border-white rounded-md py-2 px-7 text-white mb-2">
                  about us
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 pl-2 md:pt-40 relative">
            <div className="slider-container relative">
               {banners.length > 0 ? (
                <>
                  <div className="slider-controls flex justify-end py-2 px-8 mb-5">
                    <button onClick={prevSlide} className="slider-prev mx-1">
                      <PrevIcon width="30" height="30"/>
                    </button>
                    <button onClick={nextSlide} className="slider-next mx-1">
                      <NextIcon width="30" height="30"/>
                    </button>
                  </div>

                  <Slider ref={sliderRef} {...settings}>
                  {banners.map(item => (
                  <div className='slider-item border-2 border-white rounded-md' key={item.id}>
                    <Link href={item.link} className='relative'>
                      <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.file}`} layout="responsive" objectFit='cover' width={800} height={450} placeholder='blur' blurDataURL={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.thumbnail}`} className='rounded-[4px] h-[150px] sm:h-[135px] md:h-[150px] xl:h-[25vh] w-full'/>
                    </Link>
                  </div>
                  ))}
                </Slider>
              </>
                ) : (
                  <div className='spinner flex justify-end'>
                    <img src="/img/spinner.svg" alt="" />
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
