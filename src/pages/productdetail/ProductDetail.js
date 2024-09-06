import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import "../../assets/style/product_detail.css";
import productdetail1 from "../../assets/images/productdetail1.png";
import { Link } from "react-router-dom";
import arrowright from "../../assets/images/arrowright.png";
import review1 from "../../assets/images/review1.png";
import review2 from "../../assets/images/review2.png";
import review3 from "../../assets/images/review3.png";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  return (
    <>
      <Header />
      <div className="productdetail_page">
        {/* <!-- Product Detail Start Here --> */}
        <section className="product_detail">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="picture_box">
                  <div className="product-single-image">
                    <figure>
                      <img src={productdetail1} className="img-fluid" />
                    </figure>
                  </div>
                  {/* <div className="product_images">
                  <figure>
                    <img src="img/product1.png" className="img-fluid" />
                  </figure>
                  <figure>
                    <img src="img/product2.png" className="img-fluid" />
                  </figure>
                  <figure>
                    <img src="img/product3.png" className="img-fluid" />
                  </figure>
                </div> */}
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="product_details_dv">
                  <div className="heading_top mt-5">
                    <h3 >COMPLETE MULTIVITAMIN</h3>
                  </div>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, elta consectetur adipiscing
                      elit ut elit tellus Maecenas sed diam eget risus varius
                      blandit sit ame Lorem ipsum dolor sit amet, elta
                      consectetur adipiscing elit ut elit tellus Maecenas sed
                      diam eget risus varius blandit sit amet
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, elta consectetur adipiscing
                      elit ut elit tellus Maecenas sed diam eget risus varius
                      blandit sit ame Lorem ipsum dolor sit amet.
                    </p>
                    <p class="greentxt2">$1,850.00</p>
                    <ul>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="detail_box">
                    <div className="quantity_dv">
                      <button
                        className="addCount"
                        onClick={increase}
                        getid="countVal1"
                      >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                      </button>
                      <span className="count_value">{counter}</span>

                      <button
                        className="removeCount"
                        onClick={decrease}
                        getid="countVal1"
                      >
                        <i className="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="detail_addtocart">
                      <Link to="/shoppingcart" className="plant_btn">
                        ADD TO CART{" "}
                        <img
                          src={arrowright}
                          alt=""
                          className="img-fluid ml-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Product Detail End Here --> */}

        {/* <!-- product page tabs section start here --> */}

        <section className="product_tabs_section">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="desc-tab"
                  data-toggle="tab"
                  href="#desc"
                  role="tab"
                  aria-controls="desc"
                  aria-selected="true"
                >
                  DESCRIPTION
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="ship-tab"
                  data-toggle="tab"
                  href="#ship"
                  role="tab"
                  aria-controls="ship"
                  aria-selected="false"
                >
                  REVIEWS (4)
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="desc"
                role="tabpanel"
                aria-labelledby="desc-tab"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ac tortor dignissim convallis aenean et tortor at risus
                  viverra. Eget duis at tellus at urna. Velit aliquet sagittis
                  id consectetur purus ut faucibus pulvinar elementum. Dui
                  sapien eget mi proin. Aenean euismod elementum nisi quis
                  eleifend quam adipiscing. Sit amet tellus cras adipiscing enim
                  eu turpis. Tristique risus nec feugiat in fermentum posuere.
                  Leo ve l fringilla est ullamcorper eget nulla facilisi. Vitae
                  sapien pellentesque habitant morbi tristique senectus et netus
                  et. Egestas diam in arcu cursus euismod quis. Est ante in nibh
                  mauris. Ultricies lacus sed turpis tincidunt id. Aenean et
                  tortor at risus viverra adipiscing. Eget gravida cum sociis
                  natoque penatibus et magnis. Sed elementum tempus egestas sed.
                  Suspendisse sed nisi lacus sed viverra. Mattis aliquam
                  faucibus purus in massa tempor nec.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="ship"
                role="tabpanel"
                aria-labelledby="ship-tab"
              >
                <p className="fourrev">4 reviews for Complete vitamin</p>
                <div className="review_wrapper">
                  <div className="review_wrapper_img">
                    <img src={review1} className="img-fluid" alt="" />
                  </div>
                  <div className="review_content">
                    <div className="review_para">
                      <p>Cobus Bester - june 8 ,2022</p>
                      <p>
                        Really happy with this food. The taste are great, and
                        the food quality is good too.
                      </p>
                    </div>
                    <div className="product_star_dv">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="review_wrapper mt-5">
                  <div className="review_wrapper_img">
                    <img src={review2} className="img-fluid" alt="" />
                  </div>
                  <div className="review_content">
                    <div className="review_para">
                      <p>Cobus Bester - june 8 ,2022</p>
                      <p>
                        Really happy with this food. The taste are great, and
                        the food quality is good too.
                      </p>
                    </div>
                    <div className="product_star_dv">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="review_wrapper mt-5 mb-3">
                  <div className="review_wrapper_img">
                    <img src={review3} className="img-fluid" alt="" />
                  </div>
                  <div className="review_content">
                    <div className="review_para">
                      <p>Cobus Bester - june 8 ,2022</p>
                      <p>
                        Really happy with this food. The taste are great, and
                        the food quality is good too.
                      </p>
                    </div>
                    <div className="product_star_dv">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="forms_sec">
                  <p>Add a review</p>
                  <p>
                    Your email address will not be published.Required field are
                    marked *
                  </p>
                  <p>Your rating</p>
                  <div>
                    <ul>
                      <li>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="form_start">
                    <form action="">
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                          Your Review <span className="redstar">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label for="inputname">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputname"
                            />
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                        <div className="col"></div>
                      </div>
                      <button type="submit" className="addtocarttxt">S U B M I T<img
                        src={arrowright}
                        alt=""
                        className="img-fluid ml-2 curvedimg"
                      /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- product page tabs section end here --> */}
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
