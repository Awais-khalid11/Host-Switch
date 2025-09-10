import React, { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { UserPNG, PdffilePNG } from "../../../constants/Imgs";
import { AllSVG, WhitecallSVG, WhitedotsSVG } from "../../../constants/Icons";
import FilterDropdown from "../../FilterDropdown/FilterDropdown";
import Button from "../../Button/Button";
import AwaitingViews from "../AwaitingViews/AwaitingViews";
import useRoleStore from "../../../store/useRoleIdStore";
import { postData } from "../../../api/apiClient";
import Skeleton from "../../Skeleton/SkeletonCard";
import NoDataFound from "../../NoDataFound";

const AdminMessageBox = ({
  onBack,
  // setViewPage,
  messages = [],
  loading,
  conversationId,
  onMessageSent,
}) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();
  const { user } = useRoleStore();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const onSubmit = async () => {
    if (!message && !file) return;

    try {
      const formData = new FormData();
      if (message) formData.append("content", message);
      if (file) formData.append("attachments", file);
      formData.append("conversationId", conversationId);

      const response = await postData("chat", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const newMessage = {
        id: response?.payload?.id || Date.now(),
        content: message,
        sent_at: new Date().toISOString(),
        sender_id: user?.id,
        attachments: file
          ? [{ file_name: file.name, file_type: file.type }]
          : [],
        sender: { image: user?.image },
      };

      onMessageSent(newMessage);

      setMessage("");
      setFile(null);
    } catch (error) {
      console.error("Message send failed:", error);
    }
  };

  return (
    <div className="bg-white h-[calc(100vh-75px)] rounded-[10px] flex flex-col justify-between">
      <div className="flex flex-col h-[510px] bg-[#F5F5F5] rounded-xl  overflow-hidden">
        <button
          onClick={onBack}
          className="text-[#414651] lg:hidden block hover:text-gray-800 mt-2.5 ml-2.5"
        >
          <IoArrowBackOutline size={20} />
        </button>
        {/* <div className="bg-[#4D72FF] p-3 rounded-t-[10px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={UserPNG}
                alt="User"
                className="rounded-full w-[46px] h-[46px]"
              />
              <div>
                <h4 className="text-base font-semibold text-white">
                  Alex Stewart (Host)
                </h4>
                <h5 className="text-[12px] font-normal text-white">
                  sarah@email.com
                </h5>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <FilterDropdown
                button={<Button className="!p-0" suffixImg={WhitedotsSVG} />}
                onSelect={(val) => {
                  if (val === "View Profile") {
                    setViewPage(
                      <AwaitingViews setClose={() => setViewPage(null)} />
                    );
                  }
                }}
                options={[
                  {
                    label: "View Profile",
                    value: "View Profile",
                  },
                ]}
              />
            </div>
          </div>
        </div> */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          {loading ? (
            <Skeleton variant="chat" rows={5} />
          ) : messages.length > 0 ? (
            messages.map((msg) => {
              const isOwnMessage = msg.sender_id === user?.id;
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    isOwnMessage ? "justify-end" : ""
                  }`}
                >
                  {!isOwnMessage && (
                    <div className="relative [flex:0_0_52px]">
                      <img
                        src={
                          msg.sender?.image
                            ? `${import.meta.env.VITE_IMG_URL}/${
                                msg.sender?.image
                              }`
                            : UserPNG
                        }
                        alt={msg.sender?.name || "User"}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <div
                      className={`p-3 text-sm max-w-xs ${
                        isOwnMessage
                          ? "bg-[#B1B1B1] text-white rounded-l-[8px] rounded-b-[8px]"
                          : "bg-white text-black rounded-r-[8px] rounded-b-[8px]"
                      }`}
                    >
                      {msg.content && <p>{msg.content}</p>}

                      {msg.attachments?.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {msg.attachments.map((file) => {
                            const fileUrl = `${import.meta.env.VITE_IMG_URL}/${
                              file.file_name
                            }`;

                            if (file.file_type.startsWith("image/")) {
                              return (
                                <img
                                  key={file.id}
                                  src={fileUrl}
                                  alt={file.file_name}
                                  className="max-w-[150px] rounded"
                                />
                              );
                            }

                            return (
                              <a
                                key={file.id}
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-600 underline"
                              >
                                📎 {file.file_name}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <h5 className="text-[12px] font-normal mt-1 text-gray-500">
                      {new Date(msg.sent_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                  </div>

                  {isOwnMessage && (
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
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <NoDataFound
              message="No Messages Found"
              subMessage="Start conversation by sending new message"
            />
          )}
          <div ref={messagesEndRef} />
        </div>

        {!loading && (
          <>
            <div className="h-px bg-gray-300 my-1 mx-4" />
            <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-b-xl">
              <button
                className="text-gray-500 hover:text-black"
                onClick={() => fileInputRef.current.click()}
              >
                <GrAttachment size={20} />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                hidden
                onChange={handleFileChange}
              />

              <input
                value={message}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    onSubmit();
                  }
                }}
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

            {file && (
              <div className="px-4 pb-2 text-sm text-gray-600 flex items-center gap-2">
                <span>📎 {file.name}</span>
                <button
                  onClick={() => setFile(null)}
                  className="ml-2 text-red-500 text-xs"
                >
                  remove
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminMessageBox;
