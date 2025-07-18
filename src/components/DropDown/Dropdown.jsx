import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Dropdown = ({
  actions = [], // Array of { label, icon, onClick }
  icon, // Can be image or icon
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen((prev) => !prev)}
        className={`p-1 hover:text-black text-gray-600 ${className}`}
      >
        {icon || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        )}
      </button>

      {open &&
        createPortal(
          <div
            ref={menuRef}
            className="absolute z-50 w-45 bg-white border border-gray-200 rounded-md shadow-md p-1 animate-dropdown"
            style={{
              top:
                btnRef.current?.getBoundingClientRect().bottom +
                window.scrollY +
                -25,
              left:
                btnRef.current?.getBoundingClientRect().left +
                window.scrollX -
                205 +
                (btnRef.current?.offsetWidth || 0),
              position: "absolute",
            }}
          >
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  setOpen(false);
                  if (action.onClick) action.onClick();
                }}
                className="w-full text-left px-3 py-2 cursor-pointer text-sm text-gray-800 hover:bg-gray-100 rounded-md flex items-center gap-2"
              >
                {action.icon && <span>{action.icon}</span>}
                {action.label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

export default Dropdown;
