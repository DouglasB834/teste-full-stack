import { Request, Response } from "express";
import { getRetriverProductService } from "../../services/productServices";

export const getProductRetrieverController = async (
  req: Request,
  res: Response
) => {
  const productID = req.params.id;
  const product = await getRetriverProductService(productID);
  return res.status(200).json(product);
};
