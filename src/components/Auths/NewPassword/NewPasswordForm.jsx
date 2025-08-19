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

// Schema Validation
const schema = z.object({
  old_password: z.string().min(1, "Old password is required"),
  new_password: z.string().min(8, "New password must be at least 8 characters"),
});

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const resetToken = localStorage.getItem("resetToken");
  // console.log("resetToken", 432575);

  const id = localStorage.getItem("userID");
  console.log("id", id);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      old_password: "",
      new_password: "",
    },
  });

  const onSubmit = (formData) => {};

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Old Password */}
      <Controller
        control={control}
        name="old_password"
        render={({ field }) => (
          <div>
            <InputField
              id="old_password"
              label="Password"
              type="password"
              placeholder="*************"
              InputClass="h-[56px]"
              {...field}
            />
            {errors.old_password && (
              <p className="text-red-500 text-sm -mt-6">
                {errors.old_password.message}
              </p>
            )}
          </div>
        )}
      />

      {/* New Password */}
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

      {/* Buttons */}
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
          className="mb-5 w-full md:py-[16px] rounded-[8px]"
        >
          Save
        </Button>
      </div>

      {/* Success Modal */}
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
