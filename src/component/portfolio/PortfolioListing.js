import React from 'react'
import Portfolio from './Portfolio'


const PortfolioListing = () => {
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

    <Portfolio />
    
    </>
  )
}

export default PortfolioListing