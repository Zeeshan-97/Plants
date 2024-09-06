import React, { useEffect } from "react";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/testimonial.css";
import Header from "../../component/Header";
import commas from "../../assets/images/comas.png";

const Testimonial = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <section className="testimonial_page">
        <Header />
        <section className="testimonial_sec">
          {/* universal top section start here */}
          <div className="universal_top">
            <div className="row">
              <div className="col"></div>
              <div className="col-md-7">
                <div className="heading_top mt-5">
                  <h3 className="green_head">TESTIMONIALS</h3>
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
          {/* testimonial section start here */}
          <section className="testimonial_section">
            <div className="container">
              <div className="testimonial_content">
                <div className="testi">
                  <div className="testimonial_comas">
                    <img src={commas} className="img-fluid" alt="" />
                  </div>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h6>Sean Foster</h6>
                </div>
              </div>
              <div className="testimonial_content">
                <div className="testi">
                  <div className="testimonial_comas">
                    <img src={commas} className="img-fluid" alt="" />
                  </div>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h6>Sean Foster</h6>
                </div>
              </div>
              <div className="testimonial_content">
                <div className="testi">
                  <div className="testimonial_comas">
                    <img src={commas} className="img-fluid" alt="" />
                  </div>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h6>Sean Foster</h6>
                </div>
              </div>
              <div className="testimonial_content">
                <div className="testi">
                  <div className="testimonial_comas">
                    <img src={commas} className="img-fluid" alt="" />
                  </div>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h6>Sean Foster</h6>
                </div>
              </div>
              <div className="testimonial_content">
                <div className="testi">
                  <div className="testimonial_comas">
                    <img src={commas} className="img-fluid" alt="" />
                  </div>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h6>Sean Foster</h6>
                </div>
              </div>
            </div>
          </section>
          {/* testimonial section end here */}
        </section>
        <Footer />
      </section>
    </>
  );
};

export default Testimonial;
