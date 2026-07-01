import React from "react";
function Reservation() {

    return (
        <>
            <section className="bg-dark reservation-section">
                <div className="text-light">
                    <h1>RESERVATION</h1>
                    <h3>Home / Reservation</h3>

                </div>
            </section>
            <section className="reservation-section1">
                <div className="container">
                    <p className="lobster-two-regular d-flex justify-content-center">Make Online Reservation</p>
                    <h1 className="anton-regular d-flex justify-content-center">BOOK A TABLE</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div className="my-4">
                                    <input type="time" placeholder="Enter a Time" className="form-control" />

                                </div>
                                <div className="my-4">
                                    <input type="date" placeholder="Pick a Date" className="form-control" />

                                </div>
                                <div className="my-4">
                                    <input type="text" placeholder="Name" className="form-control" />

                                </div>



                            </form>

                        </div>
                        <div className="col-md-6 ">
                            <select id="cars" placeholder="" name="cars" className="form-control my-4">
                                <option value="volvo">Number of People</option>
                                <option value="saab">1</option>
                                <option value="fiat">2</option>
                                <option value="audi">3</option>
                                <option value="audi">4</option>
                                <option value="audi">5</option>
                            </select>
                            <div className="my-4">
                                <input type="number" placeholder="Enter the Mobile Number" className="form-control "/>
                            </div>
                            <div>
                                <input type="email" placeholder="Enter the Email" className="form-control"/>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-center ">
                        <button type="button" class="s3button ">BOOK A TABLE</button>
                    </div>

                </div>
            </section>

        </>
    )
}
export default Reservation