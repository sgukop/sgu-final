"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Tab, Nav } from "react-bootstrap";
import PEO from "./AIML-PEO/PEO";
import PO from "./AIML-PEO/PO";
import PSO from "./AIML-PEO/PSO";


const AIandMLDeptAbout = () => {
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>

        <div className="row">
          <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks} />
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
                    src="/assets/images/faculty-profile-photos/AIML/Priyanka More.jpeg"
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
                  We feel elated to Well-Come and introduce you to our Department of Artificial Intelligence & Machine Learning.ArtificialIntelligence (AI) is now one of the fastest-growing technologies in the job market. Our AIML program aims to provide students with a solid foundation in the principles and techniques of AIML, as well as hands-on experience in applying these technologies to real-world problems. The curriculum of the AIML program is designed with specialized knowledge and skills in Artificial Intelligence, Machine Learning, Deep Learning, Reinforcement learning, Natural Language Processing (NLP), Data Science, Computer Vision, Business Intelligence, Robotics and other interdisciplinary areas. The students will study algorithms and techniques for machine learning and gain practical experience through laboratory work and projects.The department is equipped itself with well qualified teaching faculty with rich teaching, research and industrial experience. The department committed to impart rigorous training to students to generate knowledge through the state-of-the-art concepts and technologies in AI & ML, and transform the Department as a leader in imparting AI & ML education and research. The department offers Bachelor of Technology in AIML and Master of Technology in AIDS.
                  </p>
                  <p className="text-center mt-2"><strong>“WISH YOU ALL THE BEST”</strong></p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Dr.Priyanka Shivaprasad More <br /> I/C Head of Department{" "}
                  </span>
                </div>
              </div>
            </div>

           <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be a leading department in AI and ML through  fostering academic excellence, innovative research, and entrepreneurial skills to create globally recognized  professionals.
                    </h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                      <li>
                      To provide a robust curriculum and hands-on learning in AI and ML that enhances academic excellence
                      </li>
                      <li>
                      To provide mentorship and resources that support student-led research, startups, and innovative projects , fostering a culture of entrepreneurship.
                      </li>
                      <li>
                      To collaborate with industry partners and research institutions, offering students exposure to cutting-edge technologies in AI and ML.
                      </li>
                      <li>
                      To encourage students for lifelong learning and adaptability in AI and MLworld.
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

export default AIandMLDeptAbout;
