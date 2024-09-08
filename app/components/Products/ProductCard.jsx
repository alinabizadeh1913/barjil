import React from "react";
import Image from "next/image";
import { CategoryIcon } from "../Icons";
import Link from "next/link";

const ProductCard = (props) => {
    return (
        <div className="product-card rounded-lg p-3 flex items-center ">
            <div className="card-image w-[50%] h-[230px] border-2 border-white rounded-md relative">
                <Image src={props.image || "/img/product-card.png"} alt="" className="rounded-md w-full h-full" layout="fill"/>
            </div>
            <div className="card-content w-[50%] px-3 flex flex-col justify-center">
                <h1 className="title text-lg font-bold text-white">
                    {props.title || "Gypsum Board (Drywall)"}
                </h1>
                <div className="type flex items-center my-4">
                    <CategoryIcon className="mr-2" stroke="#ffffff99" width="16" height="16"/>
                    <span className="text-[#ffffff99] text-sm">
                        {props.type || "minerals"}
                    </span>
                </div>
                <div className="description">
                    <h2 className="text-sm">
                        {props.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                    </h2>
                </div>
                <Link href={props.link || "/"} className="link w-full text-white border-2 border-white p-[10px] text-center rounded-md mt-4">
                    view product
                </Link>
            </div>
        </div>
    )
}

export default ProductCard;