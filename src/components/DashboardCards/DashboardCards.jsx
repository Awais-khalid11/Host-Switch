import React from "react";

const DashboardCards = ({data}) => {
  return (
   <div className="flex flex-wrap lg:flex-nowrap justify-between md:gap-5 gap-1 w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#F2F7F9] min-h-[100px] md:mb-0 mb-2.5  w-full rounded-[12px] p-5 pl-2.5"
        >
          <div className="flex items-center gap-2.5">
            <img src={item.img} alt="" className="h-[56px] w-[56px]" />
            <div>
              <h5 className="font-semibold text-base text-[#7A7A7A] whitespace-nowrap">
                {item.text}
              </h5>
              <h4 className="font-bold text-2xl text-black">{item.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
