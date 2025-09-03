import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { putData } from "../../../api/apiClient";
import { toast } from "react-toastify";
import useRoleStore from "../../../store/useRoleIdStore";
import { Controller, useForm } from "react-hook-form";

const Security = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      password: "",
      password1: "",
      password2: "",
    },
  });

  const { user } = useRoleStore();
  const newPassword = watch("password1");

  const onSubmit = async (data) => {
    try {
      await putData(`/user/${user.id}`, {
        old_password: data.password,
        new_password: data.password1,
        c_password: data.password2,
      });

      toast.success("Password updated successfully");
      reset();
    } catch (error) {
      console.error("Password update failed:", error);
    }
  };

  return (
    <div className="border border-[#E9EAEB] rounded-[12px] p-5">
      <h5 className="text-[18px] font-bold mb-8">Update Your Password</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Current password is required" }}
          render={({ field }) => (
            <InputField
              label="Current Password"
              type="password"
              id="password"
              placeholder="***********"
              value={field.value}
              fieldName="w-[100%]"
              onChange={field.onChange}
              asterisk={false}
            />
          )}
        />
        {errors.password && (
          <p className="text-red-500 text-sm -mt-6 mb-4">
            {errors.password.message}
          </p>
        )}
        <Controller
          name="password1"
          control={control}
          rules={{
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field }) => (
            <InputField
              label="New Password"
              type="password"
              id="password1"
              placeholder="***********"
              value={field.value}
              fieldName="w-[100%]"
              onChange={field.onChange}
              asterisk={false}
              error={errors.password1?.message}
            />
          )}
        />
        {errors.password1 && (
          <p className="text-red-500 text-sm -mt-6 mb-3">
            {errors.password1.message}
          </p>
        )}

        <Controller
          name="password2"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) =>
              value === newPassword || "Passwords do not match",
          }}
          render={({ field }) => (
            <InputField
              label="Confirm Password"
              type="password"
              id="password2"
              placeholder="***********"
              value={field.value}
              fieldName="w-[100%]"
              onChange={field.onChange}
              asterisk={false}
              error={errors.password2?.message}
            />
          )}
        />
        {errors.password2 && (
          <p className="text-red-500 text-sm -mt-6">
            {errors.password2.message}
          </p>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            loading={isSubmitting}
            variant="defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[50px] w-[160px]"
          >
            {isSubmitting ? "Saving..." : "Save Password"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Security;
