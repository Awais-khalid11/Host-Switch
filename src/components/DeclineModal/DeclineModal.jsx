import React, { useEffect, useRef } from "react";
import { ModalbgPNG } from "../../constants/Imgs";

const DeclineModal = ({ modalTitle, modalText, children, modalImg, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <div className="fixed inset-0  bg-black/40 flex justify-center items-center z-99">
      <div className="flex flex-col shadow-[0px 0px 40px 0px #00000040] justify-center items-center">
        <div className="w-[88px] h-[88px] relative  top-12 z-50 rounded-full bg-[#4D72FF] text-white flex items-center justify-center">
          {/* <img src={modalImg} alt="img" /> */}
        </div>
        <div
          ref={modalRef}
          className="flex items-center justify-center w-[582px] h-[263px] "
        //   style={{
        //     backgroundImage: `url(${ModalbgPNG})`,
        //     backgroundSize: "cover",
        //     backgroundRepeat: "no-repeat",
        //     borderRadius: "16px",
        //   }}
        >
          <div className="pt-5">
            <h3 className="text-[16px] font-bold text-white mb-3 text-center">
              {modalTitle}
            </h3>
            <div className="text-sm font-normal text-white text-center mb-7 max-w-[492px] mx-auto">
              <p>{modalText}</p>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclineModal;
