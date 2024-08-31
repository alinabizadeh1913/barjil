'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadMenu } from "../utils/script";

const ArticlesPage = () => {

    useEffect(() => {
        setTimeout(() => {
          loadMenu()
        },400)
      }, [])

    return (
        <section id="articles">
            <Menu />
            <Banner background="/img/articles.jpg" title="Articles" />
        </section>
    )
}

export default ArticlesPage;