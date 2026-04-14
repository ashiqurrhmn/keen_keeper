import React from "react";

const Status = ({ friends = [] }) => {
  const totalFriends = friends.length;
  
  const onTrack = friends.filter(
    friend => friend.status === 'on-track'
  ).length;
  
  const needAttention = friends.filter(
    friend => friend.status === 'overdue'
  ).length;
  
  const interactionsThisMonth = friends.filter(
    friend => friend.days_since_contact <= 30
  ).length;

  return (
    <div className="w-9/12 mx-auto ">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-green-600">{totalFriends}</h2>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-green-800">{onTrack}</h2>
        <p className="text-[#64748B]">On Track</p>
      </div>
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-red-500">{needAttention}</h2>
        <p className="text-[#64748B]">Need Attention</p>
      </div>
      <div className="text-center bg-white shadow-sm rounded-lg py-10">
        <h2 className="text-[32px] font-semibold text-green-600">{interactionsThisMonth}</h2>
        <p className="text-[#64748B]">Contacted This Month</p>
      </div>
    </div>
    <div className=" w-full py-10 text-gray-200">
        <hr />
    </div>
    </div>
  ); 
};

export default Status;
