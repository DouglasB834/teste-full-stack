import { Request, Response } from "express";
import { getProfileService } from "../services/getProfile.services";

export const getProfileController = async (req: Request, res: Response) => {
  const userID = req.user.id;
  const user = await getProfileService(userID);
  return res.status(200).json(user);
};
