"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { DownChevronIcon, FilterIcon, NextIcon, PrevIcon } from "../Icons";
import useStore from "@/app/store/Store";
import { getProducts } from "@/app/server/api/apiRoutes";
import { SkeletonCard } from "../Skeleton";

const Products = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProductItems(result);
        console.log(result);
      })
      .catch((e) => console.log(e));
  }, []);

  const { language } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const totalPages = Math.ceil(productItems.length / productsPerPage);

  const currentProducts = productItems.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

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
    const pageFromHash = hash ? parseInt(hash.replace("#page", "")) : 1;
    if (pageFromHash && pageFromHash <= totalPages) {
      setCurrentPage(pageFromHash);
    }
  }, [totalPages]);

  // const switchActive = (e) => {
  //     const {currentTarget} = e;
  //     if (language == 'en') {
  //         currentTarget.classList.remove('switch-activity-lang-other');
  //         currentTarget.classList.toggle('switch-activity-lang-en');
  //     }else {
  //         currentTarget.classList.remove('switch-activity-lang-en');
  //         currentTarget.classList.toggle('switch-activity-lang-other');
  //     }
  // }

  // useEffect(() => {
  //     const switchElem = document.querySelector('#product-items .switch');
  //     switchElem.classList.remove('switch-activity-lang-other');
  //     switchElem.classList.remove('switch-activity-lang-en');
  // }, [language])

  // useEffect(() => {
  //     const productDetailButtons = document.querySelectorAll('#product-items .product-details button');
  //     const handleClick = (e) => {
  //         const {currentTarget} = e;
  //         const svg = currentTarget.querySelector('svg');
  //         const content = currentTarget.nextElementSibling;

  //         content.classList.toggle('h-100');
  //         svg.classList.toggle('rotate-180');
  //     }

  //     productDetailButtons.forEach(button => {
  //         button.addEventListener('click', handleClick);
  //     })

  //     return () => {
  //         productDetailButtons.forEach(button => {
  //             button.removeEventListener('click', handleClick)
  //         });
  //     }
  // }, [])

  const showHiddenFullFilter = () => {
    const fullFilter = document.querySelector("#product-items .full-filter");
    fullFilter.classList.toggle("show-hidden-activity");

    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <section id="product-items" className="mt-14 px-3">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="sidebar w-full md:w-5/12 xl:w-1/3 px-2">
            <div className="sidebar-inner border-2 border-[#2eba2e] md:border-0 md:shadow-md md:bg-white rounded-lg p-3 md:p-8 sticky top-[90px] md:top-[125px] lg:top-[145px]">
              <div className="filter-res" onClick={showHiddenFullFilter}>
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
                {/* <div className="available-products flex items-center justify-between mb-8">
                                    <h3 className="mr-2">
                                        {
                                            language == 'en' ? 'only available products' : language == 'ar' ? 'المنتجات المتاحة فقط' : 'صرف دستیاب پروڈکٹس'
                                        }
                                    </h3>
                                    <div className="switch border-2 border-[#c4c4c4] rounded-full w-[60px] h-[30px] flex items-center p-[2px] cursor-pointer overflow-hidden duration-300" onClick={switchActive}>
                                        <div className="switch-inner w-full">
                                            <div className="circle w-[22px] h-[22px] rounded-full bg-[#c4c4c4] duration-300"></div>
                                        </div>
                                    </div>
                                </div> */}
                <div className="product-details mb-4">
                  <button className="brand rounded-md p-4 flex justify-center items-center">
                    <h3 className="text-[#666666] font-bold">Category 1</h3>
                    {/* <DownChevronIcon className="mx-2 duration-300" width="11"/> */}
                  </button>
                  {/* <div className="content overflow-hidden my-2">
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
                                    </div> */}
                </div>
                <div className="product-details mb-4">
                  <button className="color rounded-md p-4 flex justify-center items-center">
                    <h3 className="text-[#666666] font-bold">Category 2</h3>
                    {/* <DownChevronIcon className="mx-2" width="11"/> */}
                  </button>
                  {/* <div className="content">

                                    </div> */}
                </div>
                <div className="product-details mb-4">
                  <button className="weight rounded-md p-4 flex justify-center items-center">
                    <h3 className="text-[#666666] font-bold">Category 3</h3>
                    {/* <DownChevronIcon className="mx-2" width="11"/> */}
                  </button>
                  {/* <div className="content">

                                    </div> */}
                </div>
                <div className="product-details mb-4">
                  <button className="price rounded-md p-4 flex justify-center items-center">
                    <h3 className="text-[#666666] font-bold">Category 4</h3>
                    {/* <DownChevronIcon className="mx-2" width="11"/> */}
                  </button>
                  {/* <div className="content">

                                    </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="product w-full mt-4 md:mt-0 md:w-7/12 xl:w-2/3 flex flex-wrap px-2">
            {productItems.length > 0 ? (
              currentProducts.map((item) => (
                <div className="w-full xl:w-1/2 md:px-8 xl:px-2 mb-4">
                  <ProductCard
                    text={`${
                      language == "en"
                        ? item?.translations?.en?.short_text
                        : language == "ar"
                        ? item?.translations?.ar?.short_text
                        : item?.translations?.ur?.short_text
                    }`}
                    title={`${
                      language == "en"
                        ? item?.translations?.en?.title
                        : language == "ar"
                        ? item?.translations?.ar?.title
                        : item?.translations?.ur?.title
                    }`}
                    category={
                      language == "en"
                        ? item?.category?.translations?.en?.title
                        : language == "ar"
                        ? item?.category?.translations?.ar?.title
                        : item?.category?.translations?.ur?.title
                    }
                    link={
                      language == "en"
                        ? `/products/${item?.slug}`
                        : language == "ar"
                        ? `/ar/products/${item?.slug}`
                        : `/ur/products/${item?.slug}`
                    }
                    image={item?.image}
                    alt={`${
                      language == "en"
                        ? item?.translations?.en?.title
                        : language == "ar"
                        ? item?.translations?.ar?.title
                        : item?.translations?.ur?.title
                    }`}
                  />
                </div>
              ))
            ) : (
              <>
                <div className="w-full xl:w-1/2 md:px-8 xl:px-2 mb-4">
                  <SkeletonCard />
                </div>
                <div className="w-full xl:w-1/2 md:px-8 xl:px-2 mb-4">
                  <SkeletonCard />
                </div>
                <div className="w-full xl:w-1/2 md:px-8 xl:px-2 mb-4">
                  <SkeletonCard />
                </div>
                <div className="w-full xl:w-1/2 md:px-8 xl:px-2 mb-4">
                  <SkeletonCard />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="container mx-auto px-8 md:px-14 mt-10">
          <div className="w-full flex flex-wrap justify-center">
            <div className="pagination flex flex-wrap justify-center items-center">
              <div
                onClick={() => goToPage(1)}
                className={`first-page hidden sm:flex items-center mx-2 py-1 px-2 md:py-2 md:px-3 ${
                  currentPage === 1 ? "bg-gray-200" : "cursor-pointer"
                } border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}
              >
                <span className="mx-1 text-sm md:text-base">
                  {language == "en"
                    ? "first"
                    : language == "ar"
                    ? "الأولى"
                    : "پہلا"}
                </span>
                <span className="mx-1 hidden md:block">
                  {language == "en" ? "page" : ""}
                </span>
              </div>

              <div
                onClick={prevPage}
                className={`prev flex items-center mx-2 py-2 px-3 ${
                  currentPage === 1 ? "bg-gray-200" : "cursor-pointer"
                } border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}
              >
                <PrevIcon
                  stroke="#454545"
                  width="20"
                  className={`${language == "en" ? "" : "rotate-180"}`}
                />
                <span className="mx-2 hidden md:block ">
                  {language == "en"
                    ? "prev"
                    : language == "ar"
                    ? "السابق"
                    : "پچھلا"}
                </span>
              </div>

              <div className="number mx-2 py-2 px-3 rounded-lg w-[40px] h-[40px] text-center bg-[#32cd32] text-white block md:hidden">
                {currentPage}
              </div>

              <div className="numbers hidden md:flex items-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <div
                    onClick={() => goToPage(index + 1)}
                    key={index}
                    className={`number mx-2 py-2 px-3 border border-[#9f9f9f] rounded-lg w-[40px] h-[40px] text-center ${
                      currentPage === index + 1
                        ? "bg-[#32cd32] text-white"
                        : "cursor-pointer text-[#454545]"
                    } duration-300 hover:bg-[#32cd32] hover:text-white`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div
                onClick={nextPage}
                className={`next flex items-center mx-2 py-2 px-3 ${
                  currentPage === totalPages ? "bg-gray-200" : "cursor-pointer"
                } border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}
              >
                <span className="mx-2 hidden md:block">
                  {language == "en"
                    ? "next"
                    : language == "ar"
                    ? "التالي"
                    : "اگلا"}
                </span>
                <NextIcon
                  stroke="#454545"
                  width="20"
                  className={`${language == "en" ? "" : "rotate-180"}`}
                />
              </div>

              <div
                onClick={() => goToPage(totalPages)}
                className={`last-page hidden sm:flex items-center mx-2 py-1 px-2 md:py-2 md:px-3 ${
                  currentPage === totalPages ? "bg-gray-200" : "cursor-pointer"
                } border border-[#9f9f9f] rounded-lg h-[40px] text-center text-[#454545] duration-300 hover:bg-[#32cd32] hover:text-white`}
              >
                <span className="mx-1">
                  {language == "en"
                    ? "last"
                    : language == "ar"
                    ? "الأخيرة"
                    : "آخری"}
                </span>
                <span className="mx-1 hidden md:block">
                  {language == "en" ? "page" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="full-filter md:hidden w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-[999] bg-[#0e0e0ee0] px-3"
        onClick={(e) => {
          const { target } = e;
          if (target.classList.contains("full-filter")) {
            showHiddenFullFilter();
          }
        }}
      >
        <div className="sidebar-content bg-white rounded-lg p-8 m-auto max-w-[400px] my-[15vh]">
          {/* <div className="available-products flex items-center justify-between mb-8">
                        <h3 className="mr-2">
                            {
                                language == 'en' ? 'only available products' : language == 'ar' ? 'المنتجات المتاحة فقط' : 'صرف دستیاب پروڈکٹس'
                            }
                        </h3>
                        <div className="switch border-2 border-[#c4c4c4] rounded-full w-[60px] h-[30px] flex items-center p-[2px] cursor-pointer overflow-hidden duration-300" onClick={switchActive}>
                            <div className="switch-inner w-full">
                                <div className="circle w-[22px] h-[22px] rounded-full bg-[#c4c4c4] duration-300"></div>
                            </div>
                        </div>
                    </div> */}
          <div className="product-details mb-4">
            <button className="brand rounded-md p-4 flex justify-center items-center">
              <h3 className="text-[#666666] font-bold">Category 1</h3>
              {/* <DownChevronIcon className="mx-2 duration-300" width="11"/> */}
            </button>
            {/* <div className="content overflow-hidden my-2">
                            <div className="brand-wrapper flex items-center my-1">
                                <input type="radio" name="brand" id="radio-res-1" className="w-[15px] h-[15px]"/>
                                <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio-res-1">
                                    brand number #1
                                </label>
                            </div>
                            <div className="brand-wrapper flex items-center my-1">
                                <input type="radio" name="brand" id="radio-res-2" className="w-[15px] h-[15px]"/>
                                <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio-res-2">
                                    brand number #2
                                </label>
                            </div>
                            <div className="brand-wrapper flex items-center my-1">
                                <input type="radio" name="brand" id="radio-res-3" className="w-[15px] h-[15px]"/>
                                <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio-res-3">
                                    brand number #3
                                </label>
                            </div>
                            <div className="brand-wrapper flex items-center my-1">
                                <input type="radio" name="brand" id="radio-res-4" className="w-[15px] h-[15px]"/>
                                <label className="mx-3 cursor-pointer text-[#6b6b6b]" for="radio-res-4">
                                    brand number #4
                                </label>
                            </div>
                        </div> */}
          </div>
          <div className="product-details mb-4">
            <button className="color rounded-md p-4 flex justify-center items-center">
              <h3 className="text-[#666666] font-bold">Category 2</h3>
              {/* <DownChevronIcon className="mx-2" width="11"/> */}
            </button>
            <div className="content"></div>
          </div>
          <div className="product-details mb-4">
            <button className="weight rounded-md p-4 flex justify-center items-center">
              <h3 className="text-[#666666] font-bold">Category 3</h3>
              {/* <DownChevronIcon className="mx-2" width="11"/> */}
            </button>
            <div className="content"></div>
          </div>
          <div className="product-details mb-4">
            <button className="price rounded-md p-4 flex justify-center items-center">
              <h3 className="text-[#666666] font-bold">Category 4</h3>
              {/* <DownChevronIcon className="mx-2" width="11"/> */}
            </button>
            <div className="content"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
