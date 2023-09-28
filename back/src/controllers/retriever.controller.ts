import { Request, Response } from "express";
import { retrieverService } from "../services/retriever.services";

export const retrieverController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await retrieverService(id);
  return res.status(200).json({ user });
};
