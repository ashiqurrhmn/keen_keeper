import React from 'react';
import { MdOutlineSnooze } from "react-icons/md";
import { GoArchive } from "react-icons/go";
import { RiDeleteBin6Line, RiMessage2Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";

const FriendDetailsCard = ({ expectedFriend, loading, getStatusColor, getStatusLabel, formatDate }) => {
    return (
        <div className="w-9/12 mx-auto my-20">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-2">
                  <img
                src={expectedFriend.picture}
                alt={expectedFriend.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
            </div>
            <h1 className="text-[20px] font-semibold text-center mb-2">
              {expectedFriend.name}
            </h1>

            <div className="text-center mb-4">
              <span
                className={`px-4 py-2 rounded-full text-xs font-semibold text-white capitalize inline-block ${getStatusColor(expectedFriend.status)}`}
              >
                {getStatusLabel(expectedFriend.status)}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-3">
              {expectedFriend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs  bg-green-100 text-green-800 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-medium text-gray-600 text-center mb-2 italic">
              "{expectedFriend.bio}"
            </p>

            <p className="text-sm text-gray-500 text-center">
              Preferred: {expectedFriend.email}
            </p>
          </div>

          <div className="space-y-3 mt-6">
            <button className="w-full flex items-center justify-center gap-2 py-2 bg-white shadow-sm rounded-lg font-medium transition">
              <MdOutlineSnooze /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-2 shadow-sm rounded-lg font-medium">
              <GoArchive /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 p py-2 text-red-500 shadow-sm rounded-lg font-medium">
              <RiDeleteBin6Line /> Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-3xl font-bold text-green-800 mb-2">
                {expectedFriend.days_since_contact}
              </p>
              <p className=" text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-3xl font-bold text-green-800 mb-2">
                {expectedFriend.goal}
              </p>
              <p className=" text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-3xl font-bold text-green-800 mb-2">
                {formatDate(expectedFriend.next_due_date)}
              </p>
              <p className="text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[20px] text-green-800 ">Relationship Goal</h2>
              <button className="font-medium btn">Edit</button>
            </div>
            <p className="text-gray-600">
              Connect every{" "}
              <span className="font-semibold text-black">
                {expectedFriend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="text-lg text-green-800 mb-4">Quick Check-In</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 shadow-sm hover:bg-gray-100 rounded-lg">
                <span className="text-3xl">
                  <BiPhoneCall />
                </span>
                <span className="font-medium text-gray-700">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 shadow-sm hover:bg-gray-100 rounded-lg">
                <span className="text-3xl">
                  <RiMessage2Line />
                </span>
                <span className="text-sm font-medium text-gray-700">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-50 shadow-sm hover:bg-gray-100 rounded-lg">
                <span className="text-3xl">
                  <IoVideocamOutline />
                </span>
                <span className="text-sm font-medium text-gray-700">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
    );
};

export default FriendDetailsCard;