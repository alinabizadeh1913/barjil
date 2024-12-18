import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section id="gallery-items" className="mt-14">
      <div className="container mx-auto">
        <div className="gallery-wrapper grid grid-cols-2 md:grid-cols-3 px-8 md:px-14 gap-3 mb-3">
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2  row-start-1 row-end-2 col-start-1 col-end-3 md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card.png"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/article-card.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/our-product.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 row-start-3 row-end-4 col-start-1 col-end-3 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-4 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/articles.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div className="gallery-wrapper hidden md:grid grid-cols-3 px-8 md:px-14 gap-3 mb-3">
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2  duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card-2.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card-3.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 row-start-1 row-end-3 col-start-3 col-end-4 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card-4.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 row-start-2 row-end-3 col-start-1 col-end-3 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/petrochemical.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div className="gallery-wrapper grid grid-cols-2 md:grid-cols-3 px-8 md:px-14 gap-3 mb-3">
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2  row-start-1 row-end-2 col-start-1 col-end-3 md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card.png"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/article-card.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/our-product.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 row-start-3 row-end-4 col-start-1 col-end-3 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-4 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/articles.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <div className="gallery-wrapper hidden md:grid grid-cols-3 px-8 md:px-14 gap-3 mb-3">
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2  duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card-2.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card-3.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 row-start-1 row-end-3 col-start-3 col-end-4 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/product-card-4.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-span-1 border-2 border-[#32CD32] hover:border-[#006400] rounded-xl p-2 row-start-2 row-end-3 col-start-1 col-end-3 duration-300">
            <div className="relative rounded-md overflow-hidden w-full h-full">
              <Image
                src="/img/petrochemical.jpg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
