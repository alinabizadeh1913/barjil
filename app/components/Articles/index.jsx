'use client';

import React, { useState, useEffect } from "react";
import { FilterIcon, NextIcon, PrevIcon } from "../Icons";
import ArticleCard from "./ArticleCard";
import useStore from "@/app/store/Store";

const Articles = () => {
    const [articleItems, setArticleItems] = useState([
        {
            id : 1,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'papers/article1',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 2,
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus.',
            link : 'papers/article2',
            img : '/img/product-card.png'
        },
        {
            id : 3,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article3',
            img : '/img/product-card-2.jpg'
        },
        {
            id : 4,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'papers/article4',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 5,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit facilis est?',
            link : 'papers/article5',
            img : '/img/minerals.jpg'
        },
        {
            id : 6,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'papers/article6',
            img : '/img/our-product.jpg'
        },
        {
            id : 7,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article7',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 8,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'papers/article8',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 9,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article9',
            img : '/img/product-card.png'
        },
        {
            id : 10,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'papers/article10',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 11,
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus.',
            link : 'articles/article11',
            img : '/img/product-card.png'
        },
        {
            id : 12,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article12',
            img : '/img/product-card-2.jpg'
        },
        {
            id : 13,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'papers/article13',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 14,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit facilis est?',
            link : 'articles/article14',
            img : '/img/minerals.jpg'
        },
        {
            id : 15,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'articles/article15',
            img : '/img/our-product.jpg'
        },
        {
            id : 16,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article16',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 17,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'articles/article17',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 18,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article18',
            img : '/img/product-card.png'
        },
        {
            id : 19,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'articles/article19',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 20,
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus.',
            link : 'papers/article20',
            img : '/img/product-card.png'
        },
        {
            id : 21,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article21',
            img : '/img/product-card-2.jpg'
        },
        {
            id : 22,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'papers/article22',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 23,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit facilis est?',
            link : 'papers/article23',
            img : '/img/minerals.jpg'
        },
        {
            id : 24,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'papers/article24',
            img : '/img/our-product.jpg'
        },
        {
            id : 25,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'papers/article25',
            img : '/img/petrochemical.jpg'
        },
    ]);

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
                        <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                            category number 1
                        </span>
                        <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                            category number 2
                        </span>
                        <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                            category number 3
                        </span>
                        <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                            category number 4
                        </span>
                    </div>
                    <div className="category-wrapper hidden md:flex flex-wrap items-center justify-center">
                        <div className="category-item flex items-center cursor-pointer mx-4 md:mx-[10px] xl:mx-8">
                            <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                                category number 1
                            </span>
                        </div>
                        <div className="category-item flex items-center cursor-pointer mx-4 md:mx-[10px] xl:mx-8">
                            <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                                category number 2
                            </span>
                        </div>
                        <div className="category-item flex items-center cursor-pointer mx-4 md:mx-[10px] xl:mx-8">
                            <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                                category number 3
                            </span>
                        </div>
                        <div className="category-item flex items-center cursor-pointer mx-4 md:mx-[10px] xl:mx-8">
                            <span className="text-[#9f9f9f] hover:text-[#6e6e6e] font-semibold text-sm my-3 cursor-pointer duration-200">
                                category number 4
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 md:px-8 my-4">
                <div className="article flex flex-wrap">
                    {
                        currentArticles.map(item => (
                            <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12" key={item.id}>
                                <ArticleCard title={`Article number ${item.id}`} category={`${item.id}st category`} link={item.link} image={item.img} description={item.description} hasLink="true"/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="container mx-auto px-8 md:px-14">
                <div className="flex flex-wrap justify-center">
                    <div className="pagination flex flex-wrap justify-center items-center" dir="ltr">
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
                            <PrevIcon stroke="#454545" width="20" />
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
                            <NextIcon stroke="#454545" width="20" />
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
                </div>
            </div>
        </section>
    );
}

export default Articles;
