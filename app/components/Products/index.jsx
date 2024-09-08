'use client';

import React, { useState } from "react"
import ProductCard from "./ProductCard"

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

    return (
        <section id="product-items" className="mt-14 px-3">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="sidebar w-full md:w-5/12 xl:w-1/3 md:px-3">
                        <div className="sidebar-inner bg-white rounded-lg p-8 sticky top-[100px]">
                            <div className="available-products flex items-center justify-between mb-8">
                                <h3 className="mr-2">
                                    only available products
                                </h3>
                                <div className="switch border-2 border-zinc-400 rounded-full w-[55px] h-[25px] flex items-center p-[2px] cursor-pointer">
                                    <div className="circle w-[18px] h-[18px] rounded-full bg-zinc-400"></div>
                                </div>
                            </div>
                            <div className="product-details mb-4">
                                <button className="brand rounded-md p-4">
                                    <h2>
                                        brand
                                    </h2>
                                    {/* <svg></svg> */}
                                </button>
                                <div className="content">

                                </div>
                            </div>
                            <div className="product-details mb-4">
                                <button className="color rounded-md p-4">
                                    <h2>
                                        color
                                    </h2>
                                    {/* <svg></svg> */}
                                </button>
                                <div className="content">

                                </div>
                            </div>
                            <div className="product-details mb-4">
                                <button className="weight rounded-md p-4">
                                    <h2>
                                        weight
                                    </h2>
                                    {/* <svg></svg> */}
                                </button>
                                <div className="content">

                                </div>
                            </div>
                            <div className="product-details mb-4">
                                <button className="price rounded-md p-4">
                                    <h2>
                                        price
                                    </h2>
                                    {/* <svg></svg> */}
                                </button>
                                <div className="content">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product w-full md:w-7/12 xl:w-2/3 flex flex-wrap md:pr-3 mt-8 md:mt-0">
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