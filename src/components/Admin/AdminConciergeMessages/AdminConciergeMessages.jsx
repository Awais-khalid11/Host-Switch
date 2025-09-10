import React, { useState, useEffect } from "react";
import AdminMessageBox from "./AdminMessageBox";
import AdminTrainerMessages from "./AdminTrainerMessages";
import AwaitingViews from "../AwaitingViews/AwaitingViews";
import { getToken } from "../../../utils";
import socket from "../../../utils/socket";
import { getData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";

const AdminConciergeMessages = () => {
  const [showBoxOnly, setShowBoxOnly] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [viewPage, setViewPage] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const token = getToken();
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket messageBox:", socket.id);
    });

    socket.on("emitNewMessage", (message) => {
      const formattedMessage = {
        id: message.id,
        content: message.content,
        sent_at: message.sent_at,
        sender_id: message.sender_id,
        attachments: message.attachments || [],
        sender: { image: message?.sender_image },
      };

      setMessages((prev) => [...prev, formattedMessage]);
      console.log("New Message:", message);
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connection error:", err.message);
    });

    socket.connect();

    return () => {
      socket.off("connect");
      socket.off("emitNewMessage");
      socket.off("connect_error");
      socket.disconnect();
    };
  }, [token, conversationId]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!conversationId) return;

      try {
        setLoading(true);
        const data = await getData(`/chat/${conversationId}/messages`);
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
  }, [conversationId]);

  if (viewPage) return viewPage;

  return (
    <div>
      <h2 className="text-[24px] font-bold mb-3">Concierge Messages</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-[359px_1fr] gap-1">
        {!isMobile || !showBoxOnly ? (
          <AdminTrainerMessages
            onSelectUser={(id) => {
              setConversationId(id);
              if (isMobile) setShowBoxOnly(true);
            }}
          />
        ) : null}

        {conversationId && (!isMobile || showBoxOnly) && (
          <AdminMessageBox
            onBack={() => setShowBoxOnly(false)}
            setViewPage={setViewPage}
            messages={messages}
            loading={loading}
            conversationId={conversationId}
            onMessageSent={(newMessage) =>
              setMessages((prev) => [...prev, newMessage])
            }
          />
        )}
        {!conversationId && (
          <div className="flex flex-col h-[510px] bg-[#F5F5F5] rounded-xl overflow-hidden">
            <NoDataFound
              message="Start a chat"
              subMessage="Select a user to begin messaging."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminConciergeMessages;
