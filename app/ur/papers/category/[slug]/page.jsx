"use client";

import React, { useEffect, useLayoutEffect } from "react";
import Menu from "@/app/components/Menu";
import Banner from "@/app/components/Banner";
import { loadMenu } from "@/app/utils/script";
import SideMenu from "@/app/components/SideMenu";
import FullScreenElem from "@/app/components/FullScreenElem";
import Footer from "@/app/components/Footer";
import useStore from "@/app/store/Store";
import ArticleCategory from "@/app/components/ArticleCategory";

const ArticleCategoryPage = ({ params }) => {
  const { language, setLanguage } = useStore();

  useLayoutEffect(() => {
    setLanguage("ur");
  }, []);
  const { slug } = params;

  useEffect(() => {
    const load1 = setTimeout(() => {
      loadMenu();
    }, 400);
    const overflowAuto = setTimeout(() => {
      const body = document.body;
      body.style.overflowY = "auto";
    }, 500);

    return () => {
      clearTimeout(load1);
      clearTimeout(overflowAuto);
    };
  }, []);

  return (
    <section id="articles">
      <Menu />
      <Banner
        background="/img/articles.jpg"
        title={`${
          language == "en"
            ? "Articles"
            : language == "ar"
            ? "المقالات"
            : "مضامین"
        }`}
        pathname="Articles"
      />
      <ArticleCategory slug={slug} />
      <Footer />
      <SideMenu />
      <FullScreenElem />
    </section>
  );
};

export default ArticleCategoryPage;
