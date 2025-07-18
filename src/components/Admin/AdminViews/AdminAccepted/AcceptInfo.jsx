import React from "react";

const AcceptInfo = () => {
  const infoData = [
    { title: "PM Company Name:", text: "LuxeStay Rentals" },
    { title: "Email:", text: "adam@luxestay.com" },
    { title: "Bedrooms / Baths:", text: "3 Bed / 2 Bath" },
    { title: "Commission Rate:", text: "22%" },
    { title: "Cleaning Included:", text: "Yes" },
    { title: "Guest Communication:", text: "24/7 via dedicated team" },
    { title: "Owner Portal Access:", text: "yes" },
  ];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full lg:w-1/2">
      <div>
        {infoData.map((item, index) => (
        <div key={index} className="text-sm font-inter flex md:flex-nowrap flex-wrap mb-1.5">
          <div className="font-semibold w-[160px]">{item.title}</div>
          <div className="text-[#1B252B] whitespace-nowrap">{item.text}</div>
        </div>
      ))}
      </div>
      {/* <div className="text-sm font-inter flex md:flex-nowrap flex-wrap">
        <div className="font-semibold w-[160px]">Listing Link (Airbnb):</div>
        <div className="text-[#005BE0] underline cursor-pointer">
         View Listing
        </div>
      </div> */}
    </div>
  );
};

export default AcceptInfo;
