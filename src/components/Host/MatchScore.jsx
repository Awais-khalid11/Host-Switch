import React from "react";

const SemiCircleProgress = ({ percentage = 94 }) => {
  const angle = (percentage / 100) * 180;

  return (
    <div>
      <svg width="80" height="38" viewBox="0 0 160 80">
        <path
          d="M10,80 A70,70 0 0,1 150,80"
          fill="none"
          stroke="#ddd"
          strokeWidth="10"
        />
        <path
          d="M10,80 A70,70 0 0,1 150,80"
          fill="none"
          stroke="#4A6CF7"
          strokeWidth="10"
          strokeDasharray="220"
          strokeDashoffset={220 - (220 * percentage) / 100}
          strokeLinecap="round"
        />
        <text
          x="80"
          y="60"
          textAnchor="middle"
          fontSize="16"
          fill="#000"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
      <div
        style={{
          fontSize: 16,
          fontWeight: "semibold",
          marginTop: 5,
          color: "#727272",
        }}
      >
        Match Score
      </div>
    </div>
  );
};

export default SemiCircleProgress;
