import { PublicFile } from "@/components/Upload/PublicFile";
import { MultiFileDropzoneUsage } from "@/components/dropzone/mult-file-dropozone";

export default function UploadArquiv() {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-blue-950 h-screen ">
      <h1>teste upload</h1>
      <div className="">{<MultiFileDropzoneUsage />}</div>
      <PublicFile />
    </div>
  );
}

{
  /* <Upload /> */
}
