import React, { useRef, useState, useEffect } from "react";
import { UploadPNG } from "../../constants/Imgs";

const FileUpload = ({
  label = "Upload Files",
  id,
  nodetail,
  defaultFileName = "",
  btn = false,
  value = [],
  onChange = () => {},
}) => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (value && value.length > 0) {
      setFiles(value);
    } else {
      setFiles([]);
    }
  }, [value]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    if (newFiles.length > 0) {
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onChange(updatedFiles);
    }
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const newFiles = Array.from(event.dataTransfer.files);
    if (newFiles.length > 0) {
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onChange(updatedFiles);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  const renderFilePreviews = () => {
    if (files.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {files.map((file, index) => {
          if (file.path) {
            const isImage = file.path.match(/\.(jpg|jpeg|png|gif|webp)$/i);
            return (
              <div key={`server-${index}`} className="relative">
                {isImage ? (
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${file.path}`}
                    alt="uploaded"
                    className="w-16 h-16 object-cover rounded border"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-image.jpg";
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 border rounded text-xs text-center p-1">
                    {file.originalname || "File"}
                  </div>
                )}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="absolute -top-2 -right-2 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            );
          }

          if (file instanceof File) {
            if (file.type?.startsWith("image/")) {
              return (
                <div key={`new-${index}`} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-16 h-16 object-cover rounded border"
                  />
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
            } else {
              return (
                <div key={`new-${index}`} className="relative">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 border rounded text-xs text-center p-1">
                    {file.name}
                  </div>
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
          {renderFilePreviews()}
        </>
      ) : (
        <div
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-full min-h-[147px] rounded-lg bg-white cursor-pointer flex flex-col justify-center items-center p-5 border-2 border-dashed transition-all duration-200 ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-[#D5D7DA]"
          }`}
        >
          {files.length > 0 ? (
            <div className="w-full">
              <p className="text-sm text-center mb-3">
                <strong className="text-[#5B5B5B]">
                  {files.length} file(s) selected
                </strong>
              </p>
              {renderFilePreviews()}
              {/* <p className="text-xs text-center mt-3 text-blue-500">
                Click to add more files
              </p> */}
            </div>
          ) : (
            <>
              <img src={UploadPNG} alt="uploadImg" className="mb-2" />
              <p className="text-sm text-center leading-5">
                <strong className="text-[#5B5B5B]">
                  Select Files To Upload
                </strong>
              </p>
              {!nodetail && (
                <p className="text-[11px] text-[#2F3542] ml-1">
                  Drag and drop files or Click to Upload
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
