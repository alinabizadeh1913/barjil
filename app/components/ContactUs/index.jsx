import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import {
  InstagramIcon2,
  MessageIcon,
  PhoneIcon,
  WhatsappIcon2,
  LocationIcon,
  FacebookIcon2,
  TelegramIcon2,
  LinkedinIcon2,
} from "../Icons";
import { getSettings, getSocial } from "@/app/server/api/apiRoutes";
import useStore from "@/app/store/Store";
import Link from "next/link";
import Image from "next/image";
const Font = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

const ContactUs = () => {
  const [settings, setSettings] = useState(null);
  const [social,setSocial] = useState(null)
  const { language } = useStore();

  useEffect(() => {
    getSettings().then((result) => {
      setSettings(result);
    });
    getSocial().then(result => {
      setSocial(result)
    })
  }, []);

  return (
    <section id="contact-items" className="mt-14">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12">
            <div className="service flex flex-col">
              <div className="title">
                <h1
                  className={`text-[#333333] font-black text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] ${Font.className}`}
                >
                  {language == "en"
                    ? settings?.translations?.en?.title_contactus
                    : language == "ar"
                    ? settings?.translations?.ar?.title_contactus
                    : settings?.translations?.ur?.title_contactus}
                </h1>
              </div>
              <div className="description mt-3 mb-5">
                <p className="text-[#808080] text-sm sm:text-base md:text-lg">
                  {language == "en"
                    ? settings?.translations?.en?.text_contactus
                    : language == "ar"
                    ? settings?.translations?.ar?.text_contactus
                    : settings?.translations?.ur?.text_contactus}
                </p>
              </div>
              <Link
                href="#support"
                className="link w-fit text-white py-3 px-9 sm:py-4 sm:px-12 rounded-lg text-sm sm:text-base md:text-lg"
              >
                {language === "en"
                  ? "Go To Request Box"
                  : language == "ar"
                  ? "انتقل إلى صندوق الطلبات"
                  : "درخواست باکس پر جائیں"}
              </Link>
            </div>
          </div>
          <div className="w-full md:w-6/12"></div>
        </div>
        <div className="flex flex-wrap mt-28 mb-16 md:px-6">
          <div className="w-full md:w-6/12 md:px-6 mb-4">
            <div className="contact email flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
              <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                <Link
                  href={social?.gmail_link ? social?.gmail_link : "#"}
                  className="text-center font-black text-base md:text-lg lg:text-xl text-[#727272] relative z-20"
                >
                  {
                    social?.gmail_link ? social?.gmail_link : "example@gmail.com"
                  }
                </Link>

                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
              </div>

              <div className="icon-wrapper absolute top-0 left-[-17px] sm:left-[-22px] bottom-0 h-full flex justify-center items-center z-10">
                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                  <div className="w-[27px] h-[27px] md:w-[37px] md:h-[37px] relative">
                  {
                    social?.gmail_image ? <Image src={social?.gmail_image} alt="gmail" fill/> : <MessageIcon className="w-full h-full"/>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:px-6 mb-4">
            <div className="contact instagram flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
              <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                <Link
                  href={social?.instagram_link ? social?.instagram_link : "#"}
                  className="text-center font-black text-base md:text-lg lg:text-xl text-[#727272] relative z-20"
                >
                  {
                    social?.instagram_link ? social?.instagram_link : "barjiltrading.co"
                  }
                </Link>

                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
              </div>

              <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                <div className="w-[27px] h-[27px] md:w-[37px] md:h-[37px] relative">
                  {
                    social?.instagram_image ? <Image src={social?.instagram_image} alt="instagram" fill/> : <InstagramIcon2 className="w-full h-full"/>
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:px-6 mb-4">
            <div className="contact whatsapp flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
              <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                <Link
                  href={social?.whatsapp_link ? social?.whatsapp_link : "#"}
                  className="text-center font-black text-base md:text-lg lg:text-xl text-[#727272] relative z-20"
                >
                  {
                    social?.whatsapp_link ? social?.whatsapp_link : "barjiltrading_company"
                  }
                </Link>

                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
              </div>

              <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                <div className="w-[27px] h-[27px] md:w-[37px] md:h-[37px] relative">
                {
                    social?.whatsapp_image ? <Image src={social?.whatsapp_image} alt="whatsapp" fill/> : <WhatsappIcon2 className="w-full h-full"/>
                  }

                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:px-6 mb-4">
            <div className="contact phone flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
              <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                <a
                  href="#"
                  className="text-center font-black text-base md:text-lg lg:text-xl text-[#727272] relative z-20"
                >
                  {
                    settings?.translations?.en?.number
                  }
                </a>

                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
              </div>

              <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                  <PhoneIcon className="w-[27px] h-[27px] md:w-[37px] md:h-[37px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:px-6 mb-4">
            <div className="contact whatsapp flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
              <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                <Link
                  href={social?.telegram_link ? social?.telegram_link : "#"}
                  className="text-center font-black text-base md:text-lg lg:text-xl text-[#727272] relative z-20"
                >
                  {
                    social?.telegram_link ? social?.telegram_link : "barjilgroup-admin"
                  }
                </Link>

                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
              </div>

              <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                <div className="w-[27px] h-[27px] md:w-[37px] md:h-[37px] relative">
                {
                    social?.telegram_image ? <Image src={social?.telegram_image} alt="whatsapp" fill/> : <TelegramIcon2 width={32} height={32} className="w-full h-full"/>
                  }

                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:px-6 mb-4">
            <div className="contact whatsapp flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
              <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                <Link
                  href={social?.linkedin_link ? social?.linkedin_link : "#"}
                  className="text-center font-black text-base md:text-lg lg:text-xl text-[#727272] relative z-20"
                >
                  {
                    social?.linkedin_link ? social?.linkedin_link : "linkedin.com/barjil"
                  }
                </Link>

                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
              </div>

              <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                <div className="w-[27px] h-[27px] md:w-[37px] md:h-[37px] relative">
                {
                    social?.linkedin_image ? <Image src={social?.linkedin_image} alt="whatsapp" fill/> : <LinkedinIcon2 className="w-full h-full"/>
                  }

                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:px-6 mb-4">
            <div className="contact location flex justify-center items-center text-center border-2 border-[#cbcbcb] rounded-full relative">
              <div className="link relative w-full h-full py-8 px-[52px] overflow-hidden rounded-full">
                <a
                  href="#"
                  className="text-center font-black text-base md:text-lg lg:text-xl text-[#727272] relative z-20"
                >
                  {
                    language == 'en' ? settings?.translations?.en?.address : language == 'ar' ? settings?.translations?.ar?.address : settings?.translations?.ur?.address
                  }
                </a>

                <div className="front absolute bottom-0 left-0 w-full bg-[#32cd32] rounded-full"></div>
              </div>

              <div className="icon-wrapper absolute top-0 left-[-22px] bottom-0 h-full flex justify-center items-center">
                <div className="icon-inner w-[55px] h-[55px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFA500] flex items-center justify-center">
                  <LocationIcon className="w-[27px] h-[27px] md:w-[37px] md:h-[37px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
