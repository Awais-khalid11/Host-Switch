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
        const data = await getData("/host/dashboard/summary");

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
    <div className="border border-[#001B4429] p-4 rounded-[12px] h-[323px]">
      <div className="flex justify-between items-center lg:mb-6 mb-2">
        <h3 className="text-xl font-semibold text-[#181818]">
          Recent Messages
        </h3>
        <img src={TableiconSVG} alt="" />
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : messages.length > 0 ? (
        messages.map((item, index) => (
          <div
            key={item.id || index}
            className="flex items-center gap-4 last-of-type:mb-0 mb-5"
          >
            <img src={UserPNG} alt="" className="h-10 w-10 rounded-full" />
            <div>
              <h4 className="text-[14px] font-normal text-[#181818]">
                <i>{item.name}</i>
              </h4>
              <h5 className="text-[12px] font-normal text-[#7F7F7F]">
                {item.type} • {new Date(item.created_at).toLocaleDateString()}
              </h5>
            </div>
          </div>
        ))
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
