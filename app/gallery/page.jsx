import React from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const GalleryPage = () => {
    return (
        <section id="articles">
            <Menu />
            <Banner background="/img/gallery.jpg" title="Gallery" />
        </section>
    )
}

export default GalleryPage;