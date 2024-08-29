import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { OurProducts, Products } from "../components/Products";

const ProductsPage = () => {
    return (
        <section id="products">
            <Menu />
            <OurProducts />
            <Products />
            <Footer />
        </section>
    )
}

export default ProductsPage;