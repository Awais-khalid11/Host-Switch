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

const schema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
});

const PasswordForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await postData("/auth/forgot", {
        email: formData.email,
      });

      if (response?.success) {
        toast.success(response?.message || "OTP sent successfully!");

        if (response?.payload?.id) {
          localStorage.setItem("userID", response.payload.id);
        }
        navigate(ROUTES.OTP);
      } else {
        const errorMessage =
          response?.errors?.[0]?.message ||
          response?.message ||
          "Something went wrong!";
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.errors?.[0]?.message ||
          error?.response?.data?.message ||
          "Request failed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...field}
              />
              {errors.email && (
                <p className="text-red-500 text-sm -mt-4 mb-4">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="flex justify-center gap-4">
          <Link
            className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
            to={ROUTES.LOGIN}
          >
            Back
          </Link>

          <Button
            loading={isLoading}
            className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
