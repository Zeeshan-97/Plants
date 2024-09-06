import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import "../../assets/style/wholesale.css";

const WholeSale = () => {
  return (
    <>
      <Header />
      {/* CONTACT page start here */}
      <section className="wholesale_page">
        <div className="universal_top">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-5">
              <div className="heading_top mt-5">
                <h3 className="green_head">
                  WHOLE<h3>SALE</h3>
                </h3>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="heading_para">
              <p>
                Plants Third Day vitamins are of the highest Quality, Purity,
                and Potency. You will be providing your customers with vitamins,
                herbs, and nutritional supplements that meet the highest
                standards, that are routinely verified by third-party laboratory
                testing. New High Quality product's are always being added to
                the product line.
                <br /> If you are interested in becoming a new wholesale
                partner, please fill out the wholesale form agreement and email
                the form back to orders@plantsthirdday.com
              </p>
            </div>
          </div>
        </div>
        <section className="form_sec">
          {/* login page start here */}
          <div className="register_page">
            <div className="container">
              <div className="row">
                <div className="col-md-12 align-self-center">
                  <div className="wrapper">
                    <h5>REQUEST FORM</h5>
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
                              <label htmlFor="storename">Store Name</label>
                              <input
                                id="storename"
                                type="tel"
                                placeholder=""
                                className="form-control"
                              />
                            </div>
                          </div>
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
                        </div>
                        <div className="row">

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
                        <div className="row mb-5">
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
                        <div className="row mt-4">
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

export default WholeSale;
