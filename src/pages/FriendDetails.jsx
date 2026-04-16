import { useParams } from "react-router";
import useFriend from "../hooks/useFriend";

import FriendDetailsCard from "../componenets/ui/FriendDetailsCard";
import { FriendTimeLineContext } from "../context/FriendTimeLineContext";
import { useContext } from "react";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriend();
  const expectedFriend = friends.find((friend) => friend.id == id);

  const { friendTimeLine, setFriendTimeline, addTimelineEntry } = useContext(
    FriendTimeLineContext,
  );

  const getStatusColor = (status) => {
    if (status === "overdue") return "bg-red-500";
    else if (status === "on-track") return "bg-green-800";
    else if (status === "almost due") return "bg-orange-400";
    else return "bg-gray-500";
  };

  const getStatusLabel = (status) => {
    if (status === "overdue") return "Overdue";
    else if (status === "on-track") return "On Track";
    else if (status === "almost due") return "Almost Due";
    else return status;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <FriendDetailsCard
      expectedFriend={expectedFriend}
      loading={loading}
      getStatusColor={getStatusColor}
      getStatusLabel={getStatusLabel}
      formatDate={formatDate}
      friendTimeLine={friendTimeLine}
      setFriendTimeline={setFriendTimeline}
      addTimelineEntry={addTimelineEntry}
    />
  );
};

export default FriendDetails;
