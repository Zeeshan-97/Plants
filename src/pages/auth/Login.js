import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/login.css";
import contact1 from "../../assets/images/contact1.png";

const Login = () => {
  return (
    <div>
      {/* login page start here */}
      <section className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-md-5 align-self-center">
              <div className="heading_top mt-5">
                <h3 className="green_head">LOGIN</h3>
              </div>
              <div className="wrapper">
                <p className="welcome_para">
                  Welcome Back to{" "}
                  <span className="plantshead">Plants Third Day</span>
                  <br />
                  The Best place to enhance your look
                </p>
                <span className="notamember">Not a Member ?</span>
                <Link to="/register">
                  <span className="register"> Register</span>
                </Link>
                <form action="">
                  <div className="form-start">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                    <div className="button-group">
                      <Link className="plants_btn btn" to="/account">
                        LOGIN
                      </Link>
                    </div>
                    <div className="rememberDv">
                      <div className="form-group">
                        <div className="form-group custom_checkbox">
                          <input type="checkbox"
                            id="remember"
                            className="form-control" />
                          <label for="remember">Remember Me</label>
                        </div>
                      </div>
                      <div className="lnk">
                        <Link to="/forgetpassword">Forgot Password ?</Link>
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
  );
};

export default Login;
