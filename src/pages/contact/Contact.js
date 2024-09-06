import React, { useEffect } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import "../../assets/style/contact.css";
import email_icon from "../../assets/images/email_icon.png"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <Header />
      {/* CONTACT page start here */}
      <section className="contact_page">
        <div className="universal_top">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-5">
              <div className="heading_top mt-5">
                <h3 className="green_head">
                  CONTACT <h3>US</h3>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, elta consectetur adipiscing elit ut
                  elit tellus Maecenas sed diam eget risus varius blandit sit amet
                </p>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <section className="contact_detail">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="contact_desc">
                  <div className="img_border">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="detail_desc">
                    <div className="detail_name">
                      <h3>Call Us : </h3>
                      <span>+123 456 789</span>
                    </div>
                    <p>
                      <small>Office Time : 9:30 to 6:45 on Weekdays</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="contact_desc">
                  <div className="img_border">
                    <img src={email_icon} className="img-fluid" alt="" />
                    {/* <i className="fa fa-phone"></i> */}
                  </div>
                  <div className="detail_desc">
                    <div className="detail_name">
                      <h3>Email : </h3>
                    </div>
                    <p>
                      <small>sample@plantsthirdday.com</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="contact_desc">
                  <div className="img_border">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="detail_desc">
                    <div className="detail_name">
                      <h3>Adress : </h3>
                    </div>
                    <p>
                      <small>2555 Ritter Street Huntsville, AL 35811</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="form_sec">
          {/* login page start here */}
          <div className="register_page">
            <div className="container">
              <div className="row">
                <div className="col-md-12 align-self-center">
                  <div className="wrapper">
                    <h5>CONTACT FORM</h5>
                    <form action="">
                      <div className="form-start">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="fname">First Name</label>
                              <input
                                id="fname"
                                type="text"
                                placeholder=""
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="lname">Last Name</label>
                              <input
                                id="lname"
                                type="text"
                                placeholder=""
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="inputemail">Email Address</label>
                              <input
                                id="inputemail"
                                type="email"
                                placeholder=""
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="phoneno">Phone Number</label>
                              <input
                                id="phoneno"
                                type="tel"
                                placeholder=""
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label for="exampleFormControlTextarea1">
                                Message
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <hr className="spacer" />
                        <div className="row mt-5">
                          <div className="col-md-6"></div>
                          <div className="col-md-6">
                            <div className="button-group text-right">
                              <button className="plant_btn" type="submit">
                                SUBMIT
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="rememberDv">
                          <div className="lnk"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* login page end here */}
        </section>
      </section>
      {/* CONTACT page end here */}
      <Footer />
    </>
  );
};

export default Contact;
