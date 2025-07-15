import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";

const Security = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <div className="border border-[#E9EAEB]  rounded-[12px] p-5">
      <h5 className="text-[18px] font-bold mb-8">Update Your Password</h5>
      <form>
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
            variant=" defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[50px] w-[160px]"
          >
            Save Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Security;
