import React from 'react'
import Image1 from '../../assets/images/1.png';
import Image2 from '../../assets/images/2.jpg';
import Image3 from '../../assets/images/2.png';
import '../../assets/globalStyle.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
     <>
      <section className="section" >
       <div className="about-section container">
          <div className="row align-items-center">
                <div className="col-lg-6 ">
                        <div className="about-us-image">
                            <img className="about-image1" src={Image1} alt="" />
                            <img className="about-image2" src={Image2} alt="" />
                            <img className="about-image3" src={Image3} alt=""/>
                        </div>
                </div> 
                <div className="col-lg-6 ">
                     <div className="about-us-content">
                        <span className="section-sub-title"># ABOUT COMPANY</span>
                        <h5 className="about-title">We Execute Our Ideas <br/>
                             The Start To Finish</h5>
                        <p>At our company, we offer a wide range of services, including custom software development, web development, mobile app development and IT consulting. We understand that every business has unique needs, and we work closely with our clients to deliver customized solutions that meet their specific requirements.</p>
                     </div>
                     <Link to="" className="about-btn">Read More</Link>
                </div>
          </div>
       </div>
   </section>
   </>
  )
}

export default About