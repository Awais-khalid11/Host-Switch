import React from 'react'
import { PreferPNG } from "../../../../constants/Imgs";
import { LogoSVG } from "../../../../Constants/Icons";
import OnboardingStepper from "../OnboardingStepper"; 
import ExpectationForm from './ExpectationForm';


const Expectation = () => {
  return (
     <div className="flex md:flex-row flex-col items-center bg-white justify-between p-2.5 gap-[50px]">
      <div className="hidden md:block w-1/2">
        <img src={PreferPNG} alt="loginImg" className="rounded-2xl max-w-[645px]" />
      </div>
      <div className="md:w-1/2 w-full pt-10 hide-scrollbar h-[759px] overflow-y-auto">
        <img src={LogoSVG} alt="logoImg" className="max-w-[285px] mx-auto min-h-[29px] mb-10" />
        <OnboardingStepper/>
        <h2 className="lg:text-[32px] md:text-[30px] text-[25px] font-bold mb-4 text-center">
         Expectations & Preferences
        </h2>
        <ExpectationForm/>
      </div>
    </div>
  )
}

export default Expectation
