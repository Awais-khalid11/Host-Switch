import React, { useEffect, useRef } from "react";
import { ModalbgPNG } from "../../constants/Imgs";

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
  textClass
}) => {
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
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="flex flex-col  justify-center items-center">

        {/* Optional Top Circle Icon */}
        {showModalIcon && (
          <div className="w-[88px] h-[88px] relative top-12 z-50 rounded-full bg-[#4D72FF] text-white flex items-center justify-center">
            {modalImg && <img src={modalImg} alt="img" />}
          </div>
        )}

        {/* Modal Container */}
        <div
          ref={modalRef}
          className="flex items-center justify-center "
          style={{
            width,
            height,
            backgroundImage: useBgImage ? `url(${ModalbgPNG})` : "none",
            backgroundColor: useBgImage ? "transparent" : bgColor,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "16px",
          }}
        >
          <div className={`${updateClass} pt-5 flex flex-col justify-center items-center`}>
            {showTitle && <h3 className="text-[16px] font-bold text-white mb-1 text-center">
              {modalTitle}
            </h3>}
           {showText && <div className={`${textClass} text-sm font-normal text-white text-center mb-5 max-w-[250px] md:max-w-[492px] mx-auto`}>
              <p>{modalText}</p>
            </div>}
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// import React, { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";
// import { CrossSVG } from "../../constants/Icons";
// import { ModalbgPNG } from "../../constants/Imgs"; // ✅ Make sure this matches your Imgs.js export

// const Modal = ({ children, setIsOpen, className = "" }) => {
//   const modalRef = useRef(null);

//   const handleOutsideClick = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => (document.body.style.overflow = "auto");
//   }, []);

//   const isMobile = window.innerWidth < 768;

//   return createPortal(
//     <div
//       onClick={handleOutsideClick}
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 p-4"
//     >
//       <div
//         ref={modalRef}
//         className={`relative rounded-[20px] px-4 py-6 flex flex-col justify-center items-center 
//           w-full max-w-[95%] md:min-w-[400px] md:max-w-[600px] max-h-[90vh] overflow-y-auto transition-all duration-300
//           ${className}`}
//         style={{
//           backgroundColor: isMobile ? "#4A72FF" : "transparent",
//           backgroundImage: isMobile ? "none" : `url(${ModalbgPNG})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <button
//           className="absolute top-3 right-3"
//           onClick={() => setIsOpen(false)}
//         >
//           <img src={CrossSVG} alt="" />
//         </button>
//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;

