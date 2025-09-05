import { useState, useEffect } from "react";
import SwitchBtn from "../../SwitchBtn/SwitchBtn";
import { getData, postData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const VerificationSettings = () => {
  const [prefs, setPrefs] = useState({});

  useEffect(() => {
    const fetchPrefs = async () => {
      try {
        const res = await getData("/systemSetting");

        if (res?.payload?.records) {
          const prefsObj = res.payload.records.reduce((acc, item) => {
            acc[item.key] = item.value === "true";
            return acc;
          }, {});
          setPrefs(prefsObj);
        }
      } catch (err) {
        console.error("Fetch verification settings failed:", err);
        toast.error("Failed to load verification settings");
      }
    };

    fetchPrefs();
  }, []);

  const handleToggle = async (key) => {
    const newValue = !prefs[key];
    const updatedPrefs = { ...prefs, [key]: newValue };

    setPrefs(updatedPrefs);

    const payloadArray = Object.entries(updatedPrefs).map(([k, v]) => ({
      key: k,
      value: v ? "true" : "false",
    }));

    try {
      await postData("/systemSetting", payloadArray);
      toast.success("Settings updated");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update setting");
      setPrefs(prefs);
    }
  };

  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Verification Settings</h2>
      <div className="flex md:flex-nowrap flex-wrap gap-3">
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Host Verification Required</p>
          <SwitchBtn
            checked={prefs.host_verification_required}
            onChange={() => handleToggle("host_verification_required")}
          />
        </div>
        <div className="flex items-center justify-between text-sm md:w-1/2 w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>PM Verification Required</p>
          <SwitchBtn
            checked={prefs.pm_verification_required}
            onChange={() => handleToggle("pm_verification_required")}
          />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm  w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
        <p>Auto-verify if form complete</p>
        <SwitchBtn
          checked={prefs.auto_verify_if_form_complete}
          onChange={() => handleToggle("auto_verify_if_form_complete")}
        />
      </div>
    </div>
  );
};

export default VerificationSettings;
