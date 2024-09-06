import React, { useEffect } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/sellerthankyou.css";
import Header from "../../component/Header";
import shopping1 from "../../assets/images/checkout1.png";

const SellerThankYou = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="thankyou_page selthankyou">
                <Header />
                {/* universal top section start here */}
                <div className="universal_top">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-md-7">
                            <div className="heading_top mt-5">
                                <h3 className="green_head">
                                    THANK YOU FOR <h3>SHOPPING</h3>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, elta consectetur adipiscing elit
                                    ut elit tellus Maecenas sed diam eget risus varius blandit sit
                                    amet
                                </p>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                {/* universal top section end here */}
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-lg-10">
                            <div className="cart-product-detail">
                                <div className='cart_detail_content'>
                                    <div className='cart_product_row'>
                                        <div className="title">
                                            <h3>PRODUCT DETAILS</h3>
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
                                    </div>
                                    <div className='cart_product_row'>
                                        <div className="pricing-details">
                                            <div className="item-total">
                                                <h4 className="property">ITEM TOTAL :</h4>
                                                <h4 className="value">$50</h4>
                                            </div>
                                            <div className="item-total">
                                                <h4 className="property">SHIPMENT AND DELIVERY</h4>
                                                <h4 className="value">$0</h4>
                                            </div>
                                            <div className="item-total">
                                                <h4 className="property">TAXES APPLIED :</h4>
                                                <h4 className="value">-$5</h4>
                                            </div>
                                        </div>

                                        <div className="order-total">
                                            <h3 className="property">ORDER TOTAL</h3>
                                            <h3 className="value">$3025.00</h3>
                                        </div>
                                    </div>
                                </div>
                                <hr className='spacer' />
                                <div className='bottom_address_sec'>
                                    <div className='row'>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">SHIPPING ADDRESS</label>
                                                <p>4806 Fittro Street hughes, AR 72348</p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="form-group pl-5">
                                                <label for="exampleInputEmail1">DELIVERY STATUS</label>
                                                <p className='pending_txt'>Pending</p>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">DOWNLOAD INVOICE</label>
                                                <p className='property'>Order # 135367</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="thankyou_btn">
                                <Link className="plant_btn" to="/">
                                    BACK TO SHOPPING
                                </Link>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SellerThankYou;