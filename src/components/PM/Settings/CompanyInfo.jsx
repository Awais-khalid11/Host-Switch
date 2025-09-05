import React, { useEffect, useState } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { getData, putData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const CompanyInfo = () => {
  const [formValues, setFormValues] = useState({
    businessName: "",
    businessAddress: "",
    // companyBio: "",
    companyType: "",
    googleReviewLink: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getData("/auth/property-manager/profile");
        if (res?.payload) {
          setFormValues({
            businessName: res.payload?.business_name || "",
            businessAddress: res.payload?.business_address || "",
            // companyBio: res.payload?.bio || "",
            companyType: res.payload?.business_type || "",
            googleReviewLink:
              res.payload?.expectation_preference?.yelp_google_reviews_link ||
              "",
          });
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // ✅ Flat keys for company info
    formData.append("business_name", formValues.businessName);
    formData.append("business_address", formValues.businessAddress);
    // formData.append("bio", formValues.companyBio);
    formData.append("business_type", formValues.companyType);

    // ✅ Expectation namespace only for review link
    formData.append(
      "expectation_preference[yelp_google_reviews_link]",
      formValues.googleReviewLink
    );

    try {
      await putData("/auth/property-manager/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Company Info updated successfully!");

      // 🔄 Re-fetch to show updated data
      const res = await getData("/auth/property-manager/profile");
      if (res?.payload) {
        setFormValues({
          businessName: res.payload?.business_name || "",
          businessAddress: res.payload?.business_address || "",
          // companyBio: res.payload?.bio || "",
          companyType: res.payload?.business_type || "",
          googleReviewLink: res.payload?.yelp_google_reviews_link || "",
        });
      }
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update Company Info.");
    }
  };

  return (
    <div className="bg-white border border-[#E9EAEB] rounded-[12px] py-4 px-5">
      <div className="flex items-center gap-2.5 mb-3">
        <h4 className="text-[18px] font-bold md:mb-6 mb-3 text-[#181D27]">
          Company Profile
        </h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-3 flex-wrap">
          <InputField
            label="Company Name"
            id="businessName"
            name="businessName"
            type="text"
            fieldName="md:w-[49%] w-full"
            value={formValues.businessName}
            onChange={handleChange}
            placeholder="StayPro Management"
          />
          <InputField
            label="Office Location"
            id="businessAddress"
            name="businessAddress"
            type="text"
            fieldName="md:w-[49%] w-full"
            value={formValues.businessAddress}
            onChange={handleChange}
            placeholder="4517 Washington Ave. Manchester,"
          />
          {/* <InputField
            label="Company Bio"
            id="companyBio"
            name="companyBio"
            type="text"
            fieldName="md:w-[49%] w-full"
            value={formValues.companyBio}
            onChange={handleChange}
            placeholder="“We help property owners maximize revenue”"
          /> */}
          <InputField
            label="Company Type"
            id="companyType"
            name="companyType"
            type="text"
            fieldName="md:w-[49%] w-full"
            value={formValues.companyType}
            onChange={handleChange}
            placeholder="Solo"
          />
        </div>
        <InputField
          label="Google Review Link"
          id="googleReviewLink"
          name="googleReviewLink"
          type="text"
          fieldName="w-full"
          value={formValues.googleReviewLink}
          onChange={handleChange}
          placeholder="http://google.review.com"
        />
        <div className="flex justify-end">
          <Button
            variant="defaultBtn"
            type="submit"
            className="bg-[#4D72FF] text-white font-normal h-[44px] md:w-[195px] w-full"
          >
            Update Company Info
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
