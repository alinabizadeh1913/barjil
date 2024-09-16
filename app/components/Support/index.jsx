'use client';

import React, { useEffect, useState } from "react";
import { Poppins } from 'next/font/google';
import { CheckIcon } from "../Icons";
import { loadSupport } from "@/app/utils/script";
import useStore from "@/app/store/Store";

const Font = Poppins({
    subsets : ['latin'],
    weight : ['900']
})

const Support = (props) => {

    const {language} = useStore()

    const [information,setInformation] = useState({
        name : '',
        family : '',
        phone : '',
        request : ''
    })

    const [count,setCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = document.querySelector('#support .form-wrapper form input');
        const button = document.querySelector('#support .form-wrapper form button');
        const svg = document.querySelector('#support .form-wrapper form button svg path');
        const circleLtr = document.querySelector('#support .form-wrapper form .circle-wrapper-ltr');
        const circleRtl = document.querySelector('#support .form-wrapper form .circle-wrapper-rtl');
        const form = document.querySelector('#support .form-wrapper form');

        const nameError = document.querySelector('#support .form-wrapper form .input-g .error-success .name-error');
        const familyError = document.querySelector('#support .form-wrapper form .input-g .error-success .family-error');
        const phoneError = document.querySelector('#support .form-wrapper form .input-g .error-success .phone-error');
        const requestError = document.querySelector('#support .form-wrapper form .input-g .error-success .request-error');
        const requestSuccess = document.querySelector('#support .form-wrapper form .input-g .error-success .request-success');

        const nameLabel = document.querySelector('#support .form-wrapper form .input-g .input-label label .name');
        const familyLabel = document.querySelector('#support .form-wrapper form .input-g .input-label label .family');
        const phoneLabel = document.querySelector('#support .form-wrapper form .input-g .input-label label .phone');
        const requestLabel = document.querySelector('#support .form-wrapper form .input-g .input-label label .request');

        setTimeout(() => {
            input.value = '';
        },313)

        if (count == 0) {
            if (input.value.length > 0) {
                setTimeout(() => {
                    input.setAttribute('name','family');
                },200)
            
                setInformation(info => {
                    return {
                        ...info,
                        name : input.value
                    }
                })

                setCount(count + 1);

                circleLtr.style.transform = 'rotate(90deg)';
                circleRtl.style.transform = 'rotate(-90deg)';

                nameError.classList.add('hidden');
                nameLabel.classList.add('hidden');
                familyLabel.classList.remove('hidden');
            }else{
                nameError.classList.remove('hidden')
            }

        }
        if (count == 1) {
            if(input.value.length > 0) {
                setTimeout(() => {
                    input.setAttribute('name','phone')
                    input.setAttribute('type','number')
                },200)

                setInformation(info => {
                    return {
                        ...info,
                        family : input.value
                    }
                })

                setCount(count + 1);

                circleLtr.style.transform = 'rotate(180deg)';
                circleRtl.style.transform = 'rotate(-180deg)';

                familyError.classList.add('hidden');
                familyLabel.classList.add('hidden');
                phoneLabel.classList.remove('hidden');
            }else{
                familyError.classList.remove('hidden')
            }

        }
        if (count == 2) {
            if(input.value.length > 0) {
                setTimeout(() => {
                    input.setAttribute('name','request')
                },200)

                setInformation(info => {
                    return {
                     ...info,
                     phone : input.value
                    }
                })

                setCount(count + 1);

                circleLtr.style.transform = 'rotate(270deg)';
                circleRtl.style.transform = 'rotate(-270deg)';

                phoneError.classList.add('hidden');
                phoneLabel.classList.add('hidden');
                requestLabel.classList.remove('hidden');
            }else{
                phoneError.classList.remove('hidden')
            }

        }
        if (count == 3) {
            if (input.value.length > 0) {
                setInformation(info => {
                    return {
                     ...info,
                     request : input.value
                    }
                 })

                 setCount(count + 1);

                 input.style.display = 'none';
                 button.style.width = '95%';
                 button.style.backgroundColor = '#32cd32';
                 svg.style.stroke = '#fff';

                 requestLabel.classList.add('hidden');
                 requestError.classList.add('hidden');
                 requestSuccess.classList.remove('hidden');
            }else{
                requestError.classList.remove('hidden')
            }
            
        }

    }

    useEffect(() => {

        const handleScroll = () => {
            const section = document.getElementById('support');
            const scrollY = window.scrollY;
            const sectionTop = section.offsetTop;

            if (scrollY + window.innerHeight >= sectionTop + 100) {
                loadSupport();
            }
        }

        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })

    return (
        <section id="support" className="mt-28">
            <div className={`${props.hasContainer === 'true' ? 'wrapper mx-auto' : 'w-full'} ${props.constant ? 'support-constant' : ''} flex flex-col items-center`}>
                <div className={`title md:w-[79%] px-6 md:p-0`}>
                    <h1 className={`${Font.className} text-4xl md:text-5xl text-[#006400] mb-6 text-center md:text-start`}>
                        {
                            language == 'en' ? 'Consultation and Support' : language == 'ar' ? 'الاستشارة والدعم' : 'مشاورت اور سپورٹ'
                        }
                    </h1>
                    <p className="text-[#707070] flex justify-center md:justify-start">
                        {
                            language == 'en' ? 'Let us know what you need to help you.' : language == 'ar' ? 'أخبرنا بما تحتاجه لكي نتمكن من مساعدتك.' : 'ہمیں بتائیں کہ آپ کو کس چیز کی مدد چاہیے تاکہ ہم آپ کی مدد کر سکیں.'
                        }
                        <svg width="66" height="127" viewBox="0 0 96 157" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${language == 'en' ? '' : 'flip-horizontal'} mx-2`}>
                            <path d="M25.5 13.9998C24.9477 13.9998 24.5 14.4475 24.5 14.9998C24.5 15.552 24.9477 15.9998 25.5 15.9998V13.9998ZM28.6544 14.5369L28.4622 13.5556L28.6544 14.5369ZM51.5656 6.57668L51.881 7.52565L51.5656 6.57668ZM88.3051 5.91333L88.9497 5.14881L88.3051 5.91333ZM94.7856 21.4256L93.7874 21.3662L94.7856 21.4256ZM84.7333 33.9272L85.2276 34.7965L84.7333 33.9272ZM55.6988 53.1645L54.9917 52.4574L55.6988 53.1645ZM38.7067 91.741L37.9594 92.4055L38.7067 91.741ZM69.4251 88.1181L68.7198 87.4092L69.4251 88.1181ZM68.5066 75.7185L68.5459 76.7177L68.5066 75.7185ZM60.3933 84.9034L61.289 85.3481L60.3933 84.9034ZM52.7392 102.406L51.8347 101.979L52.7392 102.406ZM22.8883 139.656L22.3695 138.801L22.8883 139.656ZM6.25347 148.381L6.6969 149.277L6.25347 148.381ZM0.642507 149.985C0.358359 150.459 0.511924 151.073 0.985504 151.357L8.70294 155.988C9.17652 156.272 9.79078 156.118 10.0749 155.645C10.3591 155.171 10.2055 154.557 9.73193 154.273L2.87199 150.157L6.98795 143.297C7.2721 142.823 7.11854 142.209 6.64496 141.925C6.17138 141.641 5.55712 141.794 5.27297 142.268L0.642507 149.985ZM25.5 15.9998C26.6249 15.9998 27.9673 15.6905 28.8466 15.5183L28.4622 13.5556C27.4529 13.7533 26.3751 13.9998 25.5 13.9998V15.9998ZM28.8466 15.5183C32.8173 14.7405 36.747 13.3434 40.5828 11.8492C44.4471 10.3438 48.1799 8.75569 51.881 7.52565L51.2502 5.62772C47.4856 6.87888 43.642 8.51103 39.8568 9.98556C36.0431 11.4712 32.2501 12.8136 28.4622 13.5556L28.8466 15.5183ZM51.881 7.52565C57.1531 5.77345 63.7443 3.54212 70.2496 2.77535C76.7582 2.00818 82.9809 2.7323 87.6605 6.67785L88.9497 5.14881C83.6539 0.683676 76.7574 -0.00556529 70.0155 0.789099C63.2701 1.58416 56.4793 3.88984 51.2502 5.62772L51.881 7.52565ZM87.6605 6.67785C91.7629 10.1367 94.1074 15.9901 93.7874 21.3662L95.7838 21.485C96.1388 15.5222 93.567 9.04178 88.9497 5.14881L87.6605 6.67785ZM93.7874 21.3662C93.4461 27.0995 89.2723 30.1958 84.239 33.058L85.2276 34.7965C90.2582 31.936 95.3741 28.3686 95.7838 21.485L93.7874 21.3662ZM84.239 33.058C73.9295 38.9202 63.7924 43.6566 54.9917 52.4574L56.4059 53.8716C64.9596 45.3179 74.7471 40.756 85.2276 34.7965L84.239 33.058ZM54.9917 52.4574C51.6409 55.8082 44.8076 62.7018 40.0766 70.2024C37.7127 73.9502 35.8264 77.9215 35.197 81.7318C34.562 85.5757 35.2037 89.3063 37.9594 92.4055L39.454 91.0765C37.191 88.5315 36.6087 85.4567 37.1702 82.0577C37.7373 78.6251 39.4682 74.916 41.7682 71.2694C46.3651 63.9814 53.0465 57.231 56.4059 53.8716L54.9917 52.4574ZM37.9594 92.4055C42.1673 97.1378 48.5968 97.8825 54.6313 96.695C60.675 95.5057 66.6026 92.3371 70.1304 88.827L68.7198 87.4092C65.4972 90.6157 59.9372 93.6126 54.2451 94.7327C48.5438 95.8546 42.9893 95.0524 39.454 91.0765L37.9594 92.4055ZM70.1304 88.827C70.8839 88.0773 71.6767 86.8527 72.3252 85.4931C72.9794 84.1217 73.5293 82.5239 73.7426 80.988C73.9521 79.4797 73.8592 77.8623 73.0178 76.6134C72.1273 75.2917 70.5801 74.6362 68.4673 74.7193L68.5459 76.7177C70.1993 76.6527 70.9705 77.1542 71.3591 77.7309C71.7968 78.3806 71.9435 79.4032 71.7616 80.7129C71.5835 81.9949 71.111 83.3931 70.5201 84.6321C69.9234 85.883 69.2484 86.8832 68.7198 87.4092L70.1304 88.827ZM68.4673 74.7193C65.9505 74.8182 64.0318 76.7643 62.6599 78.7163C61.2565 80.7131 60.1893 83.0657 59.4977 84.4586L61.289 85.3481C62.026 83.864 63.0052 81.7032 64.2962 79.8663C65.6187 77.9847 67.0423 76.7768 68.5459 76.7177L68.4673 74.7193ZM59.4977 84.4586C58.0658 87.342 56.8194 90.3069 55.5993 93.2498C54.3753 96.2019 53.1796 99.1272 51.8347 101.979L53.6437 102.832C55.0135 99.9272 56.2299 96.9508 57.4468 94.0158C58.6675 91.0715 59.8908 88.1638 61.289 85.3481L59.4977 84.4586ZM51.8347 101.979C45.0349 116.399 36.0586 130.493 22.3695 138.801L23.4071 140.51C37.6076 131.892 46.7934 117.359 53.6437 102.832L51.8347 101.979ZM22.3695 138.801C17.109 141.993 11.3976 144.72 5.81003 147.485L6.6969 149.277C12.2435 146.533 18.0538 143.759 23.4071 140.51L22.3695 138.801ZM5.81003 147.485C2.99882 148.876 3.11832 149.064 1.25746 149.53L1.74254 151.47C3.88168 150.935 4.16154 150.532 6.6969 149.277L5.81003 147.485Z" fill="#ccc"/>
                        </svg>
                    </p>
                </div>
                <div className="w-full flex flex-wrap items-center md:mt-[-115px]">
                    <div className="w-full md:w-7/12 mb-[50px] md:mb-0">
                        <div className="form-wrapper md:overflow-hidden">
                            
                            <form action="" className={`flex items-center w-full ${language == 'en' ? 'lang-en' : 'lang-other'} `}>
                                <div className={`circle-wrapper-ltr hidden ${language == 'en' ? 'md:flex' : 'md:hidden'} relative justify-center items-center`}>
                                    <div className="circle-number absolute w-[20px] h-[20px] md:w-[35px] md:h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center right-[-10%] md:right-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            1
                                        </span>
                                    </div>
                                    <div className="circle-number absolute w-[20px] h-[20px] md:w-[35px] md:h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center top-[-10%] md:top-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            2
                                        </span>
                                    </div>
                                    <div className="circle-number absolute w-[20px] h-[20px] md:w-[35px] md:h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center left-[-10%] md:left-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            3
                                        </span>
                                    </div>
                                    <div className="circle-number absolute w-[20px] h-[20px] md:w-[35px] md:h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center bottom-[-10%] md:bottom-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            4
                                        </span>
                                    </div>
                                </div>
                                <div className={`circle-wrapper-rtl hidden ${language == 'en' ? 'md:hidden' : 'md:flex'} relative justify-center items-center`}>
                                    <div className="circle-number absolute w-[20px] h-[20px] md:w-[35px] md:h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center left-[-10%] md:left-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            1
                                        </span>
                                    </div>
                                    <div className="circle-number absolute w-[35px] h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center top-[-10%] md:top-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            2
                                        </span>
                                    </div>
                                    <div className="circle-number absolute w-[35px] h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center right-[-10%] md:right-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            3
                                        </span>
                                    </div>
                                    <div className="circle-number absolute w-[35px] h-[35px] rounded-full text-center bg-[#32CD32] flex justify-center items-center bottom-[-10%] md:bottom-[-8%]">
                                        <span className="text-lg font-black text-white">
                                            4
                                        </span>
                                    </div>
                                </div>
                                <div className="input-g flex flex-col px-5">
                                    <div className="flex flex-wrap items-center justify-center">
                                        <div className="input-wrapper mx-2 md:mx-3 w-[80%] md:w-[75%] mb-3 relative flex justify-center">
                                            <input type="text" name="name" id="support-input" className="text-[#757575] rounded-lg p-2 border-2 border-[#b2b2b2] bg-transparent outline-0 w-full" required/>

                                            <div className="input-label absolute bottom-[32px] left-0 right-0">
                                                <label htmlFor="support-input" className="text-[#757575] text-sm cursor-pointer">
                                                    <span className="name">
                                                        {language == 'en' ? 'first name' : language == 'ar' ? 'الاسم الأول' : 'پہلا نام'}
                                                    </span>
                                                    <span className="family hidden">
                                                        {language == 'en' ? 'last name' : language == 'ar' ? 'اسم العائلة' : 'آخری نام'}
                                                    </span>
                                                    <span className="phone hidden">
                                                        {language == 'en' ? 'phone number' : language == 'ar' ? 'رقم الهاتف' : 'فون نمبر'}
                                                    </span>
                                                    <span className="request hidden">
                                                        {language == 'en' ? 'request' : language == 'ar' ? 'طلبية' : 'درخواست'}
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="error-success text-center absolute top-[60px] select-none">
                                                <div className="name-error text-red-500 text-sm font-bold hidden">
                                                    {language == 'en' ? 'please enter your name' : language == 'ar' ? 'من فضلك ادخل اسمك' : 'براہ کرم اپنا نام درج کریں'}
                                                </div>
                                                <div className="family-error text-red-500 text-sm font-bold hidden">
                                                    {language == 'en' ? 'please enter your last name' : language == 'ar' ? 'من فضلك أدخل اسم العائلة' : 'براہ کرم اپنا آخری نام درج کریں'}
                                                </div>
                                                <div className="phone-error text-red-500 text-sm font-bold hidden">
                                                    {language == 'en' ? 'please enter your phone number' : language == 'ar' ? 'من فضلك أدخل رقم الهاتف' : 'براہ کرم اپنا فون نمبر درج کریں'}
                                                </div>
                                                <div className="request-error text-red-500 text-sm font-bold hidden">
                                                    {language == 'en' ? 'please enter your request' : language == 'ar' ? 'من فضلك أدخل طلبك' : 'براہ کرم اپنی درخواست درج کریں'}
                                                </div>
                                                <div className="request-success text-[#32cd32] text-sm font-bold mt-2 hidden ">
                                                    {language == 'en' ? 'your request has been sent. our experts will call you soon' : language == 'ar' ? 'تم إرسال طلبك. سيتصل بك خبراؤنا قريبًا.' : 'آپ کی درخواست بھیج دی گئی ہے۔ ہمارے ماہرین جلد ہی آپ کو کال کریں گے۔'}
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" onClick={e => handleSubmit(e)} className="border-2 border-[#32CD32] rounded-lg p-2 flex items-center justify-center md:w-[44px] md:h-[44px] duration-300 hover:bg-[#32cd32] mb-3">
                                            <CheckIcon />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 px-4">
                        <div className={`image relative flex overflow-hidden ${language == 'en' ? 'justify-end' : 'lang-other justify-start'}`}>
                            <img src="/img/desk.png" alt="" className="desk-image"/>
                            <img src="/img/boy.png" alt="" className="boy-image absolute right-0 bottom-0"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;