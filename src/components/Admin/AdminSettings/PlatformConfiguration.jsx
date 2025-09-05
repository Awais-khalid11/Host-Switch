import React, { useEffect } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getData, postData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const schema = z.object({
  name: z.string().min(1, "Platform name is required"),
  email: z.string().email("Invalid email address"),
  time: z.string().min(1, "Time Zone is required"),
  price: z.string().min(1, "Currency is required"),
  pm: z.string().min(1, "Commission is required"),
});

const PlatformConfiguration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      time: "",
      price: "",
      pm: "",
    },
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await getData("/systemSetting");
        const records = response?.payload?.records || [];

        const mapped = {
          name: records.find((r) => r.key === "platform_name")?.value || "",
          email: records.find((r) => r.key === "email_address")?.value || "",
          time: records.find((r) => r.key === "time_zone")?.value || "",
          price:
            records.find((r) => r.key === "platform_currency")?.value || "",
          pm: records.find((r) => r.key === "commission_from_pm")?.value || "",
        };

        reset(mapped);
      } catch (error) {
        console.error("Failed to fetch system settings:", error);
        toast.error("Failed to load settings");
      }
    };

    fetchSettings();
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      const payload = [
        { key: "platform_name", value: data.name },
        { key: "email_address", value: data.email },
        { key: "time_zone", value: data.time },
        { key: "platform_currency", value: data.price },
        { key: "commission_from_pm", value: data.pm },
      ];

      const response = await postData("/systemSetting", payload);
      toast.success("Platform configuration updated successfully!");
      console.log("API Response:", response);
    } catch (error) {
      console.error("API Error:", error);
      toast.error(error.message || "Failed to update settings");
    }
  };

  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Platform Configuration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-3">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Platform Name"
                id="name"
                type="text"
                fieldName="md:w-1/2 w-full"
                placeholder="HOSTSWITCH"
                error={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Email Address"
                id="email"
                type="email"
                fieldName="md:w-1/2 w-full"
                placeholder="hostswitch23@gmail.com"
                error={errors.email?.message}
              />
            )}
          />
        </div>

        <div className="flex items-center gap-3">
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Time Zone"
                id="time"
                type="text"
                fieldName="md:w-1/2 w-full"
                placeholder="GMT (UTC+0) — UK Standard Time"
                error={errors.time?.message}
              />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Platform Currency"
                id="price"
                type="text"
                fieldName="md:w-1/2 w-full"
                placeholder="£49.99"
                error={errors.price?.message}
              />
            )}
          />
        </div>

        <Controller
          name="pm"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              label="Commission % from PM"
              id="pm"
              type="text"
              fieldName="w-full"
              placeholder="4% of first year’s projected revenue"
              error={errors.pm?.message}
            />
          )}
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[44px] md:w-[152px] w-full"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PlatformConfiguration;
