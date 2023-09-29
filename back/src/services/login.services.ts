import { compare } from "bcryptjs";
import "dotenv/config";
import AppError from "../Errors/appError";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { IUserLogin, IUserLoginReturn } from "../interface/interface";
import { sign } from "jsonwebtoken";

export const userLoginService = async (
  body: IUserLogin
): Promise<IUserLoginReturn> => {
  const { email, password } = body;
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: email });

  if (!user) {
    throw new AppError(404, "User not Exist. ");
  }

  const checkPassword = await compare(password, user.password);
  if (!checkPassword) {
    throw new AppError(400, "Invalid login info. ");
  }

  const token: string = sign({ email }, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: "1h",
  });
  return { token };
};
