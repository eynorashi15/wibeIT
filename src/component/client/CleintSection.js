import React from 'react';
import cleintImg from "../../assets/images/partner-4.png"

const CleintSection = () => {
  return (
      <>
         <section  className="section client-section">
        <div  className="client-logo container">
                <div  className="cleint-row">
                    <div  className="cleint-cover">
                        <div  className="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div  className="cleint-cover">
                        <div  className="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div  className="cleint-cover">
                        <div  className="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div  className="cleint-cover">
                        <div  className="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div  className="cleint-cover">
                        <div  className="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                </div>
        </div>
   </section>
       
      </>
  )
}

export default CleintSection