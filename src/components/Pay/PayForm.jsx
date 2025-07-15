import React, {useState} from "react";
import InputField from "../InputField/InputField";
import { CiCreditCard1 } from "react-icons/ci";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import ConfirmModal from "../Modal/ConfirmModal";
import { Thumbsup } from "../../constants/Icons";

const PayForm = () => {
      const [showModal, setShowModal] = useState(false);
    
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 pt-4">
      <h2 className="text-xl font-semibold mb-3.5">Payment Summary</h2>
      <form>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Cardholder Name"
            id="name"
            name="name"
            type="name"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter name"
          />
          <InputField
            label="Card Number"
            id="num"
            name="num"
            type="number"
            icon={CiCreditCard1}
            fieldName="md:w-1/2 w-full"
            placeholder="123-456-789-"
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap items-center md:gap-5">
          <InputField
            label="Expiry Date"
            id="date"
            name="date"
            type="date"
            fieldName="md:w-1/2 w-full"
            placeholder="MM/YY"
          />
          <InputField
            label="CVC"
            id="password"
            name="password"
            type="password"
            fieldName="md:w-1/2 w-full"
            icon={CiCreditCard1}
            placeholder=". . ."
          />
        </div>
        <div className="flex md:flex-nowrap flex-wrap items-center gap-5">
          <InputField
            label="Billing Email"
            id="email"
            name="email"
            type="email"
            fieldName="md:w-1/2 w-full"
            placeholder="smith@gmail.com"
          />
          <InputField
            label="Billing Address(optional)"
            id="address"
            name="address"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Enter billing address"
          />
        </div>
        <div className="flex justify-end">
          <Button
            variant=" defaultBtn"
            className="bg-[#4D72FF] text-sm text-white h-[48px] md:w-[183px] w-full"
             onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Confirm and Pay
          </Button>
          {showModal && (
            <Modal
              modalTitle="Payment Successful!"
              modalText="Thank you! Your payment has been received. A receipt has been sent to your email. This invoice is now marked as PAID in your dashboard."
              modalImg={Thumbsup}
              onClose={() => setShowModal(false)}
            >
              <ConfirmModal />
            </Modal>
          )}
        </div>
      </form>
    </div>
  );
};

export default PayForm;
