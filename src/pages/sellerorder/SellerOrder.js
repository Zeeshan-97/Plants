import React, { useEffect } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/account.css";
import Header from "../../component/Header";
import ProfileSideTab from "../../component/profie/ProfileSideTab";
import SellerProfileSideTab from '../../component/sellerprofile/SellerProfileSideTab';

const SellerOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
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

                {/* <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab"> */}
                <div className="order-table-wrapper table-responsive">
                  <div className="form-head">
                    <h3>MANAGE ORDERS</h3>
                  </div>
                  <table>
                    <tbody>
                      <tr className="row1">
                        <th className="order-no">DOCUMENT</th>
                        <th className="order-date">ORDER NUMBER</th>
                        <th className="order-status">ORDER DATE</th>
                        <th className="order-total">PRICE</th>
                        <th className="details">STATUS</th>
                        <th className="details"></th>
                      </tr>
                      <tr className="row2">
                        <td className="invoice">INOVICE</td>
                        <td className="date">154875216254</td>
                        <td className="status">23-JUNE-2022</td>

                        <td className="total-price">$20.25</td>
                        <td className="order-status">
                          Pending
                        </td>
                        <td className="order-details">
                          <Link to="/sellerthankyou" className="order-details-btn">view Details</Link >
                        </td>
                      </tr>
                      <tr className="row2">
                        <td className="invoice">INOVICE</td>
                        <td className="date">154875216254</td>
                        <td className="status">23-JUNE-2022</td>

                        <td className="total-price">$20.25</td>
                        <td className="order-status">
                          Pending
                        </td>
                        <td className="order-details">
                          <Link to="/sellerthankyou" className="order-details-btn" >view Details</Link >
                        </td>
                      </tr>
                      <tr className="row2">
                        <td className="invoice">INOVICE</td>
                        <td className="date">154875216254</td>
                        <td className="status">23-JUNE-2022</td>

                        <td className="total-price">$20.25</td>
                        <td className="order-status">
                          Pending
                        </td>
                        <td className="order-details">
                          <Link to="/sellerthankyou" className="order-details-btn" >view Details</Link >
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default SellerOrder