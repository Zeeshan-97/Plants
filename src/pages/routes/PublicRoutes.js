import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "../about-us/AboutUs";
import ForgetPassword from "../auth/ForgetPassword";
import Login from "../auth/Login";
import Register from "../auth/register";
import Checkout from "../checkout/Checkout";
import Contact from "../contact/Contact";
import Faq from "../faq/Faq";
import Home from "../Home/Home";
import MarketProductDetail from "../maket_productdetail/MarketProductDetail";
import MarketPlace from "../marketplace/MarketPlace";
import ProductDetail from "../productdetail/ProductDetail";
import Shop from "../shop/Shop";
import ShoppingCart from "../shoppingcart/ShoppingCart";
import Testimonial from "../testimonial/Testimonial";
import ThankYou from "../thankyou/ThankYou";
import WholeSale from "../wholesale/WholeSale";
import Account from "../myaccount/Account";
import Order from "../Order/Order";
import SellerLogin from "../sellerauth/SellerLogin";
import SellerRegister from "../sellerauth/SellerRegister";
import SellerForgetPassword from "../sellerauth/SellerForgetPassword";
import SellerAccount from "../selleraccount/SellerAccount";
import SellerOrder from "../sellerorder/SellerOrder";
import SellerInventory from "../sellerinventory/SellerInventory";
import SellerCustomer from "../sellercustomer/SellerCustomer";
import ProductUpload from "../sellerproductupload/ProductUpload";
import SellerReport from "../sellerreport/SellerReport";
import TermsnCondition from "../termsncondition/TermsnCondition";
import PrivacyPolicy from "../privacypolicy/PrivacyPolicy";
import SellerThankYou from "../sellerthankyou/SellerThankYou";


const PublicRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/wholesale" element={<WholeSale />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="/product-detail" element={<ProductDetail />}></Route>
                    <Route path="/marketplace" element={<MarketPlace />}></Route>
                    <Route path="/market-product-detail" element={<MarketProductDetail />}></Route>
                    <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                    <Route path="/thankyou" element={<ThankYou />}></Route>
                    <Route path="/faq" element={<Faq />}></Route>
                    <Route path="/aboutus" element={<AboutUs />}></Route>
                    <Route path="/testimonial" element={<Testimonial />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                    <Route path="/myorders" element={<Order />}></Route>
                    <Route path="/selleraccount" element={<SellerAccount />}></Route>
                    <Route path="/sellerlogin" element={<SellerLogin />}></Route>
                    <Route path="/sellerregister" element={<SellerRegister />}></Route>
                    <Route path="/sellerforgetpassword" element={<SellerForgetPassword />}></Route>
                    <Route path="/sellerorder" element={<SellerOrder />}></Route>
                    <Route path="/sellerinventory" element={<SellerInventory />}></Route>
                    <Route path="/sellercustomer" element={<SellerCustomer />}></Route>
                    <Route path="/sellerorder" element={<SellerOrder />}></Route>
                    <Route path="/productupload" element={<ProductUpload />}></Route>
                    <Route path="/sellerreport" element={<SellerReport />}></Route>
                    <Route path="/termsncondition" element={<TermsnCondition />}></Route>
                    <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
                    <Route path="/sellerthankyou" element={<SellerThankYou />}></Route>

                    {/* for error or not spefecific path */}
                    <Route path="*" element={<Home />}></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PublicRoutes;