import { Request, Response } from "express";
import { updateUserService } from "../services/updateUser.services";

export const updateUserController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const body = req.body;
  const user = await updateUserService(body, id);

  return res.status(200).json(user);
};
