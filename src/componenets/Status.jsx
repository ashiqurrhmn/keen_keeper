import React from "react";

const Status = () => {
  return (
    <div className="w-9/12 mx-auto ">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-[#244D3F]">3</h2>
        <p className="text-[#64748B]">On Track</p>
      </div>
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-[#244D3F]">10</h2>
        <p className="text-[#64748B]">Need Attention</p>
      </div>
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-[#244D3F]">12</h2>
        <p className="text-[#64748B]">Interactions This Month</p>
      </div>
    </div>
    <div className=" w-full py-10 text-gray-200">
        <hr />
    </div>
    </div>
  ); 
};

export default Status;
