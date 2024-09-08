import React from "react";

const ArticleBanner = (props) => {
    return (
        <section id="article-banner" className="w-full h-[85vh]" style={{background : `url(${props.background || '/img/article-card.jpg'})`}}></section>
    )
}

export default ArticleBanner;