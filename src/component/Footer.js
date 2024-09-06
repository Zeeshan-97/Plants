import React from "react";
import { Link } from "react-router-dom";
import ft_logo from "../assets/images/ft_logo.png";
import contact1 from "../assets/images/contact1.png";

const Footer = () => {
  return (
    <div>
      {/* section contact us start here */}
      <section className="home_contact_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="home_contact_content">
                <p>A HEALTHY OUTSIDE, STARTS FROM THE INSIDE!</p>
                <h3>
                  ARE YOU LOOKING FOR <br /> A QUALITY AND BETTER SUPPLEMENTS?
                </h3>
                <Link to="/contact">
                  <p className="greentxt2">
                    CONTACT US
                    <i
                      className="fa fa-arrow-right ml-1"
                      aria-hidden="true"
                    ></i>
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="home_comtact_img_wrapper">
          <img src={contact1} className="img-fluid" alt="" />
        </div>
      </section>
      {/* section contact us end here */}
      {/* <!-- Footer Start Here --> */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="footer_content">
                <div className="logoDv">
                  <Link to="/">
                    <figure>
                      <img src={ft_logo} className="img-fluid" alt="img"/>
                    </figure>
                  </Link>
                </div>
                {/* <ul className="social_icons">
                                    <li><a href="https://www.linkedin.com/company/dijii/"><i className="fa fa-linkedin"
                                        aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.facebook.com/DijiiUK"><i className="fa fa-facebook"
                                        aria-hidden="true"></i></a></li>
                                    <li><a href="https://twitter.com/DijiiUK"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/dijiiuk/"><i className="fa fa-instagram"
                                        aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCV-27HsfTd64UPxm5sV0uZQ"><i
                                        className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.tiktok.com/@dijiiuk"><img src="img/tik-tok.png" className="img-fluid tiktok" /></a>
                                    </li>
                                </ul> */}
                <p className="pr-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sollii sn erat vel n erat n erat vel rhoncus n erat vel
                  rhoncus sollicitudin.{" "}
                </p>
                <div className="ft_socialicon">
                  <i
                    className="fa fa-facebook-square ft_facebook"
                    aria-hidden="true"
                  ></i>
                  <Link to="#">
                    <i
                      className="fa fa-youtube-play ft_youtube"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer_content">
                    <div className="head">
                      {/* <!-- <h5>General</h5> --> */}
                      <h5>Quick Links</h5>
                    </div>
                    <ul className="footer-links">
                      <li>
                        <i
                          className="fa fa-chevron-right mr-4"
                          aria-hidden="true"
                        ></i>
                        <Link to="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right mr-4"
                          aria-hidden="true"
                        ></i>
                        <Link to="/testimonial">Testimonials</Link>
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right mr-4"
                          aria-hidden="true"
                        ></i>
                        <Link to="/faq">FAQS</Link>
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right mr-4"
                          aria-hidden="true"
                        ></i>
                        <Link to="/termsncondition">Terms & Conditions</Link>
                      </li>
                      <li>
                        <i
                          className="fa fa-chevron-right mr-4"
                          aria-hidden="true"
                        ></i>
                        <Link to="/privacypolicy">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer_content">
                    <div className="head">
                      <h5>Contact Info</h5>
                    </div>
                    <ul className="footer-links footer-links2">
                      <li>
                        <i
                          className="fa fa-map-marker mr-4"
                          aria-hidden="true"
                        ></i>
                        <a href="#">JI. Sample Road No.815, Kuta,UK 80361</a>
                      </li>
                      <hr />
                      <li>
                        <i className="fa fa-phone mr-4" aria-hidden="true"></i>
                        <a href="#">(+12) 345 678 9</a>
                      </li>
                      <hr />
                      <li>
                        <i
                          className="fa fa-envelope mr-4"
                          aria-hidden="true"
                        ></i>
                        <a href="#">support@domain.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="footer_content pl-4">
                    <div className="head">
                      <h5>Newsletter</h5>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In sollii sn erat vel n erat n erat vel rhoncus n erat vel
                      rhoncus sollicitudin.
                    </p>
                    <form action="">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control mt-2"
                          id="inlineFormInputGroupUsername"
                          placeholder="Your Email Addrress"
                        />
                        <div className="input-group-prepend mt-2">
                          <div className="input-group-text">
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                      {/* <div className="form-group">
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Addrress" />
                                            </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="left">
              <p>
                © Copyright <span className="greentxt">PLANTSTHIRDDAY</span>{" "}
                2022. All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End Here --> */}
    </div>
  );
};

export default Footer;
