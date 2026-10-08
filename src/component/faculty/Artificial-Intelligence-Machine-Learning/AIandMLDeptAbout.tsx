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
  <          div className="col-lg-5 d-flex justify-content-center align-items-center">
             <div className="tl-14-about-img">
              <img
                    src="/assets/images/faculty-profile-photos/AIML/aiml-hod1.jpg"
                  alt="HOD Image"
                className="rounded-full"
                 style={{
                  border: "10px solid #4f70b6",
                  padding: "20px",
                    }}
                   />
               </div>
              </div>
                  <div className="col-lg-7">
                <div>
                  <h2 className="tl-14-section-title text-[#4f70b6] lg:mt-10 sm:mt-0">Director’s Desk</h2>
                  <p className="dark-mode-white-color text-justify">
                    Engineering and technology are transforming rapidly, creating new opportunities as well as challenges for the next generation of engineers. At the School of Engineering & Technology, Sanjay Ghodawat University, our endeavour is to complement the University’s vision by creating an academic environment that promotes excellence, innovation, research, industry readiness and holistic development.
We believe that engineering education must go beyond theoretical knowledge. Our focus is on Outcome-Based Education, experiential and project-based learning, emerging technologies, internships, industry interaction and skill development, enabling students to apply knowledge to real-world problems.
Research and innovation are integral to our academic culture. We encourage students and faculty to pursue research, patents, consultancy, interdisciplinary projects, entrepreneurship and technology-driven solutions that create meaningful societal impact.
We are equally committed to developing engineers with professional competence, leadership, communication skills, ethical values and social responsibility. Through mentoring, technical activities, co-curricular initiatives and industry exposure, we strive to prepare our students for successful careers and lifelong learning.
Our vision is to develop the School of Engineering & Technology as a centre of excellence in engineering education, research and innovation, contributing to the technological and socio-economic development of the nation.
I invite our students, faculty, industry partners, alumni and all stakeholders to join us in this journey of continuous improvement and excellence.


                 </p>
                  <p className="text-center mt-2"><strong>“Educate to Innovate. Innovate to Lead. Lead to Transform..”</strong></p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Prof. Dr. Santaji K. Shinde <br /> Director
                                                         School of Engineering & Technology
                                                        Sanjay Ghodawat University, Kolhapur

                                                {" "}
                  </span>
                </div>
              </div>
            
                
  <          div className="col-lg-5 d-flex justify-content-center align-items-center">
             <div className="tl-14-about-img">
              <img
                    src="/assets/images/faculty-profile-photos/AIML/i.png"
                  alt="HOD Image"
                className="rounded-full"
                 style={{
                  border: "0px solid #4f70b6",
                  padding: "0px",
                    }}
                   />
               </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <h2 className="tl-14-section-title text-[#4f70b6] lg:mt-10 sm:mt-0">HOD's Desk</h2>
                  <p className="dark-mode-white-color text-justify">
                    It gives me immense pleasure to welcome you to the Department of Artificial Intelligence & Machine Learning (AIML) at Sanjay Ghodawat University.
                  The future belongs to those who are willing to learn, adapt, innovate and create. AI and Machine Learning are transforming every sector, and our responsibility is to prepare our students to become confident professionals and innovators who can shape this transformation.
                  At the Department of AIML, we focus on student-centric, outcome-based and experiential learning, combining strong fundamentals with hands-on experience in Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Generative AI, Natural Language Processing, Computer Vision, Robotics and emerging technologies.
                  We encourage every student to question, explore, experiment and learn beyond the classroom through projects, internships, industry interaction, technical activities, research and innovation. Our faculty members are committed to mentoring students and providing the guidance and opportunities needed to discover and develop their individual potential.
                      More importantly, we want our students to develop not only technical competence, but also creativity, communication, leadership, ethical values, teamwork and the confidence to face real-world challenges.
                    Every student who enters our department brings a unique dream and potential. Our commitment is to provide the knowledge, mentorship, opportunities and environment that help transform those aspirations into achievement.
                   I encourage our students to embrace every opportunity, learn continuously, take calculated risks, learn from failures and never stop improving.

                 </p>
                  <p className="text-center mt-2"><strong>“Learn. Explore. Innovate. Lead.”</strong></p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Dr.Santaji Shinde <br /> Head of Department of Artificial Intelligence & Machine Learning
                                               Sanjay Ghodawat University, Kolhapur
                                                {" "}
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
