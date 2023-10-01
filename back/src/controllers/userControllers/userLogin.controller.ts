import { Request, Response } from "express";
import { IUserLogin } from "../../interface/interface";
import { userLoginService } from "../../services/userServices";

export const userLoginController = async (req: Request, res: Response) => {
  const body: IUserLogin = req.body;
  const token = await userLoginService(body);
  return res.status(200).json(token);
};
