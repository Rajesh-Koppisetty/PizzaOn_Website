import React, { useEffect, useState } from "react";
import img1 from "./assets/herosectionimage1/img1.png";
import img2 from "./assets/herosectionimage2/img2.png";
import img3 from "./assets/herosectionimage3/img3.png";
import img4 from "./assets/halfimg.png";
import img5 from "./assets/section2/img1.svg";
import img6 from "./assets/section2/img2.svg";
import img7 from "./assets/section2/img3.svg";
import img8 from "./assets/section3/img1.jpg";
import img9 from "./assets/section3/img2.jpg";
import img10 from "./assets/section3/img3.jpg";
import img11 from "./assets/half1.png";
import img12 from "./assets/blackhalf1.png";
import img13 from "./assets/blackimg2.png";
import img14 from "./assets/herosectionimage2/smallimg1.png";
import img15 from "./assets/herosectionimage2/smallimg2.png";
import img16 from "./assets/herosectionimage2/smallimg3.png";
import img17 from "./assets/herosectionimage2/smallimg4.png";
import img18 from "./assets/herosectionimage2/smallimg5.png";
import img19 from "./assets/herosectionimage2/smallimg6.png";
import img20 from "./assets/herosectionimage1/smallimg1.png";
import img21 from "./assets/herosectionimage1/smallimg2.png";
import img22 from "./assets/herosectionimage1/smallimg3.png";
import img23 from "./assets/herosectionimage1/smallimg4.png";
import img24 from "./assets/herosectionimage3/smallimg1.png";
import img25 from "./assets/herosectionimage3/smallimg2.png";
import img26 from "./assets/herosectionimage3/smallimg3.png";
import img27 from "./assets/herosectionimage3/smallimg4.png";
import img28 from "./assets/herosectionimage3/smallimg5.png";
import img29 from "./assets/herosectionimage3/smallimg6.png";


function Home() {
    const[all,setAll]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/All")
        .then(res=>res.json())
        .then(data=>setAll(data))
    },[])
    return (
        <>
            <section>
                <div id="carouselExampleAutoplaying" class="carousel slide bg-dark parent" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active pt-5">
                            <div className="pt-5 pb-5 ">
                                <h1 className="hero-s1-ani-h barlow-condensed-medium text-white d-flex justify-content-center">QUALITY F<span className="bannercolor">OO</span>DS</h1>
                                <p className="hero-s1-ani-h barlow-condensed-medium1 d-flex justify-content-center">HEALTHY FOOD FOR HEALTHY BODY</p>
                            </div>
                            <div className="hero-parent-s1">
                                <img src={img1} class="d-block w-100 hero-s1-ani-i" alt="..." />
                                <div className="hero-child-s1-img1">
                                    <img src={img20} alt="" />
                                </div>
                                <div className="hero-child-s1-img2">
                                    <img src={img21} alt="" />
                                </div>
                                <div className="hero-child-s1-img3">
                                    <img src={img22} alt="" />
                                </div>
                                <div className="hero-child-s1-img4">
                                    <img src={img23} alt="" />
                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <div>
                                        <h1 className="hero-s2-ani-h barlow-condensed-medium text-white d-flex justify-content-center">QUALITY  </h1>
                                        <h1 className="hero-s2-ani-h barlow-condensed-medium text-white d-flex justify-content-center">F<span className="bannercolor">OO</span>DS  </h1>
                                        <p className="hero-s2-ani-h barlow-condensed-medium1 d-flex justify-content-center ">HEALTHY FOOD FOR HEALTHY BODY</p>
                                    </div>

                                </div>
                                <div className="col-md-6 p-5 hero-parent-s2">
                                    <img src={img2} class="d-block w-100 hero-s2-ani-i" alt="..." />
                                    <div className="hero-child-s2-i1">
                                        <img src={img14} alt="" />
                                    </div>
                                    <div className="hero-child-s2-i2">
                                        <img src={img15} alt="" />
                                    </div>
                                    <div className="hero-child-s2-i3">
                                        <img src={img16} alt="" />
                                    </div>
                                    <div className="hero-child-s2-i4">
                                        <img src={img17} alt="" />
                                    </div>
                                    <div className="hero-child-s2-i5">
                                        <img src={img18} alt="" />
                                    </div>
                                    <div className="hero-child-s2-i6">
                                        <img src={img19} alt="" />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div class="carousel-item">
                            <div className="row">
                                <div className="col-md-6 hero-parent-s3">
                                    <img src={img3} class="d-block w-100 hero-s3-ani-i" alt="..." />
                                    <div className="hero-child-s3-i1">
                                        <img src={img24} alt="" />
                                    </div>
                                    <div className="hero-child-s3-i2">
                                        <img src={img25} alt="" />
                                    </div>
                                    <div className="hero-child-s3-i3">
                                        <img src={img26} alt="" />
                                    </div>
                                    <div className="hero-child-s3-i4">
                                        <img src={img27} alt="" />
                                    </div>
                                    <div className="hero-child-s3-i5">
                                        <img src={img28} alt="" />
                                    </div>
                                    <div className="hero-child-s3-i6">
                                        <img src={img29} alt="" />
                                    </div>

                                </div>
                                <div className="col-md-6 d-flex align-items-center ">
                                    <div className="ps-0">
                                        <h1 className="hero-s3-ani-h barlow-condensed-medium text-white d-flex justify-content-center ">QUALITY  </h1>
                                        <h1 className="hero-s3-ani-h barlow-condensed-medium text-white d-flex justify-content-center">F<span className="bannercolor">OO</span>DS  </h1>
                                        <p className="hero-s3-ani-h barlow-condensed-medium1 d-flex justify-content-center ">HEALTHY FOOD FOR HEALTHY BODY</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    <div className="child">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </section>
            <section className="section2">
                <div className="container ">


                    <div className="row  px-5 section2-ani">
                        <div className="col-md-4 p-5">
                            <div className="d-flex justify-content-center">
                                <img src={img5} alt="" height={100} width={100} />
                            </div>

                            <div >
                                <h3>ORDER YOUR FOOD</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-
                                </p>

                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="d-flex justify-content-center">
                                <img src={img6} alt="" height={100} width={100} />
                            </div>
                            <div>
                                <h3>
                                    DELIVERY OR PICK UP
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-
                                </p>

                            </div>
                        </div>
                        <div className="col-md-4 p-5">
                            <div className="d-flex justify-content-center">
                                <img src={img7} alt="" height={100} width={100} />
                            </div>
                            <div>
                                <h3>
                                    DELICIOUS RECEIPE
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="s3parent pb-4">
                    <p className="lobster-two-regular d-flex justify-content-center">Fresh From Pizzon</p>
                    <h1 className="anton-regular d-flex justify-content-center">OUR SPECIALITY</h1>
                    <div className="d-flex justify-content-center p-3">
                        <div className="row">
                            <div className="col-md-4 ">
                                <img src={img8} alt="" className="rounded-circle " />
                                <h4 className="d-flex justify-content-center p-4">MEXICAN GREEN WAVE</h4>

                            </div>
                            <div className="col-md-4">
                                <img src={img9} alt="" className="rounded-circle " />
                                <h4 className="d-flex justify-content-center  p-4">DOUBLE CHEESE PIZZA</h4>

                            </div>
                            <div className="col-md-4">
                                <img src={img10} alt="" className="rounded-circle" />
                                <h4 className="d-flex justify-content-center p-4">MARGHERITA PIZZA</h4>

                            </div>




                        </div>


                    </div>
                    <div className="d-flex justify-content-center ">
                        <button type="button" class="s3button ">View More</button>
                    </div>
                    <div className="s3child">
                        <img src={img11} alt="" />

                    </div>

                </div>
            </section>
            <section>
                <div className="bg-dark section4-parent">
                    <div>
                        <p className="lobster-two-regular d-flex justify-content-center">
                            Fresh From Pizzon
                        </p>

                        <h1 className="anton-regular d-flex justify-content-center text-white">
                            OUR SPECIALITY
                        </h1>
                    </div>

                    <div className="row d-flex justify-content-center">

                        <ul className="nav nav-tabs bg-secondary section4 col-md-6 " id="myTab" role="tablist">

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active me-3 ms-4 text-dark"
                                    data-bs-toggle="tab"
                                    data-bs-target="#all"
                                    type="button"
                                >
                                    ALL
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link me-3 text-dark"
                                    data-bs-toggle="tab"
                                    data-bs-target="#drinks"
                                    type="button"
                                >
                                    DRINKS
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link me-3 text-dark"
                                    data-bs-toggle="tab"
                                    data-bs-target="#salads"
                                    type="button"
                                >
                                    SALADS
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link me-3 text-dark"
                                    data-bs-toggle="tab"
                                    data-bs-target="#pasta"
                                    type="button"
                                >
                                    PASTA
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link me-3 text-dark"
                                    data-bs-toggle="tab"
                                    data-bs-target="#burgers"
                                    type="button"
                                >
                                    BURGERS
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link me-3 text-dark"
                                    data-bs-toggle="tab"
                                    data-bs-target="#desserts"
                                    type="button"
                                >
                                    DESSERTS
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link me-3 text-dark"
                                    data-bs-toggle="tab"
                                    data-bs-target="#pizzas"
                                    type="button"
                                >
                                    PIZZAS
                                </button>
                            </li>

                        </ul>

                        {/* Tab Content */}

                        <div className="tab-content mt-3">

                            <div className="tab-pane fade show active" id="all">
                                <section>
                                    <div className="container">

                                    
                                    <div className="row">
                                        {all.map((product)=>{
                                            return(
                                                <>
                                                <div className="col-md-3 d-flex justify-content-center p-5">
                                                    <div>
                                                    <img src={product.image} alt="" height={200} width={200}/>
                                                    <h4 className="text-light">{product.name}</h4>
                                                    <p className="text-secondary">{product.description}</p>
                                                    <h5 className=" d-flex justify-content-center lobster-two-regular">{product.price}</h5>
                                                    </div>

                                                </div>

                                                </>
                                            )
                                        })}
                                        
                                    </div>
                                    </div>
                                </section>
                            </div>

                            <div className="tab-pane fade" id="drinks">
                                <section>
                                    <div className="container">

                                    
                                    <div className="row">
                                        {all.map((product)=>{
                                            return(
                                                <>
                                                <div className="col-md-3 d-flex justify-content-center p-5">
                                                    <div>
                                                    <img src={product.image} alt="" height={200} width={200}/>
                                                    <h4 className="text-light">{product.name}</h4>
                                                    </div>

                                                </div>

                                                </>
                                            )
                                        })}
                                        
                                    </div>
                                    </div>
                                </section>
                            </div>

                            <div className="tab-pane fade" id="salads">
                                <h3>Salads Items</h3>
                            </div>

                            <div className="tab-pane fade" id="pasta">
                                <h3>Pasta Items</h3>
                            </div>

                            <div className="tab-pane fade" id="burgers">
                                <h3>Burgers Items</h3>
                            </div>

                            <div className="tab-pane fade" id="desserts">
                                <h3>Desserts Items</h3>
                            </div>

                            <div className="tab-pane fade" id="pizzas">
                                <h3>Pizzas Items</h3>
                            </div>

                        </div>

                    </div>
                    <div className="section4-child">
                        <img src={img12} alt="" />
                    </div>
                    <div className="section4-child1">
                        <img src={img13} alt="" />

                    </div>
                </div>
            </section>
        </>
    )
}
export default Home