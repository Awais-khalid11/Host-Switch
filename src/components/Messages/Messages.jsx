import React, { useState, useEffect } from "react";
import TrainerMessages from "./TrainerMessages";
import MessageBox from "./MessageBox";
import { getData } from "../../api/apiClient";

const Messages = () => {
  const [showBoxOnly, setShowBoxOnly] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [conversationId, setConversationId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">Messages</h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-[359px_1fr] gap-1">
        {!isMobile || !showBoxOnly ? (
          <TrainerMessages
            onSelectUser={(id) => {
              setConversationId(id);
              if (isMobile) setShowBoxOnly(true);
            }}
          />
        ) : null}

        {(!isMobile || showBoxOnly) && (
          <MessageBox
            messages={messages}
            loading={loading}
            conversationId={conversationId}
            onBack={() => setShowBoxOnly(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Messages;
