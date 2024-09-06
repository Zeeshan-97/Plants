import React, { useEffect } from "react";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/aboutus.css";
import Header from "../../component/Header";
import leaf2 from "../../assets/images/leaf2.png";
import leaf3 from "../../assets/images/leaf3.png";
import digestive1 from "../../assets/images/digestive1.svg";
import digestive2 from "../../assets/images/digestive2.png";
import digestive3 from "../../assets/images/digestive3.svg";
import digestive4 from "../../assets/images/digestive4.svg";
import digestive5 from "../../assets/images/digestive5.svg";
import most_popular212 from "../../assets/images/most_popular212.png";
import most_popular3 from "../../assets/images/most_popular3.png";
import most_popular12 from "../../assets/images/most_popular12.png";
import about1 from "../../assets/images/about1.png";
import leaf1 from "../../assets/images/leaf1.png";
import phone_icon from "../../assets/images/phoneicon.png";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="aboutus_page">
        <Header />
        <section className="aboutus_section">
          {/* universal top section start here */}
          <div className="universal_top">
            <div className="row">
              <div className="col"></div>
              <div className="col-md-7">
                <div className="heading_top mt-5">
                  <h3 className="green_head">
                    ABOUT <h3>US</h3>
                  </h3>
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
          {/* universal top section end here */}
          {/* aboutus body start here */}
          <section className="aboutus_sec">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="welcometoplants">
                    <h3>Welcome To PLANTS THIRD DAY</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla pretium luctus nibh fringilla accumsan. Aliquam ac
                      fermentum magna. Donec malesuada, neque eget maximus
                      gravida, tellus urna laoreet dolor, luctus congue est
                      ipsum quis neque. Proin molestie lorem viverra
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="weltoplant_sec">
                        <div>
                          <img src={digestive1} className="img-fluid" alt="" />
                        </div>
                        <div>
                          <h6>Lorem </h6>
                          <p>Doler simut aliquam</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="weltoplant_sec">
                        <div>
                          <img src={digestive3} className="img-fluid" alt="" />
                        </div>
                        <div>
                          <h6>Lorem </h6>
                          <p>Doler simut aliquam</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="weltoplant_sec">
                        <div>
                          <img src={digestive2} className="img-fluid" alt="" />
                        </div>
                        <div>
                          <h6>Lorem </h6>
                          <p>Doler simut aliquam</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="weltoplant_sec">
                        <div>
                          <img src={digestive4} className="img-fluid" alt="" />
                        </div>
                        <div>
                          <h6>Lorem </h6>
                          <p>Doler simut aliquam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about_img_wrapper">
                    <figure>
                      <div className="about_img_content">
                        <div className="phoneicon">
                          <img
                            src={phone_icon}
                            className="img-fluid phone_icon"
                            alt=""
                          />
                        </div>
                        {/* <i className="fa fa-phone"></i> */}
                        <span>+123 456 789</span>
                      </div>
                      <img src={about1} className="img-fluid" alt="" />
                    </figure>
                    <div className="leaf1">
                      <img src={leaf1} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* aboutus body end here */}
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
                      <iframe
                        width="400"
                        height="315"
                        src="https://www.youtube.com/embed/GcR8xkTdAQA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    {/* <img src={mission1} className="img-fluid" alt="" /> */}
                    <div className="imagetoptxt">
                      <p className="plantsdaytxt ">PLANTS THIRD DAY</p>
                      <p className="greentxt2 ">
                        EXPLORE{" "}
                        <i
                          className="fa fa-arrow-right ml-1"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-self-center">
                  <div className="mission_right">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <p className="greentxt2 ">
                      CONVERSION KITS
                      <i
                        className="fa fa-arrow-right ml-1"
                        aria-hidden="true"
                      ></i>
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
                          Lorem ipsum dolor sit amet, elta consectetur
                          adipiscing elit. Ut elit tellus, luctus nec
                          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
                          dolor sit amet, consectetur etsino adipiscing elit. Ut
                          elit tellus, luctus nec ullamcorper mattis, pulvinar
                          dapibus leo.
                          <br />
                          <br /> telit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                        <p className="greentxt2 ">DISCOVER PRODUCTS</p>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <div className="row mt-5">
                        <div className="col-3"></div>
                        <div className="col-md-9">
                          <div className="mostpopular_img">
                            <img
                              src={most_popular212}
                              className="img-fluid"
                              alt=""
                            />
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
        </section>
        <Footer />
      </section>
    </>
  );
};

export default AboutUs;
