import React from "react";
interface Ibutton {
  text: string;
}
export const Button = ({ text }: Ibutton) => {
  return (
    <button
      title="button click"
      className="w-[122px] h-[39px] font-bold bg-primary rounded-[1rem] hover:bg-slate-800 border-2 hover:border-amber-500 transition hover:text-amber-500  "
    >
      {text}
    </button>
  );
};
export const ButtonLadinPage = ({ text }: Ibutton) => {
  return (
    <button
      type="submit"
      title="button click"
      className="w-[200px] h-[39px] font-bold bg-primary rounded-[1rem] hover:bg-slate-800 border-2 hover:border-amber-500 transition hover:text-amber-500  "
    >
      {text}
    </button>
  );
};
