interface IUser {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}
interface IUserResponse {
  updatedAt: Date;
  createdAt: Date;
  avatar?: string;
  email: string;
  name: string;
  id: string;
}

type IUserUpdate = Partial<IUser>;

interface IUserLogin {
  email: string;
  password: string;
}
interface IUserLoginReturn {
  token: string;
}

interface IProduct {
  name: string;
  year: number;
  price: number;
  description: string;
  avatar?: string;
}
interface IProductResponse {
  id: string;
  name: string;
  year: number;
  price: number;
  isActive: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  avatar?: string;
}
type IProductUpdate = Partial<IProduct>;

export {
  IUser,
  IUserLogin,
  IUserUpdate,
  IUserLoginReturn,
  IUserResponse,
  IProduct,
  IProductResponse,
  IProductUpdate,
};
