// import React, { useEffect, useRef } from "react";
// import { ModalbgPNG } from "../../constants/Imgs";

// const Modal = ({
//   modalTitle,
//   modalText,
//   children,
//   modalImg,
//   onClose,
//   width = "582px",
//   height = "263px",
//   useBgImage = true,
//   bgColor = "#4D72FF",
//   showModalIcon = true,
//   showText,
//   showTitle,
//   updateClass,
//   textClass,
//   bgClass,
//   ModalbgClass
// }) => {
//   const modalRef = useRef();

//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => document.removeEventListener("mousedown", handleOutsideClick);
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 z-50 px-2.5 flex justify-center items-center bg-black/5">
//       <div className="flex flex-col  justify-center items-center px-2.5 mx-2.5">
//         {/* Optional Top Circle Icon */}
//         {showModalIcon && (
//           <div className="w-[88px] h-[88px] relative top-8 z-50 rounded-full bg-[#4D72FF] text-white flex items-center justify-center">
//             {modalImg && <img src={modalImg} alt="img" />}
//           </div>
//         )}

//         {/* Modal Container */}
//         <div
//           ref={modalRef}
//           className={` ${bgClass}`}
//           style={{
//             width,
//             height,
//             backgroundImage: useBgImage ? `url(${ModalbgClass})` : "none",
//             backgroundColor: useBgImage ? "transparent" : bgColor,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             borderRadius: "16px",
//           }}
//         >
//           <div
//             className={`${updateClass} pt-5 flex flex-col justify-center items-center`}
//           >
//             {showTitle && (
//               <h3 className="text-[16px] font-bold text-white mb-1 text-center">
//                 {modalTitle}
//               </h3>
//             )}
//             {showText && (
//               <div
//                 className={`${textClass} text-sm font-normal text-white text-center w-full md:mb-5 max-w-[250px] md:max-w-[492px] mx-auto`}
//               >
//                 <p>{modalText}</p>
//               </div>
//             )}
//             <div className="w-full">{children}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React, { useEffect, useRef, useState } from "react";
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
  textClass,
  bgClass,
  ModalbgClass,
}) => {
  const modalRef = useRef();
  const [isDesktop, setIsDesktop] = useState(true);

  // 👇 Check on mount whether it's desktop
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px = lg breakpoint
    };

    checkScreenSize(); // Run once on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // 👇 Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  // 🚫 Don't render anything on mobile/tablet
  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 z-50 px-2.5 flex justify-center items-center bg-black/5">
      <div className="flex flex-col justify-center items-center px-2.5 mx-2.5">
        {showModalIcon && (
          <div className="w-[88px] h-[88px] relative top-8 z-50 rounded-full bg-[#4D72FF] text-white flex items-center justify-center">
            {modalImg && <img src={modalImg} alt="img" />}
          </div>
        )}

        <div
          ref={modalRef}
          className={`${bgClass}`}
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
