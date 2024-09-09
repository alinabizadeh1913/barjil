'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard"
import { DownChevronIcon, FilterIcon } from "../Icons";

const Products = () => {

    const [productItems,setProductItems] = useState([
        {
            id : 1,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'products/product1',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 2,
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus.',
            link : 'products/product2',
            img : '/img/product-card.png'
        },
        {
            id : 3,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'products/product3',
            img : '/img/product-card-2.jpg'
        },
        {
            id : 4,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'products/product4',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 5,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit facilis est?',
            link : 'products/product5',
            img : '/img/minerals.jpg'
        },
        {
            id : 6,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'products/product6',
            img : '/img/our-product.jpg'
        },
        {
            id : 7,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'products/product7',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 8,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'products/product8',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 9,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'products/product9',
            img : '/img/product-card.png'
        },
        {
            id : 10,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'products/product10',
            img : '/img/product-card-2.jpg'
        }
    ]);

    const switchActive = (e) => {
        const {currentTarget} = e;
        currentTarget.classList.toggle('switch-activity');
    }

    useEffect(() => {
        const productDetailButtons = document.querySelectorAll('#product-items .product-details button');
        const handleClick = (e) => {
            const {currentTarget} = e;
            const svg = currentTarget.querySelector('svg');
            const content = currentTarget.nextElementSibling;

            content.classList.toggle('h-100');
            svg.classList.toggle('rotate-180');
        }

        productDetailButtons.forEach(button => {
            button.addEventListener('click', handleClick);
        })

        return () => {
            productDetailButtons.forEach(button => {
                button.removeEventListener('click', handleClick)
            });
        }
    }, [])

    return (
        <section id="product-items" className="mt-14 px-3">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="sidebar w-4/12 md:w-5/12 xl:w-1/3 px-2">
                        <div className="sidebar-inner border-2 border-[#2eba2e] md:border-0 md:shadow-md md:bg-white rounded-lg p-3 md:p-8 sticky top-[100px]">
                            <div className="filter-res">
                                <div className="filter-item block md:hidden">
                                    <div className="w-full flex justify-center items-center cursor-pointer">
                                        <FilterIcon />
                                        <span className="mx-1 text-[#808080] font-black">
                                            Filter
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-content hidden md:block">
                                <div className="available-products flex items-center justify-between mb-8">
                                    <h3 className="mr-2">
                                        only available products
                                    </h3>
                                    <div className="switch border-2 border-[#c4c4c4] rounded-full w-[60px] h-[30px] flex items-center p-[2px] cursor-pointer overflow-hidden duration-300" onClick={switchActive}>
                                        <div className="switch-inner w-full">
                                            <div className="circle w-[22px] h-[22px] rounded-full bg-[#c4c4c4] duration-300"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details mb-4">
                                    <button className="brand rounded-md p-4 flex justify-center items-center">
                                        <h2>
                                            brand
                                        </h2>
                                        <DownChevronIcon className="mx-2 duration-300" width="11"/>
                                    </button>
                                    <div className="content overflow-hidden my-2">
                                        <div className="brand-wrapper flex items-center my-1">
                                            <input type="radio" name="brand" id="radio1" className="w-[15px] h-[15px]"/>
                                            <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio1">
                                                brand number #1
                                            </label>
                                        </div>
                                        <div className="brand-wrapper flex items-center my-1">
                                            <input type="radio" name="brand" id="radio2" className="w-[15px] h-[15px]"/>
                                            <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio2">
                                                brand number #2
                                            </label>
                                        </div>
                                        <div className="brand-wrapper flex items-center my-1">
                                            <input type="radio" name="brand" id="radio3" className="w-[15px] h-[15px]"/>
                                            <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio3">
                                                brand number #3
                                            </label>
                                        </div>
                                        <div className="brand-wrapper flex items-center my-1">
                                            <input type="radio" name="brand" id="radio4" className="w-[15px] h-[15px]"/>
                                            <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio4">
                                                brand number #4
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-details mb-4">
                                    <button className="color rounded-md p-4 flex justify-center items-center">
                                        <h2>
                                            color
                                        </h2>
                                        <DownChevronIcon className="mx-2" width="11"/>
                                    </button>
                                    <div className="content">

                                    </div>
                                </div>
                                <div className="product-details mb-4">
                                    <button className="weight rounded-md p-4 flex justify-center items-center">
                                        <h2>
                                            weight
                                        </h2>
                                        <DownChevronIcon className="mx-2" width="11"/>
                                    </button>
                                    <div className="content">

                                    </div>
                                </div>
                                <div className="product-details mb-4">
                                    <button className="price rounded-md p-4 flex justify-center items-center">
                                        <h2>
                                            price
                                        </h2>
                                        <DownChevronIcon className="mx-2" width="11"/>
                                    </button>
                                    <div className="content">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product w-8/12 md:w-7/12 xl:w-2/3 flex flex-wrap px-2">
                        {
                            productItems && productItems.map(item => (
                                <div className="w-full xl:w-1/2 md:px-8 xl:px-3 mb-3">
                                    <ProductCard description={item.description} link={item.link} image={item.img}/>
                                </div>
                            ))
                        }
                        <div className="pagination">
                            <div className="button-g flex">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;