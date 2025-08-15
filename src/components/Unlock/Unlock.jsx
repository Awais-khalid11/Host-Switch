import React, {useState} from "react";
import InputField from "../InputField/InputField";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCircleDot } from "react-icons/fa6";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { Thumbsup } from "../../constants/Icons";
import { ConfirmmodalPNG } from "../../constants/Imgs";
import UnlockModal from "../Modal/UnlockModal";

const lockCards = [
  {
    title: "One-Time Access — $49",
    desc: "Pay once, get full access to all PMs for this property match cycle. No recurring charges."
  },
  {
    title: "One-Time Access — $49",
    desc: "Pay once, get full access to all PMs for this property match cycle. No recurring charges."
  }
]

const Unlock = () => {
    const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Unlock Full Access</h2>
      <div className="p-5 border border-[#E4E5E8] rounded-[12px]">
        <div>
          <h3 className="text-xl font-semibold mb-3.5">Payment Details</h3>
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
          <div className="flex items-center gap-2.5 mb-5">
            {lockCards.map((item, index)=>(
              <div key={index} className="border border-[#DDDDDD] rounded-[12px] p-4">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold mb-2">{item.title}</h5>
                  <FaRegCircleDot size={"16px"}/>
                </div>
                <div className="text-sm font-normal text-[#323232]"><p>{item.desc}</p></div>
              </div>
            ))}
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
            Pay & Unlock Access
          </Button>
          {showModal && (
            <Modal
              modalTitle="“Your payment is confirmed!”"
              modalText="“You now have full access to all Property Managers available in your market. Explore unlimited matches, get faster responses, and enjoy priority support if needed.”"
              modalImg={Thumbsup}
              onClose={() => setShowModal(false)}
              showTitle={true}
              showText={true}
              updateClass="pt-18"
              ModalbgClass={ConfirmmodalPNG}
            >
              <UnlockModal />
            </Modal>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
