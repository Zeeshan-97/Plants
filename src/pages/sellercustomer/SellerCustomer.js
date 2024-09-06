import React, { useEffect } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/account.css";
import Header from "../../component/Header";
import ProfileSideTab from "../../component/profie/ProfileSideTab";
import SellerProfileSideTab from '../../component/sellerprofile/SellerProfileSideTab';

const SellerCustomer = () => {
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

                {/* <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab"> */}
                <div className="order-table-wrapper table-responsive">
                  <div className="form-head">
                    <h3>MANAGE CUSTOMERS</h3>
                  </div>
                  <table>
                    <tbody>
                      <tr className="row1">
                        <th className="order-no">CUSTOMER NAME</th>
                        <th className="order-date">ORDER NUMBER</th>
                        <th className="order-status">EMAIL ADDRESS</th>
                        <th className="order-total">CONTACT NUMBER</th>
                        <th className="details">STATUS</th>
                      </tr>
                      <tr className="row2">
                        <td className="number">John Doe</td>
                        <td className="date">154875216254</td>
                        <td className="status">Johndoe@example.com</td>

                        <td className="total-price">+123456789</td>
                        <td className="order-status">
                        Pending
                        </td>
                      </tr>
                      <tr className="row2">
                        <td className="number">John Doe</td>
                        <td className="date">154875216254</td>
                        <td className="status">Johndoe@example.com</td>

                        <td className="total-price">+123456789</td>
                        <td className="order-status-c">
                        Confirmed
                        </td>
                      </tr>
                      <tr className="row2">
                        <td className="number">John Doe</td>
                        <td className="date">154875216254</td>
                        <td className="status">Johndoe@example.com</td>

                        <td className="total-price">+123456789</td>
                        <td className="order-status">
                        Pending
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!-- pagination starts here --> */}
                {/* <div className="pagination-wrapper">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true"><i className="fa fa-angle-left"
                                                            aria-hidden="true"></i></span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true"><i className="fa fa-angle-right"
                                                            aria-hidden="true"></i></span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div> */}
                {/* <!-- pagination starts here --> */}
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

export default SellerCustomer
