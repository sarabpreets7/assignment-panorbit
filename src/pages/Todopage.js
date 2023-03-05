import React from "react";
import "../styles/profile.scss";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/ComingSoon";

function Todopage() {
  return (
    <div className="profile__main__container">
      <div className="user__info__container">
        <Navbar />
        {<ComingSoon />}
      </div>
    </div>
  );
}

export default Todopage;
