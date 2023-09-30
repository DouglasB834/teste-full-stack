import { Router } from "express";
import {
  authTokenMiddleware,
  idProductExistMiddleware,
  validateBodyMiddleware,
} from "../middleware";
import { createProductControlle } from "../controllers/productControllers/createProduct.controller";

import { productSchema, productUpdateSchema } from "../schemas";
import {
  deleteProductController,
  getProductController,
  getProductRetrieverController,
  updateProductController,
} from "../controllers/productControllers";

export const productRouter = Router();

productRouter.post(
  "/product",
  validateBodyMiddleware(productSchema),
  createProductControlle
);
// productRouter.use("/product", authTokenMiddleware);
productRouter.get("/product", authTokenMiddleware, getProductController);
productRouter.get(
  "/product/:id",
  authTokenMiddleware,
  idProductExistMiddleware,
  getProductRetrieverController
);
productRouter.patch(
  "/product/:id",
  authTokenMiddleware,
  idProductExistMiddleware,
  validateBodyMiddleware(productUpdateSchema),
  updateProductController
);

productRouter.delete(
  "/product/:id",
  authTokenMiddleware,
  idProductExistMiddleware,
  deleteProductController
);
