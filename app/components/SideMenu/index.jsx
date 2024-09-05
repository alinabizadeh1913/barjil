'use client';
import React from "react";
import { Montserrat } from 'next/font/google';
import { ShowHideSideMenu } from '../../utils/script';
import Link from "next/link";
import { LogoIcon } from "../Icons";

const Font = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
});

const SideMenu = () => {
    return (
        <section id="side-menu" className={`${Font.className} fixed w-[70vw] h-[100vh] top-0 right-0 flex flex-col md:hidden py-5`}>
            <div className="sidemenu-inner bg-[#333333] h-full w-full rounded-tl-lg rounded-bl-lg flex flex-col items-center justify-center">
                <div className="logo w-[65%] flex justify-center items-center pt-4 pb-2 border-b-2 border-[#808080] cursor-default">
                    <LogoIcon fill="#32CD32" width="35"/>
                    <span className="mx-2 text-xl text-[#32cd32]">
                        BarJil
                    </span>
                </div>
                <div className="links flex flex-col w-full items-center">
                    <Link href="/" className="w-[55%] flex justify-center items-center py-6 border-b-2 border-[#808080]">
                        <span className="relative z-5">
                            Home
                        </span>
                    </Link>
                    <Link href="/articles" className="w-[55%] flex justify-center items-center py-6 border-b-2 border-[#808080]">
                        <span className="relative z-5">
                            Articles
                        </span>
                    </Link>
                    <Link href="/products" className="w-[55%] flex justify-center items-center py-6 border-b-2 border-[#808080]">
                        <span className="relative z-5">
                            Products
                        </span>
                    </Link>
                    <Link href="/gallery" className="w-[55%] flex justify-center items-center py-6 border-b-2 border-[#808080]">
                        <span className="relative z-5">
                            Gallery
                        </span>
                    </Link>
                    <Link href="/about" className="w-[55%] flex justify-center items-center py-6 border-b-2 border-[#808080]">
                        <span className="relative z-5">
                            About us
                        </span>
                    </Link>
                    <Link href="/contact" className="w-[55%] flex justify-center items-center py-6 border-b-2 border-[#808080]">
                        <span className="relative z-5">
                            Contact us
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SideMenu;