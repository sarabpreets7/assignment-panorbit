import React from 'react';
import "../styles/profile.scss";
import Sidebar from '../components/Sidebar';
import ProfileDetail from '../components/ProfileDetail';

function Profilepage() {
  return (
    <div className='profile__main__container'>
      {/* <Sidebar /> */}

    <div className='user__info__container'>
    <ProfileDetail/>
    </div>

    </div>
  )
}

export default Profilepage
