import React, { useEffect, useState } from "react";
import { FilePNG } from "../../../../constants/Imgs";
import { EyeSVG } from "../../../../constants/Icons";
import { getData } from "../../../../api/apiClient";
import { useParams } from "react-router-dom";

const Uploaded = ({ text, type }) => {
  const { id } = useParams();
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const res = await getData(`/user/${id}`);
        if (res?.success) {
          const docs = res.payload.document;

          let file = null;
          if (type === "statement") file = docs.sample_owner_statement;
          if (type === "contract") file = docs.sample_contract;

          setFileUrl(file);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, [id, type]);

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
      <h3 className="font-semibold text-xl mb-4">{text}</h3>
      {fileUrl ? (
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center border border-[#E4E5E8] rounded-[12px] p-5">
          <h4 className="text-sm font-normal flex items-center gap-1.5 lg:mb-0 mb-2.5">
            <img src={FilePNG} alt="img" />
            {fileUrl.split(".").pop().toUpperCase()} File
          </h4>
          <a
            href={`${import.meta.env.VITE_IMG_URL}${fileUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-semibold flex items-center gap-1.5 text-blue-600 cursor-pointer"
          >
            <img src={EyeSVG} alt="img" />
            View Document
          </a>
        </div>
      ) : (
        <p className="text-gray-500">No document uploaded</p>
      )}
    </div>
  );
};

export default Uploaded;
