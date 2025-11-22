'use client'
import Link from 'next/link';
import React from 'react';
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import PSOs from "./management-ug-PEO/PSOs";
import PEOs from "./management-ug-PEO/PEOs";
import POs from "./management-ug-PEO/POs";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import PSO from "./managment-pg-PEO/PSO";
import PEO from "./managment-pg-PEO/PEO";
import PO from "./managment-pg-PEO/PO";

const ManagementDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Department of Management</h2>
        <div className="row">
          <MenuList dept="School of Management" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

          <div className="row g-4">
              <div className="col-lg-5">
                <div className="tl-14-about-img">
                  <img
                    src="/assets/images/faculty-profile-photos/management/Dr. S. Gomathi1.jpeg"
                    alt="Dean Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div>
                  <h2 className="tl-14-section-title text-[#4f70b6] lg:mt-10 sm:mt-0">Dean Desk</h2>
                  <p className="dark-mode-white-color" style={{textAlign:"justify"}}>
                   Dr. S. Gomathi, Dean of the Faculty of Commerce and Management, is a visionary academic leader with more than three decades of experience in higher education, research, and academic administration. She is recognized for her dynamic leadership, scholarly contributions, and commitment to shaping the next generation of management professionals.<br/><br/>

                  Dr. Gomathi holds a Ph.D. in Human Resource Management from Alagappa University, which she completed at the age of 26. Her distinguished academic career includes serving as Director and Professor at the School of Management, CMR University, Bengaluru, and as Senior Professor and Head of the Department at VIT Business School, VIT University, for 29 years. <br/><br/>  
                  A prolific scholar, Dr. Gomathi has authored eight books and published over 56 research papers in reputed national and international journals and conferences. Her areas of expertise include Organizational Behavior, Human Resource Management, Emotional Intelligence, Stress Management, Balanced Scorecard, and Talent Management. She has guided 13 doctoral scholars and mentored over 500 postgraduate projects, contributing significantly to research and professional development in management education.<br/><br/>
                  In addition to her academic achievements, Dr. Gomathi has served as a consultant, trainer, and resource person for leading institutions and corporations such as ITCOT, TIIC, LIC, and the Institution of Engineers. Her training and consultancy engagements have strengthened organizational capabilities and leadership effectiveness.<br/><br/> 
                  At Sanjay Ghodawat University, Dr. Gomathi’s vision is to cultivate a culture of innovation, entrepreneurship, and holistic learning, integrating values with technology-driven education. She strives to empower students to become competent, ethical, and globally responsible leaders who can adapt to the evolving business landscape.<br/><br/> 
                  Her unwavering dedication to academic excellence, research, and student success continues to inspire and elevate the Faculty of Commerce and Management.<br/><br/>

                  </p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Dr. S. Gomathi <br/>
                    Dean, <br/>
                    Faculty of Commerce and Management

                  </span>
                </div>
              </div>
            </div>

                      <div className="row g-4">
              <div className="col-lg-5">
                <div className="tl-14-about-img">
                  <img
                    src="assets/images/management-dept/about-department/hod-photo.png"
                    alt="HOD Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div>
                  <h2 className="tl-14-section-title text-[#4f70b6] lg:mt-10 sm:mt-0">HOD's Desk</h2>
                  <p className="dark-mode-white-color" style={{textAlign:"justify"}}>
                  Welcome to  the Department of Management, where we're dedicated to shaping future leaders equipped for the dynamic world of business. Our commitment to 360-degree development in knowledge, skills, and aptitude is reflected in our robust UG and PG programs. We are particularly proud of our strategic collaborations with industry giants like the National Stock Exchange and L&T EduTech, providing our students with invaluable real-world exposure and practical insights. Furthermore, we encourage students to opt for value added courses with the NPTEL platform ensures access to a wide array of value-added courses, enhancing your learning journey beyond the traditional curriculum. <br/><br/>

                  Our focus extends beyond academic excellence. We believe in nurturing well-rounded individuals through a diverse range of extracurricular activities designed to cultivate critical thinking, leadership, and entrepreneurial spirit. We strive to create an environment where students not only gain theoretical knowledge but also develop the essential soft skills and practical abilities needed to thrive in today's competitive landscape. I encourage each of you to actively participate in our department's initiatives, leverage our industry connections, and embrace the opportunities for personal and professional growth that lie ahead." 


                  </p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Dr. Vilas Balgaonkar <br/>
                    Head, Department of Management.

                  </span>
                </div>
              </div>
            </div>


            <div className="row tl-event-details-row g-0 mt-50">
              <div className="col-lg-12">
                <div className="tl-event-details-left">
                 <h3 className="tl-event-details-area-title text-[#4f70b6]">About Department</h3>
                  <div className="tl-event-details-key-content tl-event-details-area">
                   
                   
                    <p className="dark-mode-white-color">
                    The Department of Management, under the esteemed School of Commerce and Management at Sanjay Ghodawat University (SGU), Kolhapur, stands as a beacon of excellence in business education. With a commitment to nurturing future leaders and innovators, the department offers a comprehensive suite of academic programs, including Bachelor of Business Administration (BBA), Master of Business Administration (MBA), and Doctor of Philosophy (PhD) in Management. <br/><br/> These programs are designed to equip students with robust theoretical knowledge, practical skills, and a global perspective, preparing them for dynamic careers in the business world.
                    </p>
                </div>
                </div>
              </div>
              
            </div>  

         {/*   <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/management-dept/about-department/hod-photo.png" alt="About Department Image" className="rounded-full"
                          style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-14-about-txt">
                        <h3 className="tl-event-details-area-title">About Us</h3>
                        <p className="dark-mode-white-color">The Department of Management, under the esteemed School of Commerce and Management at Sanjay Ghodawat University (SGU), Kolhapur, stands as a beacon of excellence in business education. With a commitment to nurturing future leaders and innovators, the department offers a comprehensive suite of academic programs, including Bachelor of Business Administration (BBA), Master of Business Administration (MBA), and Doctor of Philosophy (PhD) in Management. <br/><br/> These programs are designed to equip students with robust theoretical knowledge, practical skills, and a global perspective, preparing them for dynamic careers in the business world.</p>
                   </div>
            </div>
        </div>  */}

       <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be among globally acclaimed B-schools by developing transformational leaders through competencies, conviction and value creation for sustainable development.</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                    <li>To become a dynamic and responsive business school which strives for sustainable growth</li>
                        <li>To bridge the gap between corporate expectations and academic delivery to prepare future ready management professionals.</li>  
                        <li>Contribute to management knowledge through research for societal concern.</li>
                        <li>To make a difference in society through transformational education, innovation, value creation, knowledge creation and enhancing employability.</li>     
                    </ul>
                </div>
            </div>
        </div>

        <div className="row outer-style mt-50 outer-style">
             <h3 className="tl-event-details-area-title">Undergraduate (UG) Program</h3>
              <div
                data-spy="scroll"
                className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12"
                data-target="#menu-navbar"
                data-offset="0"
              >
                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                      <Nav.Link eventKey="overview-tab">
                          Program Educational Objectives (PEOs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="curriculum-tab">
                          Program Outcomes (POs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="instructor-tab">
                          Program Specific Outcomes (PSOs)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                    <Tab.Pane eventKey="overview-tab">
                      <PEOs />
                    </Tab.Pane>

                    <Tab.Pane eventKey="curriculum-tab">
                      <POs />
                    </Tab.Pane>

                    <Tab.Pane eventKey="instructor-tab">
                      <PSOs />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
        </div>

        <div className="row outer-style mt-50 outer-style">
            <h3 className="tl-event-details-area-title">Postgraduate (PG) Program</h3>
              <div
                data-spy="scroll"
                className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12"
                data-target="#menu-navbar"
                data-offset="0"
              >
                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                      <Nav.Link eventKey="overview-tab">
                          Program Educational Objectives (PEOs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="curriculum-tab">
                          Program Outcomes (POs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="instructor-tab">
                          Program Specific Outcomes (PSOs)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                    <Tab.Pane eventKey="overview-tab">
                      <PEO />
                    </Tab.Pane>

                    <Tab.Pane eventKey="curriculum-tab">
                      <PO />
                    </Tab.Pane>

                    <Tab.Pane eventKey="instructor-tab">
                      <PSO />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </div>
        </div>
    </div>
</div>
</section>
    )
}

export default ManagementDeptAbout
