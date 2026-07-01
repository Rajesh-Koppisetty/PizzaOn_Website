import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Home1 from "./Home1";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Reservation from "./Reservation";
import AboutUs from "./AboutUs";

function App() {
  return (
    <BrowserRouter>



      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reservation" element={<><NavBar/><Reservation /> <Footer/></>} />
        <Route path="/aboutus" element={<><NavBar/><AboutUs /> <Footer/></>} />
        <Route path="/" element={
          <>
            <NavBar/>
            <Home/>
            <ContactUs/>
            <Home1/>
            <Footer/>
          </>
        } />

        
    
        
      </Routes>

        

    </BrowserRouter>
  );
}

export default App;