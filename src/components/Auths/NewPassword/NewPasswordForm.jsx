import React from 'react'
import InputField from '../../InputField/InputField'
import Button from '../../Button/Button'

const NewPasswordForm = () => {
  return (
    <div>
        <form className="space-y-5 ">
        <InputField
          label="Enter New Password"
          id="password"
          name="password"
          type="password"
          fieldName="w-full"
          placeholder="*************"
        />
        <InputField
          label="Confirm Password"
          id="password"
          name="password"
          type="password"
          fieldName="w-full"
          placeholder="*************"
        />
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
          Save
        </Button>
      </div>
      </form>
    </div>
  )
}

export default NewPasswordForm
