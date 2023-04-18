import React from 'react'
import '../../assets/globalStyle.css';

const Services = () => {
   let url="";
  return (
   <>
  
     <section className="section services-bg">
       <div className="services-section container">
           <div className="text-center">
              <div className="heading-section">
                 <span className="section-sub-title"># Our Services</span>
                 <p>"Service is not just about what we do, it's about who we are. We strive to provide exceptional services to our clients, not just as a job, but as a reflection of our commitment to their success."</p>
              </div>
           </div>
           <div className="services-row">
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="single-services-box box-1">
                         <div className="icon">
                            <span className="material-symbols-outlined">campaign</span>
                            <div className="circle-box">
                                <div className="circle-1"></div>
                                <div className="circle-2"></div>
                            </div>
                         </div>
                         <h3 className="services-heading"><a href={url}>Web Design</a></h3>
                         <p>Web design is the process of creating and designing websites that are visually appealing, user-friendly, and effective in achieving their goals.</p>
                         <a href={url} className="single-service-btn">Read More</a>
                      </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-services-box box-2">
                       <div className="icon">
                          <span className="material-symbols-outlined">campaign</span>
                          <div className="circle-box">
                              <div className="circle-1"></div>
                              <div className="circle-2"></div>
                          </div>
                       </div>
                       <h3 className="services-heading"><a href={url}> Web Development</a></h3>
                       <p>Web development is the process of creating and maintaining websites.  It involves a variety of skills and disciplines including graphic design, user interface design, programming, and project management.</p>
                       <a href={url} className="single-service-btn">Read More</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-services-box box-3">
                       <div className="icon">
                          <span className="material-symbols-outlined">campaign</span>
                          <div className="circle-box">
                              <div className="circle-1"></div>
                              <div className="circle-2"></div>
                          </div>
                       </div>
                       <h3 className="services-heading"><a href={url}>ECommerce Website</a></h3>
                       <p>we offering you comprehensive range of WooCommerce development services, which can help eCommerce and service-providing businesses create robust, scalable, feature-rich, and functional websites</p>
                       <a href={url} className="single-service-btn">Read More</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-services-box box-3">
                       <div className="icon">
                          <span className="material-symbols-outlined">campaign</span>
                          <div className="circle-box">
                              <div className="circle-1"></div>
                              <div className="circle-2"></div>
                          </div>
                       </div>
                       <h3 className="services-heading"><a href={url}>Big Data And Analytics</a></h3>
                       <p>Big data and analytics refer to the process of collecting, processing, and analyzing large and complex sets of data to uncover patterns, insights, and trends.</p>
                       <a href={url} className="single-service-btn">Read More</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-services-box box-2">
                       <div className="icon">
                          <span className="material-symbols-outlined">campaign</span>
                          <div className="circle-box">
                              <div className="circle-1"></div>
                              <div className="circle-2"></div>
                          </div>
                       </div>
                       <h3 className="services-heading"><a href={url}>CMS Based Website Design</a></h3>
                       <p>A CMS-based website allows website owners to easily add, edit, and remove content from their website without having to know how to code. </p>
                       <a href={url} className="single-service-btn">Read More</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-services-box box-1">
                       <div className="icon">
                          <span className="material-symbols-outlined">campaign</span>
                          <div className="circle-box">
                              <div className="circle-1"></div>
                              <div className="circle-2"></div>
                          </div>
                       </div>
                       <h3 className="services-heading"><a href={url}>Product Design And Development</a></h3>
                       <p>Product design and development is the process of creating a new product or improving an existing one.</p>
                       <a href={url} className="single-service-btn">Read More</a>
                    </div>
                </div>
              </div>
           </div>
       </div>
   </section>
   </>
  )
}

export default Services