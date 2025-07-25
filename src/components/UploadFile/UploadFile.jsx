import React, { useRef, useState } from "react";
import { UploadPNG } from "../../constants/Imgs";

const FileUpload = ({
  label = "Upload a File",
  id,
  nodetail,
  defaultFileName = "",
  btn = false, 
}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(defaultFileName);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full mb-5">
      {/* Shared Label */}
      <label htmlFor={id} className="block mb-2.5 text-sm font-bold text-[#323232]">
        {label}
      </label>

      {/* Hidden file input */}
      <input
        type="file"
        id={id}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Style */}
      {btn ? (
        <>
          <p
            className="text-[#D4AF37] text-base font-medium cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-xl mr-1">+</span> Upload File
          </p>
          <p className="text-[11px] text-[#2F3542] mt-1 ml-1">
            Attach a photo, video, or document (PDF, JPG, MP4, DOCX)
          </p>
        </>
      ) : (
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-full h-[147px] rounded-lg bg-white cursor-pointer flex flex-col justify-center items-center p-5 border-2 border-dashed transition-all duration-200 ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-[#D5D7DA]"
          }`}
        >
          <img src={UploadPNG} alt="uploadImg" className="mb-2" />
          <p className="text-sm text-center leading-5">
            <strong className="text-[#5B5B5B]">Select Files To Upload</strong>
          </p>
          {fileName && (
            <p className="text-sm text-center mt-1 text-gray-600">
              Selected: {fileName}
            </p>
          )}
          {!nodetail && (
            <p className="text-[11px] text-[#2F3542] ml-1">
              Drag and drop a file or Click to Upload
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
