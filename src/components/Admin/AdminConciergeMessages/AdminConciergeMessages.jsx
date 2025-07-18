import React, { useState, useEffect } from "react";
import AdminMessageBox from "./AdminMessageBox";
import AdminTrainerMessages from "./AdminTrainerMessages";

const AdminConciergeMessages = () => {
  const [showBoxOnly, setShowBoxOnly] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2 className="text-[24px] font-bold mb-3">Concierge Messages</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-[359px_1fr] gap-1">
        {!isMobile || !showBoxOnly ? (
          <AdminTrainerMessages
            // userData={userData}
            onSelectUser={() => isMobile && setShowBoxOnly(true)}
          />
        ) : null}

        {(!isMobile || showBoxOnly) && (
          <AdminMessageBox onBack={() => setShowBoxOnly(false)} />
        )}
      </div>
    </div>
  );
};

export default AdminConciergeMessages;
