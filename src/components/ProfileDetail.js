import React, { useEffect } from "react";
import "../styles/styles.scss";
import { UserState } from "../context/provider";
import ProfileModal from "./ProfileModal";
import Navbar from "./Navbar";

function ProfileDetail(props) {
  // const { user } = UserState();
  const user  = props.user;
 
  useEffect(() => {
    
    if(user){
      const ifameData=document.getElementById("iframeId")
        const lat=user.address.geo.lat;
        const lon=user.address.geo.lng;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    }
  }, [user]);

  return (
    user &&
    <div className="profile__details__container">
      {/* <ProfileModal/> */}
      
      <div className="profile__details__left__container">
        {/* user profile image */}
        <img src={user.profilepicture} className="user__profile__pic" />
        <div className="user__name">{user.name}</div>
        <div className="user__details__container">
          <table>
            <tr className="user__info__stat">
              <td className="user_stat_key">Username </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.username}</td>
            </tr>

            <tr className="user__info__stat ">
              <td className="user_stat_key">e-mail </td>
              <td className="separator">:</td>
              <td className="user_stat_value flex__column">
                <div>{user.email.substring(0,9)}</div>
                <div>{user.email.substring(9)}</div>
              </td>
            </tr>

            <tr className="user__info__stat">
              <td className="user_stat_key">Phone </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.phone}</td>
            </tr>

            <tr className="user__info__stat">
              <td className="user_stat_key">Website </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.website}</td>
            </tr>
          </table>
          <div className="section__end"></div>
          <div className="user__company">Company</div>
          <table>
            <tr className="user__info__stat">
              <td className="user_stat_key">Name </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.company.name}</td>
            </tr>

            <tr className="user__info__stat">
              <td className="user_stat_key">catchphrase </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.company.catchPhrase}</td>
            </tr>

            <tr className="user__info__stat">
              <td className="user_stat_key">bs </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.company.bs}</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="profile__details__right__container">
        <div className="user__details__container">
          <div className="user__address">Address:</div>
          <table>
            <tr className="user__info__stat">
              <td className="user_stat_key">Street </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.address.street}</td>
            </tr>

            <tr className="user__info__stat">
              <td className="user_stat_key">Suite </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.address.suite}</td>
            </tr>

            <tr className="user__info__stat">
              <td className="user_stat_key">City </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.address.city}</td>
            </tr>
            <tr className="user__info__stat">
              <td className="user_stat_key">Zipcode </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.address.zipcode}</td>
            </tr>
          </table>
       
          <div className="iframe__container">
              <iframe className="user__address__location" id="iframeId" height="300px" width="100%"></iframe>
            </div>
        </div>
       
      </div>
    </div>
  );
}

export default ProfileDetail;
