import React, { useRef, useState, useEffect } from "react";
import { UploadPNG } from "../../constants/Imgs";

const FileUpload = ({
  label = "Upload a File",
  id,
  nodetail,
  defaultFileName = "",
  btn = false,
  value = [],        
  onChange = () => {} 
}) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (value && value.length > 0) {
      setFile(value[0] || null);
    }
  }, [value]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setFile(files[0]);
      onChange(files);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    if (files.length > 0) {
      setFile(files[0]);
      onChange(files); 
    }
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
      <label htmlFor={id} className="block mb-2.5 text-sm font-bold text-[#323232]">
        {label}
      </label>

      <input
        type="file"
        id={id}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

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
          {file ? (
            file.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-16 h-16 object-cover rounded"
              />
            ) : file.type === "application/pdf" ? (
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 border rounded">
                📄
              </div>
            ) : (
              <div className="w-32 h-28 flex items-center justify-center bg-gray-100 border rounded text-xs text-center p-1">
                {file.name}
              </div>
            )
          ) : (
            <>
              <img src={UploadPNG} alt="uploadImg" className="mb-2" />
              <p className="text-sm text-center leading-5">
                <strong className="text-[#5B5B5B]">Select Files To Upload</strong>
              </p>
              {!nodetail && (
                <p className="text-[11px] text-[#2F3542] ml-1">
                  Drag and drop a file or Click to Upload
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
