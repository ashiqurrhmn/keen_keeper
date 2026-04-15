
import Banner from '../componenets/Banner';
import Status from '../componenets/Status';
import useFriend from '../hooks/useFriend';
import AllFriendsPage from './AllFriendsPage';
import FriendDetails from './FriendDetails';

const Homepage = () => {
   const { friends, loading } = useFriend();
    return (
        <div className='bg-[#F8FAFC]'>

            <Banner/>
            <Status friends={friends}/>
            <AllFriendsPage friends={friends} loading={loading} />
        </div>
    );
};

export default Homepage;