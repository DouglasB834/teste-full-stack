import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import AppError from "../Errors/appError";

export const validateBodyMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validate = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.body = validate;

      return next();
    } catch (error) {
      throw new AppError(401, error.errors);
    }
  };
