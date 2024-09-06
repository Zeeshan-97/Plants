import React from "react";
import userimg from "../../assets/images/userimg.png";
import { Link } from "react-router-dom";
import "../../assets/style/profilesidetab.css";
import arrowright from "../../assets/images/arrowright.png";

const SellerProfileSideTab = () => {
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
          <Link to="/sellerinventory" className="myorderlink">
            INVENTORY
          </Link>
          <Link to="/sellercustomer" className="myorderlink">
            CUSTOMERS
          </Link>
          <Link to="/sellerorder" className="myorderlink">
            MY ORDER
          </Link>
          <Link to="/selleraccount" className="accountlink">
            MY ACCOUNT
          </Link>
          <Link to="/sellerreport" className="myorderlink">
            REPORTS
          </Link>
          <Link to="/sellerlogin" className="plant_btn">
            SIGN OUT
            <img src={arrowright} alt="" className="img-fluid ml-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default SellerProfileSideTab;
