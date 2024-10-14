'use client';

import Footer from "@/app/components/Footer";
import FullScreenElem from "@/app/components/FullScreenElem";
import Menu from "@/app/components/Menu";
import SideMenu from "@/app/components/SideMenu";
import SingleProductItems from "@/app/components/SingleProduct";
import useStore from "@/app/store/Store";
import { loadMenu } from "@/app/utils/script";
import { useEffect, useLayoutEffect } from "react";

const SingleProduct = ({params}) => {

    const {language,setLanguage} = useStore();

    useLayoutEffect(() => {
      setLanguage('ar')
    }, [])


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

        const {slug} = params;

    return (
        <section id="single-product">
            <Menu sticky="true" background="bg-[#333333]" constant="true"/>
            <SingleProductItems currentProduct={slug}/>
            <SideMenu />
            <FullScreenElem />
            <Footer />
        </section>
    )
}

export default SingleProduct;