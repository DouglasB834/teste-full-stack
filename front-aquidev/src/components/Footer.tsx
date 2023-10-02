import { dataFooter } from "@/utils/dataFooter";
import Image from "next/image";
import React from "react";
import Ellipse12 from "../../public/assets/Ellipse12.png";
import Ellipse11 from "../../public/assets/Ellipse11.png";
import Ellipse13 from "../../public/assets/Ellipse13.png";

export const Footer = () => {
  return (
    <footer className="container  relative  ">
      <div className="h-[290px] flex justify-between items-center flex-wrap gap-4 pb-4  my-4 border-y-4  ">
        {dataFooter.map((item, i) => (
          <div key={i} className="">
            {item.description?.map((item, i) => (
              <div key={i} className="w-[100%] md:w-[250px]  ">
                <div className="">
                  <div>
                    <Image width={90} alt="logo Lest's food" src={item.logo} />
                  </div>
                  <p className="text-sm w-[30ch]">{item.text}</p>
                  <ul className="flex  gap-2 text-[1.2rem]">
                    {item.links?.map((item, i) => (
                      <li key={i}>
                        <a href="#">{<item.img />}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {item.company?.map((item, i) => (
              <ul key={i}>
                <h3 className="font-semibold text-lg ">{item.title}</h3>
                {item.links?.map((item, i) => (
                  <li key={i}>
                    {" "}
                    <a href={`#${item.id}`}>{item.text}</a>{" "}
                  </li>
                ))}
              </ul>
            ))}

            <ul>
              {item.Policy?.map((item, i) => (
                <ul key={i}>
                  <h3 className="font-semibold text-lg ">{item.title}</h3>
                  {item.texts?.map((item, i) => (
                    <li key={i}> {item} </li>
                  ))}
                </ul>
              ))}
            </ul>

            <div className="flex flex-col ">
              {item["Get In Touch"]?.map((item, i) => (
                <span key={i}> {item} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Image
        src={Ellipse12}
        alt="Ellipse bg"
        className="absolute right-3 top-2  z-[-1]"
      />
      <Image
        src={Ellipse11}
        alt="Ellipse bg"
        className="absolute right-[35%] bottom-9  z-[-1]"
      />
      <Image
        src={Ellipse13}
        alt="Ellipse bg"
        className="absolute left-[38%] top-16  z-[-1]"
      />
    </footer>
  );
};
