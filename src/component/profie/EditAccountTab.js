import React from 'react'

function EditAccountTab(props) {
    return (
        <div className="all-form-two" id="for-two-id-hide">
            <form action="">
                <div className="form-head mb-4">
                    <h3>EDIT PROFILE</h3>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="mb-4">
                            <label for="exampleInputEmail1" className="form-label">Address</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="edit-profile for-right">
                            <button className='plant_btn' onClick={() => { props.changeTabsFunction(1) }}>SAVE</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditAccountTab