"use client";
import React from "react";
import NavLinks from '../Navlinks'
import MenuList from '../../Reusable-components/MenuList'
import { Tab, Nav } from "react-bootstrap";
import PSO from "../Programes/PSO";
import PEOs from "../Programes/PEOs";
import POs from "../Programes/POs";
import MtechPEO from "../MtechPEO/MtechPEO";
import MtechPO from "../MtechPEO/MtechPO";
import MtechPSO from "../MtechPEO/MtechPSO";

const AerospaceDeptAbout = () => {
  return (
    <section
      className="tl-14-about tl-8-pricing pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">About Department</h2>

        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="tl-14-about-img">
                  <img
                    src="assets/images/aerospace-engineering-dept/about-dept/hod.png"
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
                    I am delighted to introduce and warmly welcome you to the
                    Department of Aerospace Engineering, Sanjay Ghodawat
                    University, Kolhapur, Maharashtra
                    <br />
                    <br />
                    Our mission is to mould Aerospace Engineering
                    undergraduates through world class education, sustained
                    research in aerospace technologies leading to patents and
                    research publications, promoting entrepreneurship and
                    enhance interactions with industry. The department boasts
                    enthusiastic faculty and talented staff members who are
                    experts in their areas of interest
                  </p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Mr. Sulthan S., <br /> Assistant Professor & Head{" "}
                  </span>
                </div>
              </div>
            </div>

         {/*   <div className="row tl-event-details-row g-0 mt-50">
              <div className="col-lg-12">
                <div className="tl-event-details-left">
                 <h3 className="tl-event-details-area-title text-[#4f70b6]">About Aerospace Engineering Department</h3>
                  <div className="tl-event-details-key-content tl-event-details-area">
                    <ul className="tl-event-details-key-content-list phd-container">
                      <li>
                        Aerospace engineering is primarily concerned with the
                        design, analysis and maintenance of aircraft and
                        spacecraft.
                      </li>
                      <li>
                        B-TECH in Aerospace Engineering begins with courses
                        that give you an excellent grounding in both engineering
                        and calculus-based physics.
                      </li>
                      <li>
                        Use software to build models and analyze real aerospace
                        parts and systems; and design, build, and test your own
                        model airplane or rocket.
                      </li>
                      <li>
                        Subfields include aircraft maintenance, aerodynamics,
                        aircraft structures, flight controls, and propulsion
                        systems.
                      </li>
                      <li>
                        Students who choose to earn an Aerospace engineering
                        degree at SGU are part of a prestigious program that
                        consistently receives accolades, at a university that is
                        ranked in the nation's top tier.
                      </li>
                      <li>
                        Research projects and relevant hands-on workshops in the
                        classroom involve concepts and systems at the forefront
                        of engineering.
                      </li>
                    </ul>
                   
                    <h5 className="tl-8-single-pricing-title mt-4 mb-4 text-[#4f70b6]">Aerospace engineering internships and research projects
                    include such diverse areas as:</h5>
                    <ul className="tl-event-details-key-content-list phd-container">
                      <li>Aircraft maintenance</li>
                      <li>Structural dynamics</li>
                      <li>Flight Controls</li>
                      <li>Wind tunnel testing and experimentation</li>
                      <li>Computational fluid dynamics</li>
                      <li>Computer-aided design</li>
                      <li>Aircraft and Rocket propulsion system</li>
                      <li>Aerodynamics</li>
                      <li>Unmanned Aerial Vehicle</li>
                      <li>Composite Materials</li>
                    </ul>
                    <p className="dark-mode-white-color mt-4">
                      With experience gained from aerospace engineering
                      internships and research, SGU's students culminate their
                      SGU undergraduate careers with comprehensive capstone
                      senior design projects. These projects give students the
                      experience of working in teams to address real-world
                      issues and create innovative solutions through the design,
                      development, prototyping, and presentation of a complex
                      engineering system.
                    </p>

                  
                    <h5 className="tl-8-single-pricing-title mt-4 mb-4 text-[#4f70b6]">Examples of these student projects include:</h5>
                    <ul className="tl-event-details-key-content-list phd-container">
                      <li>
                        Numerical and experimental analysis of baseline airfoil
                        with and without dimples.
                      </li>
                      <li>
                        Numerical and experimental investigation of different
                        airfoils.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>   */}

            
         <div className="row tl-event-details-row g-0 mt-50">
              <div className="col-lg-12">
                <div className="tl-event-details-left">
                 <h3 className="tl-event-details-area-title text-[#4f70b6]">About Department</h3>
                  <div className="tl-event-details-key-content tl-event-details-area">
                   
                   
                    <p className="dark-mode-white-color text-justify">
                    The Department of Aerospace Engineering was established in 2017. Department of Aerospace
Engineering offered B. Tech Aeronautical Engineering (4 years) and M. Tech Aerospace Engineering
(2 Years) , M.Tech Aerospace Engineering (1+1) Articulation Programme. The B. Tech Aeronautical
Engineering program has been designed to provide quality education for undergraduate students
through the blend of advanced laboratories and experienced faculty members in the fields of
Aerodynamics, Aerospace Structures, Aerospace Propulsion, Space Mechanics, Aircraft Design,
Aircraft Systems, Avionics, UAV, Satellite Technology and Advanced Materials. The syllabus is
regularly revised to meet the industry demands in the Aviation, Space Exploration and Defence
Sector.<br/><br/>
The department encompasses various types of Aircraft, Aircraft Maintenance, Autonomous Systems
and Satellite Technology, aircraft and helicopters hangers, advanced laboratories and experienced
faculty members, Sanjay Ghodawat University offers myriad opportunities for real-time experience,
practical learning and skill development in the Aerospace engineering domain.
We take pride in generating the maximum number of Aeronautical and Aerospace Engineers in the
country. Many of our alumni work as Engineers.
                    </p>
                </div>
                </div>
              </div>
              
            </div>  

            <div className="row tl-event-details-row g-4 mt-50">
                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Vision</h3>
                            <p className="dark-mode-white-color"> To be the centre of excellence in education and research
                            in the field of Aerospace Engineering.</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Mission</h3>
                            <ul className="course-subjects">
                              <li>
                                To prepare students to acquire knowledge, skills and
                                professional ethics in their pursuit of Aeronautical
                                Engineering.
                              </li>
                              <li>
                                To prepare the students as global leaders with lifelong
                                learning attitude
                              </li>
                              <li>
                                To collaborate with industry and institute for
                                technology up-gradation.
                              </li>
                              <li>
                                To promote research, innovations and entrepreneurship
                                culture among students for the benefit of society.
                              </li>
                              <li>
                                To be a part of the national drive of promoting aviation
                                industry.
                              </li>
                          </ul>
                    </div>
                </div>
            </div>

            <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">PEO, PO and PSO (B.Tech Aeronautical Engineering)</h3>
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

          <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">PEO, PO and PSO(M.Tech Aerospace Engineering)</h3>
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
                      <MtechPEO/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="curriculum-tab">
                      <MtechPO/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="instructor-tab">
                      <MtechPSO />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </div>

         {/*   <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">Career Outlook</h3>
              <p className="dark-mode-white-color text-black font-sm mb-4">Graduates with an Aerospace engineering degree from SGU are eagerly recruited by employers, including:</p>
           
              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Infosys, Bangalore</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Capgemini, Bangalore</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> STAR AIR, Kolhapur</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Carvar Aivation, Pune</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> BAIL, Bangalore</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Quest Global, Belgaum</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Taneja Aerospace and aviation Ltd, Hosur</p>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Axis Cades, Bangaloree</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Agni Adventure Aerosports Academy</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Hindustan Aeronautics Limited</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> National Aerospace Limited</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> DRDO</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> ISRO</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Indian Airforce</p>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> CSIR</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> GKN Aerospace</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Collins Aerospace</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Airbus</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Boeing</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Safran Aerospace</p>
                
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> DGCA</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Airport Authority of India</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Alliance Air, Air India</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Airworks India</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Indomour</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Sonavision</p>
              </div>
            </div>

            <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">Career Options</h3>
              <p className="dark-mode-white-color text-black font-sm mb-4">Aerospace engineering degree graduates typically specialize in one of two types of engineering: Design & Analysis and Aircraft Operations & Maintenance, leading to such jobs as:</p>
           
              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Aerodynamics engineer.</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Aircraft Design Engineer.</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Technical Engineer in Airlines.</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Quality Engineer in Aircraft Material Testing.</p>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Aircraft Structural Analyst.</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Aero Propulsion Engineer.</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Aircraft Technical Author in Publications.</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Research and Development in Space Research Organization.</p>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> CAMO Officer </p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Aircraft Maintenance Engineer.</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Aerospace product and parts designer.</p>
                
                
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Planning Engineer</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Performance Engineer</p>
                <p className="text-black mb-4"> <i className="fa-solid fa-star text-[#f26122] mr-2"></i> Ground Instructor</p>
               
              </div>
            </div> */}
            </div>
          </div>
      </div>
    </section>
  );
};

export default AerospaceDeptAbout;
