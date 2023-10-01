import { dataWeServe } from "@/utils/dataWeServe";
import Image from "next/image";
import React from "react";
import { SubTitle } from "./SubTitle";

export const WeServe = () => {
  return (
    <div className="container flex flex-col gap-[2rem]">
      <SubTitle
        title="We Serve"
        subtitle="What We Serve"
        description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety
        Until It Is In Your Hands."
      />

      <ul className="flex flex-wrap  justify-around">
        {dataWeServe.map((items, i) => (
          <li
            key={i}
            className="flex flex-col justify-center items-center p-2 mt-4 sm:w-[240px] sm:h-[316px] rounded bg-primaryColorBg "
          >
            <figure className=" w-[140px] sm:w-[165px]">
              <Image src={items.img} alt="image card" />
            </figure>
            <h4 className="text-lg font-bold mt-4 ">{items.title} </h4>
            <p className="text-sm mt-2 tracking-[0.6px] w-[20ch] text-center ">
              {items.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
