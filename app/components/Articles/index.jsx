'use client';

import React, { useState } from "react";
import { FilterIcon } from "../Icons";
import ArticleCard from "./ArticleCard";

const Articles = () => {

    const [articleItems,setArticleItems] = useState([
        {
            id : 1,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'articles/article1',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 2,
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus.',
            link : 'articles/article2',
            img : '/img/product-card.png'
        },
        {
            id : 3,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'articles/article3',
            img : '/img/product-card-2.jpg'
        },
        {
            id : 4,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'articles/article4',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 5,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit facilis est?',
            link : 'articles/article5',
            img : '/img/minerals.jpg'
        },
        {
            id : 6,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'articles/article6',
            img : '/img/our-product.jpg'
        },
        {
            id : 7,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'articles/article7',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 8,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'articles/article8',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 9,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'articles/article9',
            img : '/img/product-card.png'
        },
    ]);

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

    return (
        <section id="articles-items" className="mt-14">
            <div className="filter container mx-auto px-8 md:px-14">
                <div className="flex flex-wrap flex-col md:flex-row justify-center items-center border-2 border-[#bababa] md:border-[#2aa82a] rounded-xl p-2">
                    <div className="filter-item md:border-r-2 md:border-[#b5b5b5] pr-4 flex justify-center">
                        <div className="flex items-center justify-center cursor-pointer w-fit select-none" onClick={showHideCategory}>
                            <FilterIcon className="duration-300"/>
                            <span className="mx-1 font-black duration-300">
                                Filter
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
                        articleItems && articleItems.map(item => (
                            <div className="w-full sm:w-1/2 md:w-1/3 px-3 md:px-6 mb-2 md:mb-12" key={item.id}>
                                <ArticleCard title={`Article number ${item.id}`} category={`${item.id}st category`} link={item.link} image={item.img} description={item.description} hasLink="true"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Articles;