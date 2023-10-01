import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { IRegisterUser } from "@/interfaces";
import { ButtonLadinPage } from "./Button";
import { useUserContext } from "@/context/userContex";

const registerSchema = yup.object({
  name: yup.string().required("Name required"),
  email: yup.string().email().required("E-mail required"),
  password: yup
    .string()
    .min(6, "minimum of 6 characters")
    .required("password required"),
  confiPassword: yup
    .string()
    .required("password required")
    .oneOf([yup.ref("password")], "password does not match"),
  avatar: yup.string().optional(),
});

export const FormRegister = () => {
  const { userRegister, errorRegister } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({ resolver: yupResolver(registerSchema) });

  return (
    <div className="flex flex-col  gap-8">
      <form
        className="flex flex-col justify-center items-center   max-w-[700px] gap-4 py-4 rounded-"
        onSubmit={handleSubmit(userRegister)}
      >
        <div className="flex flex-col gap-1 w-[90%]  sm:w-[70%]">
          <Input text="name" type="name" register={register} labelId="name" />
          <span className="text-red-400 text-[.9rem]">
            {errors.name?.message}
          </span>
        </div>
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

        <div className="flex flex-col gap-1 w-[90%]  sm:w-[70%]">
          <Input
            text="confiPassword"
            type="password"
            register={register}
            labelId="confiPassword"
          />
          <span className="text-red-400 text-[.9rem]">
            {errors.confiPassword?.message}
          </span>
        </div>

        {errorRegister && (
          <span className="text-red-500 text-[1rem]">{errorRegister} </span>
        )}
        <ButtonLadinPage text="Register" />
      </form>
    </div>
  );
};
