import React, { useEffect, useState } from 'react';
import "../styles/landing.scss";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { UserState } from '../context/provider';
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const { userList,setUserList } = UserState();
    // const [usersList,setUsersList] = useState([]);
    const navigate = useNavigate();


    const selectUser =(user)=>{
        console.log(user);
        localStorage.setItem("userInfo", JSON.stringify(user));
        localStorage.setItem("usersList", JSON.stringify(userList));
        navigate("/profile");
        
    }
    useEffect(()=>{

        fetch("https://panorbit.in/api/users.json")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setUserList(result.users);
          console.log(userList);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          
        }
      )
    },[])
  return (
    <div className='main__container'>

        <div className='users__list__container'>

            <div className='users__list__container__title'>
                Select an account
            </div>
            <PerfectScrollbar >
            <div className='users_list'>
                {/* <div className='user_list_item'>
                    <div className='user_name'>Leanne Graham</div>
                  
                </div> */}

                {userList && userList.map((user)=>{
                       return( <div onClick={()=>selectUser(user)} key={user.id} className='user_list_item'>
                        <img src={user.profilepicture} className='user_profile_icon'/>
                             <div className='user_name'>{user.name}</div>
                        </div>
                       )
                    })}
            </div>
            </PerfectScrollbar>
        </div>

      
    </div>
  )
}

export default Landingpage
