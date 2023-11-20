import { initEdgeStore } from "@edgestore/server";
import {
  CreateContextOptions,
  createEdgeStoreNextHandler,
} from "@edgestore/server/adapters/next/app";
import { z } from "zod";

const userlogin = "user";
type Context = {
  userId: string;
  userRole: "admin" | "user";
};

function createContext({ req }: CreateContextOptions): Context {
  //get the session from your auth provider
  //const session = await getSession(req);
  return {
    //consegui verificar user que esta logado
    userId: "1234",
    userRole: userlogin,
  };
}

const es = initEdgeStore.context<Context>().create();

const edgestoreRouter = es.router({
  //criar dois arquivos para cara img publica e privada myPublicImage e myProtectFiles
  myPublicImage: es
    .imageBucket({
      maxSize: 1024 * 1024 * 1, // 1 MB tamanho da imagem que aceita
      //config type post or profile
    })
    .input(
      z.object({
        type: z.enum(["profile", "post"]),
        //pode ser usado pra filtragem ou logica de acesso
      })
    ) //definir o caminho da img
    //e.g /post/my-file.jpg
    .path(({ input }) => [{ type: input.type }]),

  // recebe mais parametros de segurança
  myProtectFiles: es
    .fileBucket()
    .beforeDelete(({ ctx, fileInfo }) => {
      console.log("beforeDelete", ctx, fileInfo);
      return true;
    })
    //e.g. /123/my-file.pdf
    .path(({ ctx }) => [{ owner: ctx.userId }]) //user 123
    .accessControl({
      OR: [
        {
          userId: { path: "owner" },
        },
        {
          userRole: { eq: "admin" },
        },
      ],
    }),
});

const handle = createEdgeStoreNextHandler({
  router: edgestoreRouter,
  createContext,
});

export { handle as GET, handle as POST };

export type edgestoreRouter = typeof edgestoreRouter;
