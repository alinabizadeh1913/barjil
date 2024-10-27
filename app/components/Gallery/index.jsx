import { getGallery } from "@/app/server/api/apiRoutes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery().then((result) => {
      console.log(result);
      setGallery(result);
    });
  });

  return (
    <section id="gallery-items" className="mt-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap px-5 md:px-10 gap-y-2 md:gap-y-4">
          <div className="gallery-wrapper w-7/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="gallery-wrapper w-5/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="gallery-wrapper w-7/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="gallery-wrapper w-5/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="gallery-wrapper w-7/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="gallery-wrapper w-5/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="gallery-wrapper w-7/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="gallery-wrapper w-5/12 px-1 md:px-2">
            <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-md border-2 border-[#32CD32] hover:border-[#006400] duration-300 p-2">
              <div className="w-full h-full relative">
                <Image
                  src="/img/product-card-3.jpg"
                  alt=""
                  fill
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
