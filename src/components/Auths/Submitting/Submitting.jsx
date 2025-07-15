import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Portfolio2PNG,
  Portfolio3PNG,
  PortfolioPNG,
} from "../../../constants/Imgs";
import { BellSVG, LogoSVG } from "../../../Constants/Icons";

const Submitting = () => {
  const images = [PortfolioPNG, Portfolio2PNG, Portfolio3PNG];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        const nextIndex = index + 1;
        if (nextIndex < images.length) {
          setIndex(nextIndex);
          setFade(true); 
        } else {
          clearInterval(interval);
          navigate("/pm/dashboard");
        }
      }, 200); 
    }, 2000); 

    return () => clearInterval(interval);
  }, [index, navigate]);

  return (
    <div className="flex md:flex-row flex-col items-center bg-white justify-between p-5 gap-[30px]">
      <div className="w-[50%] transition-opacity duration-500">
        <img
          src={images[index]}
          alt="portfolio"
          className={`rounded-2xl w-full min-h-[759px] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="md:w-[50%] max-w-[448px] mx-auto w-full flex flex-col justify-center hide-scrollbar h-[759px] overflow-y-auto">
        <img
          src={LogoSVG}
          alt="logoImg"
          className="max-w-[285px] mx-auto min-h-[29px] mb-14"
        />
        <h2 className="lg:text-[30px] md:text-[25px] text-[22px] font-bold mb-4 text-center">
          Thank You for Submitting Your Information!
        </h2>
        <div className="text-center text-sm leading-6 mb-10">
          <p>Your profile is now under review. You won’t be able to log in or appear in matches until your verification is complete.</p>
        </div>
        <h4 className="text-center pl-6 py-2.5 text-sm bg-[#F2F7F9] rounded-[12px] flex items-center gap-2.5">
          <img src={BellSVG} alt="bellImg" />
          We’ll notify you via email once your account is active.
        </h4>
      </div>
    </div>
  );
};

export default Submitting;
