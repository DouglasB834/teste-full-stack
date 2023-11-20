/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import "react-circular-progressbar/dist/styles.css";
import { IFile } from "./Upload";
export const FileList = ({ files }: any) => {
  return (
    <div className="w-[90%] ">
      <h1 className="text-white font-semibold text-xl my-2">file arquivos </h1>
      <ul>
        {files?.map((file: IFile) => (
          <li
            key={file?.id}
            className="flex items-center justify-between gap-4 bg-white p-2 "
          >
            {/* file info */}
            <div className="flex items-center gap-4  justify-between">
              <img
                alt={file?.name}
                width={45}
                height={45}
                src={file?.preview || ""}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col">
                <strong>{file?.name}</strong>
                <span className="flex  items-center gap-4  font-semibold">
                  {file?.readableSize}
                  {file.url && (
                    <button className="text-red-400"> Excluir</button>
                  )}{" "}
                </span>
              </div>
            </div>
            {/* file info */}
            <div className=" flex items-center gap-2 ">
              {!file.uploaded && !file.error && (
                <CircularProgressbar
                  value={file?.progress}
                  styles={{
                    root: { width: 24 },
                    path: { stroke: "#7b04d6" },
                  }}
                  strokeWidth={10}
                  text={"60%"}
                />
              )}
              {file.url && (
                <a
                  href={file?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLink style={{ fontSize: "2rem" }} size={24} color="#222" />
                </a>
              )}
              {file.uploaded && <MdCheckCircle color="#78a5d5" size={24} />}
              {file.error && <MdError color="#e57878" size={24} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
