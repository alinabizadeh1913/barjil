import React from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const ArticlesPage = () => {
    return (
        <section id="articles">
            <Menu />
            <Banner background="/img/articles.jpg" title="Articles" />
        </section>
    )
}

export default ArticlesPage;