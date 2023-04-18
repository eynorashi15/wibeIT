import React from 'react'
import PtImg from '../../assets/images/portfolioImg.jpg';


const PortfolioListing = () => {
  let url="";
  return (
    <>
       <section className="banner">
        <div className="image-pic"></div>
        <div className="image-shape" ></div>
         <div className="inner-banner">
            <div className="container">
                <div className="row">
                    <div className="banner-heading">
                        <h1>Portfolio</h1>         
                    </div>
                </div>
             </div>
         </div>
    </section>

    <section className="section">
      <div className="portfolio-section container">
           <div className="text-center">
                <div className="heading-section">
                <span className="section-sub-title"># Our Portfolio</span>
                <p>"Collaboration and diversity are key ingredients to creating innovative solutions. At our company, we believe in the power of bringing together talented individuals from diverse backgrounds, and learning from one another to deliver the best results for our clients."</p>
                </div>
           </div>

            <div className="portfolio-row">
                <div className="row">
                    <div className="portfolio-box col-lg-4">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href={url}>Social Media App</a></h4>
                                    </div>
                                    <a href={url} className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box col-lg-4">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href={url}>Social Media App</a></h4>
                                    </div>
                                    <a href={url} className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box col-lg-4">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src= {PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href={url}>Social Media App</a></h4>
                                    </div>
                                    <a href={url} className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="portfolio-box col-lg-6">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href={url}>Social Media App</a></h4>
                                    </div>
                                    <a href={url} className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-box col-lg-6">
                        <div className="portfolio-inner-box">
                            <div className="portfolio-image">
                                <img src={PtImg} alt="" />
                                <div className="portfolio-overlay">
                                    <div className="content">
                                        <h4><a href={url}>Social Media App</a></h4>
                                    </div>
                                    <a href={url} className="arrow-btn">
                                        <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="portfolio-btn text-center">
                <a href={url}>Learn More</a>
            </div> */}
      </div>
   </section>
    
    </>
  )
}

export default PortfolioListing