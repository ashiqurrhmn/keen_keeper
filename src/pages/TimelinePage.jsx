import React, { useContext, useState } from "react";
import { FriendTimeLineContext } from "../context/FriendTimeLineContext";
import TimelineItem from "../componenets/ui/TimelineCard";
import TimelineCard from "../componenets/ui/TimelineCard";

const TimelinePage = () => {
  const { friendTimeLine } = useContext(FriendTimeLineContext);
  const [filterType, setFilterType] = useState("all");

  const filteredTimeline =
    filterType === "all"
      ? friendTimeLine
      : friendTimeLine.filter(
          (item) => item.type.toLowerCase() === filterType.toLowerCase(),
        );

  return (
    <div className="bg-[#F8FAFC] py-20 ">
      <div className="w-9/12 mx-auto">
        <h2 className="text-5xl font-bold mb-8">Timeline</h2>

        <div className="mb-6">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-6 py-2 border-2 border-gray-300 rounded-lg text-sm text-gray-700 bg-white"
          >

            <option value="all">All interactions</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
          </select>
        </div>

        <div>
          {filteredTimeline.length > 0 ? (
            filteredTimeline.map((item) => (
              <TimelineCard
                key={item.id}
                type={item.type}
                name={item.name}
                date={item.date}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No interactions found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
