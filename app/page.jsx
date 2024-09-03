'use client';

import React, { useEffect } from "react";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { loadHeaderButtonGroup, loadHeaderDescription, loadHeaderTitle, loadMenu, loadSlider } from "./utils/script";
import Category from "./components/Category";
import Questions from "./components/Questions";
import AboutBarjil from "./components/AboutBarjil";

const HomePage = () => {

  useEffect(() => {
    setTimeout(() => {
      loadMenu()
    },600)
    setTimeout(() => {
      loadHeaderTitle()
    },1200)
    setTimeout(() => {
      loadHeaderDescription()
    },1800)
    setTimeout(() => {
      loadHeaderButtonGroup()
    },2400)
    setTimeout(() => {
      loadHeaderButtonGroup()
    },3000)
    setTimeout(() => {
      loadSlider()
    },3100)
  }, [])
  
  return (
    <section id="home">
      <Menu />
      <SideMenu />
      <Header />
      <Category />
      <Questions />
      <AboutBarjil />
      <Footer />
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </section>
  )
}

export default HomePage;