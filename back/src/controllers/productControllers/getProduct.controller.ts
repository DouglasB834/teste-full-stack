import { Request, Response } from "express";
import { getProductService } from "../../services/productServices";

export const getProductController = async (req: Request, res: Response) => {
  const products = await getProductService();
  return res.status(200).json(products);
};
