import React, { useEffect } from 'react';
import arrowright from "../../assets/images/arrowright.png";
import { Link } from "react-router-dom";

const SellerAccountTab = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="all-form-one " id="for-hide-things">
            <form action="">
                <div className='row mb-4'>
                    <div className='col-md-3'>
                        <div className="form-head">
                            <h3>Account</h3>
                        </div>
                    </div>
                    <div className='col-md-5'></div>
                    <div className='col-md-4'>
                        <div className='editprofilebtn'>
                            <button className='plant_btn' onClick={() => { props.changeTabsFunction(2) }}>
                                EDIT PROFILE
                                <img src={arrowright} alt="" className="img-fluid ml-2" />
                            </button>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="exampleInputEmail1">FIRST NAME</label>
                            <p>John</p>
                            {/* <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="John" /> */}
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="exampleInputEmail1">LAST NAME</label>
                            <p>Doe</p>
                            {/* <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Doe" /> */}
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="form-group">
                            <label for="exampleInputEmail1">PHONE</label>
                            <p>+1 (322) 422 654</p>
                            {/* <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="+1 (322) 422 654" /> */}
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="exampleInputEmail1">PRIMARY EMAIL</label>
                            <p>Jamesanderson@gmail.com</p>
                            {/* <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Jamesanderson@gmail.com" /> */}
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="form-group">
                            <label for="exampleInputEmail1">PASSWORD</label>
                            <p>************</p>
                            {/* <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="************" /> */}
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="change-password" id="passwordchange">
                            <a onClick={() => { props.changeTabsFunction(3) }} href="#">CHANGE PASSWORD</a>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label for="exampleInputEmail1">ADDRESS</label>
                            <p>4806 Fittro Street hughes, AR 72348</p>
                            {/* <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="4806 Fittro Street hughes, AR 72348" /> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="exampleInputEmail1">SECONDARY ADDRESS</label>
                            <p>4806 Fittro Street hughes, AR 72348</p>
                            {/* <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="4806 Fittro Street hughes, AR 72348" /> */}
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SellerAccountTab