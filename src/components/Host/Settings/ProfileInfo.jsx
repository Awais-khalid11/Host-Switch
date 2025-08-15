import React from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import FileUpload from "../../UploadFile/UploadFile";
import { UserPNG } from "../../../constants/Imgs";

const ProfileInfo = () => {
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className=" mb-3">
        <h4 className="text-lg font-bold mb-4 text-[#414651]">Profile Info</h4>
        <div className="flex items-center gap-2 mb-3">
          <img src={UserPNG} alt="img" className="w-[52px] h-[52px] rounded-full"/>
          <h3 className="font-semibold font-base text-[#414651]">Company Profile</h3>
        </div>
      </div>
      <div>
        <div className="flex gap-x-3 flex-wrap">
          <InputField
            label="First Name"
            id="name"
            name="name"
            type="text"
            fieldName="md:w-[49%] w-full"
            placeholder="Sara"
          />
          <InputField
            label="Last Name"
            id="lname"
            name="lname"
            type="text"
            fieldName="md:w-[49%] w-full"
            placeholder="Ava"
          />
          <InputField
            label="Age"
            id="age"
            name="text"
            type="text"
            fieldName="md:w-[49%] w-full"
            placeholder="40 Years"
          />
          <InputField
            label="Gender"
            id="text"
            name="text"
            type="text"
            fieldName="md:w-[49%] w-full"
            placeholder="Female"
          />
        </div>
        <div className="flex justify-end">
          <Button
            variant=" defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[50px] md:w-[160px] w-full"
          >
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
