import * as yup from "yup";
import { IProduct, IProductUpdate } from "../interface/interface";

export const productSchema: yup.ObjectSchema<IProduct> = yup.object({
  name: yup.string().min(2).required(),
  year: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().min(2).required(),
  avatar: yup.string().notRequired(),
});
export const productUpdateSchema: yup.ObjectSchema<IProductUpdate> = yup.object(
  {
    name: yup.string().min(2).notRequired(),
    year: yup.number().notRequired(),
    price: yup.number().notRequired(),
    description: yup.string().min(2).notRequired(),
    avatar: yup.string().notRequired(),
  }
);
