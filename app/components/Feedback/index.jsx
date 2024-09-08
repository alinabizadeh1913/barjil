import React from "react";
import { Montserrat } from 'next/font/google';
import { StarIcon } from "../Icons";
import Link from "next/link";

const Font = Montserrat({
    subsets : ['latin'],
    weight : ['700']
})

const Feedback = () => {
    return (
        <section id="feedback" className="mt-24">
            <div className="container mx-auto">

                {/* <div className="flex px-6 justify-end mb-6">
                    <div className="w-1/2 px-3 form-title flex items-center">
                        <div className="line w-[30%] h-[2px] bg-[#ccc]"></div>
                        <h1 className={`${Font.className} text-2xl text-[#4A4A4A] w-[40%] text-center`}>
                            Send Feedback
                        </h1>
                        <div className="line w-[30%] h-[2px] bg-[#ccc]"></div>
                    </div>
                </div> */}

                <div className="flex flex-wrap px-6">
                    <div className="w-full md:w-6/12 px-3 mb-24 md:mb-0">
                        <div className="feedback-wrapper flex flex-wrap items-center border-2 border-[#b4b4b4] rounded-lg p-3 mb-3">
                            <div className="image">
                                <img src="/img/person1.jpg" alt="person" className="w-[90px] h-[90px] rounded-full border-[3px] border-[#FFA500]"/>
                            </div>
                            <div className="content">
                                <div className="flex flex-wrap justify-between">
                                    <p className={`${Font.className} text-[#5e5e5e] font-black text-xl`}>
                                        Mike Wilson
                                    </p>
                                    <p className="text-[#676767] flex items-center">
                                        <span className="mx-2">
                                            3.9
                                        </span>
                                        <StarIcon />
                                    </p>
                                </div>
                                <div className="date">
                                    <p className="text-sm text-[#676767]">
                                        SUN 2 march
                                    </p>
                                </div>
                                <div className="text text-[#676767] my-2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. met consectetur, adipisicing elit.
                                </div>
                            </div>
                        </div>
                        <div className="feedback-wrapper flex flex-wrap items-center border-2 border-[#b4b4b4] rounded-lg p-3 mb-3">
                            <div className="image">
                                <img src="/img/person2.jpg" alt="person" className="w-[90px] h-[90px] rounded-full border-[3px] border-[#FFA500]"/>
                            </div>
                            <div className="content">
                                <div className="flex flex-wrap justify-between">
                                    <p className={`${Font.className} text-[#5e5e5e] font-black text-xl`}>
                                        Markus Nian
                                    </p>
                                    <p className="text-[#676767] flex items-center">
                                        <span className="mx-2">
                                            4.5
                                        </span>
                                        <StarIcon />
                                    </p>
                                </div>
                                <div className="date">
                                    <p className="text-sm text-[#676767]">
                                        THU 17 october
                                    </p>
                                </div>
                                <div className="text text-[#676767] my-2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. met consectetur, adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-3 relative">
                        <div className="form-title flex items-center px-6 absolute top-[-14%] left-0 w-full ">
                            <div className="line w-[25%] xl:w-[30%] h-[2px] bg-[#ccc]"></div>
                            <h1 className={`${Font.className} text-xl  md:text-[22px] lg:text-2xl text-[#4A4A4A] w-[50%] xl:w-[40%] text-center`}>
                                Send Feedback
                            </h1>
                            <div className="line w-[25%] xl:w-[30%] h-[2px] bg-[#ccc]"></div>
                        </div>
                        <div className="form-wrapper w-full">
                            <form action="" className="w-full flex flex-wrap">
                                <div className="w-1/2 px-3 mb-3">
                                    <input type="text" name="name" className="w-full text-[#767676] outline-0 p-4 border-2 border-[#ccc] bg-transparent rounded-lg" placeholder="First Name"/>
                                </div>
                                <div className="w-1/2 px-3 mb-3">
                                    <input type="text" name="family" className="w-full text-[#767676] outline-0 p-4 border-2 border-[#ccc] bg-transparent rounded-lg" placeholder="Sir Name"/>
                                </div>
                                <div className="w-full px-3 mb-3">
                                    <textarea name="feedback" id="" cols="30" rows="10" className="w-full text-[#767676] outline-0 p-4 border-2 border-[#ccc] min-h-[150px] h-[150px] max-h-[300px] bg-transparent rounded-lg" placeholder="Share your idea with us ..."></textarea>
                                </div>
                                <div className="w-full px-3 mb-3">
                                    <div className="flex justify-between p-4 border-2 border-[#ccc] bg-transparent rounded-lg">
                                        <span className="text-[#a3a3a3] cursor-default">
                                            Submit Your Rate!
                                        </span>
                                        <div className="rate flex">
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-3 mt-3">
                                    <button type="submit" className="link w-full text-center text-lg md:text-xl p-4 rounded-lg text-white">
                                        Submit Feedback
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback;