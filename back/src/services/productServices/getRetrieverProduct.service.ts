import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entitie";

export const getRetriverProductService = async (productID: string) => {
  const productRepo = AppDataSource.getRepository(Product);

  const products = await productRepo.findOneBy({ id: productID });

  return { products };
};
