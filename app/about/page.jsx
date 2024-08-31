import React from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";

const AboutPage = () => {
    return (
        <section id="articles">
            <Menu />
            <Banner background="/img/about-us.jpg" title="About Us" />
        </section>
    )
}

export default AboutPage;