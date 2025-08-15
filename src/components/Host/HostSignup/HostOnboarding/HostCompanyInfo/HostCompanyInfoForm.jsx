import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../constants/Routes";
import CheckBox from "../../../../CheckBox/CheckBox";
import InputField from "../../../../InputField/InputField";
import Button from "../../../../Button/Button";
import MultiCheckboxDropdown from "../../../../Auths/Onboarding/Portfolio/MultiCheckboxDropdown";
import useTantanstackClient from "../../../../../hook/useTantanstackClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneNumber from "../../../../PhoneNumber/PhoneNumber";
import useRoleStore from "../../../../../store/useRoleIdStore";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").min(1, "Email is required"),
    number: z
      .string()
      .min(7, "Phone number too short")
      .regex(/^[0-9]+$/, "Phone number must be numeric"),
    password: z.string().min(6, "Password too short"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
    designation: z.string().min(1, "Designation is required"),
    cleaningHandledBy: z
      .array(z.string())
      .min(1, "Please select at least one option"),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the Terms & Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const HostCompanyInfoForm = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const { roleId } = useRoleStore();
  console.log("the role id is", roleId)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
      designation: "",
      role_id: roleId,
      cleaningHandledBy: [],
      terms: false,
    },
  });

  const { mutate, isPending } = useTantanstackClient.usePostMutation(
    ["register"],
    "/auth/register",
    null,
    {
      onSuccess: (data) => {
        console.log("signup response:", data);
        navigate(ROUTES.HOSTPORTFOLIO);
        removeRoleId();
      },
      onError: (error) => {
        toast.error(error.message || "Signup failed");
      },
    }
  );

  const onSubmit = (formData) => {
    formData.role_id = roleId
    console.log("Submitting data:", formData);
    mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:px-0 px-2.5">
      

      {/* Full Name */}
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <div className="mb-5">
            <InputField
              {...field}
              label="Full Name"
              id="name"
              type="text"
              fieldName="w-full"
              placeholder="Enter your full name"
              asterisk={true}
            />
            {errors.name && (
              <p className="text-red-500 text-sm -mt-6">
                {errors.name.message}
              </p>
            )}
          </div>
        )}
      />

      {/* Email & Phone */}
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <div className="md:w-1/2 w-full">
              <InputField
                {...field}
                label="Email Address"
                id="email"
                type="email"
                fieldName="w-full"
                placeholder="Enter your email address"
                asterisk={true}
              />
              {errors.email && (
                <p className="text-red-500 text-sm -mt-6">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <div className="md:w-1/2 w-full">
              <PhoneNumber
                name="number"
                label="Phone"
                control={control}
                required={true}
                defaultCountry="se"
                onChange={(value) => field.onChange(value)}
              />
              {errors.number && (
                <p className="text-red-500 text-sm -mt-5">
                  {errors.number.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      {/* Password & Confirm */}
      <div className="flex md:flex-nowrap flex-wrap items-center gap-5 mb-5">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div className="md:w-1/2 w-full">
              <InputField
                {...field}
                label="Password"
                id="password"
                type="password"
                fieldName="w-full"
                InputClass="h-[56px]"
                placeholder="*************"
                asterisk={true}
              />
              {errors.password && (
                <p className="text-red-500 text-sm -mt-6">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <div className="md:w-1/2 w-full">
              <InputField
                {...field}
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                fieldName="w-full"
                InputClass="h-[56px]"
                placeholder="*************"
                asterisk={true}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm -mt-6">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <Controller
        name="designation"
        control={control}
        render={({ field }) => (
          <div className="mb-5">
            <InputField
              {...field}
              label="Designation"
              id="designation"
              type="text"
              fieldName="w-full"
              placeholder="Designation"
              asterisk={true}
            />
            {errors.designation && (
              <p className="text-red-500 text-sm -mt-6">
                {errors.designation.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        name="cleaningHandledBy"
        control={control}
        render={({ field }) => (
          <div className="mb-5">
            <MultiCheckboxDropdown
              label="Number of Properties Seeking Management"
              options={["Single Property", "Multiple Properties/ Portfolio"]}
              placeholder="Select"
              selectedValues={field.value}
              setSelectedValues={field.onChange}
              className="mb-5"
              dropdownKey="clean"
              isOpen={openDropdown === "clean"}
              setOpenDropdown={setOpenDropdown}
              isMulti={false}
            />
            {errors.cleaningHandledBy && (
              <p className="text-red-500 text-sm -mt-4">
                {errors.cleaningHandledBy.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        name="terms"
        control={control}
        render={({ field }) => (
          <div className="mb-8">
            <CheckBox
              {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              label={
                <>
                  I agree to the
                  <span className="text-[#0050B3] ml-1 cursor-pointer">
                    Terms & Conditions
                  </span>
                </>
              }
              error={errors.terms?.message}
            />
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1.5">
                {errors.terms.message}
              </p>
            )}
          </div>
        )}
      />

      <div className="flex md:gap-4 gap-2">
        <Link
          className="mb-5 w-[30%] bg-[#2525251A] rounded-[8px] text-[#2525254d] flex items-center justify-center font-black"
          to={ROUTES.ROLESELECTION}
        >
          Back
        </Link>
        <Button
          type="submit"
          disabled={isPending}
          className="mb-5 md:w-[70%] w-full md:py-[16px] py-2.5 text-center text-white text-base font-bold rounded-[8px] bg-[#4D72FF] disabled:opacity-50"
        >
          {isPending ? "Submitting..." : "Save & Continue"}
        </Button>
      </div>
    </form>
  );
};

export default HostCompanyInfoForm;
