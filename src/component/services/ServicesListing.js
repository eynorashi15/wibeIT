import React from 'react'
import Services from './Services';


const ServicesListing = () => {
  return (
    <>
        <section className="banner">
        <div className="image-pic"></div>
        <div className="image-shape" ></div>
         <div className="inner-banner">
            <div className="container">
                <div className="row">
                    <div className="banner-heading">
                        <h1>Services</h1>         
                    </div>
                </div>
             </div>
         </div>
    </section>

   <Services />

     
    </>
  )
}

export default ServicesListing