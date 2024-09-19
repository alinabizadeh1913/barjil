'use client';

import Link from "next/link";
import { Galaxy, RightIcon3 } from "../Icons";
import { useEffect } from "react";
import { loadAboutBarjil } from "@/app/utils/script";
import useStore from "@/app/store/Store";

const AboutBarjil = () => {

    const {language} = useStore();

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
        <section id="about-barjil" className="mt-10 py-8 px-2 wrapper mx-auto">
            <div className="flex flex-wrap justify-between items-center">
               <div className="galaxy w-full md:w-4/12 px-3 flex justify-center">
                    <Galaxy className={`w-[45%] md:w-[80%] h-[200px] md:h-[350px] ${language == 'en' ? 'lang-en' : 'lang-other'}`}/>
                </div> 
               <div className="w-full md:w-8/12 px-3 flex justify-center">
                    <div className="barjil-trading">
                        <div className="title">
                            <h1 className={`about-title text-4xl md:text-6xl ${language == 'en' ? 'poppins-exterabold' : 'yekan-exterabold'} text-[#333333]`}>
                                About 
                            </h1>
                            <h1 className={`text-5xl md:text-6xl lg:text-7xl text-[#333333]`}>
                                BarJil Trading
                            </h1>
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
                            <RightIcon3 className={`${language == 'en' ? '' : 'rotate-180'} mx-1`} height="13"/>
                        </Link>
                    </div>
               </div>
            </div>
            
        </section>
    )
}

export default AboutBarjil;