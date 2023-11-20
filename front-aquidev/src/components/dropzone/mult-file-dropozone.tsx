"use client";

import React, { useEffect, useState } from "react";
import { useEdgeStore } from "../../../lib/edgestore";
import {
  FileState,
  MultiFileDropzone,
} from "@/components/Upload/protectedFile";
import Link from "next/link";
import { MdLink } from "react-icons/md";

export function MultiFileDropzoneUsage() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [urls, setUrls] = useState<string[]>([]);

  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  const urlHandle = () =>
    urls?.map((url: string, i: number) => (
      <>
        <div className="flex gap-4">
          <Link
            key={i}
            href={url || ""}
            target="_blank"
            rel={"noreferrer noopener"}
            className="flex gap-2"
          >
            <MdLink style={{ fontSize: "2rem" }} size={24} color="#fff" /> N:
            {i + 1}
          </Link>
          <div>
            <button
              className="bg-white text-black rounded hover:opacity-80"
              onClick={async () => {
                await edgestore.myProtectFiles.delete({
                  url: url,
                });
                const updatedUrls = urls.slice(); // Clone o array de urls
                updatedUrls.splice(i, 1); // Remove o item atual
                setUrls(updatedUrls);
              }}
            >
              delete upload
            </button>
          </div>
        </div>
      </>
    ));

  return (
    <div className="flex  items-center gap-2 mb-2">
      <div>
        <MultiFileDropzone
          value={fileStates}
          onChange={(files) => {
            setFileStates(files);
          }}
          onFilesAdded={async (addedFiles) => {
            const updatedUrls = [...urls];
            setFileStates([...fileStates, ...addedFiles]);
            await Promise.all(
              addedFiles.map(async (addedFileState) => {
                try {
                  const res = await edgestore.myPublicImage.upload({
                    file: addedFileState.file,
                    input: { type: "post" },
                    options: {
                      temporary: true,
                    },
                    onProgressChange: async (progress) => {
                      updateFileProgress(addedFileState.key, progress);
                      if (progress === 100) {
                        // wait 1 second to set it to complete
                        // so that the user can see the progress bar at 100%
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        updateFileProgress(addedFileState.key, "COMPLETE");
                      }
                    },
                  });
                  //onde eu pego as urls das imagens que eu enviei para o backend

                  setUrls([...urls, res?.url]);
                  updatedUrls.push(res?.url);
                } catch (err) {
                  updateFileProgress(addedFileState.key, "ERROR");
                }
              })
            );
            setUrls(updatedUrls);
          }}
        />
        <div className="my-4 flex flex-col   gap-4">{urlHandle()}</div>
      </div>
    </div>
  );
}

function TextField(props: {
  name?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <input
      type="text"
      name={props.name}
      className="bg-zinc-900 border border-zinc-600 rounded px-2 py-1"
      onChange={(e) => props.onChange?.(e.target.value)}
    />
  );
}

{
  /* testando form  funções de deletar ou colocar arquivo temporario  */
}
{
  /* <div className=" flex flex-col gap-2 bg-slate-400 p-2 rounded">
        <p>Name</p>
        <TextField />
        <p>Description</p>
        <TextField />
        <p>Tags</p>
        <TextField />
        <div className=" flex justify-between">
          <button
            className="bg-white text-black rounded hover:opacity-80"
            onClick={async () => {
              for (const url of urls) {
                console.log(url);
                await edgestore.myProtectFiles.delete({
                  url,
                });
                setUIsCancelled(true);
              }
            }}
          >
            delete upload
          </button>
          <button
            className="bg-white text-black rounded"
            onClick={async () => {
              for (const url of urls) {
                await edgestore.myProtectFiles.confirmUpload({
                  url,
                });
              }
              setIsSubmitted(true);
            }}
          >
            confirm file
          </button>
        </div>
      </div> */
}
