import React, { useEffect } from 'react';
import arrowright from "../../assets/images/arrowright.png";


const SellerEditAccountTab = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="all-form-two" id="for-two-id-hide">
            <form action="">
                <div className="form-head">
                    <h3>EDIT PROFILE</h3>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className="col-md-5">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Primary Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-md-2'></div>


                    <div className="col-md-10">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className="col-md-10">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Secondary Address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-md-2'></div>

                    <div className="col-md-12">
                        <div className="edit-profile for-right">
                            <button className='plant_btn' onClick={() => { props.changeTabsFunction(1) }}>SAVE<img src={arrowright} alt="" className="img-fluid ml-1" /></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SellerEditAccountTab