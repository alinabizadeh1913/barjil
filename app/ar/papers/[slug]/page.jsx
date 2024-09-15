'use client';

import ArticleBanner from "@/app/components/ArticleBanner";
import Footer from "@/app/components/Footer";
import FullScreenElem from "@/app/components/FullScreenElem";
import Menu from "@/app/components/Menu";
import SideMenu from "@/app/components/SideMenu";
import SingleArticleItems from "@/app/components/SingleArticle";
import Support from "@/app/components/Support";
import useStore from "@/app/store/Store";
import { loadMenu } from "@/app/utils/script";
import { useEffect, useLayoutEffect } from "react";

const SingleArticles = ({ params }) => {

  const { slug } = params;

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

    return (
        <section id="single-article">
            <Menu background="bg-[#10101087]"/>
            <ArticleBanner />
            <SingleArticleItems currentArticle={slug}/> 
            <SideMenu />
            <FullScreenElem />
            <Footer />
        </section>
    )
}

export default SingleArticles;