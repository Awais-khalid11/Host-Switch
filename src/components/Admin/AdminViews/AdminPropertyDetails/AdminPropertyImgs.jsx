import React from 'react';
import { Property1PNG,
  Property2PNG,
  Property3PNG,
  Property4PNG, } from '../../../../constants/Imgs';

const AdminPropertyImgs = () => {
  const images = [Property1PNG, Property2PNG, Property3PNG, Property4PNG];

  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full lg:w-1/2">
      <h2 className='text-base font-semibold mb-4'>Property Photos</h2>
      <div className="flex  gap-1.5 ">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className="rounded-[10px] w-[24%] h-[165px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPropertyImgs;
