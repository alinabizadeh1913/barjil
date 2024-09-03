'use client';

import { ShowHideSideMenu } from "@/app/utils/script";

const FullScreenElem = () => {

    const ShowHideFullElem = () => {
        const fullScreenElement = document.querySelector('#full-screen');

        fullScreenElement.classList.toggle('show-hidden-activity');
    }

    return (
        <section id="full-screen" className="w-full h-[100vh] z-50 md:hidden fixed top-0 right-0 bottom-0 left-0 bg-[#00000099]" style={{backdropFilter : 'blur(10px)'}} onClick={() => {
            ShowHideSideMenu();
            ShowHideFullElem()
        }}></section>
    )
}

export default FullScreenElem;