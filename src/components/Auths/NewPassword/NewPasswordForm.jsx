import React, { useState } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import PasswordModal from "../../Modal/PasswordModal";
import { Thumbsup } from "../../../Constants/Icons";
import { useNavigate } from "react-router-dom";

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
          <Button variant="graybtn" className="mb-5 w-[30%]" onClick={()=>navigate("/password")}>
            Back
          </Button>
          <Button
            variant="defaultBtn"
            className="mb-5 w-[70%] md:py-[16px] rounded-[8px]"
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

// import { useState } from "react";
// import Button from "./Button"; // assuming this is your custom button
// import Modal from "./Modal";
// import VideoModal from "./VideoModal";

// const YourComponent = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <Button
//         variant="defaultBtn"
//         className="mb-5 w-[70%] md:py-[16px] rounded-[8px]"
//         onClick={() => setShowModal(true)} // 👈 handle click here
//       >
//         Save
//       </Button>

//       {showModal && (
//         <Modal
//           modelTitle="Add Video Message"
//           onClose={() => setShowModal(false)} // 👈 allow closing modal
//         >
//           <VideoModal />
//         </Modal>
//       )}
//     </>
//   );
// };
