import { useState, useEffect } from "react";
import SwitchBtn from "../../SwitchBtn/SwitchBtn";
import { getData, postData } from "../../../api/apiClient";
import { toast } from "react-toastify";

const FeedbackSettings = () => {
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getData("/systemSetting");
        if (res?.payload?.records) {
          const prefsObj = res.payload.records.reduce((acc, item) => {
            acc[item.key] = item.value === "true";
            return acc;
          }, {});
          setFeedback(prefsObj);
        }
      } catch (err) {
        console.error("Fetch settings failed:", err);
        toast.error("Failed to load feedback settings");
      }
    };

    fetchSettings();
  }, []);

  const handleToggle = async (key) => {
    const newValue = !feedback[key];
    const updatedPrefs = { ...feedback, [key]: newValue };

    setFeedback(updatedPrefs);

    const payload = [{ key, value: newValue ? "true" : "false" }];

    try {
      await postData("/systemSetting", payload);
      toast.success("Settings updated");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update setting");
      setFeedback(feedback);
    }
  };

  return (
    <div className="border border-[#E9EAEB] rounded-[12px] px-6 py-4 shadow-[4px_0px_10px_0px_#0000000F]">
      <h2 className="text-base font-bold mb-7">Feedback Settings</h2>
      <div>
        <div className="flex items-center justify-between text-sm w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Enable feedback after proposal acceptance</p>
          <SwitchBtn
            checked={feedback.enable_feedback_after_proposal_acceptance}
            onChange={() =>
              handleToggle("enable_feedback_after_proposal_acceptance")
            }
          />
        </div>
        <div className="flex items-center justify-between text-sm w-full bg-[#F9F9F9] rounded-lg p-4 mb-4">
          <p>Auto-prompt feedback after 7 days of inactivity</p>
          <SwitchBtn
            checked={feedback.auto_prompt_feedback_after_7_days_inactivity}
            onChange={() =>
              handleToggle("auto_prompt_feedback_after_7_days_inactivity")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FeedbackSettings;
