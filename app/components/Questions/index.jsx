import Image from "next/image";
import React, { useEffect } from "react";
import { QuestionMark } from "../Icons";
import { loadFaq, loadQuestions } from "@/app/utils/script";

const Questions = () => {

    useEffect(() => {
        const questions = document.querySelector('#questions');

        const handleScroll = () => {
            const sectionTop = questions.offsetTop;
            const scrollY = window.scrollY;
    
            // مقایسه دقیق‌تر موقعیت سکشن با موقعیت اسکرول
            if (scrollY + window.innerHeight >= sectionTop + 200) {
                loadQuestions();
                loadFaq();
            }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        // پاک کردن event listener هنگام unmount کامپوننت
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    useEffect(() => {
        const answers = document.querySelectorAll('#questions .faq-wrapper .answer .top');

        const handleClick = (e) => {
            const current = e.currentTarget;
            const svgElement = current.querySelector('svg');
            const parent = current.closest('.answer');
            const titleElement = current.querySelector('.title');
            const contentElement = current.nextElementSibling;

            if (svgElement) {
                svgElement.classList.toggle('rotate-180');
            }

            if (titleElement) {
                titleElement.textContent = titleElement.textContent === 'answer' ? 'question' : 'answer'
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
    }, [])


    return (
        <section id="questions" className="mt-32">
            <div className="flex flex-wrap justify-between">
                <div className="first w-full sm:w-6/12">
                    <div className="engineer-wrapper mb-4 sm:mb-0 h-[550px] sm:h-[500px] md:h-[550px] w-full rounded-tr-[413px] bg-[green] flex justify-end sticky top-0">
                        <div className="engineer-inner relative w-[80%] h-[110%] z-10">
                            <img src="/img/engineer.png" className="w-full h-full block"/>
                        </div>
                        <div className="question-mark px-10 sm:px-0 md:px-10 absolute w-full h-full top-0 left-0 bottom-0 right-0 flex items-center">
                            <QuestionMark />
                        </div>
                    </div>
                </div>
                <div className="last w-full sm:w-6/12 px-6">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 px-2 mb-3">
                            <div className="faq-wrapper rounded-xl border-2 border-[#c4c4c4] overflow-hidden relative">
                                <div className="content pt-3 px-4 pb-[75px]">
                                    <div className="title">
                                        <h1 className="text-zinc-700 text-2xl font-bold">
                                            #1
                                        </h1>
                                    </div>
                                    <div className="text">
                                        <p className="text-zinc-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quisquam!
                                        </p>
                                    </div>
                                </div>
                                <div className="answer w-full p-2 text-center bg-[#FFD700] text-[#4e4e4e] absolute bottom-0">
                                    <div className="top flex items-center justify-center cursor-pointer">
                                        <span className="title mr-2">
                                            answer
                                        </span>
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.62658 1.29761C6.39743 0.569342 7.6027 0.569342 8.37355 1.29761L12.8706 5.5462C14.1858 6.78874 13.3064 9 11.4971 9H2.50303C0.693706 9 -0.185655 6.78874 1.12955 5.5462L5.62658 1.29761Z" fill="#666666"/>
                                        </svg>
                                    </div>
                                    <div className="bottom">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-2 mb-3">
                            <div className="faq-wrapper rounded-xl border-2 border-[#c4c4c4] overflow-hidden relative">
                                <div className="content pt-3 px-4 pb-[75px]">
                                    <div className="title">
                                        <h1 className="text-zinc-700 text-2xl font-bold">
                                            #2
                                        </h1>
                                    </div>
                                    <div className="text">
                                        <p className="text-zinc-700">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit omnis praesentium ipsam.
                                        </p>
                                    </div>
                                </div>
                                <div className="answer w-full p-2 text-center bg-[#FFD700] text-[#4e4e4e]  min-h-[40px] absolute bottom-0">
                                    <div className="top flex items-center justify-center cursor-pointer">
                                        <span className="title mx-2">
                                            answer
                                        </span>
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.62658 1.29761C6.39743 0.569342 7.6027 0.569342 8.37355 1.29761L12.8706 5.5462C14.1858 6.78874 13.3064 9 11.4971 9H2.50303C0.693706 9 -0.185655 6.78874 1.12955 5.5462L5.62658 1.29761Z" fill="#666666"/>
                                        </svg>
                                    </div>
                                    <div className="bottom">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-2 mb-3">
                            <div className="faq-wrapper rounded-xl border-2 border-[#c4c4c4] overflow-hidden relative">
                                <div className="content pt-3 px-4">
                                    <div className="title">
                                        <h1 className="text-zinc-700 text-2xl font-bold">
                                            #3
                                        </h1>
                                    </div>
                                    <div className="text">
                                        <p className="text-zinc-700 ">
                                            Lorem ipsum dolor sit amet consectetu Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit autem reprehenderit, voluptatibus quam, quas nisi facere, quo consequuntur ex libero veritatis. Corrupti, expedita. Expedita quaerat accusantium, tenetur sint error illum.r adipisicing elit. In sed exercitationem doloremque est sit perferendis?
                                        </p>
                                    </div>
                                </div>
                                <div className="answer w-full p-2 text-center bg-[#FFD700] text-[#4e4e4e]  min-h-[40px] absolute bottom-0">
                                    <div className="top flex items-center justify-center cursor-pointer">
                                        <span className="title mr-2">
                                            answer
                                        </span>
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.62658 1.29761C6.39743 0.569342 7.6027 0.569342 8.37355 1.29761L12.8706 5.5462C14.1858 6.78874 13.3064 9 11.4971 9H2.50303C0.693706 9 -0.185655 6.78874 1.12955 5.5462L5.62658 1.29761Z" fill="#666666"/>
                                        </svg>
                                    </div>
                                    <div className="bottom">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis veniam a!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-2 mb-3">
                            <div className="faq-wrapper rounded-xl border-2 border-[#c4c4c4] overflow-hidden relative">
                                <div className="content pt-3 px-4 pb-[75px]">
                                    <div className="title">
                                        <h1 className="text-zinc-700 text-2xl font-bold">
                                            #4
                                        </h1>
                                    </div>
                                    <div className="text">
                                        <p className="text-zinc-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                                <div className="answer w-full p-2 text-center bg-[#FFD700] text-[#4e4e4e]  min-h-[40px] absolute bottom-0">
                                    <div className="top flex items-center justify-center cursor-pointer">
                                        <span className="title mr-2">
                                            answer
                                        </span>
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.62658 1.29761C6.39743 0.569342 7.6027 0.569342 8.37355 1.29761L12.8706 5.5462C14.1858 6.78874 13.3064 9 11.4971 9H2.50303C0.693706 9 -0.185655 6.78874 1.12955 5.5462L5.62658 1.29761Z" fill="#666666"/>
                                        </svg>
                                    </div>
                                    <div className="bottom">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit iure, culpa ex hic ducimus tenetur!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-2 mb-3">
                            <div className="faq-wrapper rounded-xl border-2 border-[#c4c4c4] overflow-hidden relative">
                                <div className="content pt-3 px-4 pb-[75px]">
                                    <div className="title">
                                        <h1 className="text-zinc-700 text-2xl font-bold">
                                            #5
                                        </h1>
                                    </div>
                                    <div className="text">
                                        <p className="text-zinc-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate numquam distinctio mollitia quos illo, exercitationem ea
                                        </p>
                                    </div>
                                </div>
                                <div className="answer w-full p-2 text-center bg-[#FFD700] text-[#4e4e4e]  min-h-[40px] absolute bottom-0">
                                    <div className="top flex items-center justify-center cursor-pointer">
                                        <span className="title mr-2">
                                            answer
                                        </span>
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.62658 1.29761C6.39743 0.569342 7.6027 0.569342 8.37355 1.29761L12.8706 5.5462C14.1858 6.78874 13.3064 9 11.4971 9H2.50303C0.693706 9 -0.185655 6.78874 1.12955 5.5462L5.62658 1.29761Z" fill="#666666"/>
                                        </svg>
                                    </div>
                                    <div className="bottom">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo sequi unde magni autem inventore corrupti odit delectus, distinctio rem.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-2 mb-3">
                            <div className="faq-wrapper rounded-xl border-2 border-[#c4c4c4] overflow-hidden relative">
                                <div className="content pt-3 px-4 pb-[75px]">
                                    <div className="title">
                                        <h1 className="text-zinc-700 text-2xl font-bold">
                                            #6
                                        </h1>
                                    </div>
                                    <div className="text">
                                        <p className="text-zinc-700">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quisquam!
                                        </p>
                                    </div>
                                </div>
                                <div className="answer w-full p-2 text-center bg-[#FFD700] text-[#4e4e4e]  min-h-[40px] absolute bottom-0">
                                    <div className="top flex items-center justify-center cursor-pointer">
                                        <span className="title mr-2">
                                            answer
                                        </span>
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.62658 1.29761C6.39743 0.569342 7.6027 0.569342 8.37355 1.29761L12.8706 5.5462C14.1858 6.78874 13.3064 9 11.4971 9H2.50303C0.693706 9 -0.185655 6.78874 1.12955 5.5462L5.62658 1.29761Z" fill="#666666"/>
                                        </svg>
                                    </div>
                                    <div className="bottom">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis culpa excepturi! Odit, id.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions;