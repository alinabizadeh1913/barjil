'use client';

import { loadCategory } from "@/app/utils/script";
import { useEffect, useState } from "react";
import { Montserrat } from 'next/font/google'
import Link from "next/link";

const Font = Montserrat({
    subsets : ['latin'],
    weight : ['900']
})

const Category = () => {

    const [readyToDisplayCategory,setReadyToDisplayCategory] = useState(false);

    useEffect(() => {

        const category = document.querySelector('#category');

        const handleScroll = () => {
            
            const sectionTop = category.offsetTop;
            const scrollY = window.scrollY;
    
            // مقایسه دقیق‌تر موقعیت سکشن با موقعیت اسکرول
            if (scrollY + window.innerHeight >= sectionTop + 200) {
                setReadyToDisplayCategory(true);
            }
        }

        if (readyToDisplayCategory) {
            loadCategory();
        }
    
        window.addEventListener('scroll', handleScroll);
    
        // پاک کردن event listener هنگام unmount کامپوننت
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        

    })

    return (
        <section id="category" className="mt-36 relative" dir="ltr">
                <div className="flex flex-wrap flex-col overflow-hidden justify-center items-center relative">
                    <div className="category-item c-i-1 w-full"></div>
                    <div className="category-item c-i-2 w-full"></div>
                    <div className="category-item c-i-3 w-full"></div>
                    <div className="category-item c-i-4 w-full"></div>
                    <div className="category-item c-i-5 w-full"></div>
                    <div className="category-item c-i-6 w-full"></div>
                    <div className="category-item c-i-7 w-full"></div>
                    <div className="category-item c-i-8 w-full"></div>
                    <div className="category-item c-i-9 w-full"></div>
                    <div className="category-item c-i-10 w-full"></div>

                    <div className="category-wrapper absolute top-0 right-0 left-0 bottom-0 w-full h-full flex flex-wrap items-center justify-center p-5">
                        <div className="category-circle hidden md:block c-c-1 absolute z-10 overflow-hidden">
                            <img src="/img/petrochemical.jpg" alt="" className="w-full h-full object-cover rounded-full"/>
                            <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-opacity-45 p-8 flex items-end justify-center">
                                <Link href="#" className="text-white font-bold text-center md:text-xl">
                                    petrochemical and petroleum
                                </Link>
                            </div>
                        </div>
                        
                        <div className="category-circle-res block md:hidden c-c-res-1 absolute w-[160px] h-[160px] rounded-full z-10 overflow-hidden">
                            <img src="/img/petrochemical.jpg" alt="" className="w-full h-full object-cover rounded-full block"/>
                            <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-opacity-45 p-8 flex items-end justify-center">
                                <Link href="#" className="text-white font-bold text-center md:text-xl">
                                    petrochemical and petroleum
                                </Link>
                            </div>
                        </div>
                        <div className={`${Font.className} category-title h-[95%] overflow-hidden flex flex-col justify-center`}>
                            
                            <p className="text-[#333333] text-[36px] font-bold text-opacity-20 select-none h-[40px] overflow-hidden flex items-center t7">
                                <span>
                                    CATEGORY
                                </span>
                            </p>
                            <p className="text-[#333333] text-[36px] font-bold text-opacity-30 select-none h-[40px] overflow-hidden flex items-center t5">
                                <span>
                                    CATEGORY
                                </span>
                            </p>
                            <p className="text-[#333333] text-[36px] font-bold text-opacity-60 select-none h-[40px] overflow-hidden flex items-center t3">
                                <span>
                                    CATEGORY
                                </span>
                            </p>
                            <p className="text-[#333333] text-[36px] font-black select-none h-[40px] overflow-hidden flex items-center t1">
                                <span>
                                    CATEGORY
                                </span>
                            </p>
                            <p className="text-[#333333] text-[36px] font-bold text-opacity-60 select-none h-[40px] overflow-hidden flex items-center t2">
                                <span>
                                    CATEGORY
                                </span>
                            </p>
                            <p className="text-[#333333] text-[36px] font-bold text-opacity-30 select-none h-[40px] overflow-hidden flex items-center t4">
                                <span>
                                    CATEGORY
                                </span>
                            </p>
                            <p className="text-[#333333] text-[36px] font-bold text-opacity-20 select-none h-[40px] overflow-hidden flex items-center t6">
                                <span>
                                    CATEGORY
                                </span>
                            </p>
                            
                        </div>
                        <div className="category-circle hidden md:block c-c-2 absolute z-10 overflow-hidden">
                            <img src="/img/minerals.jpg" alt="" className="w-full h-full object-cover rounded-full"/>
                            <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-opacity-45 p-8 flex items-end justify-center">
                                <Link href="#" className="text-white font-bold text-center md:text-xl">
                                    minerals
                                </Link>
                            </div>
                        </div>

                        <div className="category-circle-res block md:hidden c-c-res-2 w-[160px] h-[160px] rounded-full absolute z-10 overflow-hidden">
                            <img src="/img/minerals.jpg" alt="" className="w-full h-full object-cover rounded-full block"/>
                            <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-opacity-45 p-8 flex items-end justify-center">
                                <Link href="#" className="text-white font-bold text-center md:text-xl">
                                    minerals
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="front absolute top-0 left-0 right-0 bottom-0 z-20 w-full h-full"></div>
        </section>
    )
}

export default Category