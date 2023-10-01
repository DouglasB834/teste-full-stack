import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../Errors/appError";

export const uniqueEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;
  if (!email) return next();

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email: email });
  if (user) {
    throw new AppError(409, "Email already exists.");
  }

  return next();
};
