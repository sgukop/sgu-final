'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react';
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import BTechPEO from './PEOs-POs-PSOs/BTechPEO';
import MTechPEO from './PEOs-POs-PSOs/MTechPEO';
import PhdPEO from './PEOs-POs-PSOs/PhdPEO';

const ElectronicsDeptAbout = () => {
   return (
        <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container-fluid">
                <div className="row">
                    <MenuList dept="Electronics and Communication Engineering" subMenu={NavLinks} />
                        <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="tl-14-about-img">
                                        <img src="assets/images/electronics-communication-engineering/about-dept/hod-photo.png" alt="HOD Desk" className="rounded-full" style={{border:"10px solid #4f70b6", padding:"20px"}} />
                                    </div>
                                </div>

                                <div className="col-lg-7">
                                    <h2 className="tl-14-section-title">HOD's Desk</h2>
                                    <p className="dark-mode-white-color text-justify">We the Electronics and Communication Engineering Department of Sanjay Ghodawat University have been expanding as a centre of excellence in the field of Electronics and Communication Engineering through industrial and academic research aligned with the vision of the department. <br/><br/>
                                        This department has four years B. Tech Program in Electronics and Communication Engineering, Two years M. Tech program specialized in Embedded Systems and Ph.D Program in Electronics Engineering. Qualified, Experienced and dedicated faculty members is the strength of our department moreover the courses are delivered with the need-based expertise from top industries in the respective areas. The program curriculum of B. Tech students includes Audit course of Foreign Language, Scholastic Aptitude for improving employability enhancement, Mandatory Internship of minimum 4 weeks to acquire on the job skills and industrial experience. <br/><br/>
                                        Minor and honour program are available for interested and eligible students and Integrated Software Proficiency Program to improve employability skill. During the Final year of B.Tech. Program, students have a provision to select any one of the four tracks based on their career plan as Industry Internship and Project, Undergraduate Research Opportunity Program, Entrepreneurial Venture and Start-up. There is an option to choose verticals in the stream of Artificial intelligence and Machine Learning, Very large-scale Integration (VLSI) & Embedded Systems, Analog & Digital Signal Processing, Advanced Communication networks to keep up with the technological evolution. The research activities with M.Tech. Students and Ph.D scholars have been in progress in the field of image processing, agricultural solutions, deep learning and data analytics.</p>

                                        <span className="dark-mode-white-color mt-4" style={{ fontWeight: "bold" }}>
                                        {" "}
                                        Dr. Swapnil Hirikude, <br /> Assistant Professor & HOD{" "}
                                    </span>
                                   
                                </div>
                            </div>

                            <div className="row tl-event-details-row g-4 mt-50">
                                <div className="col-lg-6">
                                    <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                                        <h3 className="tl-event-details-area-title text-white">Vision</h3>
                                        <h6 className="vision-info">To be the most preferred department by the stakeholders offering value-based quality education in electronics & communication engineering with innovative teaching learning practices and focus on research aligned with the advancing technological evolution.</h6>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                                        <h3 className="tl-event-details-area-title text-white">Mission</h3>
                                        <h6 className="vision-info">To provide students with value-based quality education in electronics & communication engineering by-</h6>

                                            <ul className="course-subjects">
                                                <li>Providing state of art infrastructure, to pursue the path of discovering fundamental knowledge through creative, innovative and pioneering research by adopting outcome-based learning practices.</li>
                                                <li>Developing professional skill, instil ethics, values and leadership qualities in students for the betterment of society and the nation through continuous learning.</li>
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
                                                    <Nav.Link eventKey="overview-tab">B.Tech. in E&C Engg.</Nav.Link>
                                                </Nav.Item>
                                                 <Nav.Item>
                                                    <Nav.Link eventKey="curriculum-tab">M.Tech. Electronics Engg.</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="instructor-tab">Ph.D.</Nav.Link>
                                                </Nav.Item>
                                            </Nav>

                                        <Tab.Content id="tl-course-tab-content">
                                            <Tab.Pane eventKey="overview-tab">
                                                <BTechPEO/>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="curriculum-tab">
                                                <MTechPEO/>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="instructor-tab">
                                                <PhdPEO/>
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

export default ElectronicsDeptAbout
