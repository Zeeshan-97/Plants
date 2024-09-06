import React, { useEffect } from 'react'
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/account.css";
import Header from "../../component/Header";
import shopping1 from "../../assets/images/checkout1.png";
import ProfileSideTab from "../../component/profie/ProfileSideTab";

const Order = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <section className='accounts_page'>
            <Header />
            {/* universal top section start here */}
            <div className="universal_top">
                <div className=''>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-6 ">
                            <div className="heading_top mt-5">
                                <h3 className="green_head">MY <h3>ACCOUNT</h3></h3>
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
                            <ProfileSideTab />
                        </div>

                        <div className="col-md-9 pl-0 pr-0">

                            {/* <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab"> */}
                            <div className="order-table-wrapper table-responsive">
                                <div className="form-head">
                                    <h3>ORDER DETAILS</h3>
                                </div>
                                <table>
                                    <tbody>
                                        <tr className="row1">
                                            <th className="order-no">ORDER NO</th>
                                            <th className="order-date">ORDER DATE</th>
                                            <th className="order-status">STATUS</th>
                                            <th className="order-total">TOTAL</th>
                                            <th className="details"></th>
                                        </tr>
                                        <tr className="row2">
                                            <td className="number">#1084598423154</td>
                                            <td className="date">04-12-21</td>
                                            <td className="status">Confirm</td>

                                            <td className="total-price">$590.00</td>
                                            <td className="order-details">
                                                <a className="order-details-btn" data-toggle="modal" data-target="#order_modal">view Details</a>
                                            </td>
                                        </tr>
                                        <tr className="row2">
                                            <td className="number">#1084598423154</td>
                                            <td className="date">04-12-21</td>
                                            <td className="status">Confirm</td>

                                            <td className="total-price">$590.00</td>
                                            <td className="order-details">
                                                <a href="#" data-toggle="modal" data-target="#order_modal">view Details</a>
                                            </td>
                                        </tr>
                                        <tr className="row2">
                                            <td className="number">#1084598423154</td>
                                            <td className="date">04-12-21</td>
                                            <td className="status">Confirm</td>

                                            <td className="total-price">$590.00</td>
                                            <td className="order-details">
                                                <a href="#" data-toggle="modal" data-target="#order_modal">view Details</a>
                                            </td>
                                        </tr>
                                        <tr className="row2">
                                            <td className="number">#1084598423154</td>
                                            <td className="date">04-12-21</td>
                                            <td className="status">Confirm</td>

                                            <td className="total-price">$590.00</td>
                                            <td className="order-details">
                                                <a href="#" data-toggle="modal" data-target="#order_modal">view Details</a>
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
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div className="modal fade" id="order_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body custommodal">
                            <div className="cart-product-detail">
                                <div className="title">
                                    <h3>PRODUCTS DETAILS</h3>
                                </div>
                                <div className="checkout-products">
                                    <div className="products br-right">
                                        <div className="abt-product">
                                            <div className="img-box">
                                                <figure>
                                                    <img
                                                        src={shopping1}
                                                        className="img-fluid"
                                                        alt="123"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="pro-dtl">
                                                <h5 className="name">COMPLETE MULTIVITAMIN</h5>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h4 className="price">$539.00</h4>
                                        </div>
                                    </div>
                                    <div className="products">
                                        <div className="abt-product">
                                            <div className="img-box">
                                                <figure>
                                                    <img
                                                        src={shopping1}
                                                        className="img-fluid"
                                                        alt="123"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="pro-dtl">
                                                <h5 className="name">COMPLETE MULTIVITAMIN</h5>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h4 className="price">$539.00</h4>
                                        </div>
                                    </div>
                                    <div className="products">
                                        <div className="abt-product">
                                            <div className="img-box">
                                                <figure>
                                                    <img
                                                        src={shopping1}
                                                        className="img-fluid"
                                                        alt="123"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="pro-dtl">
                                                <h5 className="name">COMPLETE MULTIVITAMIN</h5>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h4 className="price">$539.00</h4>
                                        </div>
                                    </div>
                                    <div className="products">
                                        <div className="abt-product">
                                            <div className="img-box">
                                                <figure>
                                                    <img
                                                        src={shopping1}
                                                        className="img-fluid"
                                                        alt="123"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="pro-dtl">
                                                <h5 className="name">COMPLETE MULTIVITAMIN</h5>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h4 className="price">$539.00</h4>
                                        </div>
                                    </div>
                                    <div className="products">
                                        <div className="abt-product">
                                            <div className="img-box">
                                                <figure>
                                                    <img
                                                        src={shopping1}
                                                        className="img-fluid"
                                                        alt="123"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="pro-dtl">
                                                <h5 className="name">COMPLETE MULTIVITAMIN</h5>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h4 className="price">$539.00</h4>
                                        </div>
                                    </div>
                                    <div className="products">
                                        <div className="abt-product">
                                            <div className="img-box">
                                                <figure>
                                                    <img
                                                        src={shopping1}
                                                        className="img-fluid"
                                                        alt="123"
                                                    />
                                                </figure>
                                            </div>
                                            <div className="pro-dtl">
                                                <h5 className="name">COMPLETE MULTIVITAMIN</h5>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h4 className="price">$539.00 </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-details">
                                    <div className="item-total">
                                        <h4 className="property">Item Total :</h4>
                                        <h4 className="value">$50</h4>
                                    </div>
                                    <div className="item-total">
                                        <h4 className="property">shipment & Delivery</h4>
                                        <h4 className="value">$0</h4>
                                    </div>
                                    <div className="item-total">
                                        <h4 className="property">Taxes Applied :</h4>
                                        <h4 className="value">-$5</h4>
                                    </div>
                                </div>

                                <div className="order-total">
                                    <h3 className="property">Order Total</h3>
                                    <h3 className="value">$3025.00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Order;