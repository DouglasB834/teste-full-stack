"use client";
import { filesize } from "filesize";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { v4 } from "uuid";
import { FileList } from "./FileList";
import { apiFile } from "@/apis";

interface IUpload {
  files: IFile;
}
export interface IFile {
  file: any;
  error: boolean;
  id: string;
  name: string;
  preview: string;
  progress: number;
  readableSize: string;
  uploaded: boolean;
  url: string | null;
  size: number;
}

export const Upload = () => {
  const [uploadFiles, setUploadFiles] = useState([] as IUpload[]);

  useEffect(() => {
    console.log(uploadFiles, "esta ok ");
    uploadFiles.forEach(processUpload);
  }, [uploadFiles]);

  const handleUpload = (files: any) => {
    const newUploadFiles = files.map((file: any) => ({
      file,
      id: v4(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadFiles((prevUploadFiles) => [
      ...prevUploadFiles,
      ...newUploadFiles,
    ]);
  };

  const processUpload = (uploadFile: any) => {
    console.log(uploadFile.file, "data");

    if (!uploadFile || !uploadFile.file) {
      console.log("uploadFile ou uploadFile.file está vazio ou indefinido.");
      return;
    }

    const data = new FormData();
    data.append("file", uploadFile.file, uploadFile.name);
    console.log(data, "data");

    // apiFile.post("/posts", data, {
    //   onUploadProgress: (event) => {
    //     const progress = parseInt(
    //       Math.round((event.loaded * 100) / event.total!).toString()
    //     );

    //     fnUploadFile(uploadFile.id, {
    //       progress,
    //     });
    //   },
    // });
  };

  const fnUploadFile = (id: string, data: any) => {
    setUploadFiles(
      uploadFiles.map((file: any) => {
        return file.id === id ? { ...file, ...data } : file; //else retorna o file se o id nao for o mesmo
      })
    );
  };

  const renderDragMessage = (
    isDragActive: boolean,
    isDragReject: boolean
  ): any => {
    if (!isDragActive) {
      return <p className="text-emerald-400 p-4">Arraste a imagem aqui</p>;
    }
    if (isDragReject) {
      return <p className="text-red-400">Arquivo não suportado</p>;
    }

    return <p className="text-emerald-400 p-4">Solte a imagem aqui</p>;
  };

  return (
    <section className="bg-slate-400 h-screen flex justify-center items-center flex-col gap-4 ">
      <h1>Upload</h1>
      <div
        className="w-[600px] h=full pb-4 bg-fuchsia-500
      flex justify-center items-center flex-col
      "
      >
        <Dropzone
          accept={{ "image/*": [".jpg", ".jpeg", ".png", ".gif"] }}
          onDropAccepted={handleUpload}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div
              {...getRootProps()}
              className={`bg-white border-[1rem] 
              ${{ ...getRootProps() }}
              ${isDragReject && "border-red-400"}
              ${isDragActive && "border-blue-400"}
            
              flex justify-center items-center
              w-full
               cursor-pointer `}
            >
              <input {...getInputProps()} />
              {renderDragMessage(isDragActive, isDragReject)}
            </div>
          )}
        </Dropzone>
        {!!uploadFiles.length && <FileList files={uploadFiles} />}
      </div>
    </section>
  );
};
