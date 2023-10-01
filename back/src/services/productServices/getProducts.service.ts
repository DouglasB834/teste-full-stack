import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entitie";

export const getProductService = async () => {
  const productRepo = AppDataSource.getRepository(Product);

  const products = await productRepo.find();

  return { quantity: products.length, products };
};
