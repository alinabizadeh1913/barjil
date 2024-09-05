import React from "react";
import { FilterIcon } from "../Icons";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    return (
        <section id="articles-items" className="mt-14">
            <div className="filter container mx-auto px-8 md:px-14">
                <div className="flex flex-wrap items-center border-2 border-[#2aa82a] rounded-xl p-2">
                    <div className="filter-item border-r-2 border-[#b5b5b5] pr-4">
                        <div className="flex items-center cursor-pointer w-fit ">
                            <FilterIcon />
                            <span className="mx-1 text-[#808080] font-black">
                                Filter
                            </span>
                        </div>
                    </div>
                    <div className="category-wrapper flex flex-wrap items-center justify-center">
                        <div className="category-item flex items-center cursor-pointer mx-4 lg:mx-8">
                            <span className="text-[#9f9f9f] font-semibold text-sm">
                                category number 1
                            </span>
                        </div>
                        <div className="category-item flex items-center cursor-pointer mx-4 lg:mx-8">
                            <span className="text-[#9f9f9f] font-semibold text-sm">
                                category number 2
                            </span>
                        </div>
                        <div className="category-item flex items-center cursor-pointer mx-4 lg:mx-8">
                            <span className="text-[#9f9f9f] font-semibold text-sm">
                                category number 3
                            </span>
                        </div>
                        <div className="category-item flex items-center cursor-pointer mx-4 lg:mx-8">
                            <span className="text-[#9f9f9f] font-semibold text-sm">
                                category number 4
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 md:px-8 my-4">
                <div className="article flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 1" category="1st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 2" category="2st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 3" category="3st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 4" category="4st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 5" category="5st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 6" category="6st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 7" category="7st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 8" category="8st category"/>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12">
                        <ArticleCard title="Article number 9" category="9st category"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles;