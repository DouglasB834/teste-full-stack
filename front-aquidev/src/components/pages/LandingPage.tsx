"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FormLogin } from "../FormLogin";
import image1 from "../../../public/assets/image1.jpg";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "@/context/userContex";
import { FormRegister } from "../FormRegister";

export const LandingPage = () => {
  const { isLogin, setIsLogin } = useUserContext();

  return (
    <div className="flex items-center justify-center w-full h-[100%] min-h-screen  bg-primaryColorBg p-4">
      <div
        className={`w-full h-full max-w-[1200px] max-h-[780px] flex justify-center   bg-yellow-200  p-4 md:p-8 rounded-md  border border-amber-300 imgbgMd `}
      >
        <figure className="w-[40%]  hidden md:block ">
          <Image
            src={image1}
            alt="image beer"
            title="image of beer"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="w-full md:w-[60%] bg-white py-5  rounded-[1rem] sm:rounded-none ">
          <h3 className=" text-center my-2 text-xl font-bold text-amber-500">
            {isLogin
              ? "Let`s cool off your mind a little ?"
              : "nice! we're almost there"}
          </h3>
          {isLogin ? <FormLogin /> : <FormRegister />}
          <div className="flex items-center gap-1 justify-center sm:justify-start sm:ml-20 ">
            <span>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              className="text-amber-500 font-semibold hover:text-slate-700"
              title="button register"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
          {isLogin && (
            <div className="flex items-center justify-center mt-4 ">
              <button
                title="button login google"
                className="flex items-center justify-center w-[210px] gap-1 border border-amber-300 p-3 rounded-[1rem] hover:text-white  hover:bg-primary"
              >
                <FcGoogle /> Login with Google
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
