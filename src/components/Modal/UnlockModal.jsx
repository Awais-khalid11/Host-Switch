import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/Routes';

const UnlockModal = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div>
      <div className="flex justify-center md:mt-0 mt-2.5 sm:mb-0 mb-5 md:flex-nowrap flex-wrap items-center gap-2.5">
        <Button variant="defaultBtn" className="border border-white px-6 py-4 !w-[250px] h-[48px]" >
          May be Later
        </Button>
        <Button variant="whitebtn" className="px-6 py-4 !w-[250px]" onClick={()=>navigate(ROUTES.HOSTMYMATCHES)}>
         View All PM Matches
        </Button>
      </div>
    </div>
    </div>
  )
}

export default UnlockModal
