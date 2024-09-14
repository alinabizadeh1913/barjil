'use client';

import Link from "next/link";
import { Galaxy, RightIcon3 } from "../Icons";
import { Montserrat, Poppins } from 'next/font/google';
import { useEffect } from "react";
import { loadAboutBarjil } from "@/app/utils/script";

const Font = Montserrat({
    subsets : ['latin'],
    weight : ['900']
})

const Font2 = Poppins({
    subsets : ['latin'],
    weight : ['900']
})

const AboutBarjil = () => {

    useEffect(() => {
        const aboutBarjil = document.querySelector('#about-barjil');

        const handleScroll = () => {
            const sectionTop = aboutBarjil.offsetTop;
            const scrollY = window.scrollY;
    
            // مقایسه دقیق‌تر موقعیت سکشن با موقعیت اسکرول
            if (scrollY + window.innerHeight >= sectionTop + 200) {
                loadAboutBarjil();
            }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        // پاک کردن event listener هنگام unmount کامپوننت
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    
    return (
        <section id="about-barjil" className="mt-10 py-8 px-2">
            <div className="flex flex-wrap justify-between items-center">
               <div className="galaxy w-full md:w-4/12 px-3 flex justify-center">
                    <Galaxy className="w-[65%] md:w-[85%]"/>
                </div> 
               <div className="w-full md:w-8/12 px-3 flex justify-center">
                    <div className="barjil-trading">
                        <div className="title">
                            <p className={`about-title text-4xl md:text-6xl ${Font2.className} text-[#333333]`}>
                                About 
                            </p>
                            <p className={`text-6xl md:text-8xl ${Font.className} text-[#333333]`}>
                                BarJil Trading
                            </p>
                        </div>
                        <div className="description mt-4 mb-3 overflow-hidden">
                            <span className="text-[##666666]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </span>
                        </div>
                        <Link href="/about" className="link flex items-center font-bold w-fit">
                            <span className="text-[#32CD32]">
                                read more 
                            </span>
                            <RightIcon3 className="mx-1" height="13"/>
                        </Link>
                    </div>
               </div>
            </div>
            
        </section>
    )
}

export default AboutBarjil;