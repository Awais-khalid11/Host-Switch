import React from 'react'
import Button from '../Button/Button'
import { BackarrowSVG, WhitearrowSVG } from '../../constants/Icons'
import { ROUTES } from '../../constants/Routes'
import { useNavigate } from 'react-router-dom'

const FeedbackModal = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center'>
      <Button variant="defaultBtn" className="border border-white bg-white text-black px-6 py-4 !w-[250px]" prefixImg={BackarrowSVG} onClick={()=>navigate(ROUTES.HOSTDASHBOARD)}>
          Return to Dashboard
        </Button>
    </div>
  )
}

export default FeedbackModal
