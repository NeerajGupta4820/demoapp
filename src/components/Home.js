import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {

    
  return (
    <>

    <div className='app'>
      <Header/>
      <div className='primaryhome'>
      <div className='home'>
        <h1>Ewaste management</h1>
        <h2>One step close to smart world</h2>
        <p>Electrical Waste Management & Recycling Solutions</p>
        <p>We help producers manage e-waste responsibly</p>
        </div>
        <section className="mainservices" id="service">
            <div className="container">
                        <div className="section-title">
                            <h1 className="main-title">Our Services</h1>
                            <h2 className="title">We are here to hear you and understand your requirements and provide the qulity works</h2>
                            <p>E-Waste is a global issue, and providing responsible e-waste management services contributes to resolving this global issue. We provide end-to-end e-waste management solutions, including environment-friendly disposal of electronic parts, recycling and refurbishing equipment to lengthen the life of electronic equipment. </p>
                        </div>
                    <div className='serv1-items1'>
                    <div className='item1'>
                        <h3 class="heading">Extended Producer Responsibility</h3>
                        <p>We help businesses meet their EPR goals by implementing an end-to-end model designed for as per the organizational requirements.</p>
				        <a class="button" href="" data-icon="I">READ MORE</a>
                        </div>
                    <div className='item1'>
                        <h3 class="heading">eWaste Procurement</h3>
                        <p>We act as a one stop solution for all the e-waste procurement and management through our network of R2 certified organizations.</p>
				        <a class="button" href="" data-icon="I">READ MORE</a>
                        </div>
                    <div className='item1'>
                        <h3 class="heading">Network of Procurement Centers</h3>
                        <p>Our Network of recyclers, logistic partners, collection centers, aggregators and informal sectors ensure organizational success.</p>
				        <a class="button" href="" data-icon="I">READ MORE</a>
                        </div>
                    </div>  
                    <div className='c'>

                    <div className='serv-items2'>
                    <div className='item2'>
                        <h3 class="heading">Reverse Logistics</h3>
                        <p>We have the expertise and its in-depth understanding  of the e-waste management process and the issues that might arise. </p>
				        <a class="button" href="" data-icon="I">READ MORE</a>
                        </div>
                    <div className='item2'>
                        <h3 class="heading">Awareness Programs</h3>
                        <p>We undertake awareness drives to help motivate people to act more responsibly regarding their e-waste management</p>
				        <a class="button" href="" data-icon="I">READ MORE</a>
                        </div>
                    <div className='item2'>
                        <h3 class="heading">E-waste Management</h3>
                        <p>We are in partnership with Naturevolt Recyclers India Pvt Ltd for e-waste management services/recycling.</p>
				        <a class="button" href="" data-icon="I">READ MORE</a>
                        </div>

                    </div>
                    </div>
            </div>
        </section>
        <div className='network'>
            <div className='new-title'>
                <h1>Product Life of Electronics</h1>
            </div>
            <div className='net-row'>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n1.jpg' alt='' classname='img-fluid'  />
                    <h4>Manufacture</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n2.jpg' alt='' classname='img-fluid'  />
                    <h4>Consumer</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n3.jpg' alt='' classname='img-fluid'  />
                    <h4>Retail</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n4.jpg' alt='' classname='img-fluid'   />
                    <h4>Disposal</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n5.jpg' alt='' classname='img-fluid'  />
                    <h4>Collection Center</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n6.jpg' alt=''  />
                    <h4>Recycled</h4>
                </div>
            </div>
            </div>
        </div>
        <div>
  <section id="page-header" className="about-header">
    <h2 className='about-heading'>#About Us</h2>
    <p>We help producers manage e-waste responsibly</p>
  </section>
  <section id="about-head" className="section-p1">
    <img src="images/a6.jpg" alt />
    <div className='about'>
      <h2>Who We Are?</h2>
      <br/>
      <h3> Remine eWaste Management Ltd. is one of the leading companies of India that recycle e-waste and Li Batteries </h3>
      <br/>
      <p>The biggest hazard to human life is the practice of throwing things away. Throwing away isn’t the solution. Things never go ‘away’ from you. They are still in existence – somewhere posing threat to other innocent lives. You either exterminate it forever or recycle it to save the planet. That’s exactly what WE do!
      If you care for the planet you live in, think of a way to dispose e-waste without causing harm to the environment – think of US.
      We recycle e-waste to give them a new lease of life and help them revolve back again in the economy.</p>
      <p>Remine India Private Limited is a Private incorporated on 06 December 2022. It is classified as Non-govt company and is registered at Registrar of Companies, Uttarakhand. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 1,000,000. It is inolved in Recycling of metal waste and scrap [from rejected aluminum, utensil, containers and other used metallic items etc. Collection of metal waste and scrap for and other used metallic items etc. Collection of metal waste and scrap for recycling is included in 51498.]
</p>
      <br /><br />
      <marquee bgcolor="#ffff00" loop={-1} scrollamount={8} width="100%">We are here to hear you and understand your requirements and provide the qulity works</marquee>
      <button type="button" className='about-btn'>Know More</button>
    </div>
  </section>
  <section id="about-app" className="section-p1">
    <h1>Small piece of<a href="#"> Work</a></h1>
    <div className="video">
      <video autoPlay muted loop src="images/1.mp4" />
    </div>
  </section>
</div>

      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Home
