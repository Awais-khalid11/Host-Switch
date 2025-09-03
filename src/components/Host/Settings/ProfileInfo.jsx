import React, { useState, useEffect } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { UserPNG } from "../../../constants/Imgs";
import { putData, getData } from "../../../api/apiClient";
import { toast } from "react-toastify";
import useRoleStore from "../../../store/useRoleIdStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SkeletonCard from "../../Skeleton/SkeletonCard";

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: null,
    gender: "",
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
          dob: userData.birth_date ? new Date(userData.birth_date) : null,
          gender: userData.gender || "",
          imageUrl: userData.image || UserPNG,
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
      formDataObj.append(
        "birth_date",
        formData.dob ? formData.dob.toISOString().split("T")[0] : ""
      );
      formDataObj.append("gender", formData.gender);
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
  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="mb-3">
        <h4 className="text-lg font-bold mb-4 text-[#414651]">Profile Info</h4>

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
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <InputField
            label="Full Name"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            fieldName="w-full"
            placeholder="Sara Ava"
          />

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="w-full sm:flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date of Birth
              </label>
              <DatePicker
                selected={formData.dob}
                onChange={(date) =>
                  setFormData((prev) => ({ ...prev, dob: date }))
                }
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Date of Birth"
                className="border rounded-md border-gray-300 px-3 py-2.5 text-sm w-full"
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                wrapperClassName="w-full"
              />
            </div>
            <div className="w-full sm:flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border rounded-md border-gray-300 px-3 py-2.5 w-full bg-white text-sm appearance-none  transition-colors"
                >
                  <option value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button
            onClick={handleSubmit}
            variant="defaultBtn"
            className="bg-[#4D72FF] text-white font-medium h-[46px] md:w-[160px] w-full hover:bg-[#3A5BD9] transition-colors text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
