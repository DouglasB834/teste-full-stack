import { Router } from "express";
import { userLoginController } from "../controllers/userControllers";

export const loginRouter: Router = Router();

loginRouter.post("/login", userLoginController);
