import { hashSync } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { IUserUpdate } from "../interface/interface";
import { UserResponseSchema } from "../schemas/user.schemas";

export const updateUserService = async (
  userInfo: IUserUpdate,
  userID: string
) => {
  const userRepo = AppDataSource.getRepository(User);
  if (userInfo.password) {
    userInfo.password = hashSync(userInfo.password, 10);
  }

  const user = await userRepo.findOneBy({ id: userID });

  const userUpdate = userRepo.create({
    ...user,
    ...userInfo,
  });

  await userRepo.save(userUpdate);

  const update = await UserResponseSchema.validate(userUpdate, {
    stripUnknown: true,
  });

  return update;
};
