"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { useEdgeStore } from "../../../lib/edgestore";
import Link from "next/link";
import { MdLink } from "react-icons/md";
import { SingleImageDropzone } from "@/components/dropzone/Single-image-dropzone";
import { MultiFileDropzone } from "@/components/Upload/protectedFile";
import { url } from "inspector";

interface IUploandInfo {
  url: string;
  thumbnailUrl: string | null;
  size: number;
}
export const PublicFile = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const [isCancelled, setUIsCancelled] = useState(false);
  const [uploadInfo, setUploandInfo] = useState<IUploandInfo>();

  const { edgestore } = useEdgeStore();

  return (
    <>
      <div className="flex flex-col gap-4 p-2 items-center max-w-[600px] bg-slate-200 text-black">
        <SingleImageDropzone
          width={200}
          height={200}
          value={file}
          //limitar o tamanho de img que pode receber
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 1, // 1 MB
          }}
          onChange={(file) => {
            setFile(file);
          }}
        />

        <button
          className="bg-white  p-2 rounded-md hover:bg-slate-300"
          onClick={async () => {
            if (file) {
              const res = await edgestore.myPublicImage.upload({
                file,
                options: {
                  temporary: true,
                },
                //public img
                input: { type: "post" },
                onProgressChange: (progress) => {
                  setProgress(progress);
                },
              });
              //save database here with api

              setUploandInfo({
                url: res.url,
                thumbnailUrl: res.thumbnailUrl,
                size: res.size,
              });
            }
          }}
        >
          Upload
        </button>
        {uploadInfo?.url && (
          <>
            <button
              className="bg-white text-black rounded hover:opacity-80"
              onClick={async () => {
                console.log(uploadInfo?.thumbnailUrl);
                console.log(uploadInfo?.url);
                await edgestore.myProtectFiles.delete({
                  url: `${uploadInfo?.url}`,
                });
                setUIsCancelled(true);
              }}
            >
              delete upload
            </button>
            {isCancelled && <p>File deleted</p>}
          </>
        )}
        <div className="w-full bg-black h-[7px] border border-yellow-200 rounded overflow-hidden">
          {progress !== 100 && (
            <p
              className={`h-full bg-white1 transition-all duration-150 bg-white  `}
              style={{
                width: `${progress}%`,
              }}
            />
          )}
        </div>
      </div>
      {!!uploadInfo && (
        <div className="flex gap-4 bg-slate-200 w-full max-w-[250px] p-1 mt-4 text-black">
          <img
            alt={`${uploadInfo?.url}`}
            width={45}
            height={45}
            src={uploadInfo?.url || ""}
            className="rounded-md object-cover"
          />

          <div className="flex gap-2">
            {uploadInfo?.url && (
              <Link
                href={uploadInfo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ fontSize: "2rem" }} size={24} color="#222" />
              </Link>
            )}
            {uploadInfo?.thumbnailUrl && (
              <Link
                href={uploadInfo.thumbnailUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                thumbnailUrl
              </Link>
            )}
          </div>
        </div>
      )}{" "}
    </>
  );
};
