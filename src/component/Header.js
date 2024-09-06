import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import user_icon from "../assets/images/user_icon.png";
import logo from "../assets/images/logo.png";
import arrowright from "../assets/images/arrowright.png";

const Header = () => {
  return (
    <div>
      <header id="header-top">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-7 col-4">
              <div className="left-content">
                <div className="logoDv">
                  <Link to="/">
                    <figure>
                      <img width="180" src={logo} />
                    </figure>
                  </Link>
                </div>
                <div className="navbar_menus">
                  <ul className="menus">
                    <li className="menu-items">
                      <NavLink exact activeClassName="active" to='/' >HOME</NavLink>
                    </li>
                    <li className="menu-items">
                      <NavLink activeClassName="active" to='/shop' >SHOP</NavLink>
                    </li>
                    <li className="menu-items">
                      <NavLink activeClassName="active" to='/marketplace' >MARKETPLACE</NavLink>
                    </li>
                    <li className="menu-items">
                      <NavLink activeClassName="active" to='/wholesale' >WHOLESALE</NavLink>
                    </li>
                    <li className="menu-items">
                      <NavLink activeClassName="active" to='/contact' >CONTACT</NavLink>
                    </li>
                    {/* <li className="menu-items">
                      <Link to="/">HOME</Link>
                    </li>
                    <li className="menu-items">
                      <Link to="/shop">SHOP</Link>
                    </li>
                    <li className="menu-items">
                      <Link to="/marketplace">MARKETPLACE</Link>
                    </li>
                    <li className="menu-items">
                      <Link to="/wholesale">WHOLESALE</Link>
                    </li>
                    <li className="menu-items">
                      <Link to="/contact">CONTACT</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-8">
              <div className="right_content">
                <div className="download_from">
                  <div className="plystore">
                    <Link to="/login">
                      <figure>
                        <img src={user_icon} className="img-fluid" />
                      </figure>
                      <p>

                        <small className="user">Sign In</small>

                        Account
                      </p>
                    </Link>
                  </div>
                  <div className="plystore">
                    <p>
                      <small className="user">Currency</small>
                      {/* USD */}
                      <select className="custom-select">
                        <option value="usd">USD</option>
                        <option value="euro">EURO</option>
                        <option value="pound">POUND</option>
                      </select>
                    </p>
                  </div>
                </div>
                <div className="button-group">
                  <div className="header_icons">
                    <Link to="/shoppingcart">
                      <i
                        className="fa fa-shopping-cart mr-3"
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <i className="fa fa-search mr-3" aria-hidden="true" data-toggle="modal" data-target="#search_modal"></i>
                  </div>
                  <Link to="/sellerregister" className=" plant_btn">
                    BECOME A SELLER{" "}
                    <img src={arrowright} alt="" className="img-fluid ml-1" />
                  </Link>
                </div>
                <div className="canvas_btn">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div >
        <a id="backtotop"></a>
      </header >
      <div className="mobile_header">
        <div className="cancel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#000"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <ul className="mobile_menus">
          <li className="menu_items">
            <a className="menu_links active_menu" href="index.php">
              Home
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="about.php">
              About Us
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="customer.php">
              Customers
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="retailer.php">
              Retailers
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="partner.php">
              Partners
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="contact.php">
              Contact Us
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="#">
              Register as tester
            </a>
          </li>
          <li className="menu_items">
            <a className="menu_links" href="login.php">
              Login
            </a>
          </li>
        </ul>
      </div>

      <div className="modal fade search_btn" id="search_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="input-group">
              <label to="gsearch">Search</label>
              <input className="form-control" type="search" id="gsearch" name="gsearch" />
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};

export default Header;

// <!-- Header Start Here -->

{
  /* <!-- Header End Here --> */
}

{
  /* <!-- Go To Top Button --> */
}
{
  /* <!-- <div className="go_to_top">
    <a href="#header-top"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
</div> --> */
}
{
  /* <!-- Go To Top Button --> */
}

{
  /* <!-- Mobile Header Start Here --> */
}

{
  /* <!-- Mobile Header End Here --> */
}

{
  /* <!-- Messanger Code --> */
}
{
  /* <div id="fb-root"></div>
<div id="fb-customer-chat" className="fb-customerchat">

</div> */
}
{
  /* <!-- Messanger Code --> */
}
