import React, { useState, useEffect } from "react";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import CheckBox from "../../CheckBox/CheckBox";
import { getData, postData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const InvoicePaymentSettings = () => {
  const [stripeKey, setStripeKey] = useState("");
  const [invoiceTerms, setInvoiceTerms] = useState("");
  const [reminders, setReminders] = useState({
    one_day_before: false,
    same_day: false,
    three_days_after: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getData("/systemSetting");
        if (res?.payload?.records) {
          const settings = res.payload.records.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
          }, {});

          setStripeKey(settings.stripe_integration_key || "");
          setInvoiceTerms(settings.invoice_terms || "");

          setReminders({
            one_day_before: settings.one_day_before === "true",
            same_day: settings.same_day === "true",
            three_days_after: settings.three_days_after === "true",
          });
        }
      } catch (err) {
        console.error("Fetch settings failed:", err);
        toast.error("Failed to load invoice settings");
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = [
      { key: "stripe_integration_key", value: stripeKey },
      { key: "invoice_terms", value: invoiceTerms },
      {
        key: "one_day_before",
        value: reminders.one_day_before ? "true" : "false",
      },
      { key: "same_day", value: reminders.same_day ? "true" : "false" },
      {
        key: "three_days_after",
        value: reminders.three_days_after ? "true" : "false",
      },
    ];

    try {
      await postData("/systemSetting", payload);
      toast.success("Invoice & Payment settings updated");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Invoice & Payment Settings</h2>
      <form onSubmit={handleSave}>
        <div className="flex items-center gap-3 ">
          <InputField
            label="Stripe Integration Key"
            id="stripeKey"
            name="stripeKey"
            type="text"
            value={stripeKey}
            onChange={(e) => setStripeKey(e.target.value)}
            fieldName="md:w-1/2 w-full"
            placeholder="(Encrypted input field)"
          />
          <InputField
            label="Invoice Terms"
            id="invoiceTerms"
            name="invoiceTerms"
            type="text"
            value={invoiceTerms}
            onChange={(e) => setInvoiceTerms(e.target.value)}
            fieldName="md:w-1/2 w-full"
            placeholder="Due in 7 days"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold mb-2.5">Reminder Frequency</h3>
          <div className="border border-[#2F354233] bg-[#FAFAFA] px-4 py-8 rounded-[8px] mb-6">
            <div className="flex md:flex-nowrap flex-wrap items-center gap-5 ">
              <CheckBox
                name="one_day_before"
                id="one_day_before"
                label="1 Day Before Due"
                checked={reminders.one_day_before}
                onChange={(e) =>
                  setReminders({
                    ...reminders,
                    one_day_before: e.target.checked,
                  })
                }
              />
              <CheckBox
                name="same_day"
                id="same_day"
                label="Same Day Due"
                checked={reminders.same_day}
                onChange={(e) =>
                  setReminders({ ...reminders, same_day: e.target.checked })
                }
              />
              <CheckBox
                name="three_days_after"
                id="three_days_after"
                label="3 Days After Due"
                checked={reminders.three_days_after}
                onChange={(e) =>
                  setReminders({
                    ...reminders,
                    three_days_after: e.target.checked,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={loading}
            variant="defaultBtn"
            className={`bg-[#4D72FF] text-white font-normal h-[44px] md:w-[152px] w-full ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Updating..." : "Update"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InvoicePaymentSettings;
