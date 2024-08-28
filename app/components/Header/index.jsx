'use client'
import Image from "next/image";
import React from "react";
import Content from "./Content";
import useStore from "../../store/Store";

const Header = () => {

    const { imgSrc } = useStore()

    return (
        <section id="header" className="relative w-full min-h-screen ">
            <Image src={String(imgSrc)} alt="Header Image" layout="fill" objectFit="cover" />
            <Content />
        </section>
    )
}

export default Header;