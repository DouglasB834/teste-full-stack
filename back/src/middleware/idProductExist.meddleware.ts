import { NextFunction, Request, Response } from "express";
import AppError from "../Errors/appError";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { Product } from "../entities/product.entitie";

export const idProductExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const productID = req.params.id;
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  if (!regexExp.test(productID)) {
    throw new AppError(401, "Invalid input, id must be a valid uuid");
  }

  const productRepo = AppDataSource.getRepository(Product);

  const product = await productRepo.findOneBy({ id: productID });

  if (!product) {
    throw new AppError(404, "Product not found!");
  }

  return next();
};
