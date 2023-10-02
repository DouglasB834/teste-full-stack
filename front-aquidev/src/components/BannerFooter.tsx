import React from "react";
import { Button } from "./Button";

export const BannerFooter = () => {
  return (
    <div
      id="sing"
      className="flex items-center justify-center text-textLinght w-full h-[330px]  container"
    >
      <div className="imgbgMd w-full h-full flex justify-center items-center   rounded-md">
        <div className=" text-center  ">
          <h3 className=" text-[1.1rem] sm:text-2xl font-semibold mb-4 text-white">
            First order get 5% off discount
          </h3>
        </div>
      </div>
    </div>
  );
};
