import Image from "next/image";
import React, { useEffect, useState } from "react";
import { QuestionMark } from "../Icons";
import { loadFaq, loadQuestions } from "@/app/utils/script";
import useStore from "@/app/store/Store";
import { getFaq } from "@/app/server/api/apiRoutes";

const Questions = () => {

    const {language} = useStore();
    const [questions,setQuestions] = useState([]);

    useEffect(() => {
        getFaq().then(data => {
            setTimeout(() => {
                setQuestions(data)
                console.log(data);
            }, 4000)
        })
    }, [])

    useEffect(() => {
        const questions = document.querySelector('#questions');

        const handleScroll = () => {
            const sectionTop = questions.offsetTop;
            const scrollY = window.scrollY;
    
            if (scrollY + window.innerHeight >= sectionTop + 200) {
                loadQuestions();
                loadFaq();
            }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    useEffect(() => {
        const answers = document.querySelectorAll('#questions .faq-wrapper .answer .top');

        const handleClick = (e) => {
            console.log('clicked');
            const current = e.currentTarget;
            const svgElement = current.querySelector('svg');
            const parent = current.closest('.answer');
            const titleElement = current.querySelector('.title');
            const contentElement = current.nextElementSibling;

            if (svgElement) {
                svgElement.classList.toggle('rotate-180');
            }

            if (contentElement) {
                if (contentElement.style.visibility === 'hidden' || contentElement.style.visibility === '') {
                    contentElement.style.visibility = 'visible';
                    contentElement.style.opacity = 1;
                } else {
                    contentElement.style.opacity = 0;
                    contentElement.style.visibility = 'hidden';
                }
            }

            parent.classList.toggle('h-100');
        };

        answers.forEach(item => {
            item.addEventListener('click', handleClick);
        });

        return () => {
            answers.forEach(item => {
                item.removeEventListener('click', handleClick)
            })
        }
    }, [questions])


    return (
        <section id="questions" className="mt-20 wrapper mx-auto">
            <div className="flex flex-wrap justify-between">
                <div className="first w-[100%] sm:w-6/12">
                    <div className={`engineer-wrapper mb-4 sm:mb-0 h-[450px] sm:h-[440px] md:h-[550px] w-full rounded-tr-[323px] /sm:rounded-tr-[20px] /sm:rounded-br-[20px] bg-[green] flex justify-end sticky top-[50px] ${language == 'en' ? '' : 'lang-other'}`}>
                        <div className="engineer-inner relative w-[85%] sm:w-[77%] md:w-[70%] h-full z-10 ">
                            <img src="/img/engineer.png" className="w-full h-full block /sm:rounded-br-[20px]"/>
                        </div>
                        <div className="question-mark px-3 sm:px-0 md:px-10 absolute w-full h-full top-0 left-0 bottom-0 right-0 flex items-center">
                            <QuestionMark className="h-[310px] md:h-[370px]"/>
                        </div>
                    </div>
                </div>
                <div className="last w-full sm:w-6/12 px-6">
                    <div className="flex flex-wrap items-center">
                        {
                            questions.length > 0 && questions.map(item => (
                                <div className="w-full lg:w-1/2 px-2 mb-3" key={item.id}>
                                    <div className="faq-wrapper rounded-xl border-2 border-[#c4c4c4] overflow-hidden relative">
                                        <div className="content pt-3 px-4 pb-[75px]">
                                            <div className="title">
                                                <h1 className="text-zinc-700 text-2xl font-bold">
                                                    #{item.id}
                                                </h1>
                                            </div>
                                            <div className="text">
                                                <p className="text-zinc-700">
                                                    {
                                                        language == 'en' ? item.translations.en.question : language == 'ar' ? item.translations.ar.question : item.translations.ur.question
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="answer w-full p-2 text-center bg-[#FFD700] text-[#4e4e4e] absolute bottom-0">
                                            <div className="top flex items-center justify-center cursor-pointer">
                                                <span className="title mx-2">
                                                    {
                                                        language == 'en' ? 'answer' : language == 'ar' ? 'الإجابة' : 'جواب'
                                                    }
                                                </span>
                                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.62658 1.29761C6.39743 0.569342 7.6027 0.569342 8.37355 1.29761L12.8706 5.5462C14.1858 6.78874 13.3064 9 11.4971 9H2.50303C0.693706 9 -0.185655 6.78874 1.12955 5.5462L5.62658 1.29761Z" fill="#666666"/>
                                                </svg>
                                            </div>
                                            <div className="bottom text-start">
                                                {
                                                    language == 'en' ? item.translations.en.answer : language == 'ar' ? item.translations.ar.answer : item.translations.ur.answer
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions;