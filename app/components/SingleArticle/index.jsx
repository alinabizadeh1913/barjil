import Link from "next/link";
import React from "react";
import { CategoryIcon, LikeIcon, RightIcon2, ShareIcon } from "../Icons";
import { Montserrat } from 'next/font/google';

const Font = Montserrat({
    subsets : ['latin'],
    weight : ['900']
})


const SingleArticleItems = (props) => {

    return (
        <section id="single-article-items" className="px-3 md:px-10">
            <div className="breadcrumb mt-4 mb-6 flex items-center">
                <Link href="/" className="text-[#7b7b7b]">
                    Home
                </Link>
                <RightIcon2 className="mx-2" fill="#7b7b7b" width="8" height="16"/>
                <Link href="/articles" className="text-[#7b7b7b]">
                    Articles
                </Link>
                <RightIcon2 className="mx-2" fill="#7b7b7b" width="8" height="16"/>
                <span className="text-[#494949]">
                    {props.currentArticle}
                </span>
            </div>

            <div className="title flex items-center">
                <div className="w-full md:w-8/12">
                    <h1 className={`text-[#333333] text-6xl ${Font.className}`}>
                        This is the {props.currentArticle}
                    </h1>
                </div>
                <div className="w-full hidden md:flex md:w-4/12 icons justify-end">
                    <LikeIcon stroke="#7b7b7b" width="40" className="cursor-pointer mx-2"/>
                    <ShareIcon stroke="#7b7b7b" width="40" className="cursor-pointer mx-2"/>
                </div>
            </div>

            <div className="flex flex-wrap mt-6">
                <div className="content-wrapper w-full md:w-8/12 px-2">
                    <div className="content-inner">
                        <div className="information flex items-center mb-12">
                            <div className="image w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
                                <img src="/img/person3.jpg" alt="" />
                            </div>
                            <p className="text-xs md:text-base text-[#676767] mx-2 md:mx-4">
                                Engineer millow tomber
                            </p>
                            <div className="dot w-[6px] h-[6px] bg-[#a8a8a8] rounded-full"></div>
                            <div className="text-xs md:text-base date text-[#676767] mx-2 md:mx-4">
                                Thursday, 5 May
                            </div>
                        </div>

                        <div className="text">
                            <p className="text-[#676767] my-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and...
                            </p>
                            <p className="text-[#676767] my-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and...Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and...Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and
                            </p>
                            <p className="text-[#676767] my-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and...Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sidebar-wrapper w-full md:w-4/12 px-2">
                    <div className="sidebar-inner sticky top-[20%] border-2 border-[#b2b2b2] py-3 px-6 rounded-lg">
                        <h1 className="${Font.className} title text-[#666666] text-[22px] font-black pb-3 border-b border-[#b9b9b9]">
                            Top articles
                        </h1>

                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/product-card-2.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 1
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/product-card-3.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 2
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/article-card.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 3
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/minerals.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 4
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 flex items-center">
                            <div className="image">
                                <img src="/img/product-card.png" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 5
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SingleArticleItems;