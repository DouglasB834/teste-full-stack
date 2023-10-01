import { Request, Response } from "express";
import { updateProductService } from "../../services/productServices";

export const updateProductController = async (req: Request, res: Response) => {
  const productID = req.params.id;
  const data = req.body;
  const product = await updateProductService(productID, data);
  return res.status(200).json(product);
};
