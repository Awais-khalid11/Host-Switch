import React, { useEffect, useState } from "react";
import { TableiconSVG } from "../../../constants/Icons";
import { UserPNG } from "../../../constants/Imgs";
import { getData } from "../../../api/apiClient";
import NoDataFound from "../../NoDataFound";
import Skeleton from "../../Skeleton/SkeletonCard";
import useRoleStore from "../../../store/useRoleIdStore";
import { useNavigate } from "react-router-dom";

const DashboardMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useRoleStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentConversations = async () => {
      const msgUrl =
        user?.role_id === 2
          ? "host/dashboard/summary"
          : "auth/property-manager/dashboard/summary";
      try {
        setLoading(true);
        const data = await getData(msgUrl);

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
  }, [user?.role_id]);

  function handleNavigation() {
    if (user?.role_id === 2) {
      navigate("/host/hostmessages");
    } else {
      navigate("/pm/messages");
    }
  }

  return (
    <div className="border border-[#001B4429] p-4 rounded-[12px] h-[323px]">
      <div className="flex justify-between items-center lg:mb-6 mb-2">
        <h3 className="text-xl font-semibold text-[#181818]">
          Recent Messages
        </h3>
        <img src={TableiconSVG} alt="" />
      </div>

      {loading ? (
        <Skeleton variant="card" />
      ) : messages.length > 0 ? (
        messages.map((conv, index) => {
          const lastMsg =
            conv.messages && conv.messages.length > 0
              ? conv.messages[conv.messages.length - 1]
              : null;

          const participantImg = conv.participants?.[0]?.user?.image
            ? `${import.meta.env.VITE_IMG_URL}${
                conv.participants[0].user.image
              }`
            : UserPNG;

          return (
            <div
              key={conv.id || index}
              onClick={handleNavigation}
              className="flex items-center gap-4 last-of-type:mb-0 mb-5 cursor-pointer"
            >
              <img
                src={participantImg}
                alt={conv.name || "User"}
                className="h-10 w-10 rounded-full object-cover"
                onError={(e) => (e.currentTarget.src = UserPNG)}
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
        <NoDataFound message="No Messages Found" className="my-6" />
      )}
    </div>
  );
};

export default DashboardMessages;
