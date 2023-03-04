import React, { useEffect } from "react";
import "../styles/styles.scss";
import { UserState } from "../context/provider";

function ProfileDetail() {
  const { user } = UserState();

  useEffect(() => {
    console.log(user);
    if(user){
      const ifameData=document.getElementById("iframeId")
        const lat=user.address.geo.lat;
        const lon=user.address.geo.lng;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    }
  }, [user]);

  return (
    <div className="profile__details__container">
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

            <tr className="user__info__stat">
              <td className="user_stat_key">e-mail </td>
              <td className="separator">:</td>
              <td className="user_stat_value">{user.email}</td>
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
            <div>
              <iframe className="user__address__location" id="iframeId" height="300px" width="600px"></iframe>
            </div>
          </table>
          
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
