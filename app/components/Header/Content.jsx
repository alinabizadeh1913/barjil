'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import { getBanners } from '@/app/server/api/apiRoutes';
import useStore from '@/app/store/Store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HashNavigation, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { NextIcon, PrevIcon } from '../Icons';

const Font = Montserrat({
  subsets: ['latin'],
  weight: ['800'],
});

const Content = () => {

  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const swiperRef = useRef(null); // Reference to the Swiper instance

  const [currentContent, setCurrentContent] = useState(0);
  const { setImgSrc } = useStore();
  const [banners, setBanners] = useState(null);

  const prevItem = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  const nextItem = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  const handleSlideChange = (swiper) => {
    if (banners) {
      setCurrentContent(swiper.realIndex);
      setImgSrc(`${process.env.NEXT_PUBLIC_BASE_URL}/${banners[swiper.realIndex].file}`);
    }
  };

  useEffect(() => {
    getBanners().then(result => {
      setBanners(result);
    });
  }, []);

  return (
    <section id="header-content" className="absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center bg-zinc-800 bg-opacity-25">
      <div className="w-full">
        <div className="flex flex-wrap w-full items-center pt-20">
          <div className="w-full md:w-6/12 px-2 mb-6">
            <div className="content-inner px-7">
              <h1 className="title text-4xl md:text-5xl overflow-hidden">
                <span className={`${Font.className} leading-[45px] md:leading-[55px] block w-fit`}>
                  {banners ? banners[currentContent].title : 'Plaster Production Company'}
                </span>
              </h1>
              <p className="description my-3 overflow-hidden text-[20px] md:text-[18px]">
                <span className='block w-fit'>
                  {banners ? banners[currentContent].text : 'Proudly, the first producer and exporter of plaster in Iran'}
                </span>
              </p>
              <div className="button-group mt-6">
                <a href="#collaboration" className="collaboration-btn py-3 px-6 mr-2 rounded-md">
                  collaboration
                </a>
                <a href="#about" className="about-us-btn border-2 border-white rounded-md py-3 px-6 text-white">
                  about us
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 mt-8 md:mt-0 pl-2 pt-6 md:pt-40 relative">
            <div className="slider-container relative">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper; // Store the Swiper instance
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                onSlideChange={handleSlideChange}
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                navigation={{
                  nextEl: nextRef.current,
                  prevEl: prevRef.current,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
              >
                {
                  banners && banners.map(item => (
                    <SwiperSlide className='border-2 border-white rounded-md' key={item.id}>
                      <Link href={item.link} className='relative'>
                        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.file}`} layout="responsive" objectFit='cover' width={800} height={450} placeholder='blur' blurDataURL={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.thumbnail}`} className='rounded-[4px] h-[120px]'/>
                      </Link>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <div className="button-group absolute top-[-60px] left-0 right-0 flex justify-end px-7">
                <button ref={prevRef} className="swiper-button-prev mx-1" onClick={prevItem}>
                  <PrevIcon width="30" height="30"/>
                </button>
                <button ref={nextRef} className="swiper-button-next mx-1" onClick={nextItem}>
                  <NextIcon width="30" height="30"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
