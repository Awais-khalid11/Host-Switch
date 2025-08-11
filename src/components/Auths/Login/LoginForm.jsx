import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";
import { Controller, useForm } from "react-hook-form";
import z, { email } from "zod";
import useTantanstackClient from "../../../hook/useTantanstackClient";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useTantanstackClient.usePostMutation(
    ["login"],
    "/auth/login",
    null,
    {
      onSuccess: (data) => {
        console.log("Login response:", data);
        console.log("Login response token:", data.accessToken);
        localStorage.setItem("token", data?.accessToken);
        navigate("/pm/dashboard");
      },
      onError: (error) => {
        toast.error(error.message || "Login failed");
      },
    }
  );

  const onSubmit = (formData) => {
    loginMutation.mutate(formData);
  };

  return (
    <div>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <div>
              <InputField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                fieldName="w-full"
                placeholder="Enter your email address"
                InputClass="h-[56px]"
                asterisk={true}
                {...field}
              />
              {errors.email && (
                <p className="text-red-500 text-sm -mt-6">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <div>
              <InputField
                label="Password"
                id="password"
                name="password"
                type="password"
                fieldName="w-full"
                InputClass="h-[56px]"
                placeholder="*************"
                asterisk={true}
                {...field}
              />
              {errors.password && (
                <p className="text-red-500 text-sm -mt-6">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
        />
        <div className="text-[14px] font-medium text-right my-3 mb-5 cursor-pointer">
          <Link href="#" to={ROUTES.PASSWORD}>
            Forget Password?
          </Link>
        </div>
        <Button
          type="submit"
          className="bg-[#4D72FF] text-white font-semibold rounded-[8px] w-full h-[55px] flex justify-center items-center mb-5"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
