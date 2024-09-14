'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadBenefits, loadMenu } from "../utils/script";
import FullScreenElem from "../components/FullScreenElem";
import SideMenu from "../components/SideMenu";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const AboutPage = () => {

    useEffect(() => {
      const load1 = setTimeout(() => {
        loadMenu()
      },400)
      const load2 = setTimeout(() => {
        loadBenefits();
      },600)
      const overflowAuto = setTimeout(() => {
        const body = document.body;
        body.style.overflowY = 'auto';
      },1000)

      return () => {
        clearTimeout(load1)
        clearTimeout(overflowAuto)
      }
      }, [])

    return (
        <section id="about-us">
            <Menu />
            <Banner background="/img/about-us.jpg" title="About Us" />
            <AboutUs />
            <Footer />
            <SideMenu />
            <FullScreenElem />
        </section>
    )
}

export default AboutPage;