'use client';
import Link from "next/link";
import React from "react";
import { ShowHideSideMenu } from '../../utils/script';
import { Roboto } from 'next/font/google';
import { BurgerMenuIcon, EmailIcon, InstagramIcon, IranFlagIcon, LogoIcon, RightChevronIcon, WhatsappIcon } from "../Icons";


const Font = Roboto({
    subsets : ['latin'],
    weight : ['500']
})

const Menu = () => {

    const ShowHideFullElem = () => {
        const fullScreenElement = document.querySelector('#full-screen');

        fullScreenElement.classList.toggle('show-hidden-activity');
    }

    return (
        <section id="menu" className={`${Font.className} fixed top-0 left-0 w-full z-40 backdrop-filter backdrop-blur-sm py-3 px-6 md:py-5 md:px-9 bg-[#33333333]`}>
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
                            <Link href="/" className="mb-1 mx-[14px] text-sm">
                                Home
                            </Link>
                            <Link href="/articles" className="mb-1 mx-[20px] text-sm">
                                Articles
                            </Link>
                            <Link href="/products" className="mb-1 mx-[20px] text-sm">
                                Products
                            </Link>
                            <Link href="/gallery" className="mb-1 mx-[20px] text-sm">
                                Gallery
                            </Link>
                            <Link href="/about" className="mb-1 mx-[20px] text-sm">
                                About us
                            </Link>
                            <Link href="/contact" className="mb-1 mx-[20px] text-sm">
                                Contact us
                            </Link>
                        </div>
                    </div>
                    <div className="w-4/12 md:w-1/12 order-1 md:order-3 flex md:justify-center">
                        <div className="change-language flex items-center">
                            <div className="language cursor-pointer">
                                <IranFlagIcon />
                            </div>
                            <RightChevronIcon className="ml-1"/>
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