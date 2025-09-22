"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Tab, Nav } from "react-bootstrap";
import PEO from "./AIDS-PEO/PEO";
import PO from "./AIDS-PEO/PO";
import PSO from "./AIDS-PEO/PSO";


const AIandDSDeptAbout = () => {
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>

        <div className="row">
          <MenuList dept="Artificial Intelligence and Data Science" subMenu={NavLinks} />
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
                    src="assets/images/AIDS/hod-photo/aids-hod.jpg"
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
                  It gives me immense pleasure to welcome you to the Department of Artificial Intelligence and Data Science at Sanjay Ghodawat University. With the world moving rapidly towards an AI-driven economy, this program is a unique initiative to empower students with the knowledge and skills required to become innovative technologists, researchers, and entrepreneurs.
                  </p>
                  <p className="dark-mode-white-color text-justify">
                  Our tie-up with NxtWave Institute of Advanced Technology bridges the gap between academia and industry, ensuring that students learn not just theory but also its application in solving real-world challenges. The department focuses on holistic development through rigorous academics, industry-driven projects, internships, aptitude building, and communication skills. I firmly believe that our students will emerge as industry-ready professionals and responsible citizens who will contribute meaningfully to society
                  </p>
                  <p className="text-center mt-2"><strong>“WISH YOU ALL THE BEST”</strong></p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Mr. Gurunath Machhale <br /> Head of Department{" "}
                  </span>
                </div>
              </div>
            </div>

           <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be a center of excellence in Artificial Intelligence and Data Science education and research, fostering innovation, entrepreneurship, and societal impact through the creation of industry-ready professionals and lifelong learners
                    </h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                      <li>
                      To provide quality education in Artificial Intelligence, Data Science, and emerging technologies through a well-structured curriculum and innovative pedagogy.
                      </li>
                      <li>
                      To foster industry-academia collaboration for skill development, internships, and real-world project exposure.
                      </li>
                      <li>
                      To nurture critical thinking, problem-solving abilities, and research aptitude among students.
                      </li>
                      <li>
                      To inculcate ethical values, communication skills, and social responsibility for holistic personality development.
                      </li>
                      <li>
                      To encourage innovation, entrepreneurship, and continuous learning for addressing global challenges.
                      </li>
                    </ul>
                    </div>
                </div>
           </div>

           <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">PEO, PO and PSO</h3>
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
                        Program Specific Outcomes (PSO)
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
  );
};

export default AIandDSDeptAbout;
