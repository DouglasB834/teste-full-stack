import { IUser, IUserResponse, IUserUpdate } from "../interface/interface";
import * as yup from "yup";

const userSchema: yup.ObjectSchema<IUser> = yup.object().shape({
  name: yup.string().required().min(3).max(100),
  email: yup.string().email().max(100).required(),
  password: yup.string().min(6).max(100).required(),
  avatar: yup.string().notRequired(),
});

const UserResponseSchema: yup.ObjectSchema<IUserResponse> = yup.object().shape({
  updatedAt: yup.date().required(),
  createdAt: yup.date().required(),
  avatar: yup.string().notRequired(),
  email: yup.string().email().max(100).required(),
  name: yup.string().required().min(3).max(100),
  id: yup.string().uuid().required(),
});

const userArraySchema = yup.array(UserResponseSchema);

const userUpdateSchema: yup.ObjectSchema<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
  avatar: yup.string().notRequired(),
});

export { userSchema, userUpdateSchema, UserResponseSchema, userArraySchema };
