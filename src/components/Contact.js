import React from 'react'
import Header from './Header'
import { FaAddressBook,FaUserTimes } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Footer from './Footer';

const Contact = () => {
  return (
    <>

    <div className='maincontact'>
      <Header/>
      <div className='primarycontact'>
  <section id="page-header" className="about-header">
    <h2>#let's_talk</h2>
    <p>Here you can leave your message,We love to hear you</p>
  </section>
  <section id="contact-details" className="section-p1">
    <div className="details">
      <span>Get in touch</span>
      <h2>visit one of our shop locations or contact us today</h2>
      <h3>Head office</h3>
      <div>
        <li>
          <p className="fa-solid">
          <FaAddressBook/>  kheri pul bypass road old Faridabad India</p>
        </li>
        <li>
          <p className="fa-solid">
          <HiMail/>   contact@example.com</p>
        </li>
        <li>
          <p className="fa-solid">
          <BsFillTelephoneFill/>  +01 2222 365/(+91) 01 2345 6789</p>
        </li>
        <li>
          <p className="fa-solid">
          <FaUserTimes/>  Monday to saturday: 9.00am to 5.00pm </p>
        </li>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9379769445077!2d77.32851231455467!3d28.42112830036934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdda7374edab7%3A0xd7167da5ad1eecb7!2sKheri%20Pul%20Bridge%2C%20Sector%2018%2C%20Old%20Faridabad%2C%20Faridabad%2C%20Haryana%20121002!5e0!3m2!1sen!2sin!4v1659782909377!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  </section>
  <section id="form-details">
    <form action>
      <span>LEAVE A MEASSAGE</span>
      <h2>We love to hear you</h2>
      <input className='input' type="text" placeholder="Your Good Name" />
      <input className='input' type="text" placeholder="E-mail" />
      <input className='input' type="text" placeholder="Subject " />
      <textarea className='input' name id cols={30} rows={10} placeholder="Your message" defaultValue={""} />
      <button className="normal">Submit</button>
    </form>
    <div className="people">
      <div className='people1'>
        <img src="images/1.jpeg" alt='img' />
        <p className='paragraph'><span>Neeraj Gupta</span>Senior marketing manager <br />Phone: +000 123 000 77 88 <br />E-mail: ngb4820@gmail.com</p>
      </div>
      <div className='people1'>
        <img src="images/1.jpeg" alt='img' />
        <p className='paragraph'><span>Vikram Kumar Jha</span>Senior marketing manager <br />Phone: +000 123 000 77 88 <br />E-mail: contact@example.com</p>
      </div>
      <div className='people1'>
        <img src="images/1.jpeg" alt='img' />
        <p className='paragraph'><span>Vipin</span>Senior marketing manager <br />Phone: +000 123 000 77 88 <br />E-mail:vipinkumar@gmail.com</p>
      </div>
    </div>
  </section>
</div>
    </div>
  <Footer/>
    </>
  )
}

export default Contact
