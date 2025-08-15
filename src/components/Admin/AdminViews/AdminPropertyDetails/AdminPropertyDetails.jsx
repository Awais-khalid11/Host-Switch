import React from 'react';
import AdminInfo from './AdminInfo';
import AdminPropertyImgs from './AdminPropertyImgs';

const AdminPropertyDetails = () => {
  return (
    <div className="border border-[#E4E5E8] rounded-[12px] p-5 w-full mb-5">
      <h3 className="font-semibold text-xl mb-6">Property Details</h3>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <AdminInfo />
        <AdminPropertyImgs />
      </div>
    </div>
  );
};

export default AdminPropertyDetails;
