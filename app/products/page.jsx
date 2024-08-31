import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Products from "../components/Products";

const ProductsPage = () => {
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