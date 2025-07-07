import React from 'react'
import NewPasswordForm from './NewPasswordForm';
import logo from "../../../assets/logo.svg";
import newpassword from "../../../assets/newpassword.png"

const NewPassword = () => {
  return (
     <div className="flex md:flex-row flex-col items-center bg-white justify-center p-5 gap-10">
      <div className="w-1/2 ">
        <img src={newpassword} alt="loginImg" className="rounded-2xl max-w-[645px]"/>
      </div>
      <div className="md:w-[43.5%] w-full md:max-w-[508px] mx-auto">
        <img src={logo} alt="logoImg" className="max-w-[285px] mx-auto min-h-[29px] mb-14"/>
        <h2 className="lg:text-[32px] md:text-[30px] text-[28px] font-bold  mb-8 text-center">Create your New Password</h2>
        <NewPasswordForm/>
      </div>
    </div>
  )
}

export default NewPassword
