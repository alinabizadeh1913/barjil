'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadMenu } from "../utils/script";

const AboutPage = () => {

    useEffect(() => {
        setTimeout(() => {
          loadMenu()
        },400)
      }, [])

    return (
        <section id="articles">
            <Menu />
            <Banner background="/img/about-us.jpg" title="About Us" />
        </section>
    )
}

export default AboutPage;