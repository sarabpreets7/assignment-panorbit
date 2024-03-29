import React, { useEffect, useState } from 'react'
import "../styles/styles.scss";
import { useNavigate } from "react-router-dom";
import { UserState } from '../context/provider';

function ProfileModal({user,userList}) {

  const navigate = useNavigate();
  const {setUser} = UserState();
  const [otherUser1,setUser1] = useState();
  const [otherUser2,setUser2] = useState();
  

  const logoutHandler = () => {
    
    localStorage.removeItem("userInfo");
    localStorage.removeItem("usersList");
    navigate("/");
    setUser("");
  };

  useEffect(()=>{

    //setting next 2 users in userList ,to be displayed in user's list popup.
    let listLength = userList.length;
    setUser1(userList[(user.id%listLength)]); 
    setUser2(userList[(user.id+1)%listLength]);
   
  })
  return (
    <div className='profile__modal__container'>
      
      <div className='profile__pic__container'>
        <img src={user.profilepicture}/>
      </div>

      <div className='profile__username'>{user.name}</div>
      <div className='profile__email'>{user.email}</div>

{/* list displaying next 2 users in users list */}
      {otherUser1 && otherUser2 && <div className='profile__users__list'>
        <div onClick={()=>{setUser(otherUser1)}}  className='profile__user'>
            <img className='user__pic' src={otherUser1.profilepicture}/>
            <div>{otherUser1.name}</div>
        </div>
        <div onClick={()=>{setUser(otherUser2)}} className='profile__user'>
            <img className='user__pic' src={otherUser2.profilepicture}/>
            <div>{otherUser2.name}</div>
        </div>
      </div>
}

      <div onClick={logoutHandler} className='profile__signout'>Sign out</div>
    </div>
  )
}

export default ProfileModal
