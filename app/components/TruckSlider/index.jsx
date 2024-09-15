'use client';
import useStore from "@/app/store/Store";
import React from "react";
import { LeftIconGroup, RightIconGroup } from "../Icons";

const TruckSlider = () => {

    const {language} = useStore();

    return (
        <section id="truck-slider" className="mt-20">
            <div className="title-wrapper px-8 flex justify-between">
                <h1 className="text-2xl text-[#666666] font-black">
                    {language === 'en' ? 'Our Products' : language == 'ar' ? 'منتجاتنا' : 'ہمارے مصنوعات'}
                </h1>
                <div className="flex items-center">
                    <LeftIconGroup stroke="#737373" className={`${language == 'en' ? '' : 'rotate-180'}`}/>
                    <span className="mx-2 text-[#737373] text-xl font-black">
                        {language === 'en' ? 'Drag Truck' : language == 'ar' ? 'سحب الشاحنة' : 'ٹرک کھینچنا'}
                    </span>
                    <RightIconGroup stroke="#737373" className={`${language == 'en' ? '' : 'rotate-180'}`}/>
                </div>
            </div>

            <div className="truck-wrapper">
                <div className="truck flex justify-center">
                    <img src="/img/truck1.png" alt="truck1" className="w-[350px]"/>
                    <img src="/img/truck2.png" alt="truck2" className="w-[350px]"/>
                    <img src="/img/truck3.png" alt="truck3" className="w-[350px]"/>
                    <img src="/img/truck4.png" alt="truck4" className="w-[350px]"/>
                    <img src="/img/truck5.png" alt="truck5" className="w-[350px]"/>
                    <img src="/img/truck6.png" alt="truck6" className="w-[350px]"/>
                </div>
            </div>

        </section>
    )
}

export default TruckSlider;