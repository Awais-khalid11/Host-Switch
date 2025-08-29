import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postData } from "../../../api/apiClient";
import { toast } from "react-toastify";
import useRoleStore from "../../../store/useRoleIdStore";

const schema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { setRoleId, setUser } = useRoleStore();

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

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const response = await postData("/auth/login", payload);

      const token = response?.payload?.accessToken;
      const userRoleId = response?.payload?.user?.role_id;
      const user = response?.payload?.user;
      if (token) {
        localStorage.setItem("token", token);
        toast.success("Login successful!");

        setRoleId(userRoleId);
        setUser(user);
        const redirectRoute =
          userRoleId === 3
            ? ROUTES.DASHBOARD
            : userRoleId === 2
            ? ROUTES.HOSTDASHBOARD
            : ROUTES.ADMINDASHBOARD;

        navigate(redirectRoute);
      } else {
        toast.error("Login failed. No token received.");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
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
          <Link to={ROUTES.PASSWORD}>Forget Password?</Link>
        </div>

        <Button
          loading={isLoading}
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
