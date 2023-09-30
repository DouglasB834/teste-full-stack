import AppError from "../../Errors/appError";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { UserResponseSchema } from "../../schemas/user.schemas";

export const getProfileService = async (userID: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: userID });
  if (!user) {
    throw new AppError(404, "User not found");
  }
  const validadeUser = UserResponseSchema.validate(user, {
    stripUnknown: true,
  });
  return validadeUser;
};
