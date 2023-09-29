import { Router } from "express";
import {
  authTokenMiddleware,
  idExistsMiddleware,
  uniqueEmailMiddleware,
  verifyRequestPerSchema,
} from "../middleware";
import {
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
  uniqueEmailMiddleware,
  createUserController
);
userRouter.get("/profile", authTokenMiddleware, getProfileController);

userRouter.use("/users", authTokenMiddleware);

userRouter.get("/users", getUserController);
userRouter.get("/users/:id", idExistsMiddleware, retrieverController);
userRouter.patch("/users", updateUserController);
userRouter.delete("/users/:id", idExistsMiddleware, deleteUserController);
