import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import PasswordModal from "../../Modal/PasswordModal";
import { Thumbsup } from "../../../Constants/Icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";

const NewPasswordForm = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
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
          InputClass="h-[56px]"
        />
        <InputField
          label="Confirm Password"
          id="password"
          name="password"
          type="password"
          fieldName="w-full"
          placeholder="*************"
          InputClass="h-[56px]"
        />
        <div className="flex gap-4">
          <Button
            variant="graybtn"
            className="mb-5 w-[30%]"
            onClick={() => navigate(ROUTES.OTP)}
          >
            Back
          </Button>
          <Button
            variant="defaultBtn"
            className="mb-5 w-full md:py-[16px] rounded-[8px]"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Save
          </Button>

          {showModal && (
            <Modal
              modalTitle="Password has been updated"
              modalText="Please press sign in to continue"
              modalImg={Thumbsup}
              onClose={() => setShowModal(false)}
              width="384px"
              height="238px"
              useBgImage={true}
              showModalIcon={true}
              showTitle={true}
              showText={true}
              updateClass="px-5 pt-15"
            >
              <PasswordModal />
            </Modal>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPasswordForm;
