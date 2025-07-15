import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import FileUpload from "../../UploadFile/UploadFile";

const ProfileInfo = () => {
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="flex items-center gap-2.5 mb-3">
        <h4 className="text-base font-bold mb-4 text-[#414651]">Profile Information</h4>
      </div>
      <div>
        <div className="flex gap-x-3 flex-wrap">
        <InputField
          label="Full Name"
          id="name"
          name="name"
          type="text"
          fieldName="md:w-[49%] w-full"
          placeholder="Ahmed Ali"
        />
        <InputField
          label="Designation"
          id="name"
          name="name"
          type="text"
          fieldName="md:w-[49%] w-full"
          placeholder="Operations Manager"
        />
        <InputField
          label="Email"
          id="email"
          name="email"
          type="email"
          fieldName="md:w-[49%] w-full"
          placeholder="ahmad323@gmail.com"
        />
        <InputField
          label="Phone Number"
          id="num"
          name="num"
          type="tel"
         fieldName="md:w-[49%] w-full"
          placeholder="03XX-XXXXXXX"
        />
      </div>
      <FileUpload label="Profile Picture"/>
      <div className="flex justify-end">
        <Button variant=" defaultBtn" className="bg-[#4D72FF] text-white font-normal h-[50px] md:w-[160px] w-full">Update Profile</Button>
      </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
