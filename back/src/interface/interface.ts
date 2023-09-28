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

export { IUser, IUserLogin, IUserUpdate, IUserLoginReturn, IUserResponse };
