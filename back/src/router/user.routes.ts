import { Router } from "express";
import {
  authTokenMiddleware,
  idExistsMiddleware,
  uniqueEmailMiddleware,
  validateBodyMiddleware,
} from "../middleware";
import {
  createUserController,
  deleteUserController,
  getProfileController,
  getUserController,
  retrieverController,
  updateUserController,
} from "../controllers/userControllers";
import { userSchema } from "../schemas";

export const userRouter = Router();

userRouter.post(
  "/register",
  validateBodyMiddleware(userSchema),
  uniqueEmailMiddleware,
  createUserController
);
userRouter.get("/profile", authTokenMiddleware, getProfileController);

userRouter.use("/users", authTokenMiddleware);

userRouter.get("/users", getUserController);
userRouter.patch("/users", updateUserController);
userRouter.get("/users/:id", idExistsMiddleware, retrieverController);
userRouter.delete("/users/:id", idExistsMiddleware, deleteUserController);
