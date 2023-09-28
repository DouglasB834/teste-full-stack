import { NextFunction, Response, Request } from "express";

import jwt from "jsonwebtoken";
import AppError from "../Errors/appError";

export const authTokenMiddleware = async (
  req: Request,
  resp: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization;
  if (!token) throw new AppError(401, "Invalid Token");

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error: Error, decoded: any) => {
    if (error) {
      throw new AppError(401, error.message);
    }

    req.user = {
      id: decoded.sub,
      email: decoded.email,
    };
  });
  return next();
};
