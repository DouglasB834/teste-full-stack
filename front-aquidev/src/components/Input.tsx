import React from "react";
interface InputProps {
  text: string;
  labelId: string;
  type: string;
  register: any;
}

export const Input = ({ text, type, labelId, register }: InputProps) => {
  return (
    <>
      <label htmlFor={labelId}>{text}</label>
      <input
        className="rounded-lg p-2 outline-none bg-gray-300"
        id={labelId}
        type={type}
        placeholder={text}
        {...register(`${labelId}`)}
      />
    </>
  );
};
