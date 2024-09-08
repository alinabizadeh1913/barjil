'use client';

import Feedback from "@/app/components/Feedback";
import Footer from "@/app/components/Footer";
import FullScreenElem from "@/app/components/FullScreenElem";
import Menu from "@/app/components/Menu";
import SideMenu from "@/app/components/SideMenu";
import Support from "@/app/components/Support";
import { loadMenu } from "@/app/utils/script";
import { useEffect } from "react";

const SingleProduct = () => {

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
        <section id="single-product">
            <Menu static="true" background="bg-[#333333]"/>
            <Support hasContainer="true"/>
            <Feedback />
            <SideMenu />
            <FullScreenElem />
            <Footer />
        </section>
    )
}

export default SingleProduct;