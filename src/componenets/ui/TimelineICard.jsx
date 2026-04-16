import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoIosText } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const TimelineCard = ({ type, name, date }) => {
  const lowerType = type.toLowerCase();

  const icon =
    lowerType === "call" ? (
      <IoCall className=" text-gray-700 text-4xl" />
    ) : lowerType === "text" ? (
      <span className="text-gray-700 text-4xl">
        <IoIosText />
      </span>
    ) : lowerType === "video" ? (
      <span className="text-gray-700 text-4xl">
        <FaVideo />
      </span>
    ) : (
      <span></span>
    );

  const label =
    lowerType === "call"
      ? "Call"
      : lowerType === "text"
        ? "Text"
        : lowerType === "video"
          ? "Video"
          : "Activity";

  return (
    <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
      <div className="flex gap-3 items-center">
        <div>{icon}</div>

        <div>
          <p className="text-[20px] text-gray-800">
            <span className="font-semibold">{label}</span>
            <span className="text-gray-600 text-[18px]"> with {name}</span>
          </p>

          <p className="font-medium text-gray-500 mt-1">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
