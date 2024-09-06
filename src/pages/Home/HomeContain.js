import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import arrowright from "../../assets/images/arrowright.png";
import homebannervideo from "../../assets/images/homebanner.mp4";
import videoicon from "../../assets/images/videoicon.png";
import bannerimg from "../../assets/images/bannerimg.png";
import bannerimg1 from "../../assets/images/bannerimg1.png";
import bannerimg2 from "../../assets/images/bannerimg2.png";
import digestive_img from "../../assets/images/digestive_img.png";
import digestive_img1 from "../../assets/images/digestive_img1.png";
import digestive1 from "../../assets/images/digestive1.svg";
import digestive2 from "../../assets/images/digestive2.png";
import digestive3 from "../../assets/images/digestive3.svg";
import digestive4 from "../../assets/images/digestive4.svg";
import digestive5 from "../../assets/images/digestive5.svg";
import mission1 from "../../assets/images/mission1.png";
import most_popular1 from "../../assets/images/most_popular1.png";
import most_popular12 from "../../assets/images/most_popular12.png";
import most_popular2 from "../../assets/images/most_popular2.png";
import most_popular21 from "../../assets/images/most_popular21.png";
import most_popular212 from "../../assets/images/most_popular212.png";
import most_popular3 from "../../assets/images/most_popular3.png";
import feature1 from "../../assets/images/feature1.png";
import feature12 from "../../assets/images/feature12.png";
import feature2 from "../../assets/images/feature2.png";
import feature22 from "../../assets/images/feature22.png";
import feature3 from "../../assets/images/feature3.png";
import feature31 from "../../assets/images/feature31.png";
import new_arrival1 from "../../assets/images/new_arrival1.png";
import leaf1 from "../../assets/images/leaf1.png";
import leaf2 from "../../assets/images/leaf2.png";
import leaf3 from "../../assets/images/leaf3.png";
import leaf4 from "../../assets/images/leaf4.png";
import leaf5 from "../../assets/images/leaf5.png";
import leaf6 from "../../assets/images/leaf6.png";
import leaf41 from "../../assets/images/leaf41.png";
import leaf42 from "../../assets/images/leaf42.png";
import leaf43 from "../../assets/images/leaf43.png";
import new_arrival2 from "../../assets/images/new_arrival2.png";
import new_arrival3 from "../../assets/images/new_arrival3.png";
import new_arrival4 from "../../assets/images/new_arrival4.png";
import "../../assets/style/style.css"
const HomeContain = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[]);
  const headerstyle = {
    background: "transparent",
    position: "absolute",
    top: 0,
  };
  return (
    <div className="homepage">
      {/* section banner start here */}
      <section className="banner_sec">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            playing
            loop
            muted
            url={homebannervideo}
          ></ReactPlayer>
          {/* <video width="100%" loop autoPlay muted>
            <source src={homebannervideo} type="video/mp4" />
          </video> */}
        </div>
        <div className="banner_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner_content">
                  <h2 className="green_head">PLANTS</h2>
                  <h2>
                    THIRD <br /> DAY{" "}
                    <img src={videoicon} className="img-fluid" alt="" />
                  </h2>
                  <p>
                    We believe our obsession with quality makes for better
                    supplements. When you take a Plants Third Day product, we
                    assure you that the ingredients in our products have
                    undergone rigorous testing and approvals before they make
                    their way to you.
                  </p>
                  <hr />
                  <p className="text-right greentxt">
                    FIND PRODUCTS
                    <img
                      src={arrowright}
                      alt=""
                      className="img-fluid ml-2 curvedimg"
                    />
                  </p>

                  <div className="social_icons text-right">
                    <i className="fa fa-facebook " aria-hidden="true"></i>
                    <i className="fa fa-twitter ml-3" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play ml-3" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner_right pb-5">
                  <figure>
                    <img src={bannerimg} className="img-fluid" alt="" />
                  </figure>
                  <div className="">
                    <p>Lorem Ipsum</p>
                    <small>Lorem ipsum dolor </small>
                  </div>
                </div>
                <div className="banner_right pb-5">
                  <figure>
                    <img src={bannerimg1} className="img-fluid" alt="" />
                  </figure>
                  <div className="">
                    <p>Lorem Ipsum</p>
                    <small>Lorem ipsum dolor </small>
                  </div>
                </div>
                <div className="banner_right">
                  <figure>
                    <img src={bannerimg2} className="img-fluid" alt="" />
                  </figure>
                  <div className="">
                    <p>Lorem Ipsum</p>
                    <small>Lorem ipsum dolor </small>
                  </div>
                </div>
                <div className="ordernow_sec">
                  <h6>PlantsThirdDay</h6>
                  <h3>Moringa Oleifera (Leaf) 800mg</h3>
                  <p>
                    O R D E R N O W{" "}
                    <figure>
                      <img src={arrowright} className="img-fluid " alt="" />
                    </figure>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section banner end here */}
      {/* explore section start here */}
      <section className="explore_sec1">
        <div className="container">
          <div className="explore_section">
            <div className="explore_sec">
              <h6>PRODUCTS</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                EXPLORE{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
            <div className="explore_sec explore_sec2">
              <h6>ESSENTIAL OILS</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                EXPLORE{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
            <div className="explore_sec">
              <h6>FEATURED</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                EXPLORE{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
            <div className="explore_sec explore_sec4">
              <h6>PLATINUM TURMERIC</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                VIEW PRODUCT{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* explore section start here */}
      <section className="digestive_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3 digestivemt">
              <div className="digestive_name">
                <img src={digestive1} alt="" />
                <p>DIGESTIVE HEALTH</p>
              </div>
              <div className="digestive_name">
                <img src={digestive2} alt="" />
                <p>WEIGHT LOSS</p>
              </div>
              <div className="digestive_name">
                <img src={digestive3} alt="" />
                <p>APPETITE CONTROL</p>
              </div>
              <div className="digestive_name">
                <img src={digestive4} alt="" />
                <p>BELLY FAT LOSS</p>
              </div>
              <div className="digestive_name">
                <img src={digestive5} alt="" />
                <p>NATURAL DETOXIFICATION</p>
              </div>
            </div>
            <div className="col-md-4 digestivemt">
              <div className="digestive_desc">
                <p>Mission Statement</p>
              </div>
              <div className="digestive_desc">
                <p className="disgestive_name">
                  About Plants <span>Third Day</span>
                </p>
              </div>
              <div className="digestive_desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="digestive_desc">
                <p className="greentxt">LEARN MORE</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="digestive_img_wrapper">
                <div>
                  <img src={digestive_img1} className="img-fluid" alt="" />
                </div>
                <div className="leaf1">
                  <img src={leaf1} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* explore section start here */}
      {/* section mision statement start here */}
      <section className="mission_statement_sec">
        <div className="container">
          <div className="heading_top mb-4">
            <h3 className="green_head">
              MISSION <h3>STATEMENT</h3>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mission_img_wrapper">
                <div className="leaf2">
                  <img src={leaf2} className="img-fluid" alt="" />
                </div>
                <div className="mission_video">
                  <iframe width="400" height="315" src="https://www.youtube.com/embed/GcR8xkTdAQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                {/* <img src={mission1} className="img-fluid" alt="" /> */}
                <div className="imagetoptxt">
                  <p className="plantsdaytxt ">PLANTS THIRD DAY</p>
                  <p className="greentxt2 ">
                    EXPLORE{" "}
                    <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="mission_right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="greentxt2 ">
                  CONVERSION KITS
                  <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
                </p>
              </div>
              <div className="weights_sec">
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <div className="conversation_kit">
                      <p>Supplements</p>
                      <span>12005</span>
                      <p>55 LBS</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="conversation_kit">
                      <p>Weight</p>
                      <span>25 KG</span>
                      <p>55 LBS</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="conversation_kit">
                      <p>Nutrients</p>
                      <span>1200</span>
                      <p>30 LBS</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="leaf3">
                  <img src={leaf3} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section mision statement end here */}
      {/* section most popular start here */}
      <section className="most_popular_sec">
        <div className="container">
          <div className="heading_top">
            <h3 className="green_head">
              MOST <h3> POPULAR</h3>
            </h3>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 ">
              <div className="mostpopular_img1">
                <img src={most_popular12} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="pl-4 ">
                <div className="row">
                  <div className="col-md-3">
                    <div className="most_popular">
                      <img src={digestive5} className="img-fluid" alt="" />
                      <p>DIGESTIVE HEALTH</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="most_popular">
                      <img src={digestive4} className="img-fluid" alt="" />
                      <p>WEIGHT LOSS</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="most_popular">
                      <img src={digestive3} className="img-fluid" alt="" />
                      <p>APPETITE CONTROL</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="most_popular">
                      <img src={digestive1} className="img-fluid" alt="" />
                      <p>ERGONOMIC GESTURE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 fiber-gem">
                  <div className="most_pop_bot">
                    <p className="fiber_n">Fiber Gummies</p>
                    <p>
                      Lorem ipsum dolor sit amet, elta consectetur adipiscing
                      elit. Ut elit tellus, luctus nec ullamcorper mattis,
                      pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                      consectetur etsino adipiscing elit. Ut elit tellus, luctus
                      nec ullamcorper mattis, pulvinar dapibus leo.<br /><br /> telit
                      tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                      leo.
                    </p>
                    <p className="greentxt2 ">DISCOVER PRODUCTS</p>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <div className="row mt-5">
                    <div className="col-3"></div>
                    <div className="col-md-9">
                      <div className="mostpopular_img">
                        <img src={most_popular212} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-md-9 text-right">
                      <div className="mostpopular_img">
                        <img
                          src={most_popular3}
                          className="img-fluid mt-3"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section most popular end here */}
      {/* explore section start here */}
      <section className="most_popularsec">
        <div className="leaf43">
          <img src={leaf43} className="img-fluid" alt="" />
        </div>
        {/* <div className="leaf4">
          <img src={leaf41} className="img-fluid" alt="" />
        </div> */}
        <div className="leaf42">
          <img src={leaf42} className="img-fluid" alt="" />
        </div>
        <div className="container">
          <div className="explore_section">
            <div className="explore_sec">
              <h6>FIBER GUMMIES</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                EXPLORE{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
            <div className="explore_sec explore_sec2">
              <h6>TURMERIC GUMMIES</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                EXPLORE{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
            <div className="explore_sec">
              <h6>FIBER GUMMIES</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                EXPLORE{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
            <div className="explore_sec explore_sec4">
              <h6>TURMERIC GUMMIES</h6>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="greentxt2">
                VIEW PRODUCT{" "}
                <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* explore section start here */}
      {/* section feature product start here */}
      <section className="feature_product">
        <div className="leaf3">
          <img src={leaf3} className="img-fluid" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="feature_img_wrapper">
                        <figure>
                          <img src={feature22} className="img-fluid" alt="" />
                          <span className="value-txt">$2618</span>
                          <h2>PLATINUM</h2>{" "}
                          <p>
                            EXPLORE
                            <i
                              className="fa fa-arrow-right ml-1"
                              aria-hidden="true"
                            ></i>
                          </p>
                        </figure>
                        <div className="leaf5">
                          <img src={leaf5} className="img-fluid" alt="" />
                        </div>
                      </div>
                      <div className="feature_img_wrapper">
                        <div className="leaf2">
                          <img src={leaf2} className="img-fluid" alt="" />
                        </div>
                        <figure>
                          <img src={feature31} className="img-fluid" alt="" />
                          <span className="value-txt">$2618</span>
                          <h2>TURMERIC</h2>{" "}
                          <p>
                            EXPLORE
                            <i
                              className="fa fa-arrow-right ml-1"
                              aria-hidden="true"
                            ></i>
                          </p>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="heading_top">
                <h3 className="green_head">
                  FEATURED <h3>PRODUCTS</h3>
                </h3>
                <div className="leaf6">
                  <img src={leaf6} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <div className="feature_img_wrapper feature_img_wrapper1">
                    <figure>
                      <img src={feature12} className="img-fluid" alt="" />
                      <span className="value-txt">$2618</span>
                      <h2>100% PURE MOINGA</h2>{" "}
                      <p>
                        EXPLORE
                        <i
                          className="fa fa-arrow-right ml-1"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </figure>
                  </div>
                </div>
                <div className="col-md-3 mt-md-5">
                  <section className="most_popularsec mt-md-4">
                    <div className="container">
                      <div className="explore_section">
                        <div className="explore_sec">
                          <h6>MORNINGA</h6>
                          <p>Lorem ipsum dolor sit amet.</p>
                          <p className="greentxt2">
                            VIEW ALL PRODUCTS
                            {/* <i
                              className="fa fa-arrow-right ml-1"
                              aria-hidden="true"></i> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section feature product end here */}
      {/* new arrival section start here */}
      <section className="new_arrival_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="new_arrival_head">
                <h3>NEW ARRIVALS</h3>
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <div className="new_arrival_head text-right">
                <p>
                  VIEW ALL PRODUCTS
                  <i className="fa fa-arrow-right ml-1" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="product_sec">
                <img src={new_arrival1} className="img-fluid" alt="" />
                <p className="product_name">PLATINUM TURMERIC</p>
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
                <p className="addtocarttxt">ADD TO CART</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product_sec">
                <img src={new_arrival2} className="img-fluid" alt="" />
                <p className="product_name">MORNINGA</p>
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
                <p className="addtocarttxt">ADD TO CART</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product_sec">
                <img src={new_arrival3} className="img-fluid" alt="" />
                <p className="product_name">DIGESTIVE ENZYME</p>
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
                <p className="addtocarttxt">ADD TO CART</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product_sec">
                <img src={new_arrival4} className="img-fluid" alt="" />
                <p className="product_name">COMPLETE MULTIVITAMIN</p>
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
                <p className="addtocarttxt">ADD TO CART</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* new arrival section end here */}
      {/* section sean foster start here */}
      <section className="sean_foster_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="seanfoster_content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p>-Sean Foster</p>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>
      {/* section sean foster end here */}
      
    </div>
  );
};

export default HomeContain;
