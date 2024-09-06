import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/shoppingcart.css";
import Header from "../../component/Header";
import shopping1 from "../../assets/images/shopping1.png";

const ShoppingCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  const increase2 = () => {
    setCounter2((count) => count + 1);
  };
  const decrease2 = () => {
    setCounter2((count) => count - 1);
  };
  return (
    <>
      <Header />
      {/* seciton shpping cart start here */}
      <section className="shoppingcart_page">
        {/* universal top section start here */}
        <div className="universal_top">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-5">
              <div className="heading_top mt-5">
                <h3 className="green_head">
                  SHOPPING <h3>CART</h3>
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
        {/* section body start here */}
        <section className="mainbody_sec">
          <div className="container">
            <div className="mainbody_section">
              <div className="row">
                <div className="col-md-7 borderr-r">
                  <div className="shopping_sec">
                    <div className="shoppingleft_sec">
                      <div className="closebtn">
                        <i className="fa fa-times"></i>
                      </div>
                      <img src={shopping1} className="img-fluid" alt="" />
                    </div>
                    <div className="shoppingright_sec">
                      <h5>COMPLETE MULTIVITAMIN</h5>
                      <p>
                        Lorem ipsum dolor sit amet, elta consectetur adipiscing
                        elit ut elit tellus
                      </p>
                      <div className="detail_box">
                        <div className="quantity_dv">
                          <button
                            className="addCount"
                            onClick={increase}
                            getid="countVal1"
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                          <span className="count_value">{counter}</span>

                          <button
                            className="removeCount"
                            onClick={decrease}
                            getid="countVal1"
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <p>$539.00</p>
                      </div>
                      <div className="total_price">
                        <p>Total : $1052.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="shopping_sec mt-5">
                    <div className="shoppingleft_sec">
                      <div className="closebtn">
                        <i className="fa fa-times"></i>
                      </div>
                      <img src={shopping1} className="img-fluid" alt="" />
                    </div>
                    <div className="shoppingright_sec">
                      <h5>COMPLETE MULTIVITAMIN</h5>
                      <p>
                        Lorem ipsum dolor sit amet, elta consectetur adipiscing
                        elit ut elit tellus
                      </p>
                      <div className="detail_box">
                        <div className="quantity_dv">
                          <button
                            className="addCount"
                            onClick={increase2}
                            getid="countVal1"
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                          <span className="count_value">{counter2}</span>

                          <button
                            className="removeCount"
                            onClick={decrease2}
                            getid="countVal1"
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                        </div>
                        <p>$539.00</p>
                      </div>
                      <div className="total_price">
                        <p>Total : $1052.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="pl-5">
                    <div className="order_summary_right">
                      <h4>ORDER SUMMARY</h4>
                      <div className="mb-3">
                        <h5>SHIPPING </h5>
                        <span>: $250</span>
                      </div>
                      <div className="mb-3">
                        <h5>SUBTOTAL </h5>
                        <span>: $250</span>
                      </div>
                      <p>Taxes and discounts will be calculated at checkout</p>
                    </div>
                    <div className="order_summary_btn">
                      <button className="plant_btn">UPDATE</button>
                      {/* <button className="plant_btn">CHECKOUT</button> */}
                      <Link className="plant_btn" to="/checkout">
                        CHECKOUT
                      </Link>
                    </div>
                    <div className="promocode_dv">
                      <h5>APPLY PROMO CODE</h5>
                      <p>If you have a promo code, please apply it below.</p>
                      <form action="">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="promocode"
                          />
                          <button className="plant_btn ">APPLY CODE</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section body end here */}
      </section>
      {/* seciton shpping cart start here */}
      <Footer />
    </>
  );
};

export default ShoppingCart;
