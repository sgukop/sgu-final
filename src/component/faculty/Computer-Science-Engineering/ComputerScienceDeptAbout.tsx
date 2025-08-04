'use client'
import React from 'react';
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import { Tab, Nav } from "react-bootstrap";
import PSO from './ComputerDeptPEO/PSO';
import PEOs from './ComputerDeptPEO/PEOs';
import POs from './ComputerDeptPEO/POs';

const ComputerScienceDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <div className="row">
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/computer-science-engineering/about-dept/about-dept.png" alt="Image" className="rounded-full"
                            style={{border:"10px solid #4f70b6", padding:"20px"}}/>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                        <h2 className="tl-14-section-title">HOD's Desk</h2>
                        <p className="dark-mode-white-color" style={{textAlign:"justify"}}>Computer Science and Engineering Department is established with an aim of building creative IT professionals to acquire core knowledge and skills required by IT industry or research institutes to meet global challenges. The courses are taught by the experienced, qualified faculty, industry experts and the global researchers.<br/><br/>

The laboratories are well equipped with advanced software, high configuration computer systems for technical training and research work. Knowledge sharing sessions are conducted by experts and alumni to keep up with the rapidly evolving technology on regular basis.
</p>

                        <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                   Dr. Deepika Patil <br /> Associate Professor & Head{" "}
                  </span>
                    </div>
                </div>
            </div>

           <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To impart quality education in computer science and engineering to produce industry ready engineers through competency based learning by collaborating with leading Institutes and Organizations with flexible learning.</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                <li>To develop Software professionals with excellent technical knowledge, innovative ideas,entrepreneurship skills and professional ethics. </li>
		                <li>To provide quality engineering education through state of art learning amenities in Computer science engineering. </li>
                        <li>To establish Industry Institute Interaction to make students ready for the industrial environment & develop entrepreneurship skills. </li>
                        <li>To undertake collaborative projects which offer opportunities for long-term interaction with academia and industry</li>
                        <li>To pursue creative research and new technologies in Computer Science and Engineering across disciplines in order to serve the needs of industry, government, society, and the scientific community.</li>
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
                          <Tab.Pane eventKey="overview-tab">
                              <PEOs/>
                          </Tab.Pane>

                          <Tab.Pane eventKey="curriculum-tab">
                              <POs/>
                          </Tab.Pane>

                          <Tab.Pane eventKey="instructor-tab">
                            <PSO/>
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

export default ComputerScienceDeptAbout
