import Card from "../componenets/ui/Card";

const AllFriendsPage = ({ friends, loading }) => {
  return (
    <div className="w-9/12 mx-auto">
      <div className="pb-10">
        <h3 className="text-2xl font-semibold">Your Friends</h3>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
            {friends.map((friend) => (
              <Card key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFriendsPage;
