import React from "react";
import NoDataFound from "../../NoDataFound";

const PropertyMedia = ({ data }) => {
  const { property } = data;
  const images = property?.gallery?.images || [];
  // const videos = property?.gallery?.videos || [];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full lg:w-1/2">
      <div className="flex gap-1.5 md:flex-row flex-col mb-3 justify-center">
        {images.length > 0 ? (
          images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`property-img-${index}`}
              className="rounded-[10px] w-full md:w-[24%] md:h-[192px] object-cover"
            />
          ))
        ) : (
          <NoDataFound
            message="No Images Available"
            subMessage="We couldn't load your images at this time."
            className="my-6 "
          />
        )}
      </div>

      {/* <div className="flex gap-1.5 md:flex-row flex-col">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <video
              key={index}
              src={video}
              controls
              className="rounded-[10px] w-full md:w-[24%] md:h-[192px] object-cover"
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No videos available</p>
        )}
      </div> */}
    </div>
  );
};

export default PropertyMedia;
