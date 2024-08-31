import React from "react";
import { MineralIcon } from "../Icons";
import Image from "next/image";

const ProductCard = (props) => {
    return (
        <div className="product-card rounded-lg p-3 flex items-center mb-3">
            <div className="card-image w-[45%] h-[250px] border-2 border-white rounded-md relative">
                <Image src={props.image || "/img/product-card.png"} alt="" className="rounded-md w-full h-full" layout="fill"/>
            </div>
            <div className="card-content w-[55%] pl-3 pt-3 flex flex-col justify-center">
                <h1 className="title text-lg font-bold text-white">
                    {props.title || "Gypsum Board (Drywall)"}
                </h1>
                <div className="type flex items-center my-4">
                    {props.type === "minerals" ? <MineralIcon className="mr-2" stroke="#ffffff99" width="16" height="16"/> : ""}
                    <span className="text-[#ffffff99] text-sm">
                        {props.type || "minerals"}
                    </span>
                </div>
                <div className="description">
                    <h2 className="text-sm">
                        {props.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                    </h2>
                </div>
                <a href={props.link || "/"} className="link w-full text-white border-2 border-white p-[10px] text-center font-bold rounded-md mt-4">
                    view product
                </a>
            </div>
        </div>
    )
}

export default ProductCard;