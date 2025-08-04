import React from 'react'
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const ComputerDeptEvents = () => {
  return (
    <section className="tl-1-about pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Upcoming Events</h2>
                <div className="row">
                    <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
                        <div
                            data-spy="scroll"
                            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
                            data-target="#menu-navbar"
                            data-offset="0"
                        >
                        <div className="row align-items-center tl-1-about-row">

                        <div className="col-lg-12">
                                <div className="tl-event-details-left">
                                    <div className="tl-event-details-key-content tl-event-details-area">
                                        <h3 className="tl-event-details-area-title">One Day Workshop On Full Stack Development </h3>
                                        <p>The Computer Society of India (CSI) of CSE proposing to a one day workshop on” Full Stack Development”.on Date : 28 th March 2025.</p>
                   
                                        <h6 className="tl-8-feature-title mt-4 mb-4">Event Highlights : </h6>
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>One day workshop on Full Stack Development, delivered by Cross Country Healthcare, Pune
                                            delivered a rich learning experience for participants.</li>
                                            <li>Speaker: Mr. SagarSawant Sir, A seasoned expert in Full Stack Development. His practical demonstration and engaging explanation formed a Web Development and Angular for fundamental of Full Stack Development.</li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>

                          {/*  <div className="col-lg-12 mt-50">
                                <div className="tl-event-details-left">
                                    <div className="tl-event-details-key-content tl-event-details-area">
                                        <h3 className="tl-event-details-area-title">Arambh: The Entrepreneurial Odyssey Where Ideas Ignite</h3>
                                        <p>The Entrepreneurial Odyssey is a dynamic four-day national-level festival where startups from across India will pitch their business ideas to venture capitalists, aiming for investment opportunities. Scheduled from March 17th to March 20th, 2025, this festival will include a range of engaging and exploratory events held throughout the campus.</p>
                   
                                        <h6 className="tl-8-feature-title mt-4 mb-4">Events and Activities:</h6>
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>Startup Pitch: Showcase your innovative startup ideas.</li>
                                            <li>Investor Meet: Network with potential investors and venture capitalists.</li>
                                            <li>Innovation Showcase: Display groundbreaking projects and prototypes.</li>
                                            <li>Networking Sessions: Connect with industry leaders, peers, and mentors.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  */}

                            <div className="col-lg-12 mt-50">
                                <div className="tl-event-details-left">
                                    <div className="tl-event-details-key-content tl-event-details-area">
                                        <h3 className="tl-event-details-area-title">Technophilia 3.0</h3>
                                        <p>The Student Association of CSE (ACSES) proposing to organize a Two days' technical festival 'Technophilia' will organize on 3rd April, 2025 to 4th April 2025 under ACSES and CSI committee.<br/><br/>

Various events like Techno Hunt, Technical quiz, Tech Rubic's Cube, Think Along, Human Ludo, Technical Dare Dart, Code passing and Relay, LAN Gaming, Tech Antakshari, Algorithm Challenge, Debugging Challenge, VR Gaming Meta Quest, Treasure Hunt for Faculties etc. are organized at Technophilia. All the students can part in these events. 
</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
</section>
  )
}

export default ComputerDeptEvents