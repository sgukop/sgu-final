'use client'
import React from 'react';
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import NavLinks from './Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import PEOs from './Bsc-PEO/PEOs';
import POs from './Bsc-PEO/POs';
import PSOs from './Bsc-PEO/PSOs';
import MscPEOs from './Msc-PEO/MscPEOs';
import MscPOs from './Msc-PEO/MscPOs';
import MscPSOs from './Msc-PEO/MscPSOs';

const AlliedHealthDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About the School of Allied Health Sciences</h2>
        <div className="row">
          <MenuList dept="Allied Health Sciences" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row g-6 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-14-about-img">
                        <img src="assets/images/allied-health-sciences/FST/about-dept/about-image1.png" alt="About Department Image" className="rounded-full"
                            style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div>
                        <h2 className="tl-14-section-title">About Us</h2>
                        <p className="dark-mode-white-color">	
                        The global challenges in the health sciences have increased the demand of trained professionals many fold despite the technological developments. Keeping this scenario in mind, the Sanjay Ghodawat University established the School of Allied Health Sciences in the year 2022 with the beginning of two undergraduate academic programs in Food Science & Technology, Medical Laboratory Technology . SGU offers full time B. Sc. program in Food Science & Technology and Medical Laboratory technology. These courses provide implementation of value-based knowledge and information to inculcate creativity amongst students for their bright career and future perspective.<br/><br/>
                        The programs of Food Science and Technology are designed in such a way that provides excellent academic standards with the industry-based curriculum to meet expectations of emerging needs around the world. The university provides exposure to the industrial environment through industrial visits, industry-academia interactions an organizing industry expert sessions. The skill development program with hands on training and industrial  visit during academic program enhance student personality and knowledge to increase many fold the placement and job opportunities.
                    </p>
                    </div>
                </div>
            </div>

         {/*   <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">About Department</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                           <p className="dark-mode-white-color">The global challenges in the health sciences have increased the demand of trained professionals many fold despite the technological developments. Keeping this scenario in mind, the Sanjay Ghodawat University established the School of Allied Health Sciences in the year 2022 with the beginning of two undergraduate academic programs in Food Science & Technology, Medical Laboratory Technology . SGU offers full time B. Sc. program in Food Science & Technology and Medical Laboratory technology. These courses provide implementation of value-based knowledge and information to inculcate creativity amongst students for their bright career and future perspective.<br/><br/>
                            The programs of Food Science and Technology are designed in such a way that provides excellent academic standards with the industry-based curriculum to meet expectations of emerging needs around the world. The university provides exposure to the industrial environment through industrial visits, industry-academia interactions an organizing industry expert sessions. The skill development program with hands on training and industrial  visit during academic program enhance student personality and knowledge to increase many fold the placement and job opportunities.
                        </p>
                        
                         <Table bordered responsive className="governing-table mt-30">
                        <thead>
                            <tr>
                                <th><p className="text-[#4f70b6]">Programs</p></th>
                                <th><p className="text-[#4f70b6]">Duration</p></th>
                                <th><p className="text-[#4f70b6]">Eligibility</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>B.Sc. Food Science & technology</p></td>
                                <td><p>Three Years</p></td>
                                <td><p>10+2 with Science</p></td>
                            </tr>
                        </tbody>
                    </Table>
                           
                      </div>
                  </div>
                </div>
               
            </div>  */}

            <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be a leading centre of excellence in Food Science and Technology, committed to providing quality education, driving innovation and promoting sustainable development within the food industry.</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <h6 className="vision-info">To empower students with quality education, equipping them for meaningful careers in the food industry. We strive to drive innovation in food safety, processing, and technology while promoting sustainable practices for a better future. And to build strong industry partnerships to offer students practical exposure and valuable knowledge exchange.</h6>
                    </div>
                </div>
           </div>

           <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">B.Sc. in Food Science and Technology</h3>
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

          <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">M.Sc. in Food Science and Technology</h3>
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
                      <MscPEOs/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="curriculum-tab">
                      <MscPOs/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="instructor-tab">
                      <MscPSOs/>
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

export default AlliedHealthDeptAbout
