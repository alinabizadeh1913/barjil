'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadMenu } from "../utils/script";

const ContactPage = () => {

    useEffect(() => {
        setTimeout(() => {
          loadMenu()
        },400)
      }, [])

    return (
        <section id="contact">
            <Menu />
            <Banner background="/img/contact.jpg" title="Contact Us"/>
        </section>
    )
}

export default ContactPage;