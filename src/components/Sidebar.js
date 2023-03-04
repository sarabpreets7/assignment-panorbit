import React, { useState } from 'react';
import "../styles/sidebar.scss";

function Sidebar() {

    const [activeItem,setActiveItem] = useState(0);


   
  return (
    <div className='sidebar__container'>


        <div className='sidebar__navigation__menu'>
            <div onClick={()=>setActiveItem(0)} className={activeItem == 0?'navigation__item__active':'navigation__item'}>Profile</div>
            <div onClick={()=>setActiveItem(1)} className={activeItem == 1?'navigation__item__active':'navigation__item'}>Posts</div>
            <div onClick={()=>setActiveItem(2)} className={activeItem == 2?'navigation__item__active':'navigation__item'}>Gallery</div>
            <div onClick={()=>setActiveItem(3)} className={activeItem == 3?'navigation__item__active':'navigation__item'}>ToDo</div>
        </div>
      
    </div>
  )
}

export default Sidebar
