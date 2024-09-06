import React, { useEffect } from "react";
import arrowright from "../../assets/images/arrowright.png";

const SellerChangePassword = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="all-form-three" id="all-form-three-hide">
      <div className="all-form-width">
        <form action="">
          <div className="form-head">
            <h3>CHANGE PASSWORD</h3>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="mb-3">
                <label for="oldpassword" className="form-label">
                  Old Password
                </label>
                <input type="text" className="form-control" id="oldpassword" />
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="newpassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newpassword"
                />
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="cpassword" className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                />
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="mb-3">
                <div className="fomr-three-btn">
                  <button
                    onClick={() => {
                      props.changeTabsFunction(1);
                    }}
                    className="plant_btn"
                  >
                    SAVE
                    <img src={arrowright} alt="" className="img-fluid ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerChangePassword;
