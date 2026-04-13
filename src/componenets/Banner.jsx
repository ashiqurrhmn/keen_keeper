import React from "react";

const Banner = () => {
  return (
    <div className="text-center py-20 w-9/12 mx-auto">
      <h1 className="text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
      <p className="text-[16px] text-[#64748B] my-5">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="bg-[#244D3F] text-white px-5 py-2 rounded-lg">
        + Add a Friend
      </button>
    </div>
  );
};

export default Banner;
