import React, { useEffect, useState } from 'react';
import "../styles/sidebar.scss";
import { UserState } from '../context/provider';
import { useNavigate } from "react-router-dom";



function Sidebar() {

    const navigate = useNavigate();
    const { activePage,setPage } = UserState();


    const setActivePage =(page)=>{
      setPage(page);
      navigate(`/${page}`);
    }
    useEffect(()=>{

    },[activePage])

   
  return (
    <div className='sidebar__container'>


        <div className='sidebar__navigation__menu'>
            <div onClick={()=>setActivePage('profile')} className={activePage == 'profile'?'navigation__item__active':'navigation__item'}>Profile</div>
            <div onClick={()=>setActivePage('post')} className={activePage == 'post'?'navigation__item__active':'navigation__item'}>Posts</div>
            <div onClick={()=>setActivePage('gallery')} className={activePage == 'gallery'?'navigation__item__active':'navigation__item'}>Gallery</div>
            <div onClick={()=>setActivePage('todo')} className={activePage == 'todo'?'navigation__item__active':'navigation__item'}>ToDo</div>
        </div>
      
    </div>
  )
}

export default Sidebar
