import React from 'react'
import ComingSoon from '../components/ComingSoon';
import "../styles/styles.scss";
import Navbar from '../components/Navbar';

function Postspage() {
  return (
    <div className='profile__main__container'>
      {/* <Sidebar /> */}

    <div className='user__info__container'>
      <Navbar/>
    {<ComingSoon/>}
    </div>

    </div>
  )
}

export default Postspage
