import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <>

      <div className='contact-section'>
          <div className='inside-content'>
              <div className='cont-1'>
                  We would love to here you...
              </div>

              <div className='cont-2'>
                  Your feedbacks or suggestions could help to find a solutions to a lots of problem
              </div>  
          </div>

          <div className='down-section'>
              <div className='down-secion-cont'>
                 <div className='dw-sect-cont-1'>
                      We always appreciate your feedback which help us in many ways. Thank you
                  </div>

                  <div className='dw-sect-cont-2'>
                      <Link to='#' className='dw-cont-2'>see what we do</Link>
                  </div>
              </div>
          </div>
      </div>

      <div className='cont-form-section-above'>

        <div className='contact-us-div'>
          <div className='contact-us'>
            Contact Us
          </div>
        </div>

        <div className='find-us-div'>
          <div className='find-us'>
            Find Us
          </div>
        </div>
        
      </div>
      
      <div className='cont-form-section'>

        <div className='cont-form-sect'>

          <div>
            <form>

              <input type='text' placeholder='Your name' className='cont-form-inp'/>

              <input type='email' placeholder='Email address' className='cont-form-inp'/>

              <textarea placeholder='Feedback' className='cont-form-inp'></textarea>
            </form>


          </div>
          
        </div>

        <div className='cont-map-sect'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.36078938647!2d76.82493745405829!3d28.422858324345377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1711044868302!5m2!1sen!2sin"
         width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>


      </div>


    </>
  )
}
