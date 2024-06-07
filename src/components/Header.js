import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";



const Header = () => {

  const [loginLogoutBtn,setLoginLogoutBtn] = useState("Logout")
  return (
    <div className="header section">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>
            <button className="loginBtn"
            onClick={()=>{
              loginLogoutBtn==="Logout" ? setLoginLogoutBtn("Login") : setLoginLogoutBtn("Logout")
            }}
            >
              {loginLogoutBtn}
            </button>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
