import React, { useEffect, useState } from 'react';
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "../../assets/style/account.css";
import Header from "../../component/Header";
import ProfileSideTab from "../../component/profie/ProfileSideTab";
import SellerProfileSideTab from '../../component/sellerprofile/SellerProfileSideTab';
import trash from "../../assets/images/trash.png"

const SellerInventory = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      },[]);
    const [activates, setActivates] = useState(false);
    const [activates2, setActivates2] = useState(false);
    const [activates3, setActivates3] = useState(false);
    function HandleActive() {
        setActivates(!activates);
    }
    function HandleActive2() {
        setActivates2(!activates2);
    }
    function HandleActive3() {
        setActivates3(!activates3);
    }
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

                                {/* <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab"> */}
                                <div className="order-table-wrapper table-responsive">
                                    <div className="form-head inventory_head">
                                        <h3>PRODUCT INVENTORY</h3>
                                        <Link to="/productupload" className='plant_btn'>ADD PRODUCTS</Link>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr className="row1">
                                                <th className="order-no">NAME</th>
                                                <th className="order-date">CREATED</th>
                                                <th className="order-total">PRICE</th>
                                                <th className="order-status">QUANTITY</th>
                                                <th className="details">ACTIVE</th>
                                                <th className="details">ACTION</th>
                                            </tr>
                                            <tr className="row2">
                                                <td className="number">PLANTS THIRD DAY</td>
                                                <td className="date">2022-June-18</td>
                                                <td className="inventory_price">$300</td>

                                                <td className="invnt_qty">150</td>
                                                <td className="order-details">
                                                    {/* {activates && <p>Activate</p>} */}
                                                    {/* {
                                                        !activates ?
                                                            <button onClick={HandleActive}>Disable</button>
                                                            :
                                                            <button onClick={HandleActive}>Enable</button>
                                                    } */}
                                                    <div className="check_wrapper">
                                                        <div className="switch_box box_1">
                                                            <input type="checkbox" className="switch_1" />
                                                            <span className='checkmark'></span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="inventory_actions">
                                                    <div className='edit_wrap'>
                                                        <img src={trash} className='img-fluid mr-1' alt="" />
                                                        <span>Edit</span>
                                                    </div>
                                                    <div className='delet_wrap'>
                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                        <span>Delete</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="row2">
                                                <td className="number">PLANTS THIRD DAY</td>
                                                <td className="date">2022-June-18</td>
                                                <td className="inventory_price">$300</td>

                                                <td className="invnt_qty">150</td>
                                                <td className="order-details">
                                                    <div class="check_wrapper">
                                                        <div className="switch_box box_1">
                                                            <input type="checkbox" className="switch_1" />
                                                            <span className='checkmark'></span>
                                                        </div>
                                                    </div>
                                                    {/* {
                                                        !activates2 ?
                                                            <button onClick={HandleActive2}>Disable</button>
                                                            :
                                                            <button onClick={HandleActive2}>Enable</button>
                                                    } */}
                                                </td>
                                                <td className="inventory_actions">
                                                    <div className='edit_wrap'>
                                                        <img src={trash} className='img-fluid mr-1' alt="" />
                                                        <span>Edit</span>
                                                    </div>
                                                    <div className='delet_wrap'>
                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                        <span>Delete</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="row2">
                                                <td className="number">PLANTS THIRD DAY</td>
                                                <td className="date">2022-June-18</td>
                                                <td className="inventory_price">$300</td>

                                                <td className="invnt_qty">150</td>
                                                <td className="order-details">
                                                    <div class="check_wrapper">
                                                        <div className="switch_box box_1">
                                                            <input type="checkbox" className="switch_1" />
                                                            <span className='checkmark'></span>
                                                        </div>
                                                    </div>
                                                    {/* {
                                                        !activates3 ?
                                                            <button onClick={HandleActive3}>Disable</button>
                                                            :
                                                            <button onClick={HandleActive3}>Enable</button>
                                                    } */}
                                                </td>
                                                <td className="inventory_actions">
                                                    <div className='edit_wrap'>
                                                        <img src={trash} className='img-fluid mr-1' alt="" />
                                                        <span>Edit</span>
                                                    </div>
                                                    <div className='delet_wrap'>
                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                        <span>Delete</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* <!-- pagination starts here --> */}
                                {/* <div className="pagination-wrapper">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true"><i className="fa fa-angle-left"
                                                            aria-hidden="true"></i></span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true"><i className="fa fa-angle-right"
                                                            aria-hidden="true"></i></span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div> */}
                                {/* <!-- pagination starts here --> */}
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

export default SellerInventory