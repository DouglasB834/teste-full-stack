import { Request, Response } from "express";
import { deleteProductService } from "../../services/productServices";

export const deleteProductController = async (req: Request, res: Response) => {
  const productID = req.params.id;
  const product = await deleteProductService(productID);
  return res.status(200).json(product);
};
