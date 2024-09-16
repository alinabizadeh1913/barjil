'use client';

import React, { useState, useEffect } from "react";
import { FilterIcon, NextIcon, PrevIcon } from "../Icons";
import ArticleCard from "./ArticleCard";
import useStore from "@/app/store/Store";
import { getArticles, getArticlesCategory } from "@/app/server/api/apiRoutes";
import { Skeleton } from "@mui/material";

const Articles = () => {
    const [articleItems, setArticleItems] = useState([]);
    const [category,setCategory] = useState(null);

    useEffect(() => {
        getArticles().then(result => {
            setArticleItems(result)
        })
    }, [])

    useEffect(() => {
        getArticlesCategory().then(result => {
            setCategory(result)
        })
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 9;

    const totalPages = Math.ceil(articleItems.length / articlesPerPage);

    const currentArticles = articleItems.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.location.hash = `#page${pageNumber}`;
    };

    const prevPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    };

    useEffect(() => {
        const hash = window.location.hash;
        const pageFromHash = hash ? parseInt(hash.replace('#page', '')) : 1;
        if (pageFromHash && pageFromHash <= totalPages) {
            setCurrentPage(pageFromHash);
        }
    }, [totalPages]);

    const showHideCategory = (e) => {
        const {currentTarget} = e;
        const category = document.querySelector('#articles-items .category-res');
        const filter = currentTarget.querySelector('span');
        const path = currentTarget.querySelectorAll('path');

        category.classList.toggle('hidden');
        category.classList.toggle('flex');

        filter.classList.toggle('color-green')
        path.forEach(elem => {
            elem.classList.toggle('stroke-green')
        })
    }

    const {language} = useStore()

    return (
        <section id="articles-items" className="mt-14">
            <div className="filter container mx-auto px-8 md:px-14">
                <div className="flex flex-wrap flex-col md:flex-row justify-center items-center border-2 border-[#bababa] md:border-[#2aa82a] rounded-xl p-2">
                    <div className={`filter-item ${language == 'en' ? 'md:border-r-2' : 'md:border-l-2'} md:border-[#c9c9c9] px-4 flex justify-center`}>
                        <div className="flex items-center justify-center cursor-pointer w-fit select-none" onClick={showHideCategory}>
                            <FilterIcon className="duration-300"/>
                            <span className="mx-1 font-black duration-300">
                                {
                                    language == 'en' ? 'Filter' : language == 'ar' ? 'فلتر' : 'فلٹر'
                                }
                            </span>
                        </div>
                    </div>
                    <div className="category-res w-[70%] border-t border-t-[#c6c6c6] mt-[15px] hidden flex-col items-center justify-center md:hidden">
                        {
                            category && category.map(item => (
                                <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200" key={item.id}>
                                    {`${language == 'en' ? item.translations.en.title : language == 'ar' ? item.translations.ar.title : item.translations.ur.title}`}
                                </span>
                            ))
                        }
                    </div>
                    <div className="category-wrapper hidden md:flex flex-wrap items-center justify-center">
                        {
                            category ? category.map(item => (
                                <div className="category-item flex items-center cursor-pointer mx-4 md:mx-[10px] xl:mx-8">
                                    <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                                    {`${language == 'en' ? item.translations.en.title : language == 'ar' ? item.translations.ar.title : item.translations.ur.title}`}
                                    </span>
                                </div>
                            ))
                            : <div className="flex w-full justify-center">
                                <div className="w-[15%] mx-8">
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </div>
                                <div className="w-[15%] mx-8">
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </div>
                                <div className="w-[15%] mx-8">
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </div>
                                <div className="w-[15%] mx-8">
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 md:px-11 my-4">
                <div className="article flex flex-wrap">
                    {
                        articleItems.length > 0 ? currentArticles.map(item => {
                            return (
                                <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-2 md:mb-12" key={item.id}>
                                        <ArticleCard title={`${language == 'en' ? item.translations.en.title : language == 'ar' ? item.translations.ar.title : item.translations.ur.title}`} category={`${language == 'en' ? item.catgory + 'st category' : language == 'ar' ? item.catgory + 'st category' : item.catgory + 'st category'}`} link={item.link} image={item.image} description={`${language == 'en' ? item.translations.en.text : language == 'ar' ? item.translations.ar.text : item.translations.ur.text}`} hasLink="true"/>
                                </div>
                            )
                        })
                        : <div className="w-full flex flex-wrap justify-center">
                            <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-2 md:mb-12">
                                <div className="p-3 border-2 border-[#b6b6b6] rounded-xl ">
                                    <Skeleton variant="rounded" height={200} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem',marginTop: '10px' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-2 md:mb-12">
                                <div className="p-3 border-2 border-[#b6b6b6] rounded-xl ">
                                    <Skeleton variant="rounded" height={200} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem',marginTop: '10px' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-2 md:mb-12">
                                <div className="p-3 border-2 border-[#b6b6b6] rounded-xl ">
                                    <Skeleton variant="rounded" height={200} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem',marginTop: '10px' }} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div className="container mx-auto px-8 md:px-14">
                <div className="flex flex-wrap justify-center">
                    {
                        articleItems.length > 0 && <div className="pagination flex flex-wrap justify-center items-center">
                        <div onClick={() => goToPage(1)} className={`first-page hidden sm:flex items-center mx-2 py-1 px-2 md:py-2 md:px-3 ${currentPage === 1 ? 'bg-gray-200' : 'cursor-pointer'} border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}>
                            <span className="mx-1 text-sm md:text-base">
                                {
                                    language == 'en' ? 'first' : language == 'ar' ? 'الأولى' : 'پہلا'
                                }
                            </span>
                            <span className="mx-1 hidden md:block">
                                {
                                    language == 'en' ? 'page' : ''
                                }
                            </span>
                        </div>

                        <div onClick={prevPage} className={`prev flex items-center mx-2 py-2 px-3 ${currentPage === 1 ? 'bg-gray-200' : 'cursor-pointer'} border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}>
                            <PrevIcon stroke="#454545" width="20" className={`${language == 'en' ? '' : 'rotate-180'}`}/>
                            <span className="mx-2 hidden md:block ">
                                {
                                    language == 'en' ? 'prev' : language == 'ar' ? 'السابق' : 'پچھلا'
                                }
                            </span>
                        </div>

                        <div className="number mx-2 py-2 px-3 rounded-lg w-[40px] h-[40px] text-center bg-[#32cd32] text-white block md:hidden">
                            {currentPage}
                        </div>

                        <div className="numbers hidden md:flex items-center">
                            {
                                Array.from({ length: totalPages }, (_, index) => (
                                    <div onClick={() => goToPage(index + 1)} key={index} className={`number mx-2 py-2 px-3 border border-[#9f9f9f] rounded-lg w-[40px] h-[40px] text-center ${currentPage === index + 1 ? 'bg-[#32cd32] text-white' : 'cursor-pointer text-[#454545]'} duration-300 hover:bg-[#32cd32] hover:text-white`}>
                                        {index + 1}
                                    </div>
                                ))
                            }
                        </div>

                        <div onClick={nextPage} className={`next flex items-center mx-2 py-2 px-3 ${currentPage === totalPages ? 'bg-gray-200' : 'cursor-pointer'} border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}>
                            <span className="mx-2 hidden md:block">
                                {
                                    language == 'en' ? 'next' : language == 'ar' ? 'التالي' : 'اگلا'
                                }
                            </span>
                            <NextIcon stroke="#454545" width="20" className={`${language == 'en' ? '' : 'rotate-180'}`}/>
                        </div>

                        <div onClick={() => goToPage(totalPages)} className={`last-page hidden sm:flex items-center mx-2 py-1 px-2 md:py-2 md:px-3 ${currentPage === totalPages ? 'bg-gray-200' : 'cursor-pointer'} border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}>
                            <span className="mx-1">
                                {
                                    language == 'en' ? 'last' : language == 'ar' ? 'الأخيرة' : 'آخری'
                                }
                            </span>
                            <span className="mx-1 hidden md:block">
                                {
                                    language == 'en' ? 'page' : ''
                                }
                            </span>
                        </div>
                    </div>
                    }
                </div>
            </div>         

        </section>
    );
}

export default Articles;
