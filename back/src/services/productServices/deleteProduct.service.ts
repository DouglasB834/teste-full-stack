import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entitie";

export const deleteProductService = async (productID: string) => {
  const productRepo = AppDataSource.getRepository(Product);
  const product = await productRepo.findOneBy({ id: productID });

  await productRepo.remove(product);

  return {};
};
