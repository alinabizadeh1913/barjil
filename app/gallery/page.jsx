'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadMenu } from "../utils/script";

const GalleryPage = () => {

    useEffect(() => {
        setTimeout(() => {
          loadMenu()
        },400)
      }, [])

    return (
        <section id="articles">
            <Menu />
            <Banner background="/img/gallery.jpg" title="Gallery" />
        </section>
    )
}

export default GalleryPage;