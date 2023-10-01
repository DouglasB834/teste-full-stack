import AppError from "../../Errors/appError";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entitie";

export const createProductService = async (productData: any) => {
  console.log(productData);
  const productRepo = AppDataSource.getRepository(Product);

  const IsProductExist = await productRepo.findOneBy({
    name: productData.name,
  });

  if (IsProductExist) {
    throw new AppError(400, "Product already exist");
  }

  const product = productRepo.create(productData);
  await productRepo.save(product);
  return product;
};
