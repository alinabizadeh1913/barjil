import React from "react";

const Loading = () => {
    return (
        <section id="loading" className="w-full h-screen flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-[#111a0fe0]">
            <img src="/img/spinner.svg" alt="" />
        </section>
    )
}

export default Loading;