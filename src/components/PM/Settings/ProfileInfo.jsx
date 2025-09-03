import React, { useState, useEffect } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { putData, getData } from "../../../api/apiClient";
import { toast } from "react-toastify";
import useRoleStore from "../../../store/useRoleIdStore";
import { UserPNG } from "../../../constants/Imgs";
import SkeletonCard from "../../Skeleton/SkeletonCard";

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    image: null,
    imageUrl: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);
  const { user, setUser } = useRoleStore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user?.id) {
          setIsLoading(false);
          return;
        }

        const response = await getData(`/user/${user.id}`);
        const userData = response.payload;

        setFormData({
          name: userData.name || "",
          designation: userData.designation || "",
          email: userData.email || "",
          phone: userData.number || "",
          imageUrl: userData.image || UserPNG,
          image: null,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [user?.id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
        imageUrl: files[0] ? URL.createObjectURL(files[0]) : prev.imageUrl,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    setUpdateLoading(true);
    try {
      if (!user?.id) {
        toast.error("User ID not found!");
        return;
      }

      const formDataObj = new FormData();
      formDataObj.append("name", formData.name);
      formDataObj.append("designation", formData.designation);
      formDataObj.append("email", formData.email);
      formDataObj.append("number", formData.phone);
      if (formData.image) {
        formDataObj.append("image", formData.image);
      }

      const res = await putData(`/user/${user.id}`, formDataObj, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Profile updated successfully!");
      setUser(res.payload);

      setFormData((prev) => ({
        ...prev,
        imageUrl: res.payload.image || prev.imageUrl,
        image: null,
      }));
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setUpdateLoading(false);
    }
  };

  if (isLoading) {
    return (
      <SkeletonCard variant="card" count={1} hasImage hasButtons rows={2} />
    );
  }
  console.log(formData.image);
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="flex items-center gap-2.5 mb-3">
        <h4 className="text-base font-bold mb-4 text-[#414651]">
          Profile Information
        </h4>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <label htmlFor="image-upload" className="cursor-pointer">
            <img
              src={
                formData.imageUrl?.startsWith("blob:")
                  ? formData.imageUrl
                  : formData.imageUrl
                  ? `${import.meta.env.VITE_IMG_URL}${formData.imageUrl}`
                  : UserPNG
              }
              alt="Profile"
              className="w-[80px] h-[80px] rounded-full object-cover border border-gray-300"
              onError={(e) => {
                e.currentTarget.src = UserPNG;
              }}
            />

            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 hover:bg-blue-600 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0118.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            id="image-upload"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-x-3 flex-wrap">
          <InputField
            label="Full Name"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            fieldName="md:w-[49%] w-full"
            placeholder="Ahmed Ali"
          />
          <InputField
            label="Designation"
            id="designation"
            name="designation"
            type="text"
            value={formData.designation}
            onChange={handleChange}
            fieldName="md:w-[49%] w-full"
            placeholder="Operations Manager"
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fieldName="md:w-[49%] w-full"
            placeholder="ahmad323@gmail.com"
            disabled
          />
          <InputField
            label="Phone Number"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            fieldName="md:w-[49%] w-full"
            placeholder="03XX-XXXXXXX"
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button
            onClick={handleSubmit}
            variant="defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[50px] md:w-[160px] w-full hover:bg-[#3A5BD9] transition-colors text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={updateLoading}
            loading={updateLoading}
          >
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
