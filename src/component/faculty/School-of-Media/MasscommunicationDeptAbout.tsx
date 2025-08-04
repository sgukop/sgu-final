"use client"
import React from 'react'
import Link from 'next/link'
import Table from "react-bootstrap/Table";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import { Tab, Nav } from "react-bootstrap";
import PSO from "./Mass-Communication-PEO/PSO";
import PEO from "./Mass-Communication-PEO/PEO";
import PO from "./Mass-Communication-PEO/PO";

const MasscommunicationDeptAbout = () => {
  return (
  <section className="tl-8-about tl-3-section-spacing">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Department of Mass Communication</h2>
    <div className="row">
          <MenuList dept="Mass Communication" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row g-0 align-items-center">
            <div className="col-xl-6 col-lg-5">
                <div className="tl-8-about-img">
                    <img src="assets/images/mass-communication-dept/about-department/about-us.png" alt="About Mass COmmunication Department" className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}} />
                </div>
            </div>

            <div className="col-xl-5 col-lg-7">
                <div className="tl-8-about-txt yellow-clr-hover">
                <p className="tl-8-feature-descr">The department of Mass Communication and Journalism offers undergraduate and post graduate degrees</p>
                    <div className="tl-8-feature">
                        <h6 className="tl-8-feature-title mt-2">Bachelor in Mass Communication</h6>
                        <p className="tl-8-feature-descr mt-2">It is three years graduation level program covers all major fields of Mass Media which are required for aspiring media professionals. Students will be trained with anchoring and reporting skills, Radio Production & Jockeying, Video Editing, Camera & Lighting, News & Script Writing and TV Production & Direction. It will also include Media Management, Media Issues & Ethics, Public relation & Advertising, Print Journalism, Professional Communication, Language Skills, Currents Affairs and Economics</p>

                        {/* <h6 className="tl-8-feature-title mt-4">Master in Mass Communication</h6>
                        <p className="tl-8-feature-descr mt-2">Provides two years Masters Degree in mass communication . The program covers all major aspects of TV Journalism which includes News & Entertainment Anchoring, Reporting Skills, News Script Writing, Camera & Lighting, Post Production & Video Editing. The course also focuses on News Program Production i.e. news bulletin, Panel Discussions, Chat Shows etc. The course also provides the detailed study of Mass Communication Theories, Public Relation & Advertising, Media Ethics & Issues, Media Research and Current Affairs & General Knowledge</p>  */}
                    </div>
                </div>
            </div>
        </div>
        <div className="row tl-event-details-row g-0 mt-30 mb-50">
            <div className="col-lg-12">
                <div className="tl-event-details-left">
                   <h3 className="tl-event-details-area-title">Courses Offered</h3>
                    <div className="tl-event-details-key-content tl-event-details-area">
                        <Table responsive className="governing-table">
                            <thead>
                                <tr>
                                    <th><p className="text-[#4f70b6]"><strong>Courses</strong></p></th>
                                    <th><p className="text-[#4f70b6]"><strong>Duration of Course</strong></p></th>
                                    <th><p className="text-[#4f70b6]"><strong>Eligibility</strong></p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p>UG - Bachelor of Arts in Mass Communication (BA - Mass Communication)</p></td>
                                    <td><p>3 Years</p></td>
                                    <td><p>12th or Equivalent examination passed</p></td>
                                </tr>
                                {/* <tr>
                                    <td><p>PG - Master of Arts in Mass Communication (MA - Mass Communication)</p></td>
                                    <td><p>2 Years</p></td>
                                    <td><p>Graduation in relevant stream</p></td>
                                </tr>  */}
                            </tbody>
                        </Table>
                      </div>
                  </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                        <h3 className="tl-event-details-area-title">Job Prospective</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <p className="tl-8-feature-descr">The Courses offered at SGULA have a strong professional bias and open up a host of employment/placement avenues for successful students. The Department actively facilitates placement of students completing the Post Graduate programmes</p>
                      </div>
                  </div>
                </div>
            </div>

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">
                    To be a leader in producing highly skilled, ethical, and socially responsible media professionals who excel in journalism and mass communication, contributing to an informed, engaged, and just society.
                    </h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                      <li>To provide comprehensive education and training in journalism, media, and communication, fostering critical thinking, creativity, and professional excellence.</li>
                      <li>To equip students with the knowledge and skills required for impactful storytelling across diverse media platforms.</li>
                      <li>To nurture ethical responsibility and promote a deep understanding of the media's role in society.</li>
                      <li>To encourage innovation, adaptability, and lifelong learning to meet the evolving demands of the media industry.</li>
                     </ul>
                    </div>
                </div>
          </div>

          <div className="row outer-style mt-50">
            <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
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
)
}

export default MasscommunicationDeptAbout