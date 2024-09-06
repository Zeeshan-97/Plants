import React from "react";
import userimg from "../../assets/images/userimg.png";
import { Link } from "react-router-dom";
import "../../assets/style/profilesidetab.css";
import arrowright from "../../assets/images/arrowright.png";

const ProfileSideTab = () => {
  return (
    <>
      <section className="profilesidetab_sec">
        <div className="john-dow-all">
          <div className="john-img">
            <img className="img-fluid" src={userimg} alt="" />
          </div>
          <div className="john-text">
            <h3>John Doe</h3>
          </div>
        </div>
        <div className="twolinks">
          <Link to="/account" className="accountlink">
            ACCOUNT
          </Link>
          <Link to="/myorders" className="myorderlink">
            MY ORDER
          </Link>
          <Link to="/login" className="plant_btn">
            SIGN OUT
            <img src={arrowright} alt="" className="img-fluid ml-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProfileSideTab;
