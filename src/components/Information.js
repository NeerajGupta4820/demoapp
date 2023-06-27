import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Information = () => {
  return (
    <>   
    <div className='maininfo'>
      <Header />
      <div className='primaryinfo'>
          <h1 className='mainheading'></h1>
      <section className="info" id="service">
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
      </div>
    </div>
      <Footer />
      </>
  )
}

export default Information
