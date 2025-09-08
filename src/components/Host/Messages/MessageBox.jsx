import React, { useEffect, useState, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { UserPNG, PdffilePNG } from "../../../constants/Imgs";
import { getData, postData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";
import useRoleStore from "../../../store/useRoleIdStore";
import Skeleton from "../../Skeleton/SkeletonCard";

const MessageBox = ({ onBack }) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const { user } = useRoleStore();
  const fileInputRef = useRef();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const data = await getData(`/chat/1/messages`);
        if (data?.payload?.records?.length > 0) {
          setMessages(data.payload.records);
        } else {
          setMessages([]);
        }
      } catch (err) {
        console.error("Failed to fetch conversation:", err);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

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

      const response = await postData("chat", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Message sent:", response);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          content: message,
          file_url: file ? URL.createObjectURL(file) : null,
          sender_id: user?.id,
          sent_at: new Date().toISOString(),
        },
      ]);

      setMessage("");
      setFile(null);
    } catch (error) {
      console.error("Message send failed:", error);
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
                        ? `${import.meta.env.VITE_IMG_URL}/${msg.sender?.image}`
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

                  {msg.file_url && (
                    <>
                      {msg.file_url.match(/\.(jpeg|jpg|png|gif)$/) ? (
                        <img
                          src={msg.file_url}
                          alt="attachment"
                          className="max-w-[150px] rounded mt-2"
                        />
                      ) : (
                        <a
                          href={msg.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 underline mt-2"
                        >
                          <img src={PdffilePNG} alt="file" className="w-6" />
                          Download File
                        </a>
                      )}
                    </>
                  )}
                </div>

                {/* Time */}
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
          message="No conversation yet"
          subMessage="Write a message to start chatting."
        />
      )}

      <div className="h-px bg-gray-300 my-1 mx-4" />

      {/* Input */}
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

      {/* File preview */}
      {file && (
        <div className="px-4 pb-2 text-sm text-gray-600">
          <span> {file.name}</span>
          <button
            onClick={() => setFile(null)}
            className="ml-2 text-red-500 text-xs"
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageBox;
