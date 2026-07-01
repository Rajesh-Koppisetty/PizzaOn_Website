import React from "react";
import logo from "./assets/NavBar/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark text-white p-3">
                <div class="container">
                    <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <img src={logo} alt="" />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav text-white">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/home">HOME</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">MENU</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/reservation">RESERVATION</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">CONTACT</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/aboutus">ABOUT US</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item me-4">
                                <div className="d-flex">
                                    <i className="fa-solid fa-phone d-flex align-items-center" style={{ color: 'rgb(249, 203, 38)' }}></i>

                                    <a class="nav-link active text-white" aria-current="page" href="#">+91 123 456 789</a>
                                </div>

                            </li>
                            <li class="nav-item">
                                <div className="d-flex">
                                    <i className="fa-solid fa-cart-plus d-flex align-items-center" style={{ color: "rgb(249, 203, 38)" }}></i>
                                    <a class="nav-link active text-white" aria-current="page" href="#">Items</a>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div >
                        
                        <Link to="" class="btn btn-success rounded-pill">ORDER ONLINE</Link>
                        {/* <Link to="/" class="btn btn-success rounded-pill">LOG IN</Link> */}

                    </div>

                </div>
            </nav>
        </>
    )
}
export default NavBar