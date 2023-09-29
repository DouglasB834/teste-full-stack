import { NextFunction, Request, Response } from "express";
import AppError from "../Errors/appError";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

export const idExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  if (!regexExp.test(id)) {
    throw new AppError(401, "Invalid input, id must be a valid uuid");
  }

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: id });

  if (!user) {
    throw new AppError(404, "User not found!");
  }

  res.locals = { ...res.locals, user };

  return next();
};
