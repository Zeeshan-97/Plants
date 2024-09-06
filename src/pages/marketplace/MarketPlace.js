import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import "../../assets/style/marketplace.css";
import market1 from "../../assets/images/market1.png";
import market2 from "../../assets/images/market2.png";
import market3 from "../../assets/images/market3.png";
import market4 from "../../assets/images/market4.png";
import market5 from "../../assets/images/market5.png";
import market6 from "../../assets/images/market6.png";
import product6 from "../../assets/images/product6.png";
import product4 from "../../assets/images/product4.png";
import { Link, useNavigate } from "react-router-dom";

const MarketProductDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      {/* shop page start here */}
      <section className=" marketplace_page">
        {/* universal top section start here */}
        <div className="universal_top">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-5">
              <div className="heading_top mt-5">
                <h3 className="green_head">
                  MARKETPLACE
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
          {/* universal top section start here */}
        </div>
        {/* universal top section end here */}

        {/* new arrival section start here */}
        <section className="new_arrival_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={market1} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">PLATINUM TURMERIC</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <Link to="/market-product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={market2} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">MORNINGA</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <Link to="/market-product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={market3} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">DIGESTIVE ENZYME</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <Link to="/market-product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={market4} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">COMPLETE MULTIVITAMIN</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <Link to="/market-product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={market5} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">PLATINUM TURMERIC</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <button onClick={() => navigate} className="addtocarttxt">ADD TO CART</button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={market6} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">MORNINGA</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <Link to="/market-product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={product6} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">DIGESTIVE ENZYME</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <Link to="/market-product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/market-product-detail">
                    <img src={product4} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/market-product-detail">
                    <p className="product_name">COMPLETE MULTIVITAMIN</p>
                  </Link>
                  <p className="greentxt2">$1,850.00</p>
                  <ul>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                    <li>
                      <i className="fa fa-star"></i>
                    </li>
                  </ul>
                  <Link to="/market-product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* new arrival section end here */}
      </section>
      {/* shop page end here */}
      <Footer />
    </>
  );
};

export default MarketProductDetail;
