import React, { useState, useEffect } from "react";
import OTPInput from "react-otp-input";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../Button/Button";
import { OtpPNG } from "../../../constants/Imgs";
import { LogoSVG } from "../../../Constants/Icons";

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [from, setFrom] = useState("unknown");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (location.state?.from) {
      setFrom(location.state.from);
    }
  }, [location]);

  const handleClick = (e) => {
    e.preventDefault();

    if (from === "login") {
      navigate("/admin-dashboard");
    } else if (from === "signup") {
      navigate("/vault");
    } else {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="flex md:flex-row flex-col gap-[30px] items-center bg-white justify-center p-2.5">
      <div className="w-1/2 ">
         <img src={OtpPNG} alt="otpImg" className="rounded-2xl max-w-[645px]"/>
      </div>
      <div className="w-1/2 font-bold">
        <img src={LogoSVG} alt="logoImg" className="max-w-[285px] mx-auto min-h-[29px] mb-14"/>
        <h2 className="lg:text-[40px] md:text-[30px] text-[28px] md:mb-2 mb-1 font-bold text-center text-[#2F3542]">
          Please Check Your Email
        </h2>
        <span className="font-medium text-center text-sm max-w-[428px] text-[#252525CC] mb-12 mx-auto block">
          We’ve sent a 6-digit code to +1 (XXX) XXX-XXXX. Enter it below to verify your number
        </span>

        <div className="text-sm font-medium font_Kumbh text-center mb-5"><p>Enter your verification code.</p></div>
        <div className="flex justify-center mb-5">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
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
        </div>

       <div className="flex gap-4">
        <Button
          variant="graybtn"
          className="mb-5 w-[30%]"
        >
         Back
        </Button>
        <Button
          variant="defaultBtn"
          className="mb-5 w-[70%] md:py-[16px] rounded-[8px] hover:none"
        >
          Verify
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Otp;
