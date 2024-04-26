import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutUs() {
  const redirect = useNavigate();

  const navy = () => {
    redirect('/contact-us')
  }
  return (
    <>

      <div className='about-above-section'>
        <div className='ab-sect-con'>
          What we do
        </div>

      </div>

      {/* <div className='about-mid-section'>

      {/* <img src="images/"/> */

    /* </div> */}

      <div className='about-section'>

        <div className='about-section-head'>
          <div className='about-section-head-content'>
            We provide all type of home services for Electronic devices appliances like AC, Tv, Fridge, etc.
            We also provide all type of network services like wi-fi, TV fibers, etc and also solve all network or 
            internet issue problems regarding these services and we all do this at your place by getting there on your call.
            We also offer other domestic daily life service.
          </div>
          <div className='about-section-know-more'>
            <button onClick={navy}>Know more</button>
          </div>

        </div>

        {/* <div className='ab-mid-sect-con'>

        </div> */}

        {/* <div className='ab-mid-cont-cont'>
          <div className='ab-mid-sect-cont'>
            We provided all type of home services like electronic devices repairing such as TV AC Fridge, etc, internet connectivity issues, plumbling, carpentering,
            and all homes goods & appliances services.
          </div>
        </div> */}

        <div className='about-img'>
        </div>
      </div>

      <div className='footer-section-container'>

        <div class="footer-section">

          <div class="footer-section-right">
            <div class="right-footer-section-con">
              <div className='about-us-explore'>
                  About Us
              </div>
              <ul>
                <li><Link to='#'>Invester Relations</Link></li>
                <li><Link to='#'>Careers</Link></li>
                <li><Link to='#'>Productivity</Link></li>
                <li><Link to='#'>Legals</Link></li>
                <li><Link to='#'>Location</Link></li>
                <li><Link to='#'>Our Teams</Link></li>
              </ul>
            </div>
            <div class="right-footer-section-con-2">
              <ul>
                <li><Link to='#'>Overview</Link></li>
                <li><Link to='#'>Media contact</Link></li>
                <li><Link to='#'>Policy</Link></li>
                <li><Link to='#'>Complaints</Link></li>
                <li><Link to='#'>Ethics</Link></li>
                <li><Link to='#'>Know More</Link></li>
              </ul>
            </div>
          </div>

          <div class="footer-section-left">

            <span>Our team</span>

            <div class="footer-section-left-team">

              <div class="footer-section-left-team-1">
                <div class="footer-section-left-team-1-img"></div>
                <a href="#">John@gmail.com</a>
              </div>

              <div class="footer-section-left-team-2">
                <div class="footer-section-left-team-2-img"></div>
                <a href="#">Jimmy@gmail.com</a>
              </div>

              <div class="footer-section-left-team-3">
                <div class="footer-section-left-team-3-img"></div>
                <a href="#">Jack@gmail.com</a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  )
}
