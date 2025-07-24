import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/Routes'

const ProposalModal = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center'>
        <Button variant="defaultBtn" className="border border-white bg-white text-black px-6 py-4 w-full md:w-[339px] md:mt-0 mt-3" onClick={()=>navigate(ROUTES.PROPOSALS)}>
         View My Proposal
        </Button>
    </div>
  )
}

export default ProposalModal
