'use client';

import React, { useEffect } from "react"
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import { loadMenu } from "../utils/script";
import SideMenu from "../components/SideMenu";
import FullScreenElem from "../components/FullScreenElem";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Support from "../components/Support";
import useStore from "../store/Store";

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


      const {language} = useStore()

    return (
        <section id="contact">
            <Menu />
            <Banner background="/img/contact.jpg" title={`${language == 'en' ? 'Contact Us' : language == 'ar' ? 'اتصل بنا' : 'ہم سے رابطہ کریں' }`}/>
            <ContactUs />
            <Support hasContainer="true" constant="true"/>
            <Footer />
            <SideMenu />
            <FullScreenElem />
        </section>
    )
}

export default ContactPage;