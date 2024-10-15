"use client";

import React, { useEffect } from "react";
import Footer from "@/app/components/Footer";
import Menu from "@/app/components/Menu";
import Banner from "@/app/components/Banner";
import { loadMenu } from "@/app/utils/script";
import SideMenu from "@/app/components/SideMenu";
import FullScreenElem from "@/app/components/FullScreenElem";
import useStore from "@/app/store/Store";
import ProductCategory from "@/app/components/ProductCategory";

const ProductCategoryPage = ({ params }) => {
  const { category } = params;

  useEffect(() => {
    const load1 = setTimeout(() => {
      loadMenu();
    }, 400);
    const overflowAuto = setTimeout(() => {
      const body = document.body;
      body.style.overflowY = "auto";
    }, 500);

    return () => {
      clearTimeout(load1);
      clearTimeout(overflowAuto);
    };
  }, []);

  const { language } = useStore();

  return (
    <section id="products">
      <Menu />
      <Banner
        background="/img/our-product.jpg"
        title={`${
          language == "en"
            ? "Our Products"
            : language == "ar"
            ? "منتجاتنا"
            : "ہمارے مصنوعات"
        }`}
        pathname="Products"
      />
      <ProductCategory slug={category} />
      <SideMenu />
      <FullScreenElem />
      <Footer />
    </section>
  );
};

export default ProductCategoryPage;
