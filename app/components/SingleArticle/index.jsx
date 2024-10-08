import React from "react";
import Link from "next/link";
import { CategoryIcon, LikeIcon, RightIcon2, RightIcon3, ShareIcon } from "../Icons";
import { Montserrat } from 'next/font/google';
import Feedback from "../Feedback";
import ArticleCard from "../Articles/ArticleCard";
import useStore from "@/app/store/Store";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Font = Montserrat({
    subsets : ['latin'],
    weight : ['900']
})


const SingleArticleItems = (props) => {

    const {language} = useStore();



    return (
        <section id="single-article-items" className="px-3 md:px-10">
            <div className="breadcrumb container mx-auto mt-4 mb-6 flex items-center">
                <Link href="/" className="text-[#7b7b7b]">
                    Home
                </Link>
                <RightIcon2 className={`mx-2 ${language == 'en' ? '' : 'rotate-180'}`} fill="#7b7b7b" width="8" height="16"/>
                <Link href="/articles" className="text-[#7b7b7b]">
                    Articles
                </Link>
                <RightIcon2 className={`mx-2 ${language == 'en' ? '' : 'rotate-180'}`} fill="#7b7b7b" width="8" height="16"/>
                <span className="text-[#494949]">
                    {props.currentArticle}
                </span>
            </div>

            <div className="title container mx-auto flex items-center">
                <div className="w-full md:w-8/12">
                    <h1 className={`text-[#333333] text-6xl ${Font.className}`}>
                        This is the {props.currentArticle}
                    </h1>
                </div>
                <div className="w-full hidden md:flex md:w-4/12 icons justify-end">
                    <LikeIcon stroke="#7b7b7b" width="40" className="cursor-pointer mx-2"/>
                    <ShareIcon stroke="#7b7b7b" width="40" className="cursor-pointer mx-2"/>
                </div>
            </div>

            <div className="container mx-auto flex flex-wrap mt-6 relative justify-center">
                <div className="line1 absolute h-[2px] bottom-[-25px] w-full bg-[#c9c9c9] hidden md:block"></div>
                <div className="line2 absolute h-[2px] bottom-[-20px] w-[95%] bg-[#d3d3d3] hidden md:block"></div>
                <div className="line3 absolute h-[2px] bottom-[-15px] w-[90%] bg-[#D9D9D9] hidden md:block"></div>
                <div className="content-wrapper w-full md:w-8/12 px-2">
                    <div className="content-inner">
                        <div className="information flex items-center mb-12">
                            <div className="image w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
                                <img src="/img/person3.jpg" alt="" />
                            </div>
                            <p className="text-xs md:text-base text-[#676767] mx-2 md:mx-4">
                                Engineer millow tomber
                            </p>
                            <div className="dot w-[6px] h-[6px] bg-[#a8a8a8] rounded-full"></div>
                            <div className="text-xs md:text-base date text-[#676767] mx-2 md:mx-4">
                                Thursday, 5 May
                            </div>
                        </div>

                        <div className="text">
                            <p className="text-[#676767] my-4">
                                Magni vel, modi rerum quia laboriosam eligendi? Dolores eveniet esse ut illo odio, assumenda debitis rerum. Eveniet, voluptates, vero exercitationem explicabo veritatis in et fugiat consectetur deleniti voluptate sapiente sunt debitis omnis facere soluta. Reprehenderit molestias in necessitatibus perferendis nam enim distinctio.
                            </p>
                            <p className="text-[#676767] my-4">
                                sit amet consectetur adipisicing elit. Maxime inventore eius ab dicta consequuntur similique blanditiis est, dolores atque velit incidunt vero repellendus amet odio expedita cupiditate dolore perspiciatis enim sint totam tenetur corporis! Corporis expedita odio, omnis neque, ipsum minima excepturi non consequatur alias voluptas maxime eius quia, ad dolor possimus veritatis deserunt blanditiis earum nobis quisquam voluptate. Ullam soluta officiis cumque sunt iste ipsum ratione vero molestiae saepe accusamus consequatur quis expedita quo quia, aspernatur voluptate id laborum ducimus veniam aliquam amet, corrupti velit maxime? Distinctio ipsum, repellendus illo sunt ipsam ipsa voluptas provident expedita, magni maxime sit ducimus, minima architecto? Eius impedit vitae quasi minima, harum dolorum laborum cumque et porro! Magni veniam beatae sapiente et ad, error obcaecati harum aliquid neque eaque saepe provident. Eos veniam dignissimos laborum? Corrupti voluptatum officiis praesentium, harum velit aperiam ipsa, cumque eveniet ipsam voluptates tenetur hic aspernatur sapiente. Consequuntur, corporis quis? Ipsum ducimus placeat veritatis eligendi error est officia voluptatum repellat mollitia vel nisi, nostrum id. Odit animi excepturi similique itaque beatae pariatur est quidem nobis, natus quia repudiandae debitis illum temporibus. Explicabo quam, sint magni cupiditate deleniti quo voluptatum quia odit culpa, iste voluptate commodi, possimus deserunt porro repellendus.
                            </p>
                            <p className="text-[#676767] my-4">
                                consectetur adipisicing elit. Quisquam mollitia est numquam laboriosam, fugiat necessitatibus culpa nesciunt dolore illo modi tenetur inventore deserunt dicta iste maxime ipsam voluptas voluptatum veritatis rerum repellat ullam provident, dolorem facilis? Inventore est illo, ipsum voluptatibus eligendi sed ipsa alias perspiciatis suscipit tempora fugit vero voluptates maxime rerum laboriosam adipisci, ducimus itaque dicta excepturi dolorem impedit atque repudiandae illum. Debitis, illum quae. Quae mollitia neque quia repudiandae quaerat recusandae quasi tempore corporis ratione vitae aut quam praesentium at ducimus est magnam vel aliquam perspiciatis veritatis exercitationem, voluptate nemo et dignissimos? Ullam quasi accusantium odio praesentium assumenda vero reiciendis! Sint cupiditate reprehenderit perspiciatis, aliquid distinctio, fugit molestias dolor assumenda fuga nisi, quia voluptatum expedita blanditiis commodi eius accusamus nemo accusantium libero. Quo nisi eos molestias velit, maxime explicabo! Quos corporis, amet vitae quaerat repudiandae culpa exercitationem soluta. Fugiat corrupti velit distinctio debitis quae incidunt consectetur nulla.
                            </p>
                        </div>

                        <div className="information flex justify-between items-center py-6 border-t-2 border-t-[#D9D9D9]">
                            <div className="first flex items-center">
                                <div className="image w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden">
                                    <img src="/img/person3.jpg" alt="" />
                                </div>
                                <p className="text-xs md:text-base text-[#676767] mx-2 md:mx-4">
                                    Engineer millow tomber
                                </p>
                                <div className="dot w-[6px] h-[6px] bg-[#a8a8a8] rounded-full"></div>
                                <div className="text-xs md:text-base date text-[#676767] mx-2 md:mx-4">
                                    Thursday, 5 May
                                </div>
                            </div>
                            <div className="last flex justify-center items-center">
                                <LikeIcon stroke="#7b7b7b" width="30" className="cursor-pointer mx-1"/>
                                <ShareIcon stroke="#7b7b7b" width="30" className="cursor-pointer mx-1"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-wrapper w-full md:w-4/12 px-2">
                    <div className="sidebar-inner sticky top-[20%] border-2 border-[#b2b2b2] py-3 px-6 rounded-lg">
                        <h1 className="${Font.className} title text-[#666666] text-[22px] font-black pb-3 border-b border-[#b9b9b9]">
                            {
                                language == 'en' ? 'related articles' : language == 'ar' ? 'المقالات ذات الصلة' : 'متعلقہ مضامین'
                            }
                        </h1>

                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/product-card-2.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 1
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/product-card-3.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 2
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/article-card.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 3
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 border-b border-[#b9b9b9] flex items-center">
                            <div className="image">
                                <img src="/img/minerals.jpg" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 4
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="top-article py-2 flex items-center">
                            <div className="image">
                                <img src="/img/product-card.png" alt="" className="w-[60px] h-[50px] rounded-lg"/>
                            </div>
                            <div className="content mx-3">
                                <h1 className="text-lg text-[#626262]">
                                    Article title 5
                                </h1>
                                <div className="category flex items-center">
                                    <CategoryIcon stroke="#626262"/>
                                    <span className="mx-2 text-[#626262]">
                                        Category
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Feedback />

            <div className="related-articles container mx-auto mt-24">
                <div className="header flex justify-between">
                    <div className="title relative flex justify-center select-none">
                        <h1 className={`${Font.className} text-[#717171] text-lg sm:text-xl md:text-2xl relative z-10`}>
                            {
                                language == 'en' ? 'Related Articles' : language == 'ar' ? 'المقالات ذات الصلة' : 'متعلقہ مضامین'
                            }
                        </h1>
                        <div className="back absolute bottom-[3px] w-[105%] h-[10px] rounded-full bg-[#FFA500]"></div>
                    </div>
                    <Link href={`${language == 'en' ? '/papers' : language == 'ar' ? '/ar/papers' : '/ur/papers'}`} className="link flex items-center">
                        <span className="text-[#32CD32] text-sm sm:text-[15px] md:text-base">
                            {
                                language == 'en' ? 'view all articles' : language == 'ar' ? 'عرض جميع المقالات' : 'تمام مضامین دیکھیں'
                            }
                        </span>
                        <RightIcon3 width="9" className={`mx-2 ${language == 'en' ? '' : 'rotate-180'}`}/>
                    </Link>
                </div>
                <div className="body mt-16">
                    <div className="slider-container" dir="ltr">
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            breakpoints={{
                                578:{
                                    slidesPerView: 1,
                                },
                                768: {
                                slidesPerView: 2,
                                },
                                1024: {
                                slidesPerView: 3,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <ArticleCard title="Article number 1"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticleCard title="Article number 2"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticleCard title="Article number 3"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticleCard title="Article number 4"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticleCard title="Article number 5"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticleCard title="Article number 6"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ArticleCard title="Article number 7"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SingleArticleItems;