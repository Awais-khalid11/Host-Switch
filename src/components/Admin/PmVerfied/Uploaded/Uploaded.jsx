import React, { useEffect, useState } from "react";
import { FilePNG } from "../../../../constants/Imgs";
import { EyeSVG } from "../../../../constants/Icons";
import { getData } from "../../../../api/apiClient";
import { useParams } from "react-router-dom";
import Skeleton from "../../../Skeleton/SkeletonCard";

const Uploaded = ({ text, type }) => {
  const { id } = useParams();
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchDocument();
  }, [id, type]);

  if (loading) {
    return (
      <div className="border border-[#E4E5E8] rounded-[12px] p-5 mb-5">
        {/* Title skeleton */}
        <div className="h-5 w-1/3 bg-gray-300 rounded mb-4 animate-pulse"></div>
        {/* File card skeleton */}
        <div className="border border-[#E4E5E8] rounded-[12px] p-5 animate-pulse">
          <div className="h-4 w-1/4 bg-gray-300 rounded mb-3"></div>
          <div className="h-3 w-1/5 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

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
