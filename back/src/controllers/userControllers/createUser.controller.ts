import { Request, Response } from "express";
import { createUserUseService } from "../../services/userServices";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userInfo = req.body;
  const user = await createUserUseService(userInfo);
  return res.status(201).json(user);
};
