'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadMenu } from "../utils/script";
import SideMenu from "../components/SideMenu";
import FullScreenElem from "../components/FullScreenElem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const ContactPage = () => {

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
        <section id="contact">
            <Menu />
            <Banner background="/img/contact.jpg" title="Contact Us"/>
            <ContactUs />
            <Footer />
            <SideMenu />
            <FullScreenElem />
        </section>
    )
}

export default ContactPage;