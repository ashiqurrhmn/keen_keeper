import { useState } from "react";
import { FriendTimeLineContext } from "./FriendTimeLineContext";

const FriendTimeLineProvider = ({ children }) => {
  const [friendTimeLine, setFriendTimeline] = useState([]);

  const addTimelineEntry = (friendName, type) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newEntry = {
      id: Date.now(),
      type: type,
      name: friendName,
      date: formattedDate,
    };

    setFriendTimeline([newEntry, ...friendTimeLine]);
  };

  const data = {
    friendTimeLine,
    setFriendTimeline,
    addTimelineEntry,
  };
  return (
    <FriendTimeLineContext.Provider value={data}>
      {children}
    </FriendTimeLineContext.Provider>
  );
};

export default FriendTimeLineProvider;
