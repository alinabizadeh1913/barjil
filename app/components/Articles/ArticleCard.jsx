import Image from "next/image";
import { CategoryIcon } from "../Icons";
import Link from "next/link";

const ArticleCard = (props) => {
    return (
        <Link href={props.link || '#'} className={`${props.background || "bg-transparent"} article-card p-3 border-2 border-[#b6b6b6] rounded-xl h-full block`}>
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
                <span className="text-[#7b7b7b] mx-2">
                    {props.category || "1st category"}
                </span>
                
            </div>
            <div className="description">
                <p className="text-sm text-[#666666]">
                    {props.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the dolor sit."}
                </p>
            </div>
        </Link>
    )
}

export default ArticleCard;