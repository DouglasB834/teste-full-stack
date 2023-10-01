import "express-async-errors";
import express from "express";
import handleErrors from "./Errors/handleError";
import cors from "cors";
import { userRouter } from "./router/user.routes";
import { loginRouter } from "./router/session.router";
import { productRouter } from "./router/product.routes";

export const app = express();
app.use(express.json());

app.use(cors());
app.use("", loginRouter);
app.use("", productRouter);
app.use("", userRouter);
app.use(handleErrors);
