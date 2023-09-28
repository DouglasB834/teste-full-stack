import * as yup from "yup";
import { IUserLogin, IUserLoginReturn } from "../interface/interface";

export const sessionSchema: yup.ObjectSchema<IUserLogin> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const sessionReturnSchema: yup.ObjectSchema<IUserLoginReturn> =
  yup.object({
    token: yup.string().required(),
  });
