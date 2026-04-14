import React from 'react';
import Banner from '../componenets/Banner';
import Status from '../componenets/Status';
import AllFriendsPage from './AllFriendsPage';

const Homepage = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Banner/>
            <Status/>
            <AllFriendsPage/>
        </div>
    );
};

export default Homepage;