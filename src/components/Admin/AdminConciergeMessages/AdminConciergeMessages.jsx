import React, { useState, useEffect } from "react";
import AdminMessageBox from "./AdminMessageBox";
import AdminTrainerMessages from "./AdminTrainerMessages";
import AwaitingViews from "../AwaitingViews/AwaitingViews";

const AdminConciergeMessages = () => {
  const [showBoxOnly, setShowBoxOnly] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [viewPage, setViewPage] = useState(null); 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (viewPage) return viewPage; // 👈 Fullscreen override

  return (
    <div>
      <h2 className="text-[24px] font-bold mb-3">Concierge Messages</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-[359px_1fr] gap-1">
        {!isMobile || !showBoxOnly ? (
          <AdminTrainerMessages
            onSelectUser={() => isMobile && setShowBoxOnly(true)}
          />
        ) : null}

        {(!isMobile || showBoxOnly) && (
          <AdminMessageBox
            onBack={() => setShowBoxOnly(false)}
            setViewPage={setViewPage} // 👈 pass down handler
          />
        )}
      </div>
    </div>
  );
};

export default AdminConciergeMessages;
