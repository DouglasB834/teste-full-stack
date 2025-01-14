import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entitie";
import { IProductUpdate } from "../../interface/interface";

export const updateProductService = async (
  productID: string,
  productData: IProductUpdate
) => {
  const productRepo = AppDataSource.getRepository(Product);
  const product = await productRepo.findOneBy({ id: productID });

  const preoductUpdate = productRepo.create({
    ...product,
    ...productData,
  });
  await productRepo.save(preoductUpdate);

  return preoductUpdate;
};
