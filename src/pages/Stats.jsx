import React, { useContext } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { FriendTimeLineContext } from "../context/FriendTimeLineContext";

const Stats = () => {
  const { friendTimeLine } = useContext(FriendTimeLineContext);

  const counts = friendTimeLine.reduce(
    (acc, item) => {
      const type = item.type?.toLowerCase();
      if (acc[type] !== undefined) acc[type]++;
      return acc;
    },
    { text: 0, call: 0, video: 0, meetup: 0 },
  );

  const data = [
    { name: "Text", value: counts.text, fill: "#7f37f5" },
    { name: "Call", value: counts.call, fill: "#244d3f" },
    { name: "Video", value: counts.video, fill: "#37a163" },
    { name: "Meetup", value: counts.meetup, fill: "#ff9800" },
  ].filter((item) => item.value > 0);

  const hasData = data.length > 0;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-9/12 mx-auto py-20">
        <h2 className="text-5xl font-bold mb-8">Friendship Analytics</h2>

        <div className="bg-white py-10 px-5 rounded-lg shadow-sm">
          <p className="text-[20px] font-medium text-[#244D3F] mb-10">
            By Interaction Type
          </p>
          {!hasData ? (
            <p className="text-center text-gray-500 py-8">
              No interactions to display!
            </p>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-64 h-64">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={data}
                      innerRadius="70%"
                      outerRadius="90%"
                      paddingAngle={6}
                      cornerRadius={10}
                      dataKey="value"
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-6 mt-6">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    ></span>
                    <span className="text-gray-600 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
