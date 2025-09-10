import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import { ROUTES } from "../../constants/Routes";
import { postData } from "../../api/apiClient";

const DEFAULT_MESSAGE =
  "Hi, I’d love to connect and share how I can support your property. Feel free to view my profile and reach out with any questions.";

const SendMessageModal = ({ id, onCancel }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const isHost = location.pathname.includes("/host");
  const messageRoute = isHost ? ROUTES.HOSTMESSAGES : ROUTES.MESSAGES;

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("content", DEFAULT_MESSAGE);
      formData.append("userIds[0]", id);

      const response = await postData("chat", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Message sent:", response);
      navigate(messageRoute);
    } catch (error) {
      console.error("Message send failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="border border-[#FFFFFF1A] bg-[#FFFFFF1A] text-white p-4 rounded-[8px] mb-1.5">
        <p>{DEFAULT_MESSAGE}</p>
      </div>

      <div className="flex items-center gap-2.5 mt-4">
        <Button
          variant="borderBtn"
          className="w-[250px] h-[54px] border-white text-white border"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className="w-[250px] rounded-[8px] flex items-center justify-center font-bold h-[54px] bg-white text-black border-white border"
          onClick={onSubmit}
          loading={isLoading}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default SendMessageModal;
