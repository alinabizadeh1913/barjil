'use client'

import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { RightIcon2 } from "../Icons";

const Banner = (props) => {

    const [path,setPath] = useState()

    useLayoutEffect(() => {
        const pathname = window.location.pathname;
        setPath(pathname.substr(1,))
    },[])
    

    return (
        <section id="banner">
            <div className="banner-wrapper w-full h-[70vh] relative" style={{"background" : `url(${props.background})`}}>
                <div className="banner-inner absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
                    <h1 className="title text-[56px] font-bold text-[#1cd31c] cursor-default">
                        {props.title}
                    </h1>
                    <div className="breadcrumb flex items-center text-white">
                        <Link href="/" className="text-[#ffffffab]">
                            Home    
                        </Link>
                        <RightIcon2 className="mx-2" fill="#ffffffab" width="8" height="13"/>
                        <span className="pathname">
                            {path}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;