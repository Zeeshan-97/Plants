import React, { useEffect, useState } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/selleraccount.css";
import Header from "../../component/Header";
import ProfileSideTab from "../../component/profie/ProfileSideTab";

import arrowright from "../../assets/images/arrowright.png";
import EditAccountTab from '../../component/profie/EditAccountTab';
import AccountTab from '../../component/profie/AccountTab';
import ChangePassword from '../../component/profie/ChangePassword';
import SellerAccountTab from '../../component/sellerprofile/SellerAccountTab';
import SellerEditAccountTab from '../../component/sellerprofile/SellerEditAccountTab';
import SellerChangePassword from '../../component/sellerprofile/SellerChangePassword';
import SellerProfileSideTab from '../../component/sellerprofile/SellerProfileSideTab';

const SellerAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const [profileTabs, setProfileTabs] = useState(1);
  const changeTabsFunction = (e) => {
    setProfileTabs(e);
  }
  return (
    <>
      <section className='accounts_page seller_account'>
        <Header />
        {/* universal top section start here */}
        <div className="universal_top">
          <div className=''>
            <div className="row">
              <div className="col"></div>
              <div className="col-md-6">
                <div className="heading_top mt-5">
                  <h3 className="green_head">SELLER <h3>ACCOUNT</h3></h3>
                  <p>
                    Lorem ipsum dolor sit amet, elta consectetur adipiscing elit
                    ut elit tellus Maecenas sed diam eget risus varius blandit
                    sit amet
                  </p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        {/* universal top section end here */}
        {/* <!-- Account section  --> */}

        <section className="account-sec">
          <div className="container">
            <div className="row account">
              <div className="col-md-3 leftside_account">
                <SellerProfileSideTab />
              </div>

              <div className="col-md-9 pl-0 pr-0">
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-account" >
                    {/* profile tabs started */}
                    {(profileTabs === 1) && <SellerAccountTab changeTabsFunction={changeTabsFunction} />}

                    {/* profile tabs ends */}

                    {/* edit account starts*/}
                    {(profileTabs === 2) && <SellerEditAccountTab changeTabsFunction={changeTabsFunction} />}

                    {/* edit account starts*/}

                    {/* change password starts*/}
                    {(profileTabs === 3) && <SellerChangePassword changeTabsFunction={changeTabsFunction} />}

                    {/* change password ends*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End of Account section  --> */}
        <Footer />
      </section>
    </>
  )
}

export default SellerAccount
