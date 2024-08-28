'use client';
import React from "react";
import { Montserrat } from 'next/font/google';
import { ShowHideSideMenu } from '../../utils/script';

const Font = Montserrat({
  subsets: ['latin'],
  weight: ['800'],
});

const SideMenu = () => {
    return (
        <section id="side-menu" className={`${Font.className} fixed w-[60vw] h-[100vh] top-0 right-0 bottom-0 bg-white z-30 flex flex-col md:hidden`}>
            <div className="logo-close p-6 flex justify-between items-center border border-b-zinc-600 border-opacity-20">
                <svg width="44" height="46" viewBox="0 0 54 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99418 28C5.99238 32.7535 7.53024 37.3797 10.3775 41.1861C13.2248 44.9925 17.2284 47.7743 21.7889 49.1151C26.3494 50.4558 31.2215 50.2834 35.6758 48.6237C40.1301 46.9639 43.927 43.9061 46.4982 39.908L36.2142 36.748C34.5078 38.3518 32.3695 39.4213 30.0628 39.8246C27.7561 40.228 25.3817 39.9476 23.2324 39.0181C21.0831 38.0886 19.2527 36.5505 17.9668 34.5934C16.6809 32.6363 15.9958 30.3457 15.9958 28.004C15.9958 25.6623 16.6809 23.3717 17.9668 21.4146C19.2527 19.4575 21.0831 17.9194 23.2324 16.9899C25.3817 16.0604 27.7561 15.78 30.0628 16.1834C32.3695 16.5868 34.5078 17.6562 36.2142 19.26L46.4942 16.092C43.9223 12.0957 40.1256 9.03968 35.672 7.38114C31.2185 5.72261 26.3477 5.55076 21.7883 6.89132C17.229 8.23188 13.2263 11.0128 10.3792 14.8179C7.53214 18.623 5.99372 23.2477 5.99418 28ZM27.9942 56C22.9522 55.999 18.0041 54.6365 13.6723 52.0565C9.34045 49.4766 5.78562 45.7748 3.38314 41.342C0.980647 36.9093 -0.18035 31.9101 0.0227254 26.8722C0.225801 21.8344 1.78541 16.9449 4.53689 12.7199C7.28838 8.49489 11.1296 5.09124 15.6551 2.8683C20.1805 0.645363 25.2222 -0.314388 30.2479 0.0903893C35.2736 0.495163 40.0967 2.24945 44.208 5.16801C48.3194 8.08658 51.5663 12.0611 53.6062 16.672C53.7775 17.0594 53.8648 17.4787 53.8623 17.9023C53.8599 18.3259 53.7678 18.7441 53.5921 19.1296C53.4164 19.515 53.1611 19.8588 52.8429 20.1385C52.5247 20.4181 52.151 20.6272 51.7462 20.752L36.1422 25.552C35.5463 25.736 34.9078 25.7297 34.3157 25.534C33.7235 25.3383 33.2071 24.9629 32.8382 24.46C32.0914 23.4381 31.0407 22.6785 29.8361 22.2899C28.6316 21.9012 27.335 21.9035 26.1318 22.2962C24.9286 22.689 23.8805 23.4522 23.1372 24.4766C22.394 25.5011 21.9938 26.7343 21.9938 28C21.9938 29.2657 22.394 30.4989 23.1372 31.5234C23.8805 32.5478 24.9286 33.311 26.1318 33.7038C27.335 34.0966 28.6316 34.0988 29.8361 33.7101C31.0407 33.3215 32.0914 32.5619 32.8382 31.54C33.2065 31.0364 33.7228 30.6602 34.315 30.4638C34.9072 30.2673 35.5459 30.2604 36.1422 30.444L51.7462 35.244C52.1515 35.3687 52.5257 35.5779 52.8443 35.8578C53.1628 36.1378 53.4184 36.482 53.5941 36.8679C53.7699 37.2538 53.8618 37.6726 53.8639 38.0967C53.866 38.5207 53.7781 38.9404 53.6062 39.328C51.4112 44.2895 47.8221 48.5065 43.2752 51.4663C38.7284 54.4261 33.4195 56.0011 27.9942 56Z" fill="#FF8C00"/>
                </svg>
                <i class="fa-solid fa-xmark text-zinc-700 text-3xl cursor-pointer" onClick={() => {
                    ShowHideSideMenu();
                }}></i>
            </div>
            <div className="links flex flex-col">
                <a href="/" className="px-6 py-4 border border-b-zinc-600 border-opacity-20 text-zinc-800 hover:text-white duration-200">
                    <span className="relative z-10">
                        <i class="fa-solid fa-house mr-2"></i>
                        Home
                    </span>
                </a>
                <a href="#articles" className="px-6 py-4 border border-b-zinc-600 border-opacity-20 text-zinc-800 hover:text-white duration-200">
                    <span className="relative z-10">
                        <i class="fa-solid fa-rectangle-list mr-2"></i>
                        Articles
                    </span>
                </a>
                <a href="#products" className="px-6 py-4 border border-b-zinc-600 border-opacity-20 text-zinc-800 hover:text-white duration-200">
                    <span className="relative z-10">
                        <i class="fa-solid fa-bag-shopping mr-2"></i>
                        Products
                    </span>
                </a>
                <a href="#gallery" className="px-6 py-4 border border-b-zinc-600 border-opacity-20 text-zinc-800 hover:text-white duration-200">
                    <span className="relative z-10">
                        <i class="fa-solid fa-images mr-2"></i>
                        Gallery
                    </span>
                </a>
                <a href="#about" className="px-6 py-4 border border-b-zinc-600 border-opacity-20 text-zinc-800 hover:text-white duration-200">
                    <span className="relative z-10">
                        <i class="fa-solid fa-circle-info mr-2"></i>
                        About us
                    </span>
                </a>
                <a href="#contact" className="px-6 py-4 border border-b-zinc-600 border-opacity-20 text-zinc-800 hover:text-white duration-200">
                    <span className="relative z-10">
                        <i class="fa-solid fa-phone mr-2"></i>
                        Contact us
                    </span>
                </a>
            </div>
            <div className="social-media p-6 flex justify-between">
                <a href="/" className="flex items-center justify-center mx-1 mb-2 sm:mb-0 w-[35px] h-[35px] border border-zinc-400 rounded-sm text-zinc-800 hover:bg-zinc-800 hover:text-white cursor-pointer duration-300">
                    <i class="fa-brands fa-twitter text-lg"></i>
                </a>
                <a href="/" className="flex items-center justify-center mx-1 mb-2 sm:mb-0 w-[35px] h-[35px] border border-zinc-400 rounded-sm text-zinc-800 hover:bg-zinc-800 hover:text-white cursor-pointer duration-300">
                    <i class="fa-brands fa-instagram text-lg"></i>
                </a>
                <a href="/" className="flex items-center justify-center mx-1 mb-2 sm:mb-0 w-[35px] h-[35px] border border-zinc-400 rounded-sm text-zinc-800 hover:bg-zinc-800 hover:text-white cursor-pointer duration-300">
                    <i class="fa-brands fa-telegram text-lg"></i>
                </a>
                <a href="/" className="flex items-center justify-center mx-1 mb-2 sm:mb-0 w-[35px] h-[35px] border border-zinc-400 rounded-sm text-zinc-800 hover:bg-zinc-800 hover:text-white cursor-pointer duration-300">
                    <i class="fa-brands fa-linkedin-in text-lg"></i>
                </a>
                <a href="/" className="flex items-center justify-center mx-1 mb-2 sm:mb-0 w-[35px] h-[35px] border border-zinc-400 rounded-sm text-zinc-800 hover:bg-zinc-800 hover:text-white cursor-pointer duration-300">
                    <i class="fa-solid fa-rss text-lg"></i>
                </a>
            </div>
        </section>
    )
}

export default SideMenu;