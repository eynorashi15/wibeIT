import React from 'react'

const Footer = () => {
    let url="";
  return (
    <>
      <footer>
            <div className="footer-section container">
                <div className="row">
                    {/* <div className="col-lg-3">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt=''/>
                        </div>
                    </div> */}

                    <div className="col-lg-4">
                        <div className="footer-content">
                        <h6 className="footer-title">COMPANY</h6>
                        <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                        </div>
                    </div> 

                    <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="footer-title">USEFUL LINKS</h6>
                                <ul className="footer-nav-links">
                                    <li><a  href={url}>HOME</a></li>
                                    <li><a  href={url}>ABOUT</a></li>
                                    <li><a  href={url}>SERVICES</a></li>
                                    <li><a  href={url}>PORTFOLIO</a></li>
                                    <li><a href={url}>CONTACT</a></li>  
                                </ul>
                            </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="footer-content">
                                <h6 className="footer-title">GET IN TOUCH</h6>
                                <p className='footer-para'>Address:<br />
                                301-A The Mark Building, Above Domino’s.
                                Saket square, Old Palasia,
                                Indore (M.P.) India.
                                </p>
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