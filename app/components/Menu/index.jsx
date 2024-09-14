'use client';
import Link from "next/link";
import React from "react";
import { ShowHideSideMenu } from '../../utils/script';
import { Roboto } from 'next/font/google';
import { ArabicFlagIcon, BurgerMenuIcon, EmailIcon, EnglishFlagIcon, InstagramIcon, LogoIcon, PakistanFlagIcon, RightChevronIcon, WhatsappIcon } from "../Icons";
import useStore from "@/app/store/Store";


import irFont from 'next/font/local';

const iranFont = irFont({
  src : '../../../public/fonts/iranyekan.woff',
})

const Font = Roboto({
    subsets : ['latin'],
    weight : ['500']
})

const Menu = (props) => {

    const {language,setLanguage} = useStore();

    const ShowHideFullElem = () => {
        const fullScreenElement = document.querySelector('#full-screen');

        fullScreenElement.classList.toggle('show-hidden-activity');
    }

    const showHideLanguageList = () => {
        const languageList = document.querySelector('#menu .change-language .language-list');
        const icon = document.querySelector('#menu .change-language .icon');
        languageList.classList.toggle('show-hidden-activity');
        icon.classList.toggle('rotate-270');
    }

    const pakistan = () => {
        setLanguage('ur');
        showHideLanguageList();
    }

    const english = () => {
        setLanguage('en');
        showHideLanguageList();
    }

    const arabic = () => {
        setLanguage('ar');
        showHideLanguageList();
    }

    return (
        <section id="menu" className={`${language == 'en' ? Font.className : iranFont.className } ${props.static ? 'static' : 'fixed'} ${props.constant ? 'constant' : ''} top-0 left-0 w-full z-40 backdrop-filter backdrop-blur-sm py-3 px-6 md:py-5 md:px-9 ${props.background || 'bg-[#33333333]'} select-none`}>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between md:justify-normal">
                    <div className="w-4/12 md:w-1/12 order-2 md:order-1">
                        <div className="logo flex justify-center md:justify-start">
                            <Link href="/">
                                <LogoIcon width="45" height="45" fill="#32cd32"/>
                            </Link>
                        </div>
                    </div>
                    <div className="w-8/12 md:w-8/12 hidden md:block md:order-2">
                        <div className="links flex flex-wrap justify-center items-center">
                            <Link href="/" className="mb-1 mx-[16px] text-sm">
                                {
                                    language == 'en' ? 'Home' : language == 'ar' ? 'الرئيسية' : 'ہوم'
                                }
                            </Link>
                            <Link href="/articles" className="mb-1 mx-[16px] text-sm">
                                {
                                        language == 'en' ? 'Articles' : language == 'ar' ? 'المقالات' : 'مضامین'
                                }
                            </Link>
                            <Link href="/products" className="mb-1 mx-[16px] text-sm">
                                {
                                        language == 'en' ? 'Products' : language == 'ar' ? 'المنتجات' : 'مصنوعات'
                                }
                            </Link>
                            <Link href="/gallery" className="mb-1 mx-[16px] text-sm">
                                {
                                        language == 'en' ? 'Gallery' : language == 'ar' ? 'الغاليري' : 'گيلری'
                                }
                                
                            </Link>
                            <Link href="/about" className="mb-1 mx-[16px] text-sm">
                                {
                                        language == 'en' ? 'About us' : language == 'ar' ? 'من نحن' : 'ہمارے بارے میں'
                                }
                            </Link>
                            <Link href="/contact" className="mb-1 mx-[16px] text-sm">
                                {
                                        language == 'en' ? 'Contact us' : language == 'ar' ? 'اتصل بنا' : 'ہم سے رابطہ کریں'
                                }
                            </Link>
                        </div>
                    </div>
                    <div className="w-4/12 md:w-1/12 order-1 md:order-3 flex md:justify-center">
                        <div className="change-language flex justify-center items-center relative">
                            <div className="language cursor-pointer" onClick={showHideLanguageList}>
                                {
                                    language == 'en' ? <EnglishFlagIcon /> : language == 'ur' ? <PakistanFlagIcon /> : <ArabicFlagIcon />
                                }
                            </div>
                            <RightChevronIcon className="mx-2 icon duration-300"/>

                            <div className="language-list flex items-center p-[2px] border-2 border-[#dadada99] rounded-full absolute left-[54px] md:top-[40px]">
                                <PakistanFlagIcon  width="25" className="cursor-pointer" onClick={pakistan}/>
                                <EnglishFlagIcon className="mx-1 cursor-pointer" width="25"  onClick={english}/>
                                <ArabicFlagIcon  width="25" className="cursor-pointer" onClick={arabic}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/12 hidden md:order-4 md:flex justify-end ">
                        <div className="social-media flex justify-center">
                            <Link href="#" className="mx-1 cursor-pointer">
                                <WhatsappIcon />
                            </Link>
                            <Link href="#" className="mx-1 cursor-pointer">
                                <EmailIcon />
                            </Link>
                            <Link href="#" className="mx-1 cursor-pointer">
                                <InstagramIcon />
                            </Link>
                        </div>
                    </div>
                    <div className="w-4/12 flex justify-end order-3 md:hidden">
                        <div className="burger-menu" onClick={() => {
                            ShowHideSideMenu();
                            ShowHideFullElem()
                        }}>
                            <BurgerMenuIcon className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;