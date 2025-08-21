import React, { useEffect, useRef, useState } from "react";
import { ModalbgPNG } from "../../constants/Imgs";
import { IoClose } from "react-icons/io5";

const Modal = ({
  modalTitle,
  modalText,
  children,
  modalImg,
  onClose,
  width = "582px",
  height = "263px",
  useBgImage = true,
  bgColor = "#4D72FF",
  showModalIcon = true,
  showText,
  showTitle,
  updateClass,
  textClass,
  bgClass,
  ModalbgClass,
  iconPosition,
}) => {
  const modalRef = useRef();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed inset-0 z-50 px-2.5 flex justify-center items-center"
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="flex flex-col justify-center items-center px-2.5 mx-2.5">
        {showModalIcon && (
          <div
            className={`${iconPosition} w-[88px] h-[88px] relative top-8 z-50 rounded-full bg-[#4D72FF] text-white flex items-center justify-center`}
          >
            {modalImg && <img src={modalImg} alt="img" />}
          </div>
        )}

        <div
          ref={modalRef}
          className={`relative ${bgClass}`}
          style={{
            width,
            height,
            backgroundImage: useBgImage ? `url(${ModalbgClass})` : "none",
            backgroundColor: useBgImage ? "transparent" : bgColor,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "16px",
          }}
        >
          <div>
            <button
              onClick={onClose}
              className="absolute top-3 w-6 h-6 rounded-full border border-white flex items-center justify-center right-3 text-white text-xl z-50"
            >
              <IoClose />
            </button>
          </div>

          <div
            className={`${updateClass} pt-5 flex flex-col justify-center items-center`}
          >
            {showTitle && (
              <h3 className="text-[16px] font-bold text-white mb-1 text-center">
                {modalTitle}
              </h3>
            )}
            {showText && (
              <div
                className={`${textClass} text-sm font-normal text-white text-center w-full md:mb-5 max-w-[250px] md:max-w-[492px] mx-auto`}
              >
                <p>{modalText}</p>
              </div>
            )}
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
