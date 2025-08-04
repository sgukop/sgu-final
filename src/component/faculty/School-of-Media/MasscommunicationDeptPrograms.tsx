import React from 'react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MasscommunicationDeptPrograms = () => {
  return (
    <>
<section className="tl-8-about tl-3-section-spacing">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Programs</h2>
    <div className="row">
          <MenuList dept="Mass Communication" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-0 align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/mass-communication-dept/programs/program2.png" alt="About Mass Communications" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>
            <div className="col-xl-5 col-lg-7">
                <div className="tl-8-about-txt yellow-clr-hover">
                  
                    <h6 className="tl-8-feature-title">Program Overview</h6>
                    <div className="tl-8-features">
                        <div className="tl-8-feature">
                           <p className="tl-8-feature-descr">The Journalism and Mass Communication program at Sanjay Ghodawat University aims to provide a well-rounded education in media studies, preparing students for dynamic careers in journalism, media production, public relations, digital communication, and more. The program covers a wide range of topics including print journalism, broadcast media, digital media, advertising, public relations, and multimedia production. Through a combination of theoretical learning, practical training, and internship opportunities, students develop the skills necessary to excel in the fast-paced media industry.</p>
                        </div>

                        <div className="tl-8-feature">
                            <h6 className="tl-8-feature-title">Career Opportunities</h6>
                            <p className="tl-8-feature-descr">Graduates of Journalism and Mass Communication have a wide array of career paths available to them, spanning both traditional media roles and emerging digital opportunities. Here are some potential career options:</p>
                            <ul className="tl-event-details-key-content-list">
                                <li>Print Journalist</li>
                                <li>Broadcast Journalist</li>
                                <li>Digital Content Creator</li>
                                <li>Social Media Manager</li>
                                <li>Public Relations Specialist</li>
                                <li>Copywriter/Content Writer</li>
                                <li>Advertising Executive</li>
                                <li>Documentary Filmmaker</li>
                                <li>Media Analyst</li>
                                <li>Corporate Communication Specialist</li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</section>  
</>
  )
}

export default MasscommunicationDeptPrograms