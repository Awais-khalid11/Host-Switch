import React from 'react'
import HostOnboardingStepper from '../HostOnboardingStepper';
import HostExpectationForm from "./HostExpectationForm";
import { LogoSVG } from '../../../../../constants/Icons';
import { HostpreferPNG } from '../../../../../constants/Imgs';


const HostExpectation = () => {
  return (
     <div className="flex md:flex-row flex-col items-center bg-white justify-between md:p-5 pr-3  gap-[30px]">
      <div className="hidden md:block w-1/2">
        <img src={HostpreferPNG} alt="loginImg" className="rounded-2xl w-full min-h-[759px]" />
      </div>
      <div className="md:w-1/2 w-full  hide-scrollbar h-[759px] overflow-y-auto">
        <img src={LogoSVG} alt="logoImg" className="max-w-[285px] mx-auto min-h-[29px] mb-10" />
        <HostOnboardingStepper/>
        <h2 className="lg:text-[32px] md:text-[30px] text-[25px] font-bold mb-4 text-center">
         Expectations & Preferences
        </h2>
        <HostExpectationForm />
      </div>
    </div>  )
}

export default HostExpectation
