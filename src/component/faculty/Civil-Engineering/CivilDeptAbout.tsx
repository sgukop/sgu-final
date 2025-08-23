'use client'
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import BtechCivil from "./PEO-PO-PSO/BtechCivil";
import MtechConstruction from "./PEO-PO-PSO/MtechConstruction";
import MtechStructural from "./PEO-PO-PSO/MtechStructural";

const CivilDeptAbout = () => {
   return (
    <>
        <section className="tl-14-about pt-50" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container-fluid">
            <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Civil Engineering</h2>
            <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
                <div className="row gy-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="tl-14-about-img">
                            <img src="assets/images/civil-engineering-dept/about-dept/hod-photo.jpeg" alt="Image" className="rounded-full"
                            style={{border:"10px solid #4f70b6", padding:"20px"}}/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title text-[#4f70b6]">HOD's Desk </h2>
                            <p className="dark-mode-white-color text-justify">Welcome to the Civil Engineering Department! We are dedicated to delivering high-quality education and fostering innovation in civil engineering, with a strong focus on sustainability and social impact. Our mission is to prepare students for professional success, equipped with technical expertise, ethical values, and management skills to address both current and future challenges.<br/><br/>
                            Our department offers a dynamic learning environment, backed by cutting-edge research and consultancy services, aimed at shaping the next generation of engineers and leaders in sustainable development. I invite you to explore our programs and join us in shaping a better tomorrow.

                            </p>
                            <span></span>
                            <span
                    className="dark-mode-white-color mt-4"
                    
                  >
                    {" "}
                    Sincerely,<br/> </span>
<p style={{ fontWeight: "bold" }}>Dr. Sachin Popat Patil<br/>
Head of Civil Engineering Department<br/>
Sanjay Ghodawat University</p>

                 
                        </div>
                    </div>
            </div>
        


        <div className="row">
            <div className="accordion mt-20" id="civildeptaboutaccordion">
              {/*  <div className="tl-event-details-area tl-course-details-curriculum">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                            Programmes Offered
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#civildeptaboutaccordion">
                        <div className="accordion-body">
                            <div className="row tl-event-details-row g-0">
                                <div className="col-lg-12">
                                    <div className="tl-event-details-left">
                                        <Table striped responsive className="governing-table">
                                            <thead>
                                                <tr></tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><p>B. Tech Civil Engineering</p></td>
                                                    <td><p>Duration - 4 Years</p></td>
                                                    <td><p>Intake - 30</p></td>
                                                </tr>
                                                <tr>
                                                    <td><p>M. Tech Structural Engineering</p></td>
                                                    <td><p>Duration - 2 Years</p></td>
                                                    <td><p>Intake - 24</p></td>
                                                </tr>
                                                <tr>
                                                    <td><p>M. Tech Construction Engineering and Management</p></td>
                                                    <td><p>Duration - 2 Years</p></td>
                                                    <td><p>Intake - 12</p></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={3}><p>Ph. D in Civil Engineering</p></td>
                                                    <td><p>Duration -</p></td>
                                                    <td><p>Intake -</p></td> 
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}
    
                <div className="tl-event-details-area tl-course-details-curriculum">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo">
                             Departmental Key Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#civildeptaboutaccordion">
                        <div className="accordion-body">
                            <div className="row tl-event-details-row g-0">
                                <div className="col-lg-12">
                                    <div className="tl-event-details-left">
                                        <ul className="tl-event-details-key-content-list phd-container">
                                                <li><strong>Facilities - </strong> 15 Laboratories are fully equipped with high precision Equipment such as Non-destructive testing(NDT), Servo Shake table, etc. and Software like HIT- Office, SAP-2000, E-Tabs, ABAQUS, FEAST. Etc</li>
                                                <li><strong>Active Learning Tools - </strong> Department Promoting Active Learning by use of NPTEL, Massive open online course (MOOC), Information and communication technology (ICT), Modular Object-Oriented Dynamic Learning Environment (MOODLE)</li>
                                                <li><strong>Departmental Library - </strong> Departmental library contains 200 plus reference books, IS code softcopies, e-Journal like ACI Structural Journal, ACI Materials Journal, Indian Concrete Journal Concrete International, Science Direct Online subscription</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Differentiator
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#civildeptaboutaccordion">
                        <div className="accordion-body">
                            <div className="row tl-event-details-row g-0">
                                <div className="col-lg-12">
                                    <div className="tl-event-details-left">
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>The choice-based credit system.</li>
                                            <li>Research and development activities in identified trust.</li>
                                            <li>Mentoring and Continous counseling at a personal level</li>
                                            <li>BE Civil Engineering (Presently known as B. Tech Civil Engineering)has valid Accredited by NBA, New Delhi.</li>
                                            <li>Seed money funding for student projects</li>
                                            <li>Outreach societal programs</li>
                                            <li>Innovation and Entrepreneurship Development Centre (IEDC)</li>
                                            <li>Outcome-based education</li>
                                            <li>Women Empowerment activities</li>
                                            <li>Feedback and Reward system</li>
                                            <li>Course Structure (Major) -B. Tech Honors is an award for the interested student after gaining extra 16 marks credit in verticals like Geotechnical and Structural Engineering, Infrastructure and Construction Management, Environmental and Water Resources Engineering. (Minor)- Introduction to AutoCAD drawing for Domestic and Commercial Circuit design and Electrification for Electrical students</li>
                                            <li>The N.S.S. Cell organised Swachh Bharat camp, awareness lectures on the various social issue, blood donation camp, etc. Activities like tree Plantation, community activities are organised under Environment Club, Natures Club for 10 villages adopted by SGU. Also, the department taking active Participation in Unnat Bharat, an initiative taken by AICTE</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tl-event-details-area tl-course-details-curriculum">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Trust Areas for Research
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#civildeptaboutaccordion">
                        <div className="accordion-body">
                            <div className="row tl-event-details-row g-0">
                                <div className="col-lg-12">
                                    <div className="tl-event-details-left">
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>Sustainable Concrete</li>
                                            <li>Performance-Based Earthquake Resistant Design</li>
                                            <li>Geotechnical Earthquake Engineering</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <p className="dark-mode-white-color">To provide quality education in civil engineering and management skill that enables students to improve sustainable social life</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                        <ul className="course-subjects">
                            <li>To provide students with a quality education in civil engineering that prepares them for professional practice with values and ethics in order to address future technical and social challenges.</li>
		                    <li>To established a center of excellence in civil engineering and associated research.</li>
                            <li>To provide consultancy services to the community in all areas of civil engineering.</li>
                            <li>Fostering innovative and creative thinking in the minds of budding engineers to address sustainable development and entrepreneurship challenges.</li>
                        </ul>
                    </div>
                </div>
        </div>

        <div className="row outer-style mt-50">
        <h3 className="tl-event-details-area-title text-[#4f70b6]">PEO, PO and PSO</h3>
            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                    <Nav className="nav-tabs tl-course-details-navs">
                        <Nav.Item>
                            <Nav.Link eventKey="overview-tab">B. Tech. Civil Engineering</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="curriculum-tab">M. Tech. Construction Engineering and Management</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="instructor-tab">M. Tech. Structural Engineering</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content id="tl-course-tab-content">
                        <Tab.Pane eventKey="overview-tab">
                            <BtechCivil/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="curriculum-tab">
                            <MtechConstruction/>
                        </Tab.Pane>

                        <Tab.Pane eventKey="instructor-tab">
                            <MtechStructural/>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
        </div>
        </div>
    </div>
  </section>
</>
    )
}

export default CivilDeptAbout
