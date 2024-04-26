import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            {/* <!-- home section start --> */}
            <section className="home-section">
                <div className="home-sec-up">
                    <div className="home-sec-head">We’re here for you</div>
                </div>
                <div className="home-sec-down">
                    <div className="home-sec-con">The services we are providing is not from our own enterprises.
                    It's belongs to many different people who are experts in their own profession.
                    They all are very dedicated to their work and freindly to their clients.
                    Once it's there, it will make your life easy.</div>
                </div>
            </section>

            <section className="mid-section">
                <div className="mid-sec-up">
                    <div className="hm-img"></div>
                </div>

                <div className="mid-sec-down">
                    <div className="mid-sec-down-con">Order A Service Now</div>
                    <div className="mid-sec-down-btn"><Link to="/service">Service</Link></div>
                </div>
            </section>
            {/* <!-- home section end --> */}

        </>
    )
}
