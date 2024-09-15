'use client';

import React, { useEffect, useLayoutEffect } from "react";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import Products from "../../components/Products";
import { loadMenu } from "../../utils/script";
import SideMenu from "../../components/SideMenu";
import FullScreenElem from "../../components/FullScreenElem";
import useStore from "../../store/Store";

const ProductsPage = () => {

  const {language,setLanguage} = useStore();

    useLayoutEffect(() => {
      setLanguage('ar')
    }, [])

    useEffect(() => {
      const load1 = setTimeout(() => {
        loadMenu()
      },400)
      const overflowAuto = setTimeout(() => {
        const body = document.body;
        body.style.overflowY = 'auto';
      },500)

      return () => {
        clearTimeout(load1)
        clearTimeout(overflowAuto)
      }
      }, [])


    return (
        <section id="products">
            <Menu />
            <Banner background="/img/our-product.jpg" title={`${language == 'en' ? 'Our Products' : language == 'ar' ? 'منتجاتنا' : 'ہمارے مصنوعات'}`} pathname="Products"/>
            <Products />
            <SideMenu />
            <FullScreenElem />
            <Footer />
        </section>
    )
}

export default ProductsPage;