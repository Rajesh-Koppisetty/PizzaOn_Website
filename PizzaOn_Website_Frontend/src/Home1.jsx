import React, { useEffect, useState } from "react";


import img1 from "./assets/blackhalf1.png";
import img2 from "./assets/blackimg2.png";
import img3 from "./assets/section7.png";



function Home1() {
    const [all, setAll] = useState([])
    const [section6, setSection6] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/section5")
            .then(res => res.json())
            .then(data => setAll(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/section6")
            .then(res => res.json())
            .then(data => setSection6(data))
    }, [])
    return (
        <>
            <section className="bg-dark section5-parent">
                <div>
                    <p className="lobster-two-regular d-flex justify-content-center">Meet our experts</p>
                    <h1 className="anton-regular d-flex justify-content-center text-light">OUR BEST CHEF</h1>
                </div>
                <div className="container p-5">
                    <div className="row ">
                        {all.map((product) => {
                            return (
                                <>
                                    <div className="col-md-3  ">
                                        <div className="card">
                                            <img src={product.image} alt="" />
                                            <div className="py-2">
                                                <h4 className="d-flex justify-content-center">{product.name}</h4>
                                                <p className="d-flex justify-content-center">{product.subname}</p>
                                            </div>

                                        </div>


                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>
                <div className="section5-child">
                    <img src={img1} alt="" />
                </div>
                <div className="section5-child1">
                    <img src={img2} alt="" />
                </div>
            </section>

            <section className=" ">
                <div>
                    <p className="lobster-two-regular d-flex justify-content-center">Recent Events</p>
                    <h1 className="anton-regular d-flex justify-content-center ">LATEST NEWS</h1>
                </div>
                <div className="container p-5">
                    <div className="row ">
                        {section6.map((product) => {
                            return (
                                <>
                                    <div className="col-md-4  ">
                                        <div className="">
                                            <img src={product.image} alt="" />
                                            <div className="py-2">
                                                <p className="">{product.name}</p>
                                                <h6 className="d-flex justify-content-center">{product.subname}</h6>
                                                <a href="" className="text-warning">Read More</a>
                                            </div>

                                        </div>


                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>

            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <p className="lobster-two-regular ps-5">Delicious Restaurant</p>
                                <h1 className="anton-regular ps-5">ABOUT PIZZON</h1>
                                <p className="px-5">Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur</p>
                                <div className="ps-5">
                                    <button type="button" class="btn btn-warning s3button ">VIEW MORE</button>

                                </div>
                                
                            </div>

                        </div>
                        <div className="col-md-6 p-5">
                            <img src={img3} alt="" />

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}
export default Home1