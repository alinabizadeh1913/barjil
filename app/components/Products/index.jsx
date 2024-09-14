'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard"
import { DownChevronIcon, FilterIcon, NextIcon, PrevIcon } from "../Icons";
import useStore from '@/app/store/Store';

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
            img : '/img/minerals.jpg'
        },
        {
            id : 11,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'products/product11',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 12,
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus.',
            link : 'products/product12',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 13,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'products/product13',
            img : '/img/product-card-2.jpg'
        },
        {
            id : 14,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'products/product14',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 15,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit facilis est?',
            link : 'products/product15',
            img : '/img/product-card-3.jpg'
            
        },
        {
            id : 16,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'products/product16',
            img : '/img/our-product.jpg'
        },
        {
            id : 17,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'products/product17',
            img : '/img/product-card.png'
        },
        {
            id : 18,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'products/product18',
            img : '/img/product-card-3.jpg'
        },
        {
            id : 19,
            description : 'Lorem ipsum dolor sit amet.',
            link : 'products/product19',
            img : '/img/product-card.png'
        },
        {
            id : 20,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'products/product20',
            img : '/img/product-card-2.jpg'
        },
        {
            id : 21,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint, dolore veritatis quibusdam repudiandae debitis?',
            link : 'products/product21',
            img : '/img/petrochemical.jpg'
        },
        {
            id : 22,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit facilis est?',
            link : 'products/product22',
            img : '/img/minerals.jpg'
        },
        {
            id : 23,
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, doloremque!',
            link : 'products/product23',
            img : '/img/our-product.jpg'
        },
    ]);

    const { language } = useStore();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const totalPages = Math.ceil(productItems.length / productsPerPage);

    const currentProducts = productItems.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

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


    const switchActive = (e) => {
        const {currentTarget} = e;
        if (language == 'en') {
            currentTarget.classList.remove('switch-activity-lang-other');
            currentTarget.classList.toggle('switch-activity-lang-en');
        }else {
            currentTarget.classList.remove('switch-activity-lang-en');
            currentTarget.classList.toggle('switch-activity-lang-other');
        }
    }

    useEffect(() => {
        const switchElem = document.querySelector('#product-items .switch');
        switchElem.classList.remove('switch-activity-lang-other');
        switchElem.classList.remove('switch-activity-lang-en');
    }, [language])

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
                        <div className="sidebar-inner border-2 border-[#2eba2e] md:border-0 md:shadow-md md:bg-white rounded-lg p-3 md:p-8 sticky top-[80px] md:top-[100px]">
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
                            currentProducts.map(item => (
                                <div className="w-full xl:w-1/2 md:px-8 xl:px-3 mb-3">
                                    <ProductCard description={item.description} link={item.link} image={item.img}/>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className="container mx-auto px-8 md:px-14 mt-10">
                <div className="w-full flex flex-wrap justify-center">
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
    )
}

export default Products;