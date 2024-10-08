import React from "react";
import { Montserrat } from 'next/font/google';
import { InstagramIcon2, MessageIcon, PhoneIcon, WhatsappIcon2, LocationIcon } from "../Icons";
const Font = Montserrat({
    subsets : ['latin'],
    weight : ['900']
})

const ContactUs = () => {
    return (
        <section id="contact-items" className="mt-14">
            <div className="container mx-auto px-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12">
                        <div className="service flex flex-col">
                            <div className="title">
                                <h1 className={`text-[#333333] font-black text-[40px] ${Font.className}`}>
                                    Our Experts Are Ready to Service You!
                                </h1>
                            </div>
                            <div className="description mt-3 mb-5">
                                <p className="text-[#808080] text-sm">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                            <a href="#" className="link w-fit text-white py-2 px-6 rounded-lg text-sm">
                                Go To Request Box
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12">

                    </div>
                </div>
                <div className="flex flex-wrap mt-28 mb-16 md:px-6">
                    <div className="w-full md:w-6/12 md:px-6 mb-4">
                        <div className="contact email flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
                            <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                                <a href="#" className="text-center font-black text-md md:text-xl text-[#727272] relative z-20">
                                    example@gmail.com
                                </a>

                                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
                            </div>

                            <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center z-10">
                                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                                    <MessageIcon className="w-[27px] h-[27px] md:w-[37px] md:h-[37px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 md:px-6 mb-4">
                        <div className="contact instagram flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
                            <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                                <a href="#" className="text-center font-black text-md md:text-xl text-[#727272] relative z-20">
                                    barjiltrading.co
                                </a>

                                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
                            </div>
                            

                            <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                                    <InstagramIcon2 className="w-[27px] h-[27px] md:w-[37px] md:h-[37px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 md:px-6 mb-4">
                        <div className="contact whatsapp flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
                            
                            <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                                <a href="#" className="text-center font-black text-md md:text-xl text-[#727272] relative z-20">
                                    barjiltrading_company
                                </a>

                                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
                            </div>

                            <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                                    <WhatsappIcon2 className="w-[27px] h-[27px] md:w-[37px] md:h-[37px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 md:px-6 mb-4">
                        <div className="contact phone flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">

                            <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                                <a href="#" className="text-center font-black text-md md:text-xl text-[#727272] relative z-20">
                                    +98 32 3434 5678
                                </a>

                                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
                            </div>

                            <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                                    <PhoneIcon className="w-[27px] h-[27px] md:w-[37px] md:h-[37px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:px-6 mb-4">
                        <div className="contact location flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">

                            <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                                <a href="#" className="text-center font-black text-md md:text-xl text-[#727272] relative z-20">
                                    Iran, Khoozestan, Lorem Ipsum is simply dummy text of...
                                </a>

                                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
                            </div>

                            <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                                    <LocationIcon className="w-[27px] h-[27px] md:w-[37px] md:h-[37px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;