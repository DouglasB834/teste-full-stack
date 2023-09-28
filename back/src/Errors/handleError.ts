import { Request, Response, NextFunction } from "express";
import AppError from "./appError";

const handleErrors = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.log("Error: " + error);
  return res.status(500).json({ error: "Internal Server Error!" });
};

export default handleErrors;
