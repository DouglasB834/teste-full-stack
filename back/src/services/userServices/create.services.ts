import { hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUser } from "../../interface/interface";
import { UserResponseSchema } from "../../schemas/user.schemas";

export const createUserUseService = async (userInfo: IUser): Promise<any> => {
  const useRepo = AppDataSource.getRepository(User);
  userInfo.password = hashSync(userInfo.password, 10);

  const user: IUser = useRepo.create(userInfo);
  await useRepo.save(user);
  const validateResponse = await UserResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};
