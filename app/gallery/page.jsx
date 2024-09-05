'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadMenu } from "../utils/script";
import FullScreenElem from "../components/FullScreenElem";
import SideMenu from "../components/SideMenu";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const GalleryPage = () => {

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
        <section id="gallery">
            <Menu />
            <Banner background="/img/gallery.jpg" title="Gallery" />
            <Gallery />
            <Footer />
            <SideMenu />
            <FullScreenElem />
        </section>
    )
}

export default GalleryPage;