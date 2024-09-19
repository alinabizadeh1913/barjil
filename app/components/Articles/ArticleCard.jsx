import React from "react";
import Image from "next/image";
import { CategoryIcon } from "../Icons";
import Link from "next/link";

const ArticleCard = (props) => {
    return (
        <React.Fragment>
            {props.hasLink ? <Link href={props.link || '#'} className="block h-full">
            <div className={`${props.background || "bg-transparent"} article-card p-3 border-2 border-[#b6b6b6] rounded-xl h-full duration-300 hover:border-[#32cd32]`}>
                <div className="image h-[150px] md:h-[200px] relative rounded-lg overflow-hidden">
                    <Image src={props.image || "/img/article-card.jpg"} layout="fill" objectFit="cover"/>
                </div>
                <div className="title">
                    <h1 className="text-[22px] font-black mt-3 mb-2 text-[#333333]">
                        {props.title || "Article number 1"}
                    </h1>
                </div>
                <div className="category flex items-center mb-4">
                    <CategoryIcon stroke="#7b7b7b"/>
                    <span className="text-[#7b7b7b] mx-2 text-sm md:text-base">
                        {props.category || "1st category"}
                    </span>
                    
                </div>
                <div className="description">
                    <p className="text-sm text-[#666666]">
                        {props.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the dolor sit."}
                    </p>
                </div>
            </div>
        </Link> : <div className={`${props.background || "bg-transparent"} article-card p-3 border-2 border-[#b6b6b6] rounded-xl h-full`}>
                <div className="image h-[150px] md:h-[200px] relative rounded-lg overflow-hidden">
                    <Image src={props.image || "/img/article-card.jpg"} alt={props.title || "Article Image"} fill  objectFit="cover" priority />
                </div>
                <div className="title">
                    <h1 className="text-[22px] font-black mt-3 mb-2 text-[#333333]">
                        {props.title || "Article number 1"}
                    </h1>
                </div>
                <div className="category flex items-center mb-4">
                    <CategoryIcon stroke="#7b7b7b"/>
                    <span className="text-[#7b7b7b] mx-2 text-sm md:text-base">
                        {props.category || "1st category"}
                    </span>
                    
                </div>
                <div className="description">
                    <p className="text-sm text-[#666666]">
                        {props.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the dolor sit."}
                    </p>
                </div>
            </div>}
        </React.Fragment>
        
    )
}

export default ArticleCard;