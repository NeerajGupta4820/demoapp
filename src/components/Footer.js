import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="section-p1">
  <div className="col">
    <img className="logofooter" src="img/logo.png" alt='img' />
    <h4>contact</h4>
    <p>Ghedi pul Bypass Road Faridabad Haryana</p>
    <p><strong>Phone:</strong>+01 2222 365/(+91) 01 2345 6789</p>
    <p><strong>Hours:</strong>10:00-18:00,Mon-Sat</p>
    <div className="follow">
      <h4>Follow Us</h4>
      <div className="icon">
        <a href='' target='_neeraj'><FaFacebook/></a>              
        <a ><FaTwitter/></a>              
        <a ><FaInstagram/></a>              
        <a ><FaPinterest/></a>              
        <a ><FaYoutube/></a>              
      </div>
    </div>
  </div>
  <div className="col">
    <h4>About</h4>
    <Link to='/about' >About</Link>
    <Link to='/about' >Delivery Information</Link>
    <Link to='/policy' >Privacy Policy</Link>
    <Link to='/policy' >Terms &amp; condition</Link>
    <Link to='/contact' >Contact us</Link>
  </div>
  <div className="col">
    <h4>My Account</h4>
    <Link to='/login' >Sign In</Link>
    <Link to='/contact' >View cart</Link>
    <Link to='/contact' >My wishlist</Link>
    <Link to='/contact' >Track my order</Link>
    <Link to='/contact' >Help</Link>
  </div>
  <div className="col" id="install">
    <h4>Install app</h4>
    <p>From App Stroe or google Play</p>
    <div className="row">
    </div>
    <p>secured payment Getways</p>
  </div>
  <div className="copyright">
    <p>@ 2021, Tech2 etc-HTML CSS Ecommerce Template</p>
  </div>
</footer>

    </>
  )
}

export default Footer
