import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { UserPNG } from "../../constants/Imgs";
import useRoleStore from "../../store/useRoleIdStore";
import NoDataFound from "../NoDataFound";
import Skeleton from "../Skeleton/SkeletonCard";
import { postData } from "../../api/apiClient";

const MessageBox = ({ onBack, messages = [], loading, conversationId }) => {
  const [message, setMessage] = useState("");
  const { user } = useRoleStore();
  const onSubmit = async () => {
    try {
      const response = await postData("chat", {
        content: message,
        conversationId: conversationId,
      });
      console.log(response);
    } catch (error) {
      console.error("Password update failed:", error);
    }
  };
  return (
    <div className="flex flex-col h-[510px] bg-[#F5F5F5] rounded-xl overflow-hidden">
      <button
        onClick={onBack}
        className="text-[#414651] lg:hidden block hover:text-gray-800 mt-2.5 ml-2.5"
      >
        <IoArrowBackOutline size={20} />
      </button>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {loading ? (
          <Skeleton variant="chat" rows={5} />
        ) : messages.length > 0 ? (
          messages.map((msg) => {
            const isOwnMessage = msg.sender_id === user?.id;
            return isOwnMessage ? (
              <div key={msg.id} className="flex items-start justify-end gap-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-[12px] font-normal">
                      {new Date(msg.sent_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                  </div>
                  <div className="bg-[#B1B1B1] text-white rounded-l-[8px] rounded-b-[8px] p-3 text-sm max-w-xs">
                    {msg.content}
                  </div>
                </div>
                <div className="relative [flex:0_0_52px]">
                  <img
                    src={
                      user?.image
                        ? `${import.meta.env.VITE_IMG_URL}/${user?.image}`
                        : UserPNG
                    }
                    alt="You"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-2.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex items-start gap-3">
                <div className="relative [flex:0_0_52px]">
                  <img
                    src={
                      msg.sender?.image
                        ? `${import.meta.env.VITE_IMG_URL}/${msg.sender?.image}`
                        : UserPNG
                    }
                    alt={msg.sender?.name || "User"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-2.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1 flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-[#414651]">
                      {msg.sender?.name}
                    </h4>
                    <h5 className="text-[12px] font-normal">
                      {new Date(msg.sent_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                  </div>
                  <div className="bg-white rounded-r-[8px] rounded-b-[8px] p-3 text-sm max-w-xs">
                    {msg.content}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NoDataFound
            message="No conversations yet"
            subMessage="Select a user from the list to start chatting."
          />
        )}
      </div>

      {!loading && messages.length > 0 && (
        <>
          <div className="h-px bg-gray-300 my-1 mx-4" />
          <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-b-xl">
            <button className="text-gray-500 hover:text-black">
              <GrAttachment size={20} />
            </button>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Send a message"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={onSubmit}
              className="text-blue-600 hover:text-blue-800"
            >
              <IoIosSend size={26} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageBox;
