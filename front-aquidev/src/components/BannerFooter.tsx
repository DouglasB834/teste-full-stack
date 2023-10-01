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
            Join our menber and get discount up to 50%
          </h3>
          <Button text="Get our order" />
        </div>
      </div>
    </div>
  );
};
