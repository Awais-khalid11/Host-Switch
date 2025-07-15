import React from 'react'
import Button from '../Button/Button'
import { BackarrowSVG, CrossSVG, EyeSVG } from '../../constants/Icons'
import { useNavigate } from 'react-router-dom'
import PaidID from './PaidID'
import PaidMethod from './PaidMethod'

const PaidInvoice = () => {
    const navigate = useNavigate()
  return (
    <div className="pb-2.5 pt-5">
       <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-2xl flex items-center gap-2">
          <img src={BackarrowSVG} alt="img" className="cursor-pointer" onClick={()=>navigate(-1)}/> Invoice Summary
        </h2>
        <div className="flex items-center gap-2.5">
            <Button variant="borderbtn" className="border-[#555555] text-[12px] text-[#555555] w-[157px]" prefixImg={EyeSVG}>View All Invoices</Button>
        </div>
      </div>
      <PaidID/>
      <PaidMethod/>
    </div>
  )
}

export default PaidInvoice
