'use client';

import React, { useEffect, useLayoutEffect } from "react";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { hideLoading, loadHeaderButtonGroup, loadHeaderDescription, loadHeaderTitle, loadMenu, loadSlider } from "./utils/script";
import Category from "./components/Category";
import Questions from "./components/Questions";
import AboutBarjil from "./components/AboutBarjil";
import FullScreenElem from "./components/FullScreenElem";
import Loading from "./components/Loading";

const HomePage = () => {

  useEffect(() => {
    const load0 =  setTimeout(() => {
      hideLoading();
    },1313)
    const load1 = setTimeout(() => {
      loadMenu()
    },1600)
    const load2 = setTimeout(() => {
      loadHeaderTitle()
    },2200)
    const load3 = setTimeout(() => {
      loadHeaderDescription()
    },2800)
    const load4 = setTimeout(() => {
      loadHeaderButtonGroup()
    },3400)
    const load5 = setTimeout(() => {
      loadHeaderButtonGroup()
    },4000)
    const load6 = setTimeout(() => {
      loadSlider()
    },4100)
    const load7 = setTimeout(() => {
      const section = document.querySelector('#header .scroll-down');
      const body = document.body;

      section.style.visibility = 'visible';
      section.style.opacity = 1;
      body.style.overflowY = 'auto';
    },4000)


    return () => {
      clearTimeout(load0)
      clearTimeout(load1)
      clearTimeout(load2)
      clearTimeout(load3)
      clearTimeout(load4)
      clearTimeout(load5)
      clearTimeout(load6)
      clearTimeout(load7)

      const body = document.body;
      body.style.overflowY = 'hidden';
    }
  }, [])

  
  return (
    <section id="home">
      <Loading />
      <Menu />
      <SideMenu />
      <Header />
      <Category />
      <Questions />
      <AboutBarjil />
      <Footer />
      <FullScreenElem />
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </section>
  )
}

export default HomePage;