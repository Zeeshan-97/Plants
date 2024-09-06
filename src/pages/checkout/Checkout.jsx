import React from "react";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/checkout.css";
import Header from "../../component/Header";
import shopping1 from "../../assets/images/checkout1.png";

const Checkout = () => {
  return (
    <>
      {/* checkout page start here */}
      <section className="checkout_page">
        <Header />
        {/* universal top section start here */}
        <div className="universal_top">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-5">
              <div className="heading_top mt-5">
                <h3 className="green_head">
                  CHECK<h3>OUT</h3>
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
        {/* <!-- checkout-section starts here --> */}
        <section className="checkout">
          <div className="container">
            <form action="thank-you.php">
              <div className="row">
                <div className="col-lg-6">
                  <div className="first-top-bar">
                    <h3>SHIPMENT DETAILS</h3>
                    <span>
                      Already Have an account? <Link to="/login">Log in</Link>
                    </span>
                    {/* <!-- <p>Already Have an account? <a href="login.php">Log in</a> </p> --> */}
                  </div>

                  <div className="add-new-address">
                    <div className="form-group mb-4">
                      <label for="method">Shipment Method</label>
                      <select id="method" className="form-control">
                        <option selected="">Select Shipment method</option>
                        <option>Select Shipment method 1</option>
                        <option>Select Shipment method 2</option>
                        <option>Select Shipment method 3</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="fname">First Name</label>
                          <input
                            type="text"
                            id="fname"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="lname">Last Name</label>
                          <input
                            type="text"
                            id="lname"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="phone">Phone</label>
                          <input
                            type="text"
                            id="phone"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="email">Email</label>
                          <input
                            type="text"
                            id="email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="address">Address</label>
                          <input
                            type="text"
                            id="address"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="apartmnt">Suite, Apartment, etc </label>
                          <input
                            type="text"
                            id="apartmnt"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label for="city">City</label>
                          <input
                            type="text"
                            id="city"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="region">Country/Region</label>
                          <input
                            type="text"
                            id="region"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="state">State</label>
                          <input
                            type="text"
                            id="state"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label for="zip-code">Zip Code</label>
                          <input
                            type="text"
                            id="zip-code"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheckssd"
                          />
                          <label
                            className="form-check-label label_ssd"
                            for="exampleCheckssd"
                          >
                            Save Shipping Details
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-details">
                    <div className="heading">
                      <h3>Payment Details</h3>
                    </div>
                    <div className="saved-payment-method">
                      {/* <!-- Saved payments Method --> */}

                      <div className="add-new-method">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Card Number&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;mm/yy&emsp;cvc"
                          />
                        </div>
                      </div>
                      {/* <!-- Saved payments Method --> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  <div className="second-top-bar">
                    <div className="title pb-4">
                      <h3>ORDER SUMMERY</h3>
                    </div>
                  </div>
                  <div className="cart-product-detail">
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
                        <h4 className="value">$5</h4>
                      </div>
                    </div>

                    <div className="order-total">
                      <h3 className="property">ORDER TOTAL</h3>
                      <h3 className="value">$3025.00</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="border-last"></div>
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="confirm-orderDv">
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        className="form-control"
                        id="for_checkbox"
                      />
                      <label for="for_checkbox" className="for_checkbox_label">
                        Proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                      </label>
                    </div>
                    <div className="button-group">
                      <Link className="plant_btn" to="/thankyou">
                        CONFIRM
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </form>
          </div>
        </section>
        {/* <!-- checkout-section ends here --> */}
        <Footer />
      </section>
      {/* checkout page end here */}
    </>
  );
};

export default Checkout;
