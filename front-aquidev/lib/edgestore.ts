"use client";
import { type edgestoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import { createEdgeStoreProvider } from "@edgestore/react";

export const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<edgestoreRouter>({
    //consegui limitar quantos arquivos podem ser carregados por vez
    // maxConcurrentUploads: 2, //2 por vez , mesmo se colocar 10
  });
