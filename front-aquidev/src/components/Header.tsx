"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { IoCloseSharp } from "react-icons/Io5";
import { RiBeerFill } from "react-icons/ri";
import { useState } from "react";
import { dataOptionMenu } from "@/utils/dataMenu";
import { useUserContext } from "@/context/userContex";
import pessoa1 from "../../public/assets/pessoa1.jpg";
import Cookie from "js-cookie";

export const Header = () => {
  const { user, router } = useUserContext();

  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleExit = () => {
    Cookie.remove("user_token");
    router.push("/");
  };

  return (
    <header className="w-full  fixed z-10  h-[80px] flex gap-4 justify-between items-center  bg-primaryColorBg text-black px-4 ">
      <a href="/home" className="flex items-center ">
        <p>BeerDrkins</p>
        <Image src={logo} alt="Logo" title="logo" width={70} height={70} />
      </a>

      {openMenu && (
        <nav className="fixed z-10 md:hidden right-0  top-14  w-[140px]   bg-primary flex flex-col items-center rounded-l-[1rem]">
          <ul className="flex flex-col  w-[100%]  text-black text-[.95rem] font-bold  items-center ">
            {dataOptionMenu.map((items, i) => (
              <li
                key={i}
                className="flex items-center justify-center w-full h-[39px] hover:bg-amber-400 last:border-b-[1px] border-b-primaryColorBg"
              >
                <a
                  className="hover:text-white transition-all"
                  href={`#${items.id}`}
                  onClick={handleMenu}
                >
                  {items.title}
                </a>
              </li>
            ))}
          </ul>
          <div className=" flex flex-col gap-1  justify-center items-center">
            <div>
              <p className="text-amber-700 font-semibold w-full  max-w-[15ch] overflow-hidden truncate ">
                Hi {user?.name}
              </p>
            </div>
            <button
              className="text-[1rem] text-black font-semibold hover:text-white "
              onClick={handleExit}
            >
              Exit ?
            </button>
          </div>
        </nav>
      )}

      <nav className="hidden md:flex w-full ">
        <ul className="flex w-[100%] gap-6 items-center justify-center text-gray-500  text-[.95rem] font-bold">
          {dataOptionMenu.map((items, i) => (
            <li key={i}>
              <a className="hover:text-black" href={`#${items.id}`}>
                {items.title}
              </a>
            </li>
          ))}
        </ul>
        <div className=" flex gap-2  justify-end items-center w-[200px] ">
          <p className="text-amber-700 font-semibold  max-w-[25ch] overflow-hidden truncate">
            Hi {user?.name}
          </p>
          <details className="relative cursor-pointer h-full">
            <summary className=" flex  ">
              <Image
                src={user?.avatar ? user?.avatar : pessoa1}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full w-[40px] h-[40px] "
              />
            </summary>
            <button
              className="absolute right-2   hover:text-amber-700 font-semibold"
              onClick={handleExit}
            >
              exit
            </button>
          </details>
        </div>
      </nav>

      <button
        aria-label="button menu"
        className="md:hidden text-[2.1rem] text-amber-600 hover:text-slate-500 fixed right-2 z-10"
        onClick={handleMenu}
      >
        {openMenu ? <IoCloseSharp /> : <RiBeerFill />}
      </button>
    </header>
  );
};
