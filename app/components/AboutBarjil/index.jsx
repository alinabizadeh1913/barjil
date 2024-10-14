"use client";

import Link from "next/link";
import { Galaxy, RightIcon3 } from "../Icons";
import { useEffect, useState } from "react";
import { loadAboutBarjil } from "@/app/utils/script";
import useStore from "@/app/store/Store";
import { getSettings } from "@/app/server/api/apiRoutes";

const AboutBarjil = () => {
  const { language } = useStore();
  const [aboutBarjil, setAboutBarjil] = useState([]);

  useEffect(() => {
    getSettings().then((result) => {
      console.log(result);
      setAboutBarjil(result);
    });
  }, []);

  useEffect(() => {
    const aboutBarjil = document.querySelector("#about-barjil");

    const handleScroll = () => {
      const sectionTop = aboutBarjil.offsetTop;
      const scrollY = window.scrollY;

      if (scrollY + window.innerHeight >= sectionTop + 200) {
        loadAboutBarjil();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <section id="about-barjil" className="mt-10 py-8 px-2 wrapper mx-auto">
      <div className="flex flex-wrap justify-between items-center">
        <div className="galaxy w-full md:w-4/12 px-3 flex justify-center">
          <Galaxy
            className={`w-[45%] md:w-[80%] h-[200px] md:h-[350px] ${
              language == "en" ? "lang-en" : "lang-other"
            }`}
          />
        </div>
        <div className="w-full md:w-8/12 px-3 flex justify-center">
          <div className="barjil-trading">
            <div className="title">
              <h1
                className={`about-title text-4xl md:text-6xl ${
                  language == "en" ? "poppins-exterabold" : "yekan-exterabold"
                } text-[#333333]`}
              >
                {language == "en"
                  ? "About"
                  : language == "ar"
                  ? "عن"
                  : "بارے میں"}
              </h1>
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl text-[#333333] mt-3`}
              >
                {language == "en"
                  ? aboutBarjil?.translations?.en?.title_aboutus
                  : language == "ar"
                  ? aboutBarjil?.translations?.ar?.title_aboutus
                  : aboutBarjil?.translations?.ur?.title_aboutus}
              </h1>
            </div>
            <div className="description mt-4 mb-3 overflow-hidden">
              <div
                className="description-inner text-[##666666]"
                dangerouslySetInnerHTML={{
                  __html:
                    language == "en"
                      ? aboutBarjil?.translations?.en?.text_aboutus
                      : language == "ar"
                      ? aboutBarjil?.translations?.ar?.text_aboutus
                      : aboutBarjil?.translations?.ur?.text_aboutus,
                }}
              ></div>
            </div>
            <Link
              href="/about"
              className="link flex items-center font-bold w-fit"
            >
              <span className="text-[#32CD32]">
                {language == "en"
                  ? "read more"
                  : language == "ar"
                  ? "اقرأ المزيد"
                  : "مزید پڑھیں"}
              </span>
              <RightIcon3
                className={`${language == "en" ? "" : "rotate-180"} mx-1`}
                height="13"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBarjil;
