import { Request, Response } from "express";
import { createProductService } from "../../services/productServices";

export const createProductControlle = async (req: Request, res: Response) => {
  const body = req.body;
  const product = await createProductService(body);
  return res.status(201).json(product);
};
