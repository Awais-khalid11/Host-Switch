import React from "react";

const AdminExpectations = () => {
  const infoData = [
    {
      title: "Top Priorities:",
      text: [
        "Revenue Optimization",
        "Transparency in Reporting",
        "Guest Experience",
      ],
    },
    {
      title: "Involvement Level",
      text: "Minimal Involvement Preferred",
    },
    {
      title: "Preferred Commission Split:",
      text: "15–20%",
    },
    {
      title: "Willing to Co-Host:",
      text: "No (Prefers Full-Service PM)",
    },
  ];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
      <h3 className="font-semibold text-xl mb-4">Host’s Expectations</h3>
      <div className="border border-[#E4E5E8] rounded-[12px] p-5">
        {infoData.map((item, index) => (
          <div key={index} className="text-sm font-inter flex md:flex-nowrap flex-wrap mb-3 md:mb-1.5">
            <h4 className="font-semibold w-[210px] lg:w-[280px]">{item.title}</h4>
            {Array.isArray(item.text) ? (
              <ul className="list-disc flex md:flex-nowrap flex-wrap md:gap-5 lg:gap-20 ml-4 md:pl-2.5 text-[#1B252B]">
                {item.text.map((point, i) => (
                  <li className="whitespace-nowrap" key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <h5 className="text-[#1B252B]">{item.text}</h5>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminExpectations;
