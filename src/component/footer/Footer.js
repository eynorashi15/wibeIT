import React from 'react'
import FooterLogo from "../../assets/images/logo-2.png";


const Footer = () => {
    let url="";
  return (
    <>
      <footer>
            <div className="footer-section container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt=''/>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="footer-content">
                        <h6 className="footer-title">LINKS</h6>
                        <ul className="footer-nav-links">
                            <li><a href={url}>HOME</a></li>
                            <li><a href={url}>PRICING</a></li>
                            <li><a href={url}>ABOUT US</a></li>
                            <li><a href={url}>SERVICES</a></li>
                            <li><a href={url}>CONTACT</a></li>
                        </ul>
                        </div>
                    </div> 

                    <div className="col-lg-3">
                            <div className="footer-content">
                                <h6 className="footer-title">LINKS</h6>
                                <ul className="footer-nav-links">
                                    <li><a  href={url}>TERM AND CONDITION</a></li>
                                    <li><a  href={url}>PRICING</a></li>
                                    <li><a  href={url}>ABOUT US</a></li>
                                    <li><a  href={url}>SERVICES</a></li>
                                    <li><a href={url}>CONTACT</a></li>  
                                </ul>
                            </div>
                    </div> 

                    <div className="col-lg-3">
                        <div className="footer-content">
                                <h6 className="footer-title">LINKS</h6>
                                <ul className="footer-nav-links">
                                    <li><a href={url}>TERM AND CONDITION</a></li>
                                    <li><a href={url}>PRICING</a></li>
                                    <li><a href={url}>ABOUT US</a></li>
                                    <li><a href={url}>SERVICES</a></li>
                                    <li><a href={url}>CONTACT</a></li>  
                                </ul>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                        <div className="copy-right-text">
                            <p>Copyright © 2022 Solvency. Designed By <a href={url}>Devsdesign</a></p>
                        </div>
                </div>
            </div>
      </footer>
 </>
  )
}

export default Footer