import React, {useState} from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import CheckBox from "../../CheckBox/CheckBox";

const InvoicePaymentSettings = () => {
  const [agreed, setAgreed] = useState(false);
  const [yard, setYard] = useState(false);
  const [pool, setPool] = useState(false);


  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Invoice & Payment Settings</h2>
      <form>
        <div className="flex items-center gap-3 ">
          <InputField
            label="Stripe Integration Key"
            id="name"
            name="name"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="(Encrypted input field)"
          />
          <InputField
            label="Invoice Terms"
            id="days"
            name="days"
            type="text"
            fieldName="md:w-1/2 w-full"
            placeholder="Due in 7 days"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold mb-2.5">Reminder Frequency</h3>
          <div className="border border-[#2F354233] bg-[#FAFAFA] px-4 py-8 rounded-[8px] mb-6">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-5 ">
              <CheckBox
                name="terms"
                id="terms"
                label="1 Day Before Due"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <CheckBox
                name="pool"
                id="pool"
                label="1 Day Before Due"
                checked={pool}
                onChange={(e) => setPool(e.target.checked)}
              />
              <CheckBox
                name="yard"
                id="yard"
                label="3 Days After Due"
                checked={yard}
                onChange={(e) => setYard(e.target.checked)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            variant=" defaultBtn"
            className="bg-[#4D72FF] text-white font-normal h-[44px] md:w-[152px] w-full"
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InvoicePaymentSettings;
