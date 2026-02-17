'use client'
import React from 'react';
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

import ClinicalPEO from './ClinicalPEO/PEO';
import ClinicalPO from './ClinicalPEO/PO';
import ClinicalPSO from './ClinicalPEO/PSO';





const ClinicalDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">B.Sc. Clinical Research & Technology</h2>
        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
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
                    src="assets/images/Clinical-dept/about-department/hod-photo.jpg"
                    alt="HOD Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div>
                  <h2 className="tl-14-section-title text-[#4f70b6] lg:mt-10 sm:mt-0">HOD's Desk</h2>
                  <p className="dark-mode-white-color text-justify">
                  <strong>Warm Greetings of the day to all !</strong><br/>
                        The Department of Clinical Research and Technology is established to develop competent professionals to meet the growing demands of the healthcare and pharmaceutical sectors. We are committed to deliver quality, outcome-based education and research aligned with regional needs and global regulatory standards. The program integrates academic learning with practical training, internships, and industry collaboration to enhance employability. We emphasize ethical practices, regulatory compliance, and social responsibility in clinical research. Our goal is to contribute to healthcare advancement through skilled and responsible graduates.
                  </p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                     Professor Dr. Vidyarani S. Khot <br /> HOD {" "}
                  </span>
                </div>
              </div>
            </div>


          <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                   <h3 className="tl-event-details-area-title text-[#4f70b6]">About Us</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                           <p className="dark-mode-white-color text-justify">The B.Sc. Clinical Research and Technology program was introduced in the academic year 2025–26 at Sanjay Ghodawat University with the objective of addressing the growing demand for trained professionals in the healthcare and clinical research sectors. The program is structured as a 4 years degree with honours in accordance with the guidelines of NEP 2020, offering flexibility, multidisciplinary learning, and skill-based progression
                      </p>
                      <p className="dark-mode-white-color text-justify">The curriculum is designed to integrate fundamental knowledge of biomedical sciences with clinical research methodologies, regulatory practices, and healthcare technologies. The syllabus is regularly revised to align with regional healthcare needs, industry expectations, and global regulatory standards. Emphasis is placed on outcome-based education, practical training, internships, and research exposure to enhance employability and professional competence.
                      </p>
                      <p className="dark-mode-white-color text-justify">The department is actively involved in academic development, research initiatives, and industry collaboration, fostering an environment of innovation, ethical practice, and continuous learning. Through a balanced approach of teaching, training, and research, the program prepares students to contribute effectively to the evolving clinical research and healthcare ecosystem
                      </p>
                    </div>
                  </div>
                </div>
            </div>

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be a center of excellence in Clinical Research and Technology by delivering quality, outcome-based education and research aligned with regional healthcare needs and global standards.</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                        <li>To deliver quality, outcome-based education in Clinical Research and Technology.</li>
                        <li>To promote research, innovation, and industry collaboration through practical training, internship, and participation in clinical studies.</li>
                        <li>To develop competent, ethical, and socially responsible professionals equipped to contribute in healthcare and clinical research sector.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row outer-style mt-50">
           <h3 className="tl-event-details-area-title">B.Sc. Clinical Research & Technology</h3>
                <div>
                      <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                      <Nav.Link eventKey="overview-tab">PEO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="curriculum-tab">PO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="instructor-tab">PSO</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="tl-course-tab-content">
                                    <Tab.Pane eventKey="overview-tab">
                                          <ClinicalPEO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="curriculum-tab">
                                          <ClinicalPO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="instructor-tab">
                                        <ClinicalPSO/>
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

export default ClinicalDeptAbout
