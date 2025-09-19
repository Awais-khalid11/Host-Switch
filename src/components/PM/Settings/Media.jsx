import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import FileUpload from "../../UploadFile/UploadFile";
import { getData, putData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const Media = () => {
  const [media, setMedia] = useState({
    logo: [],
    officePhotos: [],
    introVideo: [],
  });
  const [existingMedia, setExistingMedia] = useState({
    logo: [],
    officePhotos: [],
    introVideo: [],
  });
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    try {
      const res = await getData("/auth/property-manager/profile");

      if (res?.payload) {
        const payload = res.payload;

        setExistingMedia({
          logo: payload.company_logo
            ? [
                {
                  path: payload.company_logo,
                  originalname: payload.company_logo,
                },
              ]
            : [],
          officePhotos: payload.expectation_preference?.office_photos
            ? Array.isArray(payload.expectation_preference.office_photos)
              ? payload.expectation_preference.office_photos.map((photo) => ({
                  path: photo,
                  originalname: photo,
                }))
              : [
                  {
                    path: payload.expectation_preference.office_photos,
                    originalname: payload.expectation_preference.office_photos,
                  },
                ]
            : [],
          introVideo: payload.expectation_preference?.video
            ? [
                {
                  path: payload.expectation_preference.video,
                  originalname: payload.expectation_preference.video,
                },
              ]
            : [],
        });

        setMedia({
          logo: [],
          officePhotos: [],
          introVideo: [],
        });
      }
    } catch (err) {
      console.error("Failed to fetch profile:", err);
      toast.error("Failed to load media.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleFileChange = (key, files) => {
    setMedia((prev) => ({
      ...prev,
      [key]: files,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();

    if (media.logo.length > 0) {
      media.logo.forEach((file) => {
        if (file instanceof File) formData.append("company_logo", file);
      });
    }

    if (media.officePhotos.length > 0) {
      media.officePhotos.forEach((file) => {
        if (file instanceof File) formData.append("office_photos", file);
      });
    }

    if (media.introVideo.length > 0) {
      media.introVideo.forEach((file) => {
        if (file instanceof File) formData.append("video", file);
      });
    }

    try {
      await putData("/auth/property-manager/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Media updated successfully!");
      fetchProfile();
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update media.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="flex items-center gap-2.5 mb-3">
        <h4 className="text-[18px] font-bold mb-6 text-[#181D27]">
          Media & Branding
        </h4>
      </div>
      <div className="flex gap-x-3 flex-wrap">
        <FileUpload
          label="Logo Upload"
          value={media.logo.length > 0 ? media.logo : existingMedia.logo}
          onChange={(files) => handleFileChange("logo", files)}
        />
        <FileUpload
          label="Office Photos"
          value={
            media.officePhotos.length > 0
              ? media.officePhotos
              : existingMedia.officePhotos
          }
          onChange={(files) => handleFileChange("officePhotos", files)}
        />
        <FileUpload
          label="Introduction Video"
          value={
            media.introVideo.length > 0
              ? media.introVideo
              : existingMedia.introVideo
          }
          onChange={(files) => handleFileChange("introVideo", files)}
        />
      </div>
      <div className="flex justify-end mt-4">
        <Button
          variant="defaultBtn"
          loading={loading}
          onClick={handleSubmit}
          className="bg-[#4D72FF] text-white font-normal h-[50px] w-[160px]"
        >
          Update Media
        </Button>
      </div>
    </div>
  );
};

export default Media;
