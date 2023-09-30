import { Request, Response } from "express";
import { getUserServices } from "../../services/userServices";

export const getUserController = async (req: Request, res: Response) => {
  const users = await getUserServices();
  return res.status(200).json(users);
};
