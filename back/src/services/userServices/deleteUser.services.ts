import AppError from "../../Errors/appError";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";

export const deleteUserService = async (userID: string, ulrID: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: ulrID });
  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (user.id !== userID) {
    throw new AppError(401, "Not authorized");
  }
  await userRepo.remove(user);
  return {};
};
