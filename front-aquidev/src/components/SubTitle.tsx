import React from "react";

interface IProps {
  title: string;
  subtitle: string;
  description: string;
}

export const SubTitle = ({ title, subtitle, description }: IProps) => {
  return (
    <div className="flex flex-col  items-center justify-center">
      <p className="text-amber-500 font-bold text-[1rem] sm:text-[1.1rem]">
        {title}
      </p>
      <h3 className="text-2xl font-bold tracking-[1px] ">{subtitle}</h3>
      <p className="flex text-center text-sm sm:w-[48ch] tracking-[0.6px] mt-[1rem] ">
        {description}
      </p>
    </div>
  );
};
