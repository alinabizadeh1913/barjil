'use client';

import React, { useState, useEffect } from "react";
import { FilterIcon, NextIcon, PrevIcon } from "../Icons";
import ArticleCard from "./ArticleCard";
import useStore from "@/app/store/Store";
import { getArticles, getArticlesCategory } from "@/app/server/api/apiRoutes";
import { SkeletonCard, SkeletonRectangle } from "../Skeleton";

const Articles = () => {
    const [articleItems, setArticleItems] = useState([]);
    const [category,setCategory] = useState(null);

    useEffect(() => {
        getArticles().then(data => {
            setArticleItems(data.results);
            setTimeout(() => {
                console.log(data.results);
            }, 2500)
        }).catch(e => console.log(e))
    }, [])

    useEffect(() => {
        getArticlesCategory().then(data => {
            setCategory(data.results);
            setTimeout(() => {
                console.log(data.results);
            }, 2500)
        }).catch(e => console.log(e))
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

    const showHideCategory = () => {
        const category = document.querySelector('#articles-items .category-res');
        const filter = document.querySelector('#articles-items .filter-item span');
        const path = document.querySelectorAll('#articles-items .filter-item path');

        category.classList.toggle('hidden');
        category.classList.toggle('flex');

        filter.classList.toggle('color-green')
        path.forEach(elem => {
            elem.classList.toggle('stroke-green')
        })
    }

    const {language} = useStore()

    const fetchingDataByCategory = (slug) => {
        setArticleItems([]);
        getArticles().then(data => {
            const filterItems = data.results.filter(item => item.category.slug == slug);
            setArticleItems(filterItems);
        })
    }

    const showAllArticles = () => {
        setArticleItems([]);
        getArticles().then(data => {
            setArticleItems(data.results);
        })
    }

    return (
        <section id="articles-items" className="mt-14">
            <div className="filter container mx-auto px-8 md:px-14">
                <div className="flex flex-wrap flex-col md:flex-row justify-center items-center border-2 border-[#bababa] md:border-[#2aa82a] rounded-xl p-2">
                    <div className={`filter-item w-full cursor-pointer ${language == 'en' ? 'md:border-r-2' : 'md:border-l-2'} md:border-[#c9c9c9] px-4 flex justify-center`} onClick={() => {
                            showHideCategory();
                            showAllArticles()
                        }}>
                        <div className="flex items-center justify-center cursor-pointer w-fit select-none" >
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
                                <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200" key={item.id} onClick={() => {
                                    showHideCategory();
                                    fetchingDataByCategory(item.slug)
                                }}>
                                    {`${language == 'en' ? item.translations.en.title : language == 'ar' ? item.translations.ar.title : item.translations.ur.title}`}
                                </span>
                            ))
                        }
                    </div>
                    <div className="category-wrapper hidden md:flex flex-wrap items-center justify-center">
                        {
                            category ? category.map(item => (
                                <div className="category-item flex items-center cursor-pointer mx-4 md:mx-[10px] xl:mx-8" key={item.id}>
                                    <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200" onClick={() => fetchingDataByCategory(item.slug)}>
                                        {`${language == 'en' ? item.translations.en.title : language == 'ar' ? item.translations.ar.title : item.translations.ur.title}`}
                                    </span>
                                </div>
                            ))
                            : <div className="flex w-full justify-center">
                               <SkeletonRectangle height="10" className="mx-6"/>
                               <SkeletonRectangle height="10" className="mx-6"/>
                               <SkeletonRectangle height="10" className="mx-6"/>
                               <SkeletonRectangle height="10" className="mx-6"/>
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
                                        <ArticleCard title={`${language == 'en' ? item.translations.en.title : language == 'ar' ? item.translations.ar.title : item.translations.ur.title}`} category={`${language == 'en' ? item.category.translations.en.title : language == 'ar' ? item.category.translations.ar.title : item.category.translations.ur.title}`} link={item.slug} image={item.image} description={`${language == 'en' ? item.translations.en.short_text : language == 'ar' ? item.translations.ar.short_text : item.translations.ur.short_text}`} hasLink="true"/>
                                </div>
                            )
                        })
                        : <>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-2 md:mb-12">
                            <SkeletonCard />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-2 md:mb-12">
                            <SkeletonCard />
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-2 md:mb-12">
                            <SkeletonCard />
                        </div>
                    </>
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
