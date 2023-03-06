import React, { useEffect } from "react";
import "../styles/styles.scss";
import { UserState } from "../context/provider";
import PerfectScrollbar from 'react-perfect-scrollbar';
import chatIcon from "../assets/chat-icon.png";

function Chatbox({showChatBox,setChatBox}) {
  const { userList } = UserState();
 
  const isUserOnline = () => {
    return Math.random() > 0.5;
  };
  useEffect(() => {}, []);
  return (
    
    <div className="chat__box__container">
        <div onClick={()=>setChatBox(!showChatBox)} className="chatbox__header">
            <div className="chatbox__header__title">
                <img src={chatIcon}/>
                <div>Chats</div>
            </div>
            <div className={!showChatBox?'chatbox__open':'chatbox__close'}>{'<'}</div>
        </div>
       { showChatBox && <PerfectScrollbar>
      <div className="available__users__list">
        
        {userList &&
          userList.map((user) => {
            return (
              <div key={user.id} className="profile__user">
                <div className="profile__detail">
                  <img
                    className="user__pic"
                    src={user.profilepicture}
                  />
                 {user.name}
                </div>
                <div className={isUserOnline() == true?'user online':'user offline'}></div>
              </div>
            );
          })}
      </div>
      </PerfectScrollbar>}
    </div>
  );
}

export default Chatbox;
