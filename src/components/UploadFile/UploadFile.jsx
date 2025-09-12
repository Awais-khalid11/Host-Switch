import React, { useRef, useState, useEffect } from "react";
import { UploadPNG } from "../../constants/Imgs";

const FileUpload = ({
  label = "Upload Files",
  id,
  nodetail,
  btn = false,
  value = [],
  onChange = () => {},
}) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => fileInputRef.current?.click();

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    if (newFiles.length > 0) {
      onChange([...value, ...newFiles]); // parent stores everything
    }
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const newFiles = Array.from(event.dataTransfer.files);
    if (newFiles.length > 0) {
      onChange([...value, ...newFiles]);
    }
  };

  const removeFile = (indexToRemove) => {
    onChange(value.filter((_, index) => index !== indexToRemove));
  };

  const renderFilePreviews = () => {
    if (value.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {value.map((file, index) => {
          if (file.path) {
            const isImage = file.path.match(/\.(jpg|jpeg|png|gif|webp)$/i);
            return (
              <div key={`server-${index}`} className="relative">
                {isImage ? (
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${file.path}`}
                    alt="uploaded"
                    className="w-16 h-16 object-cover rounded border"
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 border rounded text-xs p-1">
                    {file.originalname || "File"}
                  </div>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            );
          }

          if (file instanceof File) {
            return (
              <div key={`new-${index}`} className="relative">
                {file.type?.startsWith("image/") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-16 h-16 object-cover rounded border"
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 border rounded text-xs p-1">
                    {file.name}
                  </div>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            );
          }

          return null;
        })}
      </div>
    );
  };

  return (
    <div className="w-full mb-5">
      <label
        htmlFor={id}
        className="block mb-2.5 text-sm font-bold text-[#323232]"
      >
        {label}
      </label>

      <input
        type="file"
        id={id}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        multiple
        accept="image/*,video/*,.pdf,.doc,.docx"
      />

      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        className={`w-full min-h-[147px] rounded-lg bg-white cursor-pointer flex flex-col justify-center items-center p-5 border-2 border-dashed ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-[#D5D7DA]"
        }`}
      >
        {value.length > 0 ? (
          <div className="w-full">{renderFilePreviews()}</div>
        ) : (
          <>
            <img src={UploadPNG} alt="uploadImg" className="mb-2" />
            <p className="text-sm text-center leading-5">
              <strong className="text-[#5B5B5B]">Select Files To Upload</strong>
            </p>
            {!nodetail && (
              <p className="text-[11px] text-[#2F3542] ml-1">
                Drag and drop files or Click to Upload
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
