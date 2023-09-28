import "express-async-errors";
import express from "express";
import handleErrors from "./Errors/handleError";
import cors from "cors";
import { userRouter } from "./router/user.routes";
import { loginRouter } from "./router/session.router";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("", loginRouter);
app.use("", userRouter);
app.use(handleErrors);
