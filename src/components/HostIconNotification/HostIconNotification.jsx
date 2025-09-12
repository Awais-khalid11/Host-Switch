import React, { useEffect, useState } from "react";
import BelliconNotification from "../BelliconNotification/BelliconNotification";
import {
  FindSVG,
  KeyboardSVG,
  MoneySVG,
  NoticrossSVG,
  NotimsgSVG,
  SkymsgSVG,
} from "../../constants/Icons";
import { getData } from "../../api/apiClient";
import Skeleton from "../Skeleton/SkeletonCard";

const HostIconNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setIsLoading(true);
        const res = await getData("/notification");
        if (res?.payload?.records) {
          const transformed = [
            {
              heading: "Notifications",
              items: res.payload.records.map((n) => ({
                img: SkymsgSVG,
                bgColor: "#E8F5FA",
                title: n.message,
                description: n.type,
                time: new Date(n.created_at).toLocaleString(),
                isNew: !n.is_read,
              })),
            },
          ];
          setNotifications(transformed);
        }
      } catch (err) {
        console.error("Error fetching notifications:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <BelliconNotification
          tabs={["all notifications"]}
          notificationData={notifications}
          filterOptions={[
            { label: "All" },
            { label: "Unread" },
            { label: "Proposals" },
            { label: "Messages" },
            { label: "Payments & Invoices" },
          ]}
        />
      )}
    </div>
  );
};

export default HostIconNotification;
