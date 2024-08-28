'use client';

import React, { useEffect } from "react";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";

const HomePage = () => {
  
  return (
    <section id="home">
      <Menu />
      <SideMenu />
      <Header />
    </section>
  )
}

export default HomePage;