import React, { useEffect, useState } from "react";
import { TableiconSVG } from "../../../constants/Icons";
import { UserPNG } from "../../../constants/Imgs";
import { getData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";

const DashboardMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentConversations = async () => {
      try {
        setLoading(true);
        const data = await getData("auth/property-manager/dashboard/summary");

        if (data?.payload?.recentConversations?.records) {
          setMessages(data.payload.recentConversations.records);
        } else {
          setMessages([]);
        }
      } catch (err) {
        console.error("Failed to fetch recent conversations:", err);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentConversations();
  }, []);

  return (
    <div className="border border-[#001B4429] p-4 rounded-[12px] h-[323px] overflow-y-auto">
      <div className="flex justify-between items-center lg:mb-6 mb-2">
        <h3 className="text-xl font-semibold text-[#181818]">
          Recent Messages
        </h3>
        <img src={TableiconSVG} alt="" />
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : messages.length > 0 ? (
        messages.map((conv, index) => {
          // ✅ get last message
          const lastMsg =
            conv.messages && conv.messages.length > 0
              ? conv.messages[conv.messages.length - 1]
              : null;

          // ✅ pick participant image (not null, else fallback)
          const participantImg = conv.participants?.[0]?.user?.image
            ? `/uploads/${conv.participants[0].user.image}`
            : UserPNG;

          return (
            <div
              key={conv.id || index}
              className="flex items-center gap-4 last-of-type:mb-0 mb-5"
            >
              <img
                src={participantImg}
                alt={conv.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-[14px] font-medium text-[#181818]">
                  {conv.name}
                </h4>
                <h5 className="text-[12px] text-[#7F7F7F] truncate max-w-[200px]">
                  {lastMsg ? lastMsg.content : "No messages yet"}
                </h5>
              </div>
            </div>
          );
        })
      ) : (
        <NoDataFound
          message="No Messages"
          subMessage="You don't have any recent conversations yet."
          className="my-6"
        />
      )}
    </div>
  );
};

export default DashboardMessages;
