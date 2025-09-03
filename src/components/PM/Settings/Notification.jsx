import React, { useEffect, useState } from "react";
import SwitchBtn from "../../SwitchBtn/SwitchBtn";
import useRoleStore from "../../../store/useRoleIdStore";
import { getData, postData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const Notification = () => {
  const { user } = useRoleStore();
  const [prefs, setPrefs] = useState({});

  useEffect(() => {
    const fetchPrefs = async () => {
      try {
        if (!user?.id) return;
        const res = await getData(`/userMeta?userId=${user.id}`);
        if (res?.payload?.records) {
          const prefsObj = res.payload.records.reduce((acc, item) => {
            acc[item.key] = item.value === "true";
            return acc;
          }, {});
          setPrefs(prefsObj);
        }
      } catch (err) {
        console.error("Fetch prefs failed:", err);
      }
    };
    fetchPrefs();
  }, [user?.id]);

  const handleToggle = async (key) => {
    const newValue = !prefs[key];
    const updatedPrefs = { ...prefs, [key]: newValue };
    setPrefs(updatedPrefs);
    const payloadArray = Object.entries(updatedPrefs).map(([k, v]) => ({
      key: k,
      value: v ? "true" : "false",
    }));

    try {
      await postData(`/userMeta`, payloadArray);

      toast.success("Settings update successfully");
    } catch (err) {
      console.error("Update failed:", err);
      setPrefs(prefs);
    }
  };

  return (
    <div className="border border-[#2F354233] rounded-[12px] p-5 mb-5">
      <h5 className="text-[18px] font-bold mb-8">Notification Preferences</h5>
      <div className="flex md:flex-nowrap flex-wrap gap-2.5">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>System Alerts</p>
          <SwitchBtn
            checked={prefs.system_alerts}
            onChange={() => handleToggle("system_alerts")}
          />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Annual Check-In Reminder</p>
          <SwitchBtn
            checked={prefs.annual_check_in_reminder}
            onChange={() => handleToggle("annual_check_in_reminder")}
          />
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap gap-2.5">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Inactivity Trigger Reminder</p>
          <SwitchBtn
            checked={prefs.inactivity_trigger_reminder}
            onChange={() => handleToggle("inactivity_trigger_reminder")}
          />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Login Notification</p>
          <SwitchBtn
            checked={prefs.login_notification}
            onChange={() => handleToggle("login_notification")}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
