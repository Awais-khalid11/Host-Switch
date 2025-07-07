import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Auths/Login/Login'
import Password from './components/Auths/Password/Password'
import Otp from './components/Auths/Otp/Otp'
import NewPassword from './components/Auths/NewPassword/NewPassword'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/password" element={<Password />}/>
        <Route path="/otp" element={<Otp />}/>
        <Route path="/newpassword" element={<NewPassword />}/>
      </Routes>
    </>
  )
}

export default Router
