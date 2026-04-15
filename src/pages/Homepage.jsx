import React, { useEffect, useState } from 'react';
import Banner from '../componenets/Banner';
import Status from '../componenets/Status';
import AllFriendsPage from './AllFriendsPage';

const Homepage = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            setFriends(data);
            setLoading(false);
        };
        fetchData();
    }, []);
    console.log(loading);
    return (
        <div className='bg-[#F8FAFC]'>

            <Banner/>
            <Status friends={friends}/>
            <AllFriendsPage friends={friends} loading={loading} />
        </div>
    );
};

export default Homepage;