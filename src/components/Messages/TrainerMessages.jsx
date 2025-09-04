import React, { useEffect, useState } from "react";
import { UserPNG } from "../../constants/Imgs";
import { RediconSVG } from "../../constants/Icons";
import { IoArrowBackOutline } from "react-icons/io5";
import { getData } from "../../api/apiClient";
import Skeleton from "../Skeleton/SkeletonCard";
import NoDataFound from "../NoDataFound";

const TrainerMessages = ({ onSelectUser }) => {
  const [loading, setLoading] = useState(true);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoading(true);
        const data = await getData("/chat");

        if (data?.payload?.records?.length > 0) {
          setConversations(data?.payload?.records);
        } else {
          setConversations([]);
        }
      } catch (err) {
        console.error("Failed to fetch conversations:", err);
        setConversations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);
  console.log(conversations);
  return (
    <div className="bg-white border border-[#F5F5F5] py-2 rounded-xl h-[510px] overflow-y-auto w-full">
      <h2 className="font-semibold text-xl mb-4 px-4">Inbox</h2>
      <div>
        {loading ? (
          <Skeleton variant="" count={3} />
        ) : conversations.length > 0 ? (
          <>
            {conversations.map((conv, index) => {
              const participant = conv.participants?.[0]?.user;
              const latestMsg = conv.latestMessage;

              return (
                <div
                  key={conv.id || index}
                  onClick={() => onSelectUser(conv)}
                  className="cursor-pointer px-4 py-3 flex justify-between items-start hover:bg-[#F5F5F5]"
                >
                  <div className="flex gap-3">
                    <img
                      src={
                        participant?.image
                          ? `${import.meta.env.VITE_IMG_URL}${
                              participant.image
                            }`
                          : UserPNG
                      }
                      alt={participant?.name || "User"}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div className="text-sm">
                      <p className="font-semibold">{participant?.name}</p>
                      <p className="text-gray-600 truncate max-w-[200px]">
                        {latestMsg?.content || "No messages yet"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-xs text-gray-500">
                    <span>
                      {new Date(conv.updated_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>

                    {conv.unseenCount > 0 && (
                      <span className="bg-[#D92D20] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                        {conv.unseenCount}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <NoDataFound
            message="No Conversations Available"
            className="my-6 mx-4"
          />
        )}
      </div>
    </div>
  );
};

export default TrainerMessages;
