import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import { OtpPNG } from "../../../constants/Imgs";
import { LogoSVG } from "../../../Constants/Icons";
import { ROUTES } from "../../../constants/Routes";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import useTantanstackClient from "../../../hook/useTantanstackClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  otp: z.string().min(4, "OTP must be 4 digits"),
});

const Otp = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("userID");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      otp: "",
    },
  });

  const loginMutation = useTantanstackClient.usePostMutation(
    ["otp"],
    `/auth/verify/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      onSuccess: (data) => {
        console.log("SUCCESS", data);
        console.log("Login response token:", data?.resetToken);
        if (data) {
          toast.success("Entered Successfully");
          navigate("/newpassword");
        } else {
          toast.error("Token not received");
        }
        localStorage.setItem("resetToken", data?.resetToken);
      },
      onError: (error) => {
        console.log("ERROR", error);
        toast.error(error?.message || "OTP verification failed");
      },
    }
  );

  const onSubmit = (data) => {
    console.log("SUBMITTING", data);
    loginMutation.mutate({ otp: data.otp });
  };

  return (
    <div className="flex md:flex-row flex-col gap-[40px] items-center bg-white justify-center md:p-5 md:!pr-10 p-2.5">
      <div className="md:w-1/2 hidden md:block w-full">
        <img src={OtpPNG} alt="otpImg" className="rounded-2xl w-full" />
      </div>

      <div className="md:w-1/2 w-full">
        <img
          src={LogoSVG}
          alt="logoImg"
          className="md:max-w-[285px] max-w-[180px] mx-auto min-h-[29px] mb-9 md:mb-14"
        />
        <h2 className="lg:text-[40px] md:text-[30px] text-[28px] md:mb-2 mb-1 font-bold text-center text-[#2F3542]">
          Please Check Your Email
        </h2>
        <span className="font-medium text-center text-sm max-w-[428px] text-[#252525CC] mb-12 mx-auto block">
          We’ve sent a 6-digit code to +1 (XXX) XXX-XXXX. Enter it below to
          verify your number
        </span>

        <div className="text-sm font-medium text-center mb-5">
          <p>Enter your verification code.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mb-5">
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <OTPInput
                  value={field.value}
                  onChange={field.onChange}
                  numInputs={4}
                  inputStyle={{
                    width: isMobile ? "35px" : "55px",
                    height: isMobile ? "35px" : "55px",
                    margin: "0 2px",
                    fontSize: isMobile ? "18px" : "40px",
                    fontWeight: "500",
                    borderRadius: "8px",
                    border: "1px solid #E5E5E5",
                    background: "white",
                    textAlign: "center",
                  }}
                  renderInput={(props) => <input {...props} />}
                />
              )}
            />
          </div>

          {errors.otp && (
            <p className="text-red-500 text-sm text-center -mt-4">
              {errors.otp.message}
            </p>
          )}

          <div className="flex gap-4 justify-center mt-10">
            <Button
              variant="graybtn"
              className="mb-5 w-[30%]"
              onClick={() => navigate(ROUTES.PASSWORD)}
            >
              Back
            </Button>
            <Button
              variant="defaultBtn"
              className="mb-5 w-full md:py-[16px] rounded-[8px]"
              type="submit"
            >
              Verify
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
