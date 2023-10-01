"use client";
import React from "react";
import Image from "next/image";
import feedback1 from "../../public/assets/feedback1.jpg";
import feedback2 from "../../public/assets/feedback2.jpg";
import feedback3 from "../../public/assets/feedback3.jpg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { dataFeedBack } from "@/utils/dataFeedback";

export const FeedBack = () => {
  return (
    <>
      <section
        id="about"
        className="container flex flex-col gap-4 justify-center items-center lg:flex-row "
      >
        <div className="sm:w-[400px]  md:max-w-[450px] min-w-[245px] grid grid-cols-4 gap-1">
          <Image
            src={feedback1}
            alt="imagens com pratos de comida na messa"
            className="col-span-4 "
          />
          <Image
            src={feedback2}
            alt="foto de yakisoba de frango "
            className="col-span-2 w-full h-[200px]"
          />
          <Image
            src={feedback3}
            alt="foto mesa com varios tipos de comida"
            className="col-span-2 w-full h-[200px]"
          />
        </div>

        <div className="flex flex-col gap-8 p-4">
          <div>
            <p className="text-amber-500 font-bold text-[1.5rem] sm:text-[1.1rem] mb-4">
              What the say
            </p>
            <h3 className="  text-2xl sm:text-3xl font-bold tracking-[1px] sm:w-[24ch] ]  md:text-4xl  ">
              What Our customers Say About Us
            </h3>
          </div>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper max-w-[320px] sm:max-w-[520px] 
            lg:max-w-[650px] "
          >
            {dataFeedBack.map((pessoa, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[410px] lg:max-w-[500px] bg-colorCardbg rounded-sm cursor-grab p-4"
              >
                <figure className="flex gap-4 ">
                  <Image
                    src={pessoa.image}
                    alt="avatar"
                    title="avatar"
                    className="rounded-full w-[50px] h-[50px]"
                  />
                  <div>
                    <figcaption className="font-bold  tracking-[.8px] ">
                      {pessoa.name}
                    </figcaption>
                    <div className="flex gap-1 mt-1 text-2xl">
                      {Array.from({ length: 5 }, (_, i) => (
                        <p key={i}>
                          {i < pessoa.stars ? (
                            <span className="bg-amber-500 text-amber-500">
                              <AiFillStar />
                            </span>
                          ) : (
                            <AiOutlineStar />
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </figure>
                <p className="mt-4 text-gray-800">{pessoa.feedback}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
