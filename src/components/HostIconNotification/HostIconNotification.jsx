import React, { useEffect, useState } from "react";
import BelliconNotification from "../BelliconNotification/BelliconNotification";
import { getData } from "../../api/apiClient";
import { SkymsgSVG } from "../../constants/Icons";

const HostIconNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
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
      }
    };

    fetchNotifications();
  }, []);

  return (
    <BelliconNotification
      tabs={["Unread", "All"]}
      notificationData={notifications}
      filterOptions={[{ label: "All" }, { label: "Unread" }]}
    />
  );
};

export default HostIconNotification;
