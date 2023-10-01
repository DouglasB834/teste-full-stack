"use client";
import { punkApi } from "@/apis";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useUserContext } from "@/context/userContex";
import { IBeersList } from "@/interfaces";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDish } from "react-icons/bi";

export default function Beer({
  searchParams,
}: {
  searchParams: {
    id: string;
  };
}) {
  const { router } = useUserContext();
  const [beer, setBeer] = useState<IBeersList>({} as IBeersList);

  const handlreBeerId = async (id: number) => {
    try {
      const { data } = await punkApi.get(`/beers/${id}`);
      setBeer(data[0]);
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleBack = () => {
    router.push("/home");
  };

  useEffect(() => {
    handlreBeerId(Number(searchParams.id));
  }, [searchParams.id]);

  return (
    <section aria-label="details product page" className="">
      <Header />
      <div className="max-w-[1200px] m-auto px-4 pt-[80px]  w-full h-full ">
        <div className="flex  flex-col sm:flex-row items-center sm:items-stretch  pb-8  mt-4 gap-4 relative ">
          <div className="bg-primary rounded-md  w-[55%] sm:w-[44%]  flex items-center justify-center ">
            <figure className="w-[300px] min-h-[450px]  flex justify-center items-center p-4">
              <Image
                src={beer?.image_url || ""}
                alt={beer?.name}
                title={beer?.name}
                width={150}
                height={150}
                className="rounded-lg pt-4  w-[55%] object-cover "
              />
            </figure>
          </div>

          <div
            className=" sm:w-[55%] flex flex-col gap-4 px-4 py-2 bg-amber-100 
          text-[1.1rem]"
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              Name : {beer?.name}
            </h2>
            <button
              aria-label="click to favorite"
              className="text-[1.5rem] text-gray-600 absolute top-[10px] right-[1rem] "
            >
              <AiOutlineHeart />
            </button>
            <div className="flex flex-col gap-2 border-b-2 pb-2 border-slate-500">
              <span className="text-[1.1rem] font-semibold">
                Year: {beer.first_brewed}, ABV: {beer.abv}%, IBU: {beer.ibu}%
              </span>
              <p className="text-gray-600 ">{beer?.tagline}</p>
              <p>{beer.brewers_tips} </p>
            </div>
            <p>{beer.description}</p>

            <div className="border-y-2 pb-2 border-slate-500">
              <h4 className="flex items-center gap-2 text-[1.3rem]">
                Food pairing{" "}
                <span className="text-gray-400 ">{<BiDish />}</span>
              </h4>
              {beer?.food_pairing?.map((food, i) => (
                <ul key={i} className="list-disc pl-4">
                  <li>
                    <p className="text-gray-700">{food}</p>
                  </li>
                </ul>
              ))}
            </div>
            <blockquote className="text-gray-500">
              <p>Contributed: {beer.contributed_by}</p>
            </blockquote>
            <div className="flex h-full items-end justify-center">
              <button
                className="bg-primary w-full  text-white p-2 rounded-md hover:bg-slate-800"
                onClick={handleBack}
              >
                back home
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
