import React from 'react'
import "../../assets/globalStyle.css";
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';



const Header = () => {

  return (
         <>
            <section>
                <div className="topbar">
                    <div className="container">
                        <div className="row topbar-row">
                            <div className="topbar-left ">
                                <div className="d-flex mr-1 ml-1 text-left">
                                    <span className="material-symbols-outlined">mail</span>
                                    <span>http://Info@example.com</span>
                                </div>
                                <div className="d-flex mr-1 ml-1 align-items-center justify-content-center">
                                    <span className="material-symbols-outlined">call</span> 
                                    <span>786-875-864-75</span>
                                </div>
                            </div>
                            <div className="topbar-right">
                                <div className="d-flex justify-content-center align-items-center topbar-social-media">
                                    <Link to="/#" className="fa-brands fa-instagram"></Link>
                                    <Link to="/#" className="fa-brands fa-facebook-f"></Link>
                                    <Link to="/#"className="fa-brands fa-skype"></Link>
                                    <Link to="/#" className="fa-brands fa-twitter"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            <Navbar />
         </>

  )
}

export default Header