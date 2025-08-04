'use client'
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import { Tab, Nav } from "react-bootstrap";
import PSO from './Program-Educational-Objectives/PSO';
import PEOs from './Program-Educational-Objectives/PEOs';
import POs from './Program-Educational-Objectives/POs';

const MathematicsDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Mathematics Department</h2>
        <div className="row">
          <MenuList dept="Mathematics" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-14-about-img">
                        <img src="assets/images/department-of-mathematics/about-department/about-dept-image.png" alt="About Department" className="rounded-full"
                          style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div>
                       <h2 className="tl-14-section-title">About Us</h2>
                       <p className="dark-mode-white-color">The department of Mathematics is rich in academics with 09 highly qualified and well experienced faculty members. 
                        <br/><br/>
                        Department has computer lab with 20 computers with internet connections, where student can develop their programming skill by using various software viz., Scilab, WxMaxima, C/C++, Sage, R, Python, GeoGebra, , LaTeX, GAP etc. <br/><br/>
                        
                        The department of Mathematics aims to educate students who are oriented towards research and teaching in both fundamental and advanced areas of Mathematical Sciences.</p>
                    </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To provide an academic environment where students can learn Mathematics not only to become a competent Mathematicians but also skilled users of Mathematics in the solution of problems arising in science, engineering, economics and social sciences</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                    <li>To prepare excellent teachers and good academicians to cater the needs of schools and colleges.</li>
		                    <li>To encourage students to pursue research and application oriented career to solve real life problems.</li>
                        <li>To make students aware of technology to explore mathematics concepts through experiments and projects.</li>
                        <li>To produce Post graduate students with strong foundation to join research or to join institute/ University.</li>
                        <li>To promote and foster cultural and high quality teaching and learning and serving social needs.</li>
                        <li>To work both independently and collaboratively on mathematical problems</li>
                        <li>To use contemporary mathematical software</li>
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
                    <Nav.Link eventKey="overview-tab">Mathematics Program Educational Objectives <br/> (PEOs) for Master of Science</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="curriculum-tab">Mathematics Program Outcomes <br/> (POs) for Master of Science</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="instructor-tab">Mathematics Program Specific Outcomes <br/> (PSOs) for Master of Science</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content id="tl-course-tab-content">
                  <Tab.Pane eventKey="overview-tab">
                    <PEOs/>
                  </Tab.Pane>

                  <Tab.Pane eventKey="curriculum-tab">
                  <POs/>
                  </Tab.Pane>

                  <Tab.Pane eventKey="instructor-tab">
                  <PSO/>
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

export default MathematicsDeptAbout
