import React from "react";
import { CustomersIcon, GoalIcon, InfoIcon, InsightIcon } from "../Icons";
import Image from "next/image";

const AboutUs = () => {
    return (
        <section id="about-items" className="mt-14">
            <div className="container mx-auto">
                <div className="flex flex-wrap px-8 mb-12">
                    <div className="what-is-barjil flex flex-wrap items-center w-full">
                        <div className="w-full md:w-7/12 px-6 mb-4 md:mb-0">
                            <div className="title">
                                <h1 className="text-2xl font-bold flex items-center cursor-default">
                                    <InfoIcon width="45"/>
                                    <span className="text-[#5f5f5f] mx-3">
                                        What is Barjil?
                                    </span>
                                </h1>
                            </div>
                            <div className="description md:px-16">
                                <p className="text-[#808080] text-sm leading-6">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorum nihil eos quia, odit sed. Est non laboriosam alias! Amet eius praesentium nam deleniti accusamus minima hic ipsam blanditiis minus quisquam expedita adipisci cupiditate, est itaque et. Libero voluptatibus voluptate laboriosam architecto accusamus quibusdam corporis? Ipsam praesentium est, asperiores optio beatae itaque nesciunt aspernatur doloribus repudiandae, officiis nihil minima sit.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-5/12 px-6">
                            <div className="image-wrapper w-full flex justify-center md:justify-end">
                                <div className="image-inner relative w-[90%]">
                                    <div className="image border-[6px] border-[#FFA500] rounded-lg overflow-hidden relative w-full h-[270px] z-5">
                                        <Image src="/img/04.png" layout="fill" objectFit="cover" className="rounded-sm"/>
                                    </div>

                                    <div className="back absolute top-[15px] left-[-17px] w-full h-full bg-[#ffd7004d] z-[-1] border-4 border-[#ffd700] rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap px-8 mb-12">
                    <div className="our-insight flex flex-wrap items-center w-full">
                        <div className="w-full md:w-7/12 px-6 mb-4 md:mb-0 order-first md:order-last">
                            <div className="title">
                                <h1 className="text-2xl font-bold flex items-center cursor-default">
                                    <InsightIcon width="50"/>
                                    <span className="text-[#5f5f5f] mx-3">
                                        Our Insight !
                                    </span>
                                </h1>
                            </div>
                            <div className="description md:px-16">
                                <p className="text-[#808080] text-sm leading-6">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorum nihil eos quia, odit sed. Est non laboriosam alias! Amet eius praesentium nam deleniti accusamus minima hic ipsam blanditiis minus quisquam expedita adipisci cupiditate, est itaque et. Libero voluptatibus voluptate laboriosam architecto accusamus quibusdam corporis? Ipsam praesentium est, asperiores optio beatae itaque nesciunt aspernatur doloribus repudiandae, officiis nihil minima sit.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-5/12 px-6 order-last md:order-first">
                                <div className="image-wrapper w-full flex justify-center md:justify-start">
                                    <div className="image-inner relative w-[90%]">
                                        <div className="image border-[6px] border-[#FFA500] rounded-lg overflow-hidden relative w-full h-[270px] z-5">
                                            <Image src="/img/about-us.jpg" layout="fill" objectFit="cover" className="rounded-sm"/>
                                        </div>

                                        <div className="back absolute top-[15px] left-[-17px] w-full h-full bg-[#ffd7004d] z-[-1] border-4 border-[#ffd700] rounded-xl"></div>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-wrap px-8 mb-12">
                    <div className="barjil-goals flex flex-wrap items-center w-full">
                        <div className="w-full md:w-7/12 px-6 mb-4 md:mb-0">
                            <div className="title">
                                <h1 className="text-2xl font-bold flex items-center cursor-default">
                                    <GoalIcon width="45"/>
                                    <span className="text-[#5f5f5f] mx-3">
                                        Barjil Goals !
                                    </span>
                                </h1>
                            </div>
                            <div className="description md:px-16">
                                <p className="text-[#808080] text-sm leading-6">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorum nihil eos quia, odit sed. Est non laboriosam alias! Amet eius praesentium nam deleniti accusamus minima hic ipsam blanditiis minus quisquam expedita adipisci cupiditate, est itaque et. Libero voluptatibus voluptate laboriosam architecto accusamus quibusdam corporis? Ipsam praesentium est, asperiores optio beatae itaque nesciunt aspernatur doloribus repudiandae, officiis nihil minima sit.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-5/12 px-6">
                            <div className="image-wrapper w-full flex justify-center md:justify-end">
                                <div className="image-inner relative w-[90%]">
                                    <div className="image border-[6px] border-[#FFA500] rounded-lg overflow-hidden relative w-full h-[270px] z-5">
                                        <Image src="/img/gallery.jpg" layout="fill" objectFit="cover" className="rounded-sm"/>
                                    </div>

                                    <div className="back absolute top-[15px] left-[-17px] w-full h-full bg-[#ffd7004d] z-[-1] border-4 border-[#ffd700] rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap px-8 mb-12">
                    <div className="our-customers flex flex-wrap items-center w-full">
                        <div className="w-full md:w-7/12 px-6 mb-4 md:mb-0 order-first md:order-last">
                            <div className="title">
                                <h1 className="text-2xl font-bold flex items-center cursor-default">
                                    <CustomersIcon width="45"/>
                                    <span className="text-[#5f5f5f] mx-3">
                                        Our Customers
                                    </span>
                                </h1>
                            </div>
                            <div className="description md:px-16">
                                <p className="text-[#808080] text-sm leading-6">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorum nihil eos quia, odit sed. Est non laboriosam alias! Amet eius praesentium nam deleniti accusamus minima hic ipsam blanditiis minus quisquam expedita adipisci cupiditate, est itaque et. Libero voluptatibus voluptate laboriosam architecto accusamus quibusdam corporis? Ipsam praesentium est, asperiores optio beatae itaque nesciunt aspernatur doloribus repudiandae, officiis nihil minima sit.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-5/12 px-6 order-last md:order-first">
                                <div className="image-wrapper w-full flex justify-center md:justify-start">
                                    <div className="image-inner relative w-[90%]">
                                        <div className="image border-[6px] border-[#FFA500] rounded-lg overflow-hidden relative w-full h-[270px] z-5">
                                            <Image src="/img/customers.jpg" layout="fill" objectFit="cover" className="rounded-sm"/>
                                        </div>

                                        <div className="back absolute top-[15px] left-[-17px] w-full h-full bg-[#ffd7004d] z-[-1] border-4 border-[#ffd700] rounded-xl"></div>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;