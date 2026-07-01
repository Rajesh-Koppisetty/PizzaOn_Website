import React from "react";
import logo from "./assets/NavBar/logo.png";
function Footer() {
    return (
        <>
            <section className="bg-dark p-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 text-light">
                            <img src={logo} alt="" className="py-5" />
                            <div className="pe-5">
                                <h6>Road Number 56, Madhapur, Hyderabad, Telangana, India</h6>
                                <h6>PHONE- +91 123 456 789 0, +91 123 456 789 0</h6>
                                <h6>EMAIL- info@gmail.com</h6>

                            </div>


                        </div>
                        <div className="col-md-4 text-light">
                            <h4 className="py-5">OPENING HOURS</h4>
                            <div className="row">
                                <div className="col-md-6 text-light">
                                    <h6>Mon-Tues :</h6>
                                    <h6> Wednes-Thurs :</h6>
                                    <h6>Launch :</h6>
                                    <h6>Sunday :</h6>

                                </div>
                                <div className="col-md-6 text-light">
                                    <h6>6.00 am-10.00 pm</h6>
                                    <h6>6.00 am-10.00 pm</h6>
                                    <h6>Everyday</h6>
                                    <button type="button" class="btn btn-warning">Closed</button>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 text-light d-flex justify-content-center">
                            <div>
                                <h4 className="py-5">USEFUL LINKS</h4>
                                <h6>Privacy Policy</h6>
                                <h6>Order Tracking</h6>
                                <h6>Warranty and Services</h6>
                                <h6>About</h6>
                                <h6>Contact Us</h6>
                                <h6>Wishlist</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Footer