import React from "react";
import { LogoIcon, RightIcon } from "../Icons";

const Footer = () => {
    return (
        <footer id="footer" className="w-full mt-20 bg-[#333333] pt-14 px-10">
            <div className="container mx-auto flex flex-col">
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
                    <div className="footer-item-wrapper md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
                        <div className="footer-item h-full">
                            <div className="footer-inner py-8 px-10 h-full">
                                <div className="description flex items-center justify-center h-full">
                                    <div className="logo mr-4">
                                        <LogoIcon fill="#fff" width="50"/>
                                    </div>
                                    <div className="text text-sm">
                                        Here we can have a short description about the company and it’s prespective.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item-wrapper md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-2">
                        <div className="footer-item h-full">
                            <div className="footer-inner py-5 px-8 h-full">
                                <div className="join-us flex flex-col items-center justify-center h-full">
                                    <h2 className="title text-lg text-white mb-3">
                                        Join our customers team!
                                    </h2>
                                    <form action="" className="w-full">
                                        <div className="input-g flex flex-wrap">
                                            <div className="w-[80%]">
                                                <input type="email" name="email" id="" placeholder="exapmle@gmail.com" className="w-full h-full px-3 rounded-md bg-[#d2ffc14a] bg-opacity-25 outline-0 text-white"/>
                                            </div>
                                            <div className="w-[20%] flex justify-center">
                                                <button type="submit" className="flex items-center justify-center p-1 border-2 border-white rounded-md">
                                                    <RightIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item-wrapper md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3">
                        <div className="footer-item h-full">
                            <div className="footer-inner py-5 px-8 text-center h-full">
                                <div className="quick-acces flex flex-col justify-center h-full">
                                    <h2 className="title text-2xl text-white font-bold pb-4 border-b border-white border-opacity-45 cursor-default">
                                        Quick acces
                                    </h2>
                                    <div className="links mt-4 flex flex-col items-center">
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Home
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Products
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Gallery
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 duration-300 hover:text-opacity-100 ">
                                            Articles
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-item-wrapper md:row-start-1 md:row-end-3 md:col-start-3 md:col-end-4">
                        <div className="footer-item h-full">
                            <div className="footer-inner p-6 text-center h-full">
                                <div className="useful-links flex flex-col justify-center h-full">
                                    <h2 className="title text-2xl text-white font-bold pb-4 border-b border-white border-opacity-45 cursor-default">
                                        Useful links
                                    </h2>
                                    <div className="links mt-4 flex flex-col items-center">
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            About us
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                        Contact us
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 mb-3 duration-300 hover:text-opacity-100 ">
                                            Help
                                        </a>
                                        <a href="#" className="text-white text-opacity-60 duration-300 hover:text-opacity-100 ">
                                            Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <div className="developing bg-[#666666] text-[#252525] rounded-tl-[4px] rounded-tr-[4px] py-2 px-6 cursor-default duration-300 hover:text-white">
                        Design & Developing by Rubysa
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;