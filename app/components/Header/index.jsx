'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Content from "./Content";
import useStore from "../../store/Store";
import { DownChevronIcon, ScrollDownIcon } from "../Icons";
import { getBanners } from "@/app/server/api/apiRoutes";

const Header = () => {

    const { imgSrc, setImgSrc, language } = useStore();
    const [banners,setBanners] = useState()

    useEffect(() => {
        getBanners().then(result => {
          setBanners(result)
        });
        
      }, []);

      useEffect(() => {
        if (banners) {
            setImgSrc(`${process.env.NEXT_PUBLIC_BASE_URL}/${banners[0].file}`);
        }
      },[banners])

    return (
        <React.Fragment>
            <section id="header" className="select-none relative w-full min-h-screen overflow-hidden">
                <Image src={String(imgSrc)} alt="Header Image" fill style={{ objectFit: 'cover' }} />
                <Content />
            </section>
            <div id="scroll-down-wrapper" className="flex justify-center items-start lg:h-[33px] xl:bg-[#32CD32] text-center relative select-none">
                <svg width="1440"  viewBox="0 0 1440 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H1440V33H1080H902.792C852.284 33 806.655 69.2155 759.149 86.3693C747.885 90.4365 734.882 93 720 93C705.118 93 692.115 90.4365 680.851 86.3692C633.345 69.2155 587.716 33 537.208 33H360H0V0Z" fill="#32CD32"/>
                </svg>
                <div className="content absolute top-[50%] sm:top-[35%] lg:top-[90%] xl:top-[110%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <p className="hidden sm:block text-white text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] xl:text-[19px] cursor-default md:mx-2">
                        {language == 'en' ? 'scroll down' : language == 'ar' ? 'مرر لأسفل' : 'نیچے سکرول کریں'}
                    </p>
                    <div className="overflow-hidden">
                        <div className="flex sm:hidden md:flex flex-col h-[25px] scroll-icons-wrapper">
                            <DownChevronIcon stroke="white" className="w-[10px] sm:w-[10px] md:w-[12px] hidden md:block"/>
                            <DownChevronIcon stroke="white" className="w-[10px] sm:w-[10px] md:w-[12px]"/>
                            <DownChevronIcon stroke="white" className="w-[10px] sm:w-[10px] md:w-[12px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;