'use client';

import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { loadMenu } from "../utils/script";

const ProductsPage = () => {

    useEffect(() => {
        setTimeout(() => {
          loadMenu()
        },400)
      }, [])

    return (
        <section id="products">
            <Menu />
            <Banner background="/img/our-product.jpg" title="Our Products"/>
            <Products />
            <Footer />
        </section>
    )
}

export default ProductsPage;