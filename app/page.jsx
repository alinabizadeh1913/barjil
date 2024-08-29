'use client';

import React, { useEffect } from "react";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomePage = () => {
  
  return (
    <section id="home">
      <Menu />
      <SideMenu />
      <Header />
      <Footer />
      {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
    </section>
  )
}

export default HomePage;