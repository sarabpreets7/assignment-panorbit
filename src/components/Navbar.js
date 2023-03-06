import React, { useEffect, useState } from 'react'
import "../styles/styles.scss";
import { UserState } from '../context/provider';
import ProfileModal from './ProfileModal';
import { useDetectClickOutside } from 'react-detect-click-outside';


function Navbar() {
    const { user,activePage,userList } = UserState();
    const [showModal,setModal] = useState(false);

    const ref = useDetectClickOutside({ onTriggered: ((e)=>{  
      setTimeout(()=>{
        if(e.target.classList[0] != 'user__name'){
          setModal(false)
        }
      },100)
     
    } )});

    useEffect(()=>{
      setModal(false)
    },[user])

    
    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  return (user && 
    <div className='navbar__container'>
      
      <div className='selected__page'>{capitalizeFirstLetter(activePage)}</div>

      <div  className='user__profile'>
        <img className='user__pic' src={user.profilepicture}/>
        <div className='user__name' onClick={()=>setModal(true)}>{user.name}</div>

        <div ref={ref} className='profile__popup'>
           {showModal && <ProfileModal  user={user} userList={userList}/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
