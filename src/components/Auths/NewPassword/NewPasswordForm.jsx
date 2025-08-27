import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import PasswordModal from "../../Modal/PasswordModal";
import { Thumbsup } from "../../../constants/Icons";
import { ROUTES } from "../../../constants/Routes";
import { PasswordmodalPNG } from "../../../constants/Imgs";
import { postData } from "../../../api/apiClient";

const schema = z
  .object({
    new_password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const id = localStorage.getItem("userID");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await postData(`/auth/reset/${id}`, {
        password: formData.new_password,
      });

      if (response?.success) {
        setShowModal(true);
      } else {
        toast.error(
          response?.errors?.[0]?.message ||
            response?.message ||
            "Password update failed"
        );
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.errors?.[0]?.message ||
          error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="new_password"
        render={({ field }) => (
          <div>
            <InputField
              id="new_password"
              label="New Password"
              type="password"
              placeholder="*************"
              InputClass="h-[56px]"
              {...field}
            />
            {errors.new_password && (
              <p className="text-red-500 text-sm -mt-6">
                {errors.new_password.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="confirm_password"
        render={({ field }) => (
          <div>
            <InputField
              id="confirm_password"
              label="Confirm Password"
              type="password"
              placeholder="*************"
              InputClass="h-[56px]"
              {...field}
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm -mt-6">
                {errors.confirm_password.message}
              </p>
            )}
          </div>
        )}
      />

      <div className="flex gap-4">
        <Link
          className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
          to={ROUTES.OTP}
        >
          Back
        </Link>
        <Button
          type="submit"
          variant="defaultBtn"
          loading={isLoading}
          className="mb-5 w-full md:py-[16px] rounded-[8px]"
        >
          Save
        </Button>
      </div>

      {showModal && (
        <Modal
          modalTitle="Password has been updated"
          modalText="Please press sign in to continue"
          modalImg={Thumbsup}
          onClose={() => {
            setShowModal(false);
            navigate(ROUTES.LOGIN);
          }}
          width="384px"
          height="238px"
          useBgImage={true}
          showModalIcon={true}
          showTitle={true}
          showText={true}
          updateClass="px-5 pt-15"
          ModalbgClass={PasswordmodalPNG}
        >
          <PasswordModal />
        </Modal>
      )}
    </form>
  );
};

export default NewPasswordForm;
