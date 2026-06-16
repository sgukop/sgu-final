"use client";
import { useTalimContext } from "@/context/TalimContext";
import React from "react";
import { Tab, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";

const ElectricalDeptAbout = () => {
  return (
    <section
      className="tl-14-about pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>
        <div className="row">
          <MenuList
            dept="Electrical & Electronics Engineering"
            subMenu={NavLinks}
          />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
              <div className="col-lg-5">
                <div className="tl-14-about-img">
                  <img
                    src="assets/images/electrical-electronics-engineering/about-dept/male.jpg"
                    alt="Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="tl-14-about-txt">
                  <h6 className="tl-8-feature-title">
                    Message from the department Head
                  </h6>
                  <p className="dark-mode-white-color">
                    Season's Greetings from department of Electrical and
                    Electronics Engineering, Sanjay Ghodwat University (SGU)
                    Kolhapur, Maharashtra. Thank you for giving the supports
                    towards the development of our Department and University. As
                    all we know due to the climate change and pollution, in
                    worldwide various initiatives have been in progress to
                    develop and Manufacturing Electric Vehicles, Improving the
                    efficiency and installed capacity of Renewable Energy
                    Sources and development of technologies through embedded
                    system in order to control the equipment and applications
                    from remote areas through Internet. <br />
                    By predicting the future opportunities of engineers, we the
                    Department of Electrical and Electronics Engineering (EEE)
                    of SGU little move forward by introducing new programmes
                    especially four years undergraduate programs in those areas
                    as B.Tech. EEE (Electric Vehicle), B.Tech. EEE (Renewable
                    Energy) and B.Tech. EEE (Embedded System). Also, B.Tech. EEE
                    (Renewable Energy) programme has another flavour as it has
                    an opportunity to go Swinburne University, Australia based
                    on the student's interest and capacity. We also offering
                    M.Tech. Programmes in Power Electronics and Drives and
                    Embedded System and doctorate programmes in the Field of
                    Electrical and Electronics Engineering based on the areas of
                    Seventh Sustainable Development Goal (SDG7) as per the
                    United Nation General Assembly (UNGA) <br />
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                      Head of Department <br></br>
                    </span>
                  </p>
                </div>
              </div>
              <div className="tl-event-details-container pt-50">
                <div className="col-lg-12">
                  <h2 className="tl-14-section-title pb-4">
                    Programmes Offered
                  </h2>
                  <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content tl-event-details-area">
                      <Table responsive className="governing-table">
                        <thead>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]"><strong>Sr. No.</strong></p>
                            </td>
                            <td>
                              <p className="text-[#4f70b6]"><strong>Programme</strong></p>
                            </td>
                            <td>
                              <p className="text-[#4f70b6]"><strong>Intake</strong></p>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p>01</p>
                            </td>
                            <td>
                              <p>B.Tech. EEE (Renewable Energy)</p>
                            </td>
                            <td>
                              <p>10</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>02</p>
                            </td>
                            <td>
                              <p>B.Tech. EEE (Electrical Vehicle)</p>
                            </td>
                            <td>
                              <p>10</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>03</p>
                            </td>
                            <td>
                              <p>B.Tech. EEE (Embedded System)</p>
                            </td>
                            <td>
                              <p>10</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>04</p>
                            </td>
                            <td>
                              <p>B.Tech. Electronics and Communication Engg.</p>
                            </td>
                            <td>
                              <p>60</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>05</p>
                            </td>
                            <td>
                              <p>
                                M.Tech. Electrical (Power Electronics and
                                Drives)
                              </p>
                            </td>
                            <td>
                              <p>06</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>06</p>
                            </td>
                            <td>
                              <p>M.Tech .Electronics (Embedded Systems)</p>
                            </td>
                            <td>
                              <p>06</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>07</p>
                            </td>
                            <td>
                              <p>PhD. (Electronics Engg.)</p>
                            </td>
                            <td>
                              <p>05</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p>08</p>
                            </td>
                            <td>
                              <p>PhD. ( Electrical Engg.)</p>
                            </td>
                            <td>
                              <p>04</p>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row tl-event-details-row g-4 mt-50">
              <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">
                        To be a leading centre of excellence in Electrical and
                        Electronics Engineering, specializing in Electric
                        Vehicle (EV) technology and Renewable Energy, fostering
                        innovation, sustainability, and the development of
                        environmentally conscious solutions.{" "}
                      </h6>
                      <h6 className="vision-info">
                        To aim to prepare skilled engineers who will drive the
                        transition to a greener, energy-efficient future by
                        advancing knowledge, technology, and leadership in EVs
                        and Renewable Energy.
                      </h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                        <ul className="course-subjects">
                        <li>
                          To provide high-quality education and training in
                          Electrical and Electronics Engineering with a focus on
                          Electric Vehicle technology and Renewable Energy,
                          equipping students with the technical knowledge,
                          critical thinking, and problem-solving skills needed
                          for a sustainable future.
                        </li>
                        <li>
                          To foster a research-oriented environment that
                          encourages faculty and students to engage in
                          cutting-edge research and development in EVs, energy
                          storage, renewable energy systems, and smart grids,
                          contributing to industry advancements and sustainable
                          practices.
                        </li>
                        <li>
                          To collaborate with industry and academic partners to
                          stay at the forefront of technological innovations in
                          electric mobility and renewable energy, offering
                          hands-on experience, internships, and real-world
                          projects.
                        </li>
                        <li>
                          To instill a sense of environmental responsibility and
                          promote sustainable engineering practices that align
                          with global energy transition goals, enabling students
                          to contribute effectively to green energy initiatives.
                        </li>
                        <li>
                          To develop socially responsible engineers who are
                          equipped with the skills and ethical grounding
                          necessary to lead in the EV and renewable energy
                          sectors and address the challenges of a rapidly
                          evolving energy landscape.
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

              <div className="tl-event-details-container mt-50">
                <div className="col-lg-12">
                  <h2 className="tl-14-section-title pb-4">
                    Electrical and Electronics Department Portfolios:
                  </h2>
                  <div className="tl-event-details-left">
                    <div className="tl-event-details-key-content tl-event-details-area">
                      <Table responsive className="governing-table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>Head of the Department</strong>
                              </p>
                            </td>
                            <td>
                              <p>
                                Dr. Rajin M. Linus <br /> B.E., M.E., Ph.D{" "}
                                <br /> Experience: 17.4 Years (As on Dec 2020){" "}
                                <br /> 8072737249 <br />{" "}
                                hod.eee@sanjayghodawatuniversity.ac.in
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>Program Coordinators(U.G)</strong>
                              </p>
                            </td>
                            <td>
                              <p>
                                Mr. U.T. Patil - B.Tech. EEE ( Electric Vehicle)
                                & B.Tech. Electrical <br />
                                Mr. S. S. Godhade - B.Tech.EEE (Renewable Energy){" "}
                                <br />
                                Dr. Akshy G. Bhosale - B.Tech.EEE (Embedded
                                System) <br />
                                Mrs. Shubhangi C. Deshmukh - B.Tech. ECE
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>Program Coordinators(P.G)</strong>
                              </p>
                            </td>
                            <td>
                              <p>
                                Dr. Akshy G. Bhosale -M.Tech. Electronics
                                (Embedded System) <br />
                                Mr. I.D. Pharne -M.Tech.Electrical (Power
                                Electronics & Drives)
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>Training and Placement Officer</strong>
                              </p>
                            </td>
                            <td>
                              <p>
                                Prof. Swapnil M. Hirikude <br />
                                (Asst Prof. ECE)
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>TPO Coordinator</strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr. A. N. Shinde</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>Moodle Coordinator</strong>
                              </p>
                            </td>
                            <td>
                              <p>Mrs. Shubhangi C. Deshmukh</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>Exam Cell Coordinator</strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr Anand B. Kumbhar</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  Student Activity and Association Coordinator
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr. Pravin G. Dhawale</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  IEEE SGU branch Counselor, Activity
                                  coordinator.
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr. Pravin G. Dhawale</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  Project Coordinator (UG and PG), Track IV
                                  Coordinator, Mentorship Coordinator
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr. S. S. Godhade</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  Track-I and IUI Cell Coordinator, Industrial
                                  Visit
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr. S. S. Godhade</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>Research Coordinator</strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr. I.D. Pharne</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  Department Library ,Time Table Preparation
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr Prasan G. Kamble</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  Exam Cell Co-Coordinator, Alumni, Anti ragging
                                  Cell
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mrs. P. P. Shinde</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  Admission Cell Convener, NSS, Sports, Parents
                                  Meet and Discipline
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mr. Kiran D. Salunkhe</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-[#4f70b6]">
                                <strong>
                                  ERP, Feedback and Website Coordinator
                                </strong>
                              </p>
                            </td>
                            <td>
                              <p>Mrs. Jyoti M.Waykule</p>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row outer-style mt-50">
               <h3 className="tl-event-details-area-title text-[#4f70b6]">PEO/PSO/PO</h3>

                <div className="col-lg-12">
                  <div className="tl-event-details-left mt-30">
                    <div className="tl-event-details-key-content tl-event-details-area">
                      <h3 className="tl-event-details-area-title text-[#4f70b6]">
                        Program Outcomes (POs)
                      </h3>
                      <ul className="tl-event-details-key-content-list">
                        <li>
                          <strong>PO1 : </strong>The graduates will be able to
                          apply knowledge of mathematics, science and
                          engineering in the field of Electric Vehicle.
                        </li>
                        <li>
                          <strong>PO2 : </strong>The graduates will demonstrate
                          an ability to identify, formulate and solve problems
                          in Electrical & Electronics engineering domain.
                        </li>
                        <li>
                          <strong>PO3 : </strong>The graduates will demonstrate
                          an ability to design a system component or algorithms
                          to meet the desired needs and within the context of
                          Electric Vehicle with appropriate safety, societal and
                          environmental considerations.
                        </li>
                        <li>
                          <strong>PO4 : </strong>The graduates will demonstrate
                          an ability to design electrical and electronic
                          circuits, perform experiments, analyze and interpret
                          the results to arrive at valid conclusion.
                        </li>
                        <li>
                          <strong>PO5 : </strong>The graduates will be able to
                          use modern engineering tools, equipment's and software
                          to analyze and solve problems.
                        </li>
                        <li>
                          <strong>PO6 : </strong>The graduates will show the
                          understanding of impact of engineering solutions on
                          the society and also will be aware of contemporary
                          issues
                        </li>
                        <li>
                          <strong>PO7 : </strong>The graduates will have an
                          ability to understand the impact of engineering
                          solutions in the environmental context.
                        </li>
                        <li>
                          <strong>PO8 : </strong>The graduates will have sense
                          of professional and ethical responsibilities.
                        </li>
                        <li>
                          <strong>PO9 : </strong>The graduates will demonstrate
                          an ability to work as a team in laboratories and
                          contribute in multidisciplinary tasks.
                        </li>
                        <li>
                          <strong>PO10 : </strong>The graduates will be able to
                          communicate effectively about their domain in both
                          verbal and written form.
                        </li>
                        <li>
                          <strong>PO11 : </strong>The graduates will demonstrate
                          the ability to apply the principles of Management and
                          Finance to the multidisciplinary projects as an
                          individual or as a member of the project team.
                        </li>
                        <li>
                          <strong>PO12 : </strong>The graduates will develop
                          confidence for self-education and ability for lifelong
                          learning in ever changing field of Electric Vehicle.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="tl-event-details-left mt-30">
                    <div className="tl-event-details-key-content tl-event-details-area">
                      <h3 className="tl-event-details-area-title text-[#4f70b6]">
                        Program Specific Outcomes (PSOs)
                      </h3>
                      <ul className="tl-event-details-key-content-list">
                        <li>
                          <strong>PSO1 : </strong>To be Aware the Importance of
                          Electrical and Electronics Engineers in the
                          Development of Seventh Sustainable Development Goal
                        </li>
                        <li>
                          <strong>PSO2 : </strong>To Apply the Fundamentals,
                          Mathematics, Science and Engineering in Electric
                          Vehicle and Renewable Energy Technologies and
                          development
                        </li>
                        <li>
                          <strong>PSO3 : </strong>To Evaluate different
                          techniques, hardware and software tools in Electrical
                          & Electronics Engineering based on Electric Vehicle
                          and Renewable Energy technology development
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalDeptAbout;
