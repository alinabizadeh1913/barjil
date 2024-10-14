"use client";

import React, { useEffect, useState } from "react";
import { CustomersIcon, GoalIcon, InfoIcon, InsightIcon, StarIcon2, SupportIcon, TruckIcon, UserIcon } from "../Icons";
import Image from "next/image";
import useStore from "@/app/store/Store";
import { getAbout, getSettings } from "@/app/server/api/apiRoutes";

const AboutUs = () => {

    const {language} = useStore();
    const [aboutItems,setAboutitems] = useState([]);
    const [customers,setCustomers] = useState(0);

    useEffect(() => {
        getAbout().then(result => {
            setAboutitems(result);
        }).catch(error => console.log(error))

        getSettings().then(result => {
            setCustomers(result.active_customers);
        }
        )
    }, [])

    return (
        <section id="about-items" className="mt-14">
            <div className="container mx-auto mt-10">
                <div className="benefits flex flex-wrap items-center px-8">
                    <div className="w-1/2 md:w-1/4 px-2">
                        <div className="benefits-item bg-[#32CD32] rounded-full p-3 flex flex-col items-center justify-center mb-6 md:mb-0 relative">
                            <SupportIcon className="w-[40px] h-[60px] md:w-[60px] md:h-[80px] mt-[-35px] md:mt-[-38px]"/>
                            <p className="text-sm md:text-base text-[#006400] font-bold text-center">
                                {
                                    language == 'en' ? '24 Hours Support' : language == 'ar' ? 'دعم على مدار الساعة' : '24 گھنٹے کی مدد'
                                }
                            </p>
                            <div className={`line absolute ${language == 'en' ? 'right-[-26px]' : 'left-[-26px]'} w-9 h-[4px] bg-[#32CD32]`}></div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-2">
                        <div className="benefits-item bg-[#32CD32] rounded-full p-3 flex flex-col items-center justify-center mb-6 md:mb-0 relative">
                            <StarIcon2 className="w-[40px] h-[60px] md:w-[60px] md:h-[80px] mt-[-35px] md:mt-[-38px]"/>
                            <p className="text-sm md:text-base text-[#006400] font-bold text-center">
                                {
                                    language == 'en' ? 'Origin & Quality' : language == 'ar' ? ' الأصل والجودة' : 'ماخذ اور معیار'
                                }
                            </p>
                            <div className={`line absolute ${language == 'en' ? 'right-[-26px]' : 'left-[-26px]'} w-9 h-[4px] bg-[#32CD32] hidden md:block`}></div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-2">
                        <div className="benefits-item bg-[#32CD32] rounded-full p-3 flex flex-col items-center justify-center mb-6 md:mb-0 relative">
                            <TruckIcon className="w-[40px] h-[60px] md:w-[60px] md:h-[80px] mt-[-35px] md:mt-[-38px]"/>
                            <p className="text-sm md:text-base text-[#006400] font-bold text-center">
                                {
                                    language == 'en' ? 'Global Transport' : language == 'ar' ? 'النقل العالمي' : 'عالمی نقل و حمل'
                                }
                            </p>
                            <div className={`line absolute ${language == 'en' ? 'right-[-26px]' : 'left-[-26px]'} w-9 h-[4px] bg-[#32CD32]`}></div>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-2">
                        <div className="benefits-item bg-[#32CD32] rounded-full p-3 flex flex-col items-center justify-center mb-6 md:mb-0">
                            <UserIcon className="w-[40px] h-[60px] md:w-[60px] md:h-[80px] mt-[-35px] md:mt-[-38px]"/>
                            <p className="text-sm md:text-base text-[#006400] font-bold text-center">
                                +{customers} {language == 'en' ? 'Active Customers' : language == 'ar' ? 'عميل نشط' : 'فعال صارفین'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-20">
                {
                    aboutItems.length > 0 && aboutItems.map(item => (
                        <div className="about-us-content flex flex-wrap px-2 sm:px-4 md:px-8 mb-12">
                    <div className="about-us-inner flex flex-wrap items-center w-full">
                        <div className={`w-full md:w-7/12 px-3 md:px-6 mb-4 md:mb-0  ${item.id % 2 == 0 ? 'order-first md:order-last' : ''}`}>
                            <div className="title">
                                <h1 className="text-2xl font-bold flex items-center cursor-default">
                                    <Image src={item.icon} alt={item.translations.en.title} width={45} height={45} />
                                    <span className="text-[#5f5f5f] mx-3">
                                        {language == 'en' ? item.translations.en.title : language == 'ar' ? item.translations.ar.title : item.translations.ur.title}
                                    </span>
                                </h1>
                            </div>
                            <div className="description md:px-16">
                                <p className="text-[#808080] text-sm leading-6" dangerouslySetInnerHTML={{__html: language == 'en' ? item.translations.en.text : language == 'ar' ? item.translations.ar.text : item.translations.ur.text}}></p>
                            </div>
                        </div>
                        <div className={`w-full md:w-5/12 px-3 md:px-6 ${item.id % 2 == 0 ? 'order-last md:order-first' : ''}`}>
                            <div className={`image-wrapper w-full flex justify-center ${item.id % 2 == 0 ? 'md:justify-start' : 'justify-end'}`}>
                                <div className="image-inner relative w-[90%]">
                                    <div className="image border-[6px] border-[#FFA500] rounded-lg overflow-hidden relative w-full h-[270px] z-5">
                                        <Image src={item.image} layout="fill" objectFit="cover" className="rounded-sm"/>
                                    </div>

                                    <div className="back absolute top-[15px] left-[-17px] w-full h-full bg-[#ffd7004d] z-[-1] border-4 border-[#ffd700] rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    ))
                }
            </div>
        </section>
    )
}

export default AboutUs;