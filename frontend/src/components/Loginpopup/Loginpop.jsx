import React, { useState } from "react";
import "./Loginpop.css";
import { assets } from "../../assets/assets";

const Loginpop = ({ setshowlogin }) => {
  const [currstate, setcurrstate] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing , i agree to the terms of use & privacy policy</p>
        </div>
        {currstate === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setcurrstate("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setcurrstate("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpop;
