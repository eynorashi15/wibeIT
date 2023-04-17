import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/globalStyle.css";
import Logomain from "../../assets/images/logo-2.png";

function NavBar() {
  const [click, setClick] = useState(false);
  let url="" ;
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={Logomain} alt="" />
          </NavLink>
          <div className="nav-menu-wrapper">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/services" activeClassName="active" className="nav-links" onClick={handleClick}>
                    Services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink exact to="/portfolio" activeClassName="active" className="nav-links" onClick={handleClick}>
                    Case Study
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="quote-btn">           
                <a href={url}>Get A Quote</a>       
              </div> 
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;