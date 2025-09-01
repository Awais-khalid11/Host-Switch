import React from "react";

const Info = ({ data }) => {
  const { property } = data;

  const infoData = [
    {
      title: "Property Address:",
      text: `${property?.address || ""}, ${property?.city || ""}, ${
        property?.country || ""
      }`,
    },
    { title: "Property Type:", text: property?.type },
    { title: "Description:", text: property?.desc },
  ];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full lg:w-1/2">
      <div>
        {infoData.map((item, index) => (
          <div
            key={index}
            className="text-sm font-inter md:flex-row flex-col flex md:flex-nowrap flex-wrap mb-1"
          >
            <div className="font-semibold w-[160px]">{item.title}</div>
            <div className="text-[#1B252B] whitespace-nowrap">{item.text}</div>
          </div>
        ))}

        {property?.condition && (
          <div className="text-sm font-inter flex flex-col gap-1 mt-2">
            <div className="font-semibold w-[160px]">Condition:</div>
            <div className="ml-2">
              {Object.entries(property.condition).map(([key, value]) => (
                <div key={key} className="flex">
                  <span className="w-[160px] font-medium">{key}</span>
                  <span className="text-[#1B252B]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-sm font-inter flex md:flex-nowrap flex-wrap mt-2">
        <div className="font-semibold w-[160px]">Listing Link (Airbnb):</div>
        <a
          href={property?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#005BE0] underline cursor-pointer"
        >
          {property?.link}
        </a>
      </div>
    </div>
  );
};

export default Info;
