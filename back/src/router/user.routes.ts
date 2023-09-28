import { Router } from "express";
import { idExists, uniqueEmail, verifyRequestPerSchema } from "../middleware";
import {
  authTokenMiddleware,
  createUserController,
  deleteUserController,
  getProfileController,
  getUserController,
  retrieverController,
  updateUserController,
} from "../controllers";
import { userSchema } from "../schemas";

export const userRouter = Router();

userRouter.post(
  "/create",
  verifyRequestPerSchema(userSchema),
  uniqueEmail,
  createUserController
);
userRouter.get("/profile", authTokenMiddleware, getProfileController);

userRouter.use("/users", authTokenMiddleware);

userRouter.get("/users", getUserController);
userRouter.get("/users/:id", idExists, retrieverController);
userRouter.patch("/users", updateUserController);
userRouter.delete("/users/:id", idExists, deleteUserController);
