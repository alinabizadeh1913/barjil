import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import { StarIcon } from "../Icons";
import Link from "next/link";
import useStore from "@/app/store/Store";
import Image from "next/image";
import Rating from "./Rating";
import axios from "axios";

const Font = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const Feedback = ({ type, number, comments }) => {
  const { language } = useStore();

  function formatDate(dateString) {
    const options = { weekday: "long", day: "numeric", month: "long" };
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  const [ratingValue, setRatingValue] = useState(0);
  const [information, setInformation] = useState({
    name: "",
    family: "",
    request: "",
    score: 0,
  });

  const handleRatingChange = (newValue) => {
    setRatingValue(newValue);
    setInformation((prevState) => ({
      ...prevState,
      score: newValue,
    }));
    console.log("Selected Rating:", newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    type == "article"
      ? axios
          .post(process.env.NEXT_PUBLIC_BASE_URL + "blog/comments/", {
            first_name: information.name,
            last_name: information.family,
            text: information.request,
            rating: information.score,
            article: number,
          })
          .catch((err) => {
            console.log(err);
          })
      : type == "product" ? axios
          .post(process.env.NEXT_PUBLIC_BASE_URL + "products/comments/", {
            first_name: information.name,
            last_name: information.family,
            text: information.request,
            rating: information.score,
            product: number,
          })
          .catch((err) => {
            console.log(err);
          }) : null;
    setInformation((prevState) => ({
      ...prevState,
      name: "",
      family: "",
      request: "",
    }));
    setRatingValue(0);
  };

  return (
    <section id="feedback" className="mt-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:px-6">
          <div className="w-full md:w-6/12 px-3 mb-24 md:mb-0">
            {comments?.map(
              (item, index) =>
                item.is_confirmed && (
                  <div
                    className="feedback-wrapper flex flex-wrap items-center border-2 border-[#b4b4b4] rounded-lg p-3 mb-3"
                    key={index}
                  >
                    <div className="image">
                      <Image
                        src="/img/not-image.svg"
                        alt="person"
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                    <div className="content">
                      <div className="flex flex-wrap justify-between">
                        <p
                          className={`${Font.className} text-[#5e5e5e] font-black text-xl`}
                        >
                          {item.first_name} {item.last_name}
                        </p>
                        <p className="text-[#676767] flex items-center">
                          {Array.from({ length: item.rating }, (_, index) => (
                            <StarIcon key={index} />
                          ))}
                        </p>
                      </div>
                      <div className="date mt-2">
                        <p className="text-sm text-[#676767]">
                          {(() => {
                            const dateCreated = item.date_created;
                            return dateCreated ? formatDate(dateCreated) : "";
                          })()}
                        </p>
                      </div>
                      <div className="text text-[#676767] my-2">
                        {item.text}
                      </div>
                    </div>
                  </div>
                )
            )}
            {comments?.length === 0 && (
              <div className="w-full">
                <h1 className="text-center text-[20px] text-[#666666] select-none">
                  {language == "en"
                    ? "No comments have been submitted"
                    : language == "ar"
                    ? "لم يتم تقديم أي تعليقات"
                    : "کچھ تبصرے جمع نہیں ہوئے ہیں"}
                </h1>
              </div>
            )}
          </div>
          <div className="w-full md:w-6/12 px-3 relative">
            <div className="form-title flex items-center px-6 absolute top-[-14%] left-0 w-full ">
              <div className="line w-[25%] xl:w-[30%] h-[2px] bg-[#ccc]"></div>
              <h1
                className={`${Font.className} text-xl  md:text-[22px] lg:text-2xl text-[#4A4A4A] w-[50%] xl:w-[40%] text-center`}
              >
                {language == "en"
                  ? "Send Feedback"
                  : language == "ar"
                  ? "إرسال التعليقات"
                  : "فیڈبیک بھیجیں"}
              </h1>
              <div className="line w-[25%] xl:w-[30%] h-[2px] bg-[#ccc]"></div>
            </div>
            <div className="form-wrapper w-full">
              <form action="" className="w-full flex flex-wrap">
                <div className="w-1/2 px-3 mb-3">
                  <input
                    type="text"
                    name="name"
                    className="w-full text-[#767676] outline-0 p-4 border-2 border-[#ccc] bg-transparent rounded-lg"
                    value={information.name}
                    onInput={(e) => {
                      const { value } = e.currentTarget;
                      setInformation((prevState) => ({
                        ...prevState,
                        name: value,
                      }));
                    }}
                    placeholder={
                      language == "en"
                        ? "first name"
                        : language == "ar"
                        ? "الاسم الأول"
                        : "پہلا نام"
                    }
                  />
                </div>
                <div className="w-1/2 px-3 mb-3">
                  <input
                    type="text"
                    name="family"
                    value={information.family}
                    className="w-full text-[#767676] outline-0 p-4 border-2 border-[#ccc] bg-transparent rounded-lg"
                    onInput={(e) => {
                      const { value } = e.currentTarget;
                      setInformation((prevState) => ({
                        ...prevState,
                        family: value,
                      }));
                    }}
                    placeholder={
                      language == "en"
                        ? "last name"
                        : language == "ar"
                        ? "اسم العائلة"
                        : "آخری نام"
                    }
                  />
                </div>
                <div className="w-full px-3 mb-3">
                  <textarea
                    name="feedback"
                    id=""
                    cols="30"
                    rows="10"
                    className="w-full text-[#767676] outline-0 p-4 border-2 border-[#ccc] min-h-[150px] h-[150px] max-h-[300px] bg-transparent rounded-lg"
                    value={information.request}
                    onInput={(e) => {
                      const { value } = e.currentTarget;
                      setInformation((prevState) => ({
                        ...prevState,
                        request: value,
                      }));
                    }}
                    placeholder={
                      language == "en"
                        ? "Share your idea with us ..."
                        : language == "ar"
                        ? "شارك فكرتك معنا ..."
                        : "اپنا خیال ہمارے ساتھ شیئر کریں ..."
                    }
                  ></textarea>
                </div>
                <div className="w-full px-3 mb-3">
                  <div className="flex justify-between p-4 border-2 border-[#ccc] bg-transparent rounded-lg">
                    <span className="text-[#a3a3a3] cursor-default">
                      {language == "en"
                        ? "Submit Your Rate!"
                        : language == "ar"
                        ? "قدم تقييمك!"
                        : "اپنا ریٹ بھیجیں!"}
                    </span>
                    <div className="rate flex">
                      <Rating
                        value={ratingValue}
                        onChange={handleRatingChange}
                        precision={1}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 mt-3">
                  <button
                    type="submit"
                    className="link w-full text-center text-lg md:text-xl p-4 rounded-lg text-white"
                    onClick={handleSubmit}
                  >
                    {language == "en"
                      ? "Submit Feedback"
                      : language == "ar"
                      ? "تقديم التعليقات"
                      : "فیڈبیک جمع کرائیں"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
