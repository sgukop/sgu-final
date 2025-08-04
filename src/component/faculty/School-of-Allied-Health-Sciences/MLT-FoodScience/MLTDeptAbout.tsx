'use client'
import React from 'react';
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import { Tab, Nav } from "react-bootstrap";
import PSO from "./MLTDeptPEO/PSOs";
import PEOs from "./MLTDeptPEO/PEOs";
import POs from "./MLTDeptPEO/POs";

const MLTDeptAbout = () => {
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
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-14-about-img">
                        <img src="assets/images/allied-health-sciences/MLT/about-dept/about-image.png" alt="About Department Image" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-14-about-txt">
                        <h2 className="tl-14-section-title">About Us</h2>
                        <p className="dark-mode-white-color">	
                        A Department of Medical Laboratory Technology, often abbreviated as MLT, focuses on the study and practice of medical laboratory science, encompassing various disciplines like haematology, chemistry, microbiology and immunology, to assist in diagnosing, treating and preventing diseases. The Department will commence with 4 years UG course of Bachelor in Medical Laboratory Technology. <br/><br/>The courses will be credit-based semester system which includes 6 months of hospital internship & 6 months of research project work. The programme covers the basics of preclinical subjects such as Biochemistry, Pathology, Microbiology, Histopathology, haematology and Blood Banking including introduction to research methodology. All facilities are available for the students with beautiful campus including hostel for both boys & girls, Gym & sport complex. The classrooms & Labs are well equipped with good facilities for learning. The mission of the course is to increases the accuracy of disease diagnosis & an essential role in screening for ill health & assessing response to treatment.</p>
                    </div>
                </div>
            </div>

          {/*  <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">About Department</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                           <p className="dark-mode-white-color">At SGU, the State of the Art infrastructural facilities and laboratories provide students a conducing and inspiring environment. The highly experienced and qualified academic staffs are committed to deliver best practices in teaching and cutting-edge research. A well-updated library with all digital resources with vast collection of books, journals (National & International) and educational materials gives enhanced value-addition to our academic programs.<br/><br/>

                          The programs of allied health sciences are designed in such a way that provides excellent academic standards with the industry-based curriculum to meet expectations of emerging needs around the world. The university provides exposure to the industrial environment through industrial visits, industry-academia interactions an organizing industry expert sessions. The skill development program with hands on training and industrial/hospital visit during academic program enhance student personality and knowledge to increase many fold the placement and job opportunities.<br/><br/>

                          The university caters students with advanced technical knowledge and skills to tackle technological and societal challenges in diversified areas. To enhance competency at national and international level, university also creates awareness and supports students for competitive exams like GRE, TOEFEL, IELTS etc.<br/><br/>

                         Sanjay Ghodawat University welcomes you to explore ocean of opportunities with the programs of Allied Health Sciences and assures you to provide all the necessary facilities in shaping your career.</p>
                    </div>
                  </div>
                </div>
               
            </div>  */}

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">"To be a leading educational program in Medical Laboratory Technology, empowering students with the skills, knowledge and ethical standards necessary to excel in the diagnostic sector and contribute to the advancement of medical science."</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <h6 className="vision-info">"Our mission is to provide comprehensive education and training in medical laboratory technology, fostering a strong foundation in scientific principles and laboratory practices. We aim to cultivate critical thinking, problem-solving skills and professionalism among our students, preparing them to meet the evolving needs of diagnostic sector."</h6>
                  </div>
            </div>
        </div>

        
        <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
              <div
                data-spy="scroll"
                className="scrollspy-example z-depth-1 p-3 mb-4 col-md-12"
                data-target="#menu-navbar"
                data-offset="0"
              >
                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                      <Nav.Link eventKey="overview-tab">
                        Program Educational Objectives (PEO)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="curriculum-tab">
                        Program Outcomes (PO)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="instructor-tab">
                        Program Specific Outcomes (PSO)
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

export default MLTDeptAbout
