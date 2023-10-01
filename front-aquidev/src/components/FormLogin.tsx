import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonLadinPage } from "./Button";
import { useUserContext } from "@/context/userContex";
import { ILoginUser } from "@/interfaces";
import { Input } from "./Input";

const loginSchema = yup.object({
  email: yup.string().email().required("E-mail required"),
  password: yup
    .string()
    .min(6, "minimum of 6 characters")
    .required("password required"),
});

export const FormLogin = () => {
  const { userLogin, errorLogin } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({ resolver: yupResolver(loginSchema) });

  return (
    <div className="flex flex-col  gap-8 ">
      <form
        className="flex flex-col justify-center items-center   max-w-[700px] gap-4 py-4 "
        onSubmit={handleSubmit(userLogin)}
      >
        <div className="flex flex-col gap-1 w-[90%]  sm:w-[70%]">
          <Input
            text="email"
            type="email"
            register={register}
            labelId="email"
          />
          <span className="text-red-400 text-[.9rem]">
            {errors.email?.message}
          </span>
        </div>

        <div className="flex flex-col gap-1 w-[90%]  sm:w-[70%]">
          <Input
            text="Password"
            type="password"
            register={register}
            labelId="password"
          />
          <span className="text-red-400 text-[.9rem]">
            {errors.password?.message}
          </span>
        </div>
        {errorLogin && (
          <span className="text-red-500 text-[1rem]">{errorLogin} </span>
        )}
        <ButtonLadinPage text="Login" />
      </form>
    </div>
  );
};
