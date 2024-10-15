import React from "react";

const ArticleBanner = ({ article }) => {
  return (
    <section
      id="article-banner"
      className="w-full h-[85vh]"
      style={{ background: `url(${article?.banner})` }}
    ></section>
  );
};

export default ArticleBanner;
