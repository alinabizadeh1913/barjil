'use client';
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useRouter, usePathname } from 'next/navigation';
import { ShowHideSideMenu } from '../../utils/script';
import { ArabicFlagIcon, BurgerMenuIcon, EmailIcon, EnglishFlagIcon, InstagramIcon, LogoIcon, PakistanFlagIcon, RightChevronIcon, WhatsappIcon } from "../Icons";
import useStore from "@/app/store/Store";



const Menu = (props) => {
    const {language, setLanguage} = useStore();
    const router = useRouter();
    const pathname = usePathname();
    const langWrapRef = useRef(null);

    const stripLanguageFromPath = (path) => {
        return path.replace(/^\/(ar|ur)/, '');
    };

    const changeLanguage = (lang) => {
        const cleanPath = stripLanguageFromPath(pathname);
        if (lang === 'en') {
            router.push(cleanPath);
        } else {
            router.push(`/${lang}${cleanPath}`);
        }
        setLanguage(lang);
    };

    const ShowHideFullElem = () => {
        const fullScreenElement = document.querySelector('#full-screen');
        fullScreenElement.classList.toggle('show-hidden-activity');
    }

   useEffect(() => {
        const handleClickOutside = (e) => {
            if (langWrapRef.current && !langWrapRef.current.contains(e.target)) {
                const languageList = document.querySelector('#menu .change-language .language-list');
                const icon = document.querySelector('#menu .change-language .icon');
                languageList.classList.remove('show-hidden-activity');
                icon.classList.remove('rotate-270');
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const showHideLanguageList = () => {
        const languageList = document.querySelector('#menu .change-language .language-list');
        const icon = document.querySelector('#menu .change-language .icon');
        languageList.classList.toggle('show-hidden-activity');
        icon.classList.toggle('rotate-270');
    }


    return (
        <section id="menu" className={`${props.static ? 'static' : 'fixed'} ${props.constant ? 'constant' : ''} top-0 left-0 w-full z-40 backdrop-filter backdrop-blur-sm py-3 px-6 md:py-5 md:px-9 ${props.background || 'bg-[#33333333]'} select-none`}>
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
                            <Link href={`${language == 'en' ? '/' : language == 'ar' ? '/ar' : '/ur'}`} className="mb-1 mx-[16px] text-sm">
                                {
                                    language == 'en' ? 'Home' : language == 'ar' ? 'الرئيسية' : 'ہوم'
                                }
                            </Link>
                            <Link href={`${language == 'en' ? '/papers' : language == 'ar' ? '/ar/papers' : '/ur/papers'}`} className="mb-1 mx-[16px] text-sm">
                                {
                                    language == 'en' ? 'Articles' : language == 'ar' ? 'المقالات' : 'مضامین'
                                }
                            </Link>
                            <Link href={`${language == 'en' ? '/products' : language == 'ar' ? '/ar/products' : '/ur/products'}`} className="mb-1 mx-[16px] text-sm">
                                {
                                    language == 'en' ? 'Products' : language == 'ar' ? 'المنتجات' : 'مصنوعات'
                                }
                            </Link>
                            <Link href={`${language == 'en' ? '/gallery' : language == 'ar' ? '/ar/gallery' : '/ur/gallery'}`} className="mb-1 mx-[16px] text-sm">
                                {
                                    language == 'en' ? 'Gallery' : language == 'ar' ? 'الغاليري' : 'گيلری'
                                }
                            </Link>
                            <Link href={`${language == 'en' ? '/about' : language == 'ar' ? '/ar/about' : '/ur/about'}`} className="mb-1 mx-[16px] text-sm">
                                {
                                    language == 'en' ? 'About us' : language == 'ar' ? 'من نحن' : 'ہمارے بارے میں'
                                }
                            </Link>
                            <Link href={`${language == 'en' ? '/contact' : language == 'ar' ? '/ar/contact' : '/ur/contact'}`} className="mb-1 mx-[16px] text-sm">
                                {
                                    language == 'en' ? 'Contact us' : language == 'ar' ? 'اتصل بنا' : 'ہم سے رابطہ کریں'
                                }
                            </Link>
                        </div>
                    </div>
                    <div className={`w-4/12 md:w-1/12 ${language == 'en' ? 'order-1' : 'order-3 justify-end'} md:order-3 flex md:justify-center`}>
                        <div className={`change-language flex justify-center relative`} ref={langWrapRef}>
                            <div className={`lang-wrap flex ${language == 'en' ? '' : 'flex-row-reverse md:flex-row'} justify-center items-center relative`} onClick={showHideLanguageList}>
                                <div className="language cursor-pointer">
                                    {
                                        language == 'en' ? <EnglishFlagIcon width="25" height="25"/> : language == 'ur' ? <PakistanFlagIcon width="25" height="25"/> : <ArabicFlagIcon width="25" height="25"/>
                                    }
                                </div>
                                <RightChevronIcon className="lang-icon mx-2 icon duration-300 cursor-pointer"/>
                            </div>

                            <div className="language-list flex items-center p-[2px] border-2 border-[#dadada99] rounded-full absolute left-[54px] md:top-[40px]">
                                <PakistanFlagIcon  width="25" height="25" className="cursor-pointer" onClick={() => {
                                    showHideLanguageList();
                                     changeLanguage('ur');
                                }}/>
                                <EnglishFlagIcon className="mx-1 cursor-pointer" width="25" height="25"  onClick={() => {
                                    showHideLanguageList();
                                    changeLanguage('en')
                                }}/>
                                <ArabicFlagIcon  width="25" height="25" className="cursor-pointer" onClick={() => {
                                    showHideLanguageList();
                                    changeLanguage('ar')
                                }}/>
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
                    <div className={`w-4/12 flex ${language == 'en' ? 'order-3 justify-end' : 'order-1 justify-start'} md:hidden`}>
                        <div className="burger-menu" onClick={() => {
                            ShowHideSideMenu();
                            ShowHideFullElem();
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
