import { useState, useEffect } from "react";
import SwitchBtn from "../../SwitchBtn/SwitchBtn";
import { getData, postData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const NotificationsAlerts = () => {
  const [alerts, setAlerts] = useState({});

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getData("/systemSetting");
        if (res?.payload?.records) {
          const prefsObj = res.payload.records.reduce((acc, item) => {
            acc[item.key] = item.value === "true";
            return acc;
          }, {});
          setAlerts(prefsObj);
        }
      } catch (err) {
        console.error("Fetch settings failed:", err);
        toast.error("Failed to load notification settings");
      }
    };

    fetchSettings();
  }, []);

  const handleToggle = async (key) => {
    const newValue = !alerts[key];
    const updatedPrefs = { ...alerts, [key]: newValue };

    setAlerts(updatedPrefs);

    const payload = [{ key, value: newValue ? "true" : "false" }];

    try {
      await postData("/systemSetting", payload);
      toast.success("Settings updated");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update setting");
      setAlerts(alerts);
    }
  };

  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Notifications & Alerts</h2>

      <div className="flex md:flex-nowrap flex-wrap md:gap-20">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Admin Notification Email</p>
          <SwitchBtn
            checked={alerts.admin_notification_email}
            onChange={() => handleToggle("admin_notification_email")}
          />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>New Host Registered</p>
          <SwitchBtn
            checked={alerts.new_host_registered}
            onChange={() => handleToggle("new_host_registered")}
          />
        </div>
      </div>

      <div className="flex md:flex-nowrap flex-wrap md:gap-20">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>New PM Registered</p>
          <SwitchBtn
            checked={alerts.new_pm_registered}
            onChange={() => handleToggle("new_pm_registered")}
          />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Proposal Accepted</p>
          <SwitchBtn
            checked={alerts.proposal_accepted}
            onChange={() => handleToggle("proposal_accepted")}
          />
        </div>
      </div>

      <div className="flex md:flex-nowrap flex-wrap md:gap-20">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Invoice Paid</p>
          <SwitchBtn
            checked={alerts.invoice_paid}
            onChange={() => handleToggle("invoice_paid")}
          />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Message Received</p>
          <SwitchBtn
            checked={alerts.message_received}
            onChange={() => handleToggle("message_received")}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationsAlerts;
