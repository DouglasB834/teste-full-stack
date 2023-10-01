"use client";
import React, { useState } from "react";
import { SubTitle } from "./SubTitle";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { Button } from "./Button";
import { useUserContext } from "@/context/userContex";
import { IBeersList } from "@/interfaces";
import { SkeletonCard } from "./SkeletonCard";
import { FcSearch } from "react-icons/fc";
import { price } from "@/utils/fns";

export const OurMenu = () => {
  const {
    beersList,
    router,
    isLoading,
    setPagelimite,
    pageLimite,
    searchBeerByName,
    ListBeer,
    handlreClearSearchBeer,
    errorSearchBeer,
    SeterrorSearchBeer,
  } = useUserContext();

  const [beerName, setBeerName] = useState<string | undefined>(undefined);

  const handlreBeerRouter = (id: number) => {
    router.push(`/beer?id=${id}`);
  };
  const handlreMoreBeers = () => {
    setPagelimite(pageLimite + 8);
  };

  const handleSearchBeerName = (e: React.FormEvent) => {
    e.preventDefault();

    if (beerName !== undefined) {
      searchBeerByName(beerName.trim());
    }
    if (beerName == "" || beerName == undefined) {
      ListBeer();
      SeterrorSearchBeer(undefined);
    }
  };

  return (
    <section id="menu" className="container">
      <SubTitle
        title="Our Menu"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
        subtitle="Our Popular Menu"
      />

      <div className="flex justify-between items-center gap-2">
        <form
          onSubmit={(e) => handleSearchBeerName(e)}
          action=""
          className="border flex flex-col gap-1"
        >
          <div className=" flex justify-between ">
            <input
              type="text"
              placeholder="Search beer name"
              className="w-full bg-amber-200 outline-none px-2 "
              onChange={(e) => setBeerName(e.target.value)}
            />
            <button type="submit" className="bg-amber-500 p-2 hover:scale-105">
              <FcSearch />
            </button>
          </div>
          {errorSearchBeer && (
            <span className="text-red-500 text-[1rem]">{errorSearchBeer} </span>
          )}
        </form>
        <div>
          <button
            className="bg-amber-500 rounded-md text-black hover:text-white h-[40px] m-1 px-1 sm:p-2 hover:bg-slate-800 text-sm sm:text-base"
            onClick={() => handlreClearSearchBeer()}
          >
            clear search
          </button>
        </div>
      </div>

      <ul
        className=" overflow-x-auto sm:h-[880px]  flex sm:flex-wrap sm:justify-around  gap-4 "
        aria-label="list card beer"
      >
        {isLoading
          ? Array.from({ length: 8 }, (_, i) => <SkeletonCard key={i} />)
          : beersList.map((item: IBeersList) => (
              <li
                key={item?.id}
                className="flex flex-col justify-between min-w-[175px] w-[240px] h-[360px] shadow-lg rounded-[1rem] bg-colorCardbg my-4  cursor-pointer"
                onClick={() => handlreBeerRouter(item?.id)}
              >
                <figure className="flex justify-center items-center bg-colorCardbg p-4 rounded-t-[1rem] h-[230px] bg-amber-200 hover:scale-105 ">
                  <Image
                    width={20}
                    height={20}
                    src={item?.image_url || ""}
                    alt={item?.name}
                    title={item?.name}
                    className="object-cover w-[40px] "
                  />
                </figure>

                <div className="bg-white clippy rounded-[1rem] border-t-2 border-amber-400   ">
                  <div className="flex flex-col  items-center font-bold ">
                    <p className="limit_text ">{item?.name}</p>
                    <p className=" text-sm text-gray-500  max-w-[22ch] overflow-hidden truncate">
                      {item?.tagline}
                    </p>
                  </div>
                  <div className="flex flex-wrap  justify-between items-center p-4">
                    <p className="font-bold text-[.9rem]">R$ {price()}</p>
                    <div className="text-[.9rem]">
                      <span>{item?.abv}% ABV</span>
                      <span>{item?.ibu}% IBU</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
      </ul>

      <div
        className="m-auto w-[100px] my-[2rem] j"
        onClick={() => handlreMoreBeers()}
      >
        <Button aria-label="Se more menu" text="More menu" />
      </div>
    </section>
  );
};
