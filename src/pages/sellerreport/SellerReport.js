import React, { useEffect } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/account.css";
import Header from "../../component/Header";
import ProfileSideTab from "../../component/profie/ProfileSideTab";
import SellerProfileSideTab from '../../component/sellerprofile/SellerProfileSideTab';
import arrowright from "../../assets/images/arrowright.png";
import calender from "../../assets/images/calendericon.png";
import download from "../../assets/images/downloadicon.png";
import graph from "../../assets/images/graphimg.png";


const SellerReport = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      },[]);
    return (
        <>
            <section className='accounts_page seller_account'>
                <Header />
                {/* universal top section start here */}
                <div className="universal_top">
                    <div className=''>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-md-6 ">
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

                                <div className="all-form-two" id="for-two-id-hide">
                                    <form action="">
                                        <div className="form-head seller_report mb-5">
                                            <div className='reports_wrapper'>
                                                <h3>REPORTS</h3>
                                                <span className='plant_btn'><img src={calender} className='img-fluid mr-2' /> YEARLY</span>
                                            </div>
                                            <div className='download_report'>
                                                <span className='plant_btn'>DOWNLOAD REPORT<img src={download} className="img-fluid ml-2" alt="" /></span>
                                                
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <img src={graph} className='img-fluid' alt=""/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* </div>
                        </div> */}
                        </div>
                    </div>
                </section>
                {/* <!-- End of Account section  --> */}
                <Footer />
            </section>
        </>
    )
}

export default SellerReport