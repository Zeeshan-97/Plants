import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../assets/style/sellerregister.css";
import contact1 from "../../assets/images/contact1.png";

const SellerRegister = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div>
            {/* login page start here */}
            <section className="sellerregister_page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 align-self-center">
                            <div className="heading_top mt-5">
                                <h3 className="green_head">REGISTER AS A SELLER</h3>
                            </div>
                            <div className="wrapper">
                                <p className="welcome_para">
                                    Welcome Back to{" "}
                                    <span className="plantshead">Plants Third Day</span>
                                    <br />
                                    The Best place to enhance your look
                                </p>
                                <span className="notamember">Already a member? </span>
                                <Link to="/sellerlogin">
                                    <span className="register"> Login</span>
                                </Link>
                                <form action="">
                                    <div className="form-start">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="First Name"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Last Name"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="tel"
                                                        placeholder="Phone Number"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="button-group">
                                                    <button className="plants_btn btn" type="submit">
                                                        REGISTER
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-6">

                                            </div>
                                        </div>
                                        <div className="rememberDv">
                                            <div>
                                                <p className="createacc">
                                                    By Creating Account  you are agree to our
                                                    <Link to="/termsncondition"> Terms & conditions</Link>
                                                </p>
                                            </div>
                                            <div className="lnk">

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-7 align-self-center">
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
    )
}

export default SellerRegister