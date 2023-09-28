import { Router } from "express";
import { userLoginController } from "../controllers";

export const loginRouter: Router = Router();

loginRouter.post("/login", userLoginController);
