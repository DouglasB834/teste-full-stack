import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import imgHero from "../../public/assets/imgHeroBanner.png";
import imgHbanner from "../../public/assets/imgHero.png";
import Ellipse4 from "../../public/assets/Ellipse4.png";
import Ellipse5 from "../../public/assets/Ellipse5.png";
import Ellipse6 from "../../public/assets/Ellipse6.png";
import Ellipse7 from "../../public/assets/Ellipse7.png";
export const Banner = () => {
  return (
    <section
      id="home"
      className="container w-full gap-[2rem] h-[600px] relative flex flex-col sm:flex-row sm:justify-between pt-4 "
    >
      <div className=" w-full flex flex-col gap-4 justify-center  items-center sm:items-start ">
        <h2 className="text-2xl  md:text-5xl font-bold w-[15ch]">
          The Fastest In Delivery Your
          <span className="text-amber-500"> Beer</span>
        </h2>
        <p className="text-sm md:text-base w-[35ch]  md:w-[70%]  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet.
        </p>
        <a
          href="#menu"
          aria-label="click to get started"
          className="w-[122px] h-[39px] font-bold bg-primary rounded-[1rem] hover:bg-slate-800 border-2 hover:border-amber-500  hover:text-amber-500 flex justify-center items-center "
        >
          get started
        </a>
      </div>

      <div className="w-full flex  relative  items-center ">
        <figure className="m-auto h-[395px] sm:h-auto  sm:w-full flex sm:justify-end  ">
          <Image
            loading="lazy"
            className=" sm:max-w-full max-w-[100%] "
            src={imgHbanner}
            alt="image of our food for starters"
            about="image of our food for starters"
            title="image of our food for starters"
          />
        </figure>
        <Image
          src={Ellipse4}
          alt="bols"
          className="absolute left-0 bottom-[3rem]  z-[-1]"
        />
        <Image
          src={Ellipse5}
          alt="bols"
          className="absolute left-[22%] top-[39%]  z-[-1]"
        />
        <Image
          src={Ellipse6}
          alt="bols"
          className="absolute right-4 top-[44%] z-[-1]"
        />
        <Image
          src={Ellipse7}
          alt="bols"
          className="absolute left-[4rem] top-4 z-[-1]"
        />
      </div>
    </section>
  );
};
