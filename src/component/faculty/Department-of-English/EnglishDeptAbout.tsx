'use client'
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import PSO from './PEO-PO-PSO/PSO';
import PEOs from './PEO-PO-PSO/PEOs';
import POs from './PEO-PO-PSO/POs';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const EnglishDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department of English</h2>
        <div className="row">
          <MenuList dept="English" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/english-dept/about-department/about-us.png" alt="About Department Image" className="rounded-full"
                         style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                        <h2 className="tl-14-section-title">About Us</h2>
                        <p className="dark-mode-white-color">	
                        The English Department, at the Sanjay Ghodawat University strives to produce versatile and imaginative students with the strong interpretive and communication skills needed for today's competitive world. Our department aims at giving right direction and approach to the students in their carrier. The study of literature opens new avenues for the students. <br/><br/>
                        Apart from imparting academic knowledge the department is committed to make the students, responsible citizens of tomorrow who will contribute in the growth of the country. The Department has highly qualified and experienced faculty members who strive to develop literature and linguistic competency of the students.</p>
                    </div>
                </div>
            </div>

           <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To envision the department as a center of excellence in creating and disseminating knowledge in Language and Literature</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                <li>To encourage and promote the students to take the study of English Literature and Language</li>
                        <li>To infuse the spirit of inquisitiveness & interpretation</li>  
                        <li>To hone students' skills to face the challenges in the competitive world</li>
                        <li>To foster research & entrepreneurship</li>     
                    </ul>
                    </div>
                </div>
           </div>
           <div className="row tl-event-details-row outer-style g-0 mt-50 mb-50">
               
                  
                     <h3 className="tl-event-details-area-title">Career Opportunities</h3>
                       
                    
                <div className="col-lg-3 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Digital Copywriter</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Editorial assistant</p>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> English as a foreign language teacher</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Magazine Journalist</p>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Newspaper Journalist</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Publishing copy-editor / proofreader</p>
                </div>

                <div className="col-lg-3 col-md-6 col-12">
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Writer</p>
                    <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Translator</p>
                </div>
            </div>
            
            

            <div className="row outer-style mt-50">
            <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
                  <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                        <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                    <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEOs)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="curriculum-tab">Program Outcomes (POs)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="instructor-tab">Program Specific Outcomes (PSO)</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="tl-course-tab-content">
                                  <Tab.Pane eventKey="overview-tab"><PEOs/></Tab.Pane>
                                  <Tab.Pane eventKey="curriculum-tab"><POs/></Tab.Pane>
                                  <Tab.Pane eventKey="instructor-tab"><PSO/></Tab.Pane>
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

export default EnglishDeptAbout
