"use client";
import React, { useEffect, useState } from "react";
import { SubTitle } from "./SubTitle";
import Image from "next/image";
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
    handleClearSearchBeer,
    errorSearchBeer,
    SeterrorSearchBeer,
    searchBeerByIBV,
    handlebeerListSortABV,
    handlebeerListSortName,
  } = useUserContext();

  const [beerName, setBeerName] = useState<string | undefined>(undefined);
  const [beerValue, setBeerValue] = useState<number | undefined>(undefined);

  const handleBeerRouter = (id: number) => {
    router.push(`/beer?id=${id}`);
  };

  const handleMoreBeers = () => {
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

  const handleListMinIBV = () => {
    if (beerValue! >= 1) {
      searchBeerByIBV(beerValue!);
    }
  };

  return (
    <section id="menu" className="container">
      <SubTitle
        title="Our Menu"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
        subtitle="Our Popular Menu"
      />

      <div className="flex justify-between sm:items-center gap-2 px-4">
        <div className="flex flex-wrap  gap-2 items-center mb-2">
          <form
            onSubmit={(e) => handleSearchBeerName(e)}
            action=""
            className="border flex flex-col gap-1 "
          >
            <div className=" flex justify-between ">
              <input
                type="text"
                placeholder="Search beer name"
                className="w-full bg-amber-200 outline-none px-2 "
                onChange={(e) => setBeerName(e.target.value)}
              />
              <button
                type="submit"
                className="bg-amber-500 p-2 hover:scale-105"
              >
                <FcSearch />
              </button>
            </div>
            {errorSearchBeer && (
              <span className="text-red-500 text-[1rem]">
                {errorSearchBeer}{" "}
              </span>
            )}
          </form>
          <div className="flex">
            <button
              className="bg-amber-500 text-black hover:scale-105"
              onClick={handleListMinIBV}
            >
              ABV %
            </button>
            <input
              type="number"
              className=" w-[50px] bg-amber-200 p-[4px] text-center outline-none"
              onChange={(e) => setBeerValue(e.target.valueAsNumber)}
            />
          </div>
          <div className="flex gap-4">
            <button
              className=" bg-amber-500 hover:scale-105 rounded-md  w-[80px] h-[35px] hover:bg-slate-800 hover:text-white "
              onClick={handlebeerListSortABV}
            >
              min ABV
            </button>
            <button
              className=" bg-amber-500 hover:scale-105 rounded-md w-[110px] h-[35px] hover:bg-slate-800 hover:text-white "
              onClick={handlebeerListSortName}
            >
              sort by name
            </button>
          </div>
        </div>

        <div>
          <button
            className="flex items-center justify-center bg-amber-500 rounded-md text-black hover:text-white sm:w-[150px] h-[35px]  px-2 sm:p-3 hover:bg-slate-800 text-sm sm:text-base"
            onClick={() => handleClearSearchBeer()}
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
                onClick={() => handleBeerRouter(item?.id)}
              >
                <figure className="flex justify-center items-center bg-colorCardbg p-4 rounded-t-[1rem] h-[230px] bg-amber-200 hover:scale-105 border-2 border-primary ">
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
                      <span> ABV {item?.abv}% /</span>
                      <span>IBU {item?.ibu}%</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
      </ul>

      <div
        className="m-auto w-[100px] my-[2rem] j"
        onClick={() => handleMoreBeers()}
      >
        <Button aria-label="Se more menu" text="Show more" />
      </div>
    </section>
  );
};
