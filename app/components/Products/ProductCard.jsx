import React from "react";
import Image from "next/image";
import { CategoryIcon } from "../Icons";
import Link from "next/link";
import useStore from "@/app/store/Store";

const ProductCard = (props) => {
  const { language } = useStore();

  return (
    <div className="product-card rounded-lg p-3 flex items-center">
      <div className="card-image w-[50%] h-[230px] border-2 border-white rounded-md relative">
        <Image
          src={props.image || "/img/product-card.png"}
          alt={props.alt}
          className="rounded-md w-full h-full"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className={`card-content w-[50%] ${
          props.fit ? "" : "h-full"
        } px-3 flex flex-col justify-between`}
      >
        <h1 className="title font-bold text-white">
          {props.title || "Gypsum Board (Drywall)"}
        </h1>
        <div className="type flex items-center my-2">
          <CategoryIcon stroke="#ffffff99" width="16" height="16" />
          <span className="text-[#ffffff99] text-sm mx-2">
            {props.category || "minerals"}
          </span>
        </div>
        <div className="description">
          <h3
            className="text-sm"
            dangerouslySetInnerHTML={{
              __html:
                props.text ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            }}
          ></h3>
        </div>
        <Link
          href={props.link || "/"}
          className="link w-full text-white border-2 border-white p-[10px] text-center rounded-md mt-4"
        >
          {language == "en"
            ? "view product"
            : language == "ar"
            ? "عرض المنتج"
            : "پروڈکٹ دیکھیں"}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
