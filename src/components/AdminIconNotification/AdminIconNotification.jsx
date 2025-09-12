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

const AdminIconNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setIsLoading(true);
        const res = await getData("/notification");

        if (res?.payload?.records) {
          const grouped = [
            {
              heading: "Admin Notifications",
              items: res.payload.records.map((n) => {
                let icon = SkymsgSVG;
                let bgColor = "#E8F5FA";

                if (n.type?.toLowerCase().includes("payment")) {
                  icon = MoneySVG;
                  bgColor = "#04A9600D";
                } else if (n.type?.toLowerCase().includes("proposal")) {
                  icon = KeyboardSVG;
                  bgColor = "#F2A5160D";
                } else if (n.type?.toLowerCase().includes("decline")) {
                  icon = NoticrossSVG;
                  bgColor = "#FFEBEB";
                }

                return {
                  img: icon,
                  bgColor,
                  title: n.message,
                  description: n.type,
                  time: new Date(n.created_at).toLocaleString(),
                  isNew: !n.is_read,
                };
              }),
            },
          ];

          setNotifications(grouped);
        }
      } catch (err) {
        console.error("Error fetching admin notifications:", err);
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
          tabs={["All Notifications"]}
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

export default AdminIconNotification;
