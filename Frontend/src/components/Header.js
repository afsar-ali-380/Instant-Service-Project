import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const redirect = useNavigate();

    // const adminName = sessionStorage.getItem('adminName');
    const adminEmail = sessionStorage.getItem('adminEmail');
    const adminPic = sessionStorage.getItem('adminPic');
    const adminToken = sessionStorage.getItem('adminToken');

    const userToken = sessionStorage.getItem('userToken');
    const userEmail = sessionStorage.getItem('userEmail');

    const logOut = () => {
        sessionStorage.clear();
        redirect('/');
    }

  return (
    <>
    <header className="header">
        <div className="above-header">
            <div className="above-header-left">
                <ul>
                    <li><Link to="/">Inance</Link></li>
                    <li><Link to="#">Work</Link></li>
                    <li><Link to="#">Blogs</Link></li>
                    <li><Link to="#">careers</Link></li>
                    <li><Link to="#">Our company</Link></li>
                </ul>
            </div>
            {
                adminToken ? <div className="above-header-right special-class"><Link to="#">admin : {adminEmail}</Link><img src={`http://localhost:4000/${adminPic}`} className='special-img-class' alt='admin.png'/> 
                <button className="above-header-right-logout" type='button' onClick={logOut}>logOut</button></div>
                        : <div className="above-header-right"><Link to="/admin-login">Admin</Link></div>
            }
            {/* <div className="above-header-right"><Link to="/admin/login">Admin</Link></div> */}
        </div>
        <div className="below-header">
            <div className="below-header-left"><span>Inance</span></div>
            <div className="below-header-center">
                {
                    userToken ?  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="#">{userEmail}</Link></li>
                    <li><button className='sign-out-btn' onClick={logOut}>sign-out</button></li>
                </ul> :  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/sign-in">Sign-in</Link></li>
                </ul>
                }
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/signin">Sign-in</Link></li>
                </ul> */}
            </div>
            <div className="below-header-right"><Link to="#">Stores</Link></div>
        </div>
    </header>

    </>
  )
}
