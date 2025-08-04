'use client'
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import PSO from './PEO-PO-PSO/PSO';
import PEOs from './PEO-PO-PSO/PEOs';
import POs from './PEO-PO-PSO/POs';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const GeographyDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department of Geography</h2>
        <div className="row">
          <MenuList dept="Geography" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/geography-dept/about-department/about-us.png" alt="About Department Image" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                        <h2 className="tl-14-section-title">About Us</h2>
                        <p className="dark-mode-white-color">	
                        The Department of Geography at <strong>Sanjay Ghodawat University</strong> is dedicated to studying the earth's landscapes, environments, and the relationships between people and their natural and built environments. <br/><br/> Through a blend of physical and human geography, the department prepares students to tackle global challenges such as climate change, urbanization, resource management, and sustainable development. Our curriculum is designed to provide students with a strong foundation in geographical knowledge, analytical skills, and real-world applications.</p>
                    </div>
                </div>
            </div>

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be a center of excellence in geographic education, research, and community engagement, empowering students with the skills and knowledge to address environmental and societal challenges.</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                <li>To offer high-quality education that integrates theoretical and practical aspects of geography.</li>
                        <li>To foster a learning environment that promotes critical thinking, research, and environmental stewardship.</li>  
                        <li>To encourage interdisciplinary research and collaboration for sustainable solutions to geographic issues.</li>
                        <li>To prepare graduates to become socially responsible geographers, contributing positively to communities and environments.</li> 
                    </ul>
                    </div>
                </div>
           </div>

        <div className="row outer-style mt-50">
            <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
                  <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                        <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                    <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEO)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="curriculum-tab">Program Outcomes (PO)</Nav.Link>
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

export default GeographyDeptAbout
