import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import "../../assets/style/shop.css";
import new_arrival1 from "../../assets/images/new_arrival1.png";
import new_arrival2 from "../../assets/images/new_arrival2.png";
import new_arrival3 from "../../assets/images/new_arrival3.png";
import new_arrival4 from "../../assets/images/new_arrival4.png";
import product4 from "../../assets/images/product4.png";
import product5 from "../../assets/images/product5.png";
import product6 from "../../assets/images/product6.png";
import product7 from "../../assets/images/product7.png";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Header />
      {/* shop page start here */}
      <section className="shop_page">
        {/* universal top section start here */}
        <div className="universal_top">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-5">
              <div className="heading_top mt-5">
                <h3 className="green_head">
                  SHOP <h3>NOW</h3>
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
                  <Link to="/product-detail">
                    <img src={new_arrival1} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product-detail">
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
                  <Link to="/product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/product-detail">
                    <img src={new_arrival2} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product-detail">
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
                  <Link to="/product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/product-detail">
                    <img src={new_arrival3} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product-detail">
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
                  <Link to="/product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/product-detail">
                    <img src={new_arrival4} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product-detail">
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
                  <Link to="/product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/product-detail">
                    <img src={product4} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product-detail">
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
                  <Link to="/product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/product-detail">
                    <img src={product5} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product-detail">
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
                  <Link to="/product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/product-detail">
                    <img src={product6} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product  -detail">
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
                  <Link to="/product-detail">
                    <button className="addtocarttxt">ADD TO CART</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product_sec">
                  <Link to="/product-detail">
                    <img src={product7} className="img-fluid" alt="" />
                  </Link>
                  <Link to="/product-detail">
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
                  <Link to="/product-detail">
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

export default Shop;
