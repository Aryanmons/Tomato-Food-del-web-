import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Place from "./pages/PlaceOrder/Place";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loginpop from "./components/Loginpopup/Loginpop";

const App = () => {
  const [showLogin,setshowlogin] = useState(false);
  return (
    <>
    {showLogin?<Loginpop setshowlogin={setshowlogin}/>:<></>}
      <div className="app">
        <Navbar setshowlogin={setshowlogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<Place />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
