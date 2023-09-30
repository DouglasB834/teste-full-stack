import AppError from "../../Errors/appError";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { UserResponseSchema } from "../../schemas/user.schemas";

export const retrieverService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id });

  if (!user) {
    throw new AppError(400, "user not found.");
  }

  const validateResponse = UserResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};
