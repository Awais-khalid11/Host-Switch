// import React from "react";
// import {
//   BtnsndSVG,
//   BuildSVG,
//   HomeSVG,
//   LocationSVG,
//   CircleSVG,
//   EyeSVG,
// } from "../../constants/Icons";
// import Button from "../Button/Button";
// import DropdownActions from "../DropDown/Dropdown";
// import { useNavigate } from "react-router-dom";
// // import { ROUTES } from "../../constants/Routes";
// import { useState } from "react";
// import SendProposal from "../SendProposal/SendProposal";
// import Views from "../Views/Views";


// const IncomingCards = ({ incomingData }) => {
//   const navigate = useNavigate();
//   const [cardDetail, setCardDetail] = useState()

//  const dropdownActions = [
//   {
//     label: "View",
//     icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
//     onClick: () => setCardDetail(<Views setClose={setCardDetail}/>),
//   },
//   {
//     label: "Decline",
//     icon: <img src={CircleSVG} alt="decline" className="w-4 h-4" />,
//   },
// ];



//   return cardDetail ? (cardDetail) : (
//     <div className="flex items-center justify-between flex-wrap lg:gap-4">
//       {incomingData.map((item, index) => (
//         <div
//           key={index}
//           className="border border-[#001B4429] rounded-[12px] p-5 h-[252px] lg:mb-0 lg:mr-0 mb-2.5  md:w-[49%] lg:w-[32%] w-full relative"
//         >
//           <div className="flex justify-between items-start">
//             <div className="flex items-center gap-2.5 mb-3.5">
//               <img
//                 src={item.img}
//                 alt="img"
//                 className="h-[54px] w-[54px] rounded-full"
//               />
//               <div>
//                 <h4 className="text-base font-medium text-[#1B252B]">
//                   {item.title}
//                 </h4>
//                 <p className="text-[12px] font-normal text-[#727272]">
//                   {item.text}
//                 </p>
//               </div>
//             </div>
//             <DropdownActions actions={dropdownActions} />
//           </div>

//           <div className="mb-4">
//             <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
//               <img src={LocationSVG} alt="img" />
//               3 King's Road, Chelsea, London SW3P
//             </h5>
//             <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
//               <img src={BuildSVG} alt="img" />
//               Single-Family Home
//             </h5>
//             <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5">
//               <img src={HomeSVG} alt="img" />
//               3 Bed / 2 Bath
//             </h5>
//           </div>

//           <Button variant="borderbtn" prefixImg={BtnsndSVG} onClick={()=>setCardDetail(<SendProposal setClose={setCardDetail}/>)}>
//             Send proposal
//           </Button>
//         </div>
//       ))}
//     </div>
//   )
// };

// export default IncomingCards;


import React from "react";
import {
  BtnsndSVG,
  BuildSVG,
  HomeSVG,
  LocationSVG,
  CircleSVG,
  EyeSVG,
} from "../../constants/Icons";
import Button from "../Button/Button";
import DropdownActions from "../DropDown/Dropdown";
import { useNavigate } from "react-router-dom";

const IncomingCards = ({ incomingData, setCardDetail }) => {
  const navigate = useNavigate();

  const dropdownActions = [
    {
      label: "View",
      icon: <img src={EyeSVG} alt="view" className="w-4 h-4" />,
      onClick: () => setCardDetail("view"),
    },
    {
      label: "Decline",
      icon: <img src={CircleSVG} alt="decline" className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex items-center justify-between flex-wrap lg:gap-4">
      {incomingData.map((item, index) => (
        <div
          key={index}
          className="border border-[#001B4429] rounded-[12px] p-5 h-[252px] lg:mb-0 lg:mr-0 mb-2.5  md:w-[49%] lg:w-[32%] w-full relative"
        >
          {/* Top Section: User Info + Dropdown */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2.5 mb-3.5">
              <img
                src={item.img}
                alt="img"
                className="h-[54px] w-[54px] rounded-full"
              />
              <div>
                <h4 className="text-base font-medium text-[#1B252B]">
                  {item.title}
                </h4>
                <p className="text-[12px] font-normal text-[#727272]">
                  {item.text}
                </p>
              </div>
            </div>
            <DropdownActions actions={dropdownActions} />
          </div>

          {/* Middle Section: Property Details */}
          <div className="mb-4">
            <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
              <img src={LocationSVG} alt="location" />
              3 King's Road, Chelsea, London SW3P
            </h5>
            <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5 mb-2">
              <img src={BuildSVG} alt="type" />
              Single-Family Home
            </h5>
            <h5 className="md:text-sm text-[12px] font-normal flex items-center gap-2.5">
              <img src={HomeSVG} alt="rooms" />
              3 Bed / 2 Bath
            </h5>
          </div>

          {/* Bottom Section: Send Proposal Button */}
          <Button
            variant="borderbtn"
            prefixImg={BtnsndSVG}
            onClick={() => setCardDetail("proposal")}
          >
            Send proposal
          </Button>
        </div>
      ))}
    </div>
  );
};

export default IncomingCards;
