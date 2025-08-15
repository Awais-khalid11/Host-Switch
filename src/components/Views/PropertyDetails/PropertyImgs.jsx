// import React from 'react';
// import {
//   Property1PNG,
//   Property2PNG,
//   Property3PNG,
//   Property4PNG,
// } from '../../../constants/Imgs';

// const PropertyImgs = () => {
//   const images = [Property1PNG, Property2PNG, Property3PNG, Property4PNG];

//   return (
//     <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full ">
//       <div className="flex gap-1.5 w-full">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`img-${index}`}
//             className="rounded-[10px]  max-w-[119px] flex-shrink-0"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyImgs;


import React from 'react';
import {
  Property1PNG,
  Property2PNG,
  Property3PNG,
  Property4PNG,
} from '../../../constants/Imgs';

const PropertyImgs = () => {
  const images = [Property1PNG, Property2PNG, Property3PNG, Property4PNG];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full lg:w-1/2">
      <div className="flex  gap-1.5 md:flex-row flex-col">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className="rounded-[10px] w-full md:w-[24%] md:h-[192px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImgs;
