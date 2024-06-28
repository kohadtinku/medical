import React, { useEffect } from 'react'
import '../App.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Stats1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500});
  }, []);

  return (
<>

    <div className="card1 w-full">
        
      <div className="left" data-aos="fade-right">
          <h2>Get <span className="highlight">insights</span> that help your business grow.</h2>
          <p className="para">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
         
          <div className="stats1">
            <div><p className="number">10k+</p><p className="para stat-text">COMPANIES</p></div>
            <div><p className="number">314</p><p className="para stat-text">TEMPLATES</p></div>
            <div><p className="number">12M+</p><p className="para stat-text">QUERIES</p></div>
          </div>
      </div>
      
      <div className="right overlay" data-aos="zoom-in"></div>
    
    </div>

</>  )
}

export default Stats1