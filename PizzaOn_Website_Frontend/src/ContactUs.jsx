import React from "react";

function ContactUs(){
    return(
        <>
        <section>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 pt-5 pe-5 pb-5">
                        <p className="lobster-two-regular d-flex justify-content-center">Fresh From Pizzon</p>
                        <h1 className="anton-regular d-flex justify-content-center">BOOK ONLINE</h1>
                        <p className="px-5">
                            Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur
                        </p>
                        
                        <div className="contact-button d-flex justify-content-center">
                        <a href="" className="bg-dark text-light p-3 ">+91 1234567890</a>
                    </div>

                    </div>
                    
                    <div className="col-md-6 pt-5 pb-5">
                        <h1 className="anton-regular d-flex justify-content-center">BOOK A TABLE</h1>
                        <div>
                            <form>
                                <div>
                                    <input type="text" placeholder="Name" className="form-control mb-4"/>

                                </div>
                                <div>
                                    <input type="email" placeholder="Email" className="form-control mb-4"/>
                                    
                                </div>
                                <div>
                                    <input type="number" placeholder="How Many Persons" className="form-control mb-4"/>
                                    
                                </div>
                                <div>
                                    <input type="text" placeholder="Date" className="form-control mb-4"/>
                                    
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="button" class="btn btn-dark ">BOOK NOW</button>
                                </div>
                                
                                
                                
                                
                            </form>
                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default ContactUs