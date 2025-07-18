// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";
// import { UserPNG } from "../../constants/Imgs";
// import { RediconSVG } from "../../constants/Icons";

// const TrainerMessages = ({ userData, onSelectUser }) => {
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchInput, setSearchInput] = useState("");

//   const recentMessages = [
//     {
//       img: UserPNG,
//       title: "Alex Stewart",
//       desc: "One Bedroom Upper...",
//       time: "2 mins ago",
//       active: "userActive",
//       activeBG: true,
//     },
//     {
//       img: UserPNG,
//       title: "Dianne Russell",
//       desc: "Lorem ipsum dolor sit amet...",
//       time: "2 mins ago",
//       active: "userActive",
//       msgCount: "3",
//     },
//     {
//       img: UserPNG,
//       title: "Dianne Russell",
//       desc: "Lorem ipsum dolor sit amet...",
//       time: "2 mins ago",
//       active: "userActive",
//       msgCount: "3",
//     },
//     {
//       img: UserPNG,
//       title: "Dianne Russell",
//       desc: "Lorem ipsum dolor sit amet...",
//       time: "2 mins ago",
//       active: "userActive",
//       msgCount: "3",
//     },
//     {
//       img: UserPNG,
//       title: "Dianne Russell",
//       desc: "Lorem ipsum dolor sit amet...",
//       time: "2 mins ago",
//       active: "userActive",
//       msgCount: "3",
//     },
//     {
//       img: UserPNG,
//       title: "Dianne Russell",
//       desc: "Lorem ipsum dolor sit amet...",
//       time: "2 mins ago",
//       active: "userActive",
//       msgCount: "3",
//     },
//     {
//       img: UserPNG,
//       title: "Dianne Russell",
//       desc: "Lorem ipsum dolor sit amet...",
//       time: "2 mins ago",
//       active: "userActive",
//       msgCount: "3",
//     },
//     {
//       img: UserPNG,
//       title: "Dianne Russell",
//       desc: "Lorem ipsum dolor sit amet...",
//       time: "2 mins ago",
//       active: "userActive",
//       msgCount: "3",
//     },
//   ];

//   return (
//     <div className=" bg-white py-2  rounded-xl  h-[510px] overflow-y-auto">
//         <h2 className="font-semibold text-xl mb-6">Inbox</h2>
//       <div>
//         {/* <div className="flex gap-3">
//           <IoMdSearch
//             size={20}
//             className="cursor-pointer text-gray-700"
//             onClick={() => setShowSearch(true)}
//           />
//           <FaPlus size={16} className="cursor-pointer text-gray-700" />
//         </div> */}
//       </div>

//       {showSearch && (
//         <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg w-[90%] max-w-md p-4 shadow-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Search</h2>
//               <button
//                 onClick={() => setShowSearch(false)}
//                 className="text-gray-500 hover:text-gray-700 text-xl"
//               >
//                 &times;
//               </button>
//             </div>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Search..."
//               value={searchInput}
//               onChange={(e) => setSearchInput(e.target.value)}
//             />
//           </div>
//         </div>
//       )}

//       <div>
//         {recentMessages.map((msg, index) => (
//           <div
//             key={index}
//             onClick={onSelectUser}
//             className={`cursor-pointer ${
//               msg.activeBG &&
//               "bg-[#F7FAFF] border border-[#2525250D] rounded-[10px]"
//             } p-3 flex justify-between items-start`}
//           >
//             <div className="flex justify-between">
//               <div>
//                 <div className="flex items-start gap-2">
//                 <div className="relative shrink-0">
//                   <img
//                     src={msg.img}
//                     alt="notification icon"
//                     className="w-12 h-12 rounded-full"
//                   />
//                 </div>
//                 <div className="text-sm leading-tight">
//                   <div className="flex flex-wrap sm:flex-nowrap gap-2.5 mb-1">
//                     <strong className="font-semibold">{msg.title}</strong>
//                   </div>
//                   <span className="block text-gray-600 truncate max-w-[250px]">
//                     {msg.desc}
//                   </span>
//                 </div>
//               </div>
//               </div>
//               {/* <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
//                 {msg.time}
//               </span> */}
//             </div>
//              <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap flex flex-col items-end gap-2.5">
//                 {msg.time}
//                 <img src={RediconSVG} alt="" />
//               </span>
//             {/* {msg.msgCount && (
//               <span className="bg-[var(--color-primary)] shrink-0 text-white text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full">
//                 {msg.msgCount}
//               </span>
//             )} */}
//           </div>
          
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrainerMessages;


import React, { useState } from "react";
import { UserPNG } from "../../constants/Imgs";
import { RediconSVG } from "../../constants/Icons";
import { IoArrowBackOutline } from "react-icons/io5";


const TrainerMessages = ({ onSelectUser }) => {
  const recentMessages = [
    {
      img: UserPNG,
      title: "Alex Stewart",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Cameron Williamson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Jerome Bell",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Savannah Nguyen",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Annette Black",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Darlene Robertson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Darlene Robertson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
    {
      img: UserPNG,
      title: "Darlene Robertson",
      desc: "One Bedroom Upper...",
      time: "08:20 PM",
      msgCount: "12",
    },
  ];

  return (
    <div className="bg-white border border-[#F5F5F5] py-2 rounded-xl h-[510px] overflow-y-auto w-full">
      <h2 className="font-semibold text-xl mb-4 px-4">Inbox</h2>
      <div>
        {recentMessages.map((msg, index) => (
          <div
            key={index}
            onClick={onSelectUser}
            className="cursor-pointer px-4 py-3 flex justify-between items-start hover:bg-[#F5F5F5]"
          >
            <div className="flex gap-3">
              <img
                src={msg.img}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold">{msg.title}</p>
                <p className="text-gray-600 truncate max-w-[200px]">
                  {msg.desc}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 text-xs text-gray-500">
              <span>{msg.time}</span>
              {/* <img src={RediconSVG} alt="Unread" className="w-4 h-4" /> */}
              {/* Red dot with number */}
              {msg.msgCount && (
                <span className="bg-[#D92D20] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                  {msg.msgCount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerMessages;
