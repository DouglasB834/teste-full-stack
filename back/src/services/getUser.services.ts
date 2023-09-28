import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { userArraySchema } from "../schemas/user.schemas";

export const getUserServices = async () => {
  const userRepo = AppDataSource.getRepository(User);
  const users = await userRepo.find();

  const validateResponse = userArraySchema.validate(users, {
    stripUnknown: true,
  });

  return validateResponse;
};
