import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/forgetpassword.css";
import contact1 from "../../assets/images/contact1.png";

const ForgetPassword = () => {
    return (
        <div>
            {/* login page start here */}
            <section className="forgetpass_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="heading_top mt-5">
                                <h3 className="green_head">FORGET PASSWORD</h3>
                            </div>
                            <div className="wrapper">


                                <form action="">
                                    <div className="form-start">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="button-group mt-3">
                                            <button className="plants_btn btn" type="submit">
                                                SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <Link to="/">
                                <div className="login_img">
                                    <img src={contact1} className="img-fluid" alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* login page end here */}
        </div>
    );
};

export default ForgetPassword;
