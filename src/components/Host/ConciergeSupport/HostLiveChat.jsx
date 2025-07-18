import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PdffilePNG, UserPNG } from "../../../constants/Imgs";

const HostLiveChat = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col h-[510px] bg-[#F5F5F5] rounded-xl overflow-hidden">
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
         <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src={UserPNG}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1 flex justify-between items-center">
              <h4 className="text-sm font-semibold text-[#414651]">
                Mollie Hall ·
              </h4>
              <h5 className="text-[12px] font-normal">Thursday 11:40am</h5>
            </div>
            <div className="bg-white rounded-r-[8px] rounded-b-[8px] p-3 text-sm max-w-xs">
              Hey Olivia, I’ve finished with the requirements doc! I made some
              notes in the gdoc as well for Phoenix to look over.
            </div>
            <div className="mt-2">
              <div className="text-sm text-gray-500 mb-1 flex justify-between items-center">
                <h4 className="text-sm font-semibold text-[#414651]">
                  Mollie Hall ·
                </h4>
                <h5 className="text-[12px] font-normal">Thursday 11:40am</h5>
              </div>
              <div className="bg-white border border-gray-200 rounded-r-[8px] rounded-b-[8px] p-3 flex items-center gap-3">
                <div className="">
                  <img src={PdffilePNG} alt="" />
                </div>
                <div className="flex flex-col text-sm">
                  <p className="font-bold text-sm">Tech requirements.pdf</p>
                  <span className="text-xs text-gray-500">1.2 MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-[#414651]">
                You
              </h4>
              <h5 className="text-[12px] font-normal">Just now</h5>
            </div>
          <div className="bg-[#B1B1B1] text-white rounded-l-[8px] rounded-b-[8px] p-3 text-sm max-w-xs">
            Sure thing, I’ll have a look today. They’re looking great!
          </div>
          <div className="mt-1 text-xl">❤️ 👌</div>
        </div>
        <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src={UserPNG}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1 flex justify-between items-center">
              <h4 className="text-sm font-semibold text-[#414651]">
                Mollie Hall ·
              </h4>
              <h5 className="text-[12px] font-normal">Thursday 11:40am</h5>
            </div>
            <div className="bg-white rounded-r-[8px] rounded-b-[8px] p-3 text-sm max-w-xs">
              Hey Olivia, I’ve finished with the requirements doc! I made some
              notes in the gdoc as well for Phoenix to look over.
            </div>
            <div className="mt-2">
              <div className="text-sm text-gray-500 mb-1 flex justify-between items-center">
                <h4 className="text-sm font-semibold text-[#414651]">
                  Mollie Hall ·
                </h4>
                <h5 className="text-[12px] font-normal">Thursday 11:40am</h5>
              </div>
              <div className="bg-white border border-gray-200 rounded-r-[8px] rounded-b-[8px] p-3 flex items-center gap-3">
                <div className="">
                  <img src={PdffilePNG} alt="" />
                </div>
                <div className="flex flex-col text-sm">
                  <p className="font-bold text-sm">Tech requirements.pdf</p>
                  <span className="text-xs text-gray-500">1.2 MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-300 my-1 mx-4" />
      <div className="flex items-center gap-3 p-4 bg-[#F5F5F5] rounded-b-xl">
        <button className="text-gray-500 hover:text-black">
          <GrAttachment size={20} />
        </button>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Send a message"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="text-blue-600 hover:text-blue-800">
          <IoIosSend size={26} />
        </button>
      </div>
    </div>
  );
};

export default HostLiveChat;
