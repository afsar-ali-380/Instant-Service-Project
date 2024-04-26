import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
    <>

    <div className='sr-head'>
      <div className='sr-head-con'>
        First service <span className='sr-head-con-F'>F</span><span className='sr-head-con-R'>R</span>
        <span className='sr-head-con-E'>E</span><span className='sr-head-con-e'>E</span>
      </div>
    </div>

    <div className='sr-mid-sect'>
      
        <div className='sr-mid-sect-box'>
            <div className='sr-mid-sect-box-1-img'>
                {/* If we write in this block then opacity will also apply to content of in it*/}
            </div>

            <div className='sr-mid-sect-box-1-cont'>
                <Link to='/service-form'>Motor & Carpentry</Link>
            </div>
      </div>
      
      <div className='sr-mid-sect-box'>
            <div className='sr-mid-sect-box-2-img'>
                  {/* If we write in this block then opacity will also apply to content of in it*/}
            </div>

            <div className='sr-mid-sect-box-2-cont'>
                <Link to="/service-form">Electronic Devices</Link>
            </div>
      </div>
      
      <div className='sr-mid-sect-box'>
            <div className='sr-mid-sect-box-3-img'>
                {/* If we write in this block then opacity will also apply to content of in it*/}
            </div>

            <div className='sr-mid-sect-box-3-cont'>
                <Link to='/service-form'>Plumbing</Link>
            </div>
      </div>

    </div>
    
    </>
  )
}
