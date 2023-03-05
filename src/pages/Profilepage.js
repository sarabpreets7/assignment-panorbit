import React, { useEffect } from "react";
import "../styles/profile.scss";
import Sidebar from "../components/Sidebar";
import ProfileDetail from "../components/ProfileDetail";
import { UserState } from "../context/provider";
import Navbar from "../components/Navbar";

function Profilepage() {
  const { user } = UserState();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="profile__main__container">
      <div className="user__info__container">
        <Navbar />
        {user && <ProfileDetail user={user} />}
      </div>
    </div>
  );
}

export default Profilepage;
