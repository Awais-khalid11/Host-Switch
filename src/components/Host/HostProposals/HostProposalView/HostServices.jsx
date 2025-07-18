// import React from "react";
// import { HandSVG } from "../../../../constants/Icons";

// const service = [
//   {
//     icon: HandSVG,
//     title: "24/7 Guest Management",
//   },
//   {
//     icon: HandSVG,
//     title: "24/7 Guest Management",
//   },
//   {
//     icon: HandSVG,
//     title: "24/7 Guest Management",
//   }
// ];

// const HostServices = () => {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-6">Services</h2>
//       {service.map((item, index) => (
//         <div key={index}>
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3 mb-2.5">
//               <span className="border border-[#D9D9D9] rounded-full w-[35px] h-[35px] flex justify-center items-center">
//                 <img src={item.icon} alt="" className="w-5" />
//               </span>
//               <h4 className="text-sm font-normal text-black">{item.title}</h4>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="border border-[#D9D9D9] rounded-full w-[35px] h-[35px] flex justify-center items-center">
//                 <img src={item.lefticon} alt="" className="w-5" />
//               </span>
//               <h4 className="text-sm font-normal text-black">{item.lefttitle}</h4>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HostServices;


import React from "react";
import {
    CleanSVG,
  HandSVG,
  PriceSVG,
} from "../../../../constants/Icons"; 

const services = [
  { icon: HandSVG, title: "24/7 Guest Management" },
  { icon: CleanSVG, title: "Cleaning & Turnover" },
  { icon: PriceSVG, title: "Pricing & Revenue" },
  { icon: HandSVG, title: "Emergency Repairs" },
  { icon: HandSVG, title: "Multi-Platform Sync" },
  { icon: HandSVG, title: "Damage Claims" },
];

const HostServices = () => {
  const serviceRows = [];
  for (let i = 0; i < services.length; i += 2) {
    serviceRows.push(services.slice(i, i + 2));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Services</h2>
      {serviceRows.map((row, index) => (
        <div
          key={index}
          className="flex justify-between mb-4 items-start flex-wrap "
        >
          {row.map((item, i) => (
            <div key={i} className="flex items-center gap-3 w-[213px]">
              <span className="border border-[#D9D9D9] rounded-full w-[35px] h-[35px] flex justify-center items-center">
                <img src={item.icon} alt={item.title} className="w-5" />
              </span>
              <h4 className="text-sm font-normal text-black">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HostServices;
