import { Request, Response } from "express";
import { deleteUserService } from "../services/deleteUser.services";

export const deleteUserController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const ulrID = req.params.id;
  await deleteUserService(id, ulrID);
  return res.status(204).json();
};
