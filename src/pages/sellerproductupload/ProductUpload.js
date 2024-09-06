import React, { useEffect } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/account.css";
import Header from "../../component/Header";
import ProfileSideTab from "../../component/profie/ProfileSideTab";
import SellerProfileSideTab from '../../component/sellerprofile/SellerProfileSideTab';
import arrowright from "../../assets/images/arrowright.png";

const ProductUpload = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <section className='accounts_page seller_account'>
                <Header />
                {/* universal top section start here */}
                <div className="universal_top">
                    <div className=''>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-md-6 ">
                                <div className="heading_top mt-5">
                                    <h3 className="green_head">SELLER <h3>ACCOUNT</h3></h3>
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

                </div>
                {/* universal top section end here */}
                {/* <!-- Account section  --> */}

                <section className="account-sec">
                    <div className="container">
                        <div className="row account">
                            <div className="col-md-3 leftside_account">
                                <SellerProfileSideTab />
                            </div>

                            <div className="col-md-9 pl-0 pr-0">

                                <div className="all-form-two" id="for-two-id-hide">
                                    <form action="">
                                        <div className="form-head mb-4">
                                            <h3>PRODUCT UPLOAD</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label for="productname" className="form-label">Product Name</label>
                                                    <input type="text" className="form-control" id="productname" />
                                                </div>
                                            </div>

                                            <div className='col-md-12'>
                                                <div class="form-group">
                                                    <label for="detail_desc">Detailed Description</label>
                                                    <textarea class="form-control" id="detail_desc" rows="3"></textarea>
                                                </div>
                                            </div>


                                            <div className='col-md-12'>
                                                <label>Media</label>
                                                <label class="customfilelabel">
                                                    <i class="fa fa-paperclip">
                                                    </i>
                                                    <span class="title">
                                                        Add File
                                                    </span>
                                                    <span className='drop_file_txt'>or drop files here</span>
                                                    <input class="FileUpload1" id="FileInput" name="booking_attachment" type="file" />
                                                </label>
                                            </div>
                                            <div className="col-md-12 align-items-center mt-4">
                                                <div className='row'>
                                                    <div className='col-md-3'>
                                                        <div className="mb-3">
                                                            <label for="productprice" className="form-label">Price</label>
                                                            <input type="text" className="form-control" id="productprice" />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3'>
                                                        <div className="mb-3">
                                                            <label for="productstock" className="form-label">Stock</label>
                                                            <input type="text" className="form-control" id="productstock" />
                                                        </div>
                                                    </div>
                                                    <div className='col-md-3'></div>
                                                    <div className='col-md-3 align-self-center'>
                                                        <div className="edit-profile for-right">
                                                            <button className='plant_btn'>UPLOAD<img src={arrowright} alt="" className="img-fluid ml-1" /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* </div>
                        </div> */}
                        </div>
                    </div>
                </section>
                {/* <!-- End of Account section  --> */}
                <Footer />
            </section>
        </>
    )
}

export default ProductUpload