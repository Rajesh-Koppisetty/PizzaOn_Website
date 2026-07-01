import React from "react";
import img1 from "./assets/aboutus/img1.jpg";
import img2 from "./assets/aboutus/img2.png";
import img3 from "./assets/aboutus/img3.jpg";
function AboutUs() {
    return (
        <>
            <section className="bg-dark aboutus-section">
                <div className="text-light aboutus">
                    <h1>ABOUT US</h1>
                    <h6 className="d-flex justify-content-center">Home / About Us</h6>

                </div>
            </section>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 py-5">
                            <img src={img1} alt="" />

                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center ">
                            <div className="py-5">
                                <p className="lobster-two-regular d-flex justify-content-center">Delicious Restaurant</p>
                            <h1 className="anton-regular d-flex justify-content-center">ABOUT PIZZA</h1>
                            <p>
                                Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.
                            </p>
                            

                            </div>
                            

                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div className="container d-flex justify-content-center align-items-center bg-white">
                    <div className=" p-5">
                        <p className="lobster-two-regular d-flex justify-content-center">Discover</p>
                    <h1 className="anton-regular d-flex justify-content-center">OUR STORY</h1>
                    <p className="px-5">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                    </p>
                    <div className="d-flex justify-content-center">
                        <img src={img2} alt="" />

                    </div>
                    
                    </div>

                </div>
            </section>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 py-5">
                            <img src={img3} alt="" />

                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center ">
                            <div className="py-5">
                                <p className="lobster-two-regular d-flex justify-content-center">Modern Cuisine</p>
                            <h1 className="anton-regular d-flex justify-content-center">EXPERIANCE</h1>
                            <p>
                               Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.
                            </p>

                            </div>
                            

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default AboutUs