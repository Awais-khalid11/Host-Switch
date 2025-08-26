import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { putData } from "../../../api/apiClient";
import { toast } from "react-toastify";
import useRoleStore from "../../../store/useRoleIdStore";

const Security = () => {
  const [password, setPassword] = useState(""); // old password
  const [password1, setPassword1] = useState(""); // new password
  const [password2, setPassword2] = useState(""); // confirm password
  const [loading, setLoading] = useState(false);
  const { user } = useRoleStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !password1 || !password2) {
      toast.error("All fields are required");
      return;
    }

    if (password1 !== password2) {
      toast.error("New password and confirmation do not match");
      return;
    }

    try {
      setLoading(true);

      await putData(`/user/${user.id}`, {
        old_password: password,
        new_password: password1,
        c_password: password2,
      });

      toast.success("Password updated successfully");

      setPassword("");
      setPassword1("");
      setPassword2("");
    } catch (error) {
      console.error("Password update failed:", error);
      if (error.response?.data?.errors) {
        error.response.data.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Failed to update password!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-[#E9EAEB] rounded-[12px] p-5">
      <h5 className="text-[18px] font-bold mb-8">Update Your Password</h5>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Current Password"
          type="password"
          id="password"
          placeholder="***********"
          value={password}
          fieldName="w-[100%]"
          onChange={(e) => setPassword(e.target.value)}
          asterisk={false}
        />
        <InputField
          label="New Password"
          type="password"
          id="password1"
          placeholder="***********"
          value={password1}
          fieldName="w-[100%]"
          onChange={(e) => setPassword1(e.target.value)}
          asterisk={false}
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="password2"
          placeholder="***********"
          value={password2}
          fieldName="w-[100%]"
          onChange={(e) => setPassword2(e.target.value)}
          asterisk={false}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[50px] w-[160px]"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Password"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Security;
