'use client'
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import BSCPO from './ChemicalDeptPO/BSCPO';
import MSCPO from './ChemicalDeptPO/MSCPO';
import BSCPEO from './ChemicalDeptPO/BSCPEO';
import BSCPSO from './ChemicalDeptPO/BSCPSO';
import MSCPEO from './ChemicalDeptPO/MSCPEO';
import MSCPSO from './ChemicalDeptPO/MSCPSO';

const ChemicalDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Chemistry Department</h2>
        <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row g-2 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="/assets/images/faculty-profile-photos/chemistry/1. Dr. ANAND SAWANT.jpg" alt="About Department" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                       <h2 className="tl-14-section-title">HOD's Desk</h2>
                      {/* <p className="dark-mode-white-color">Chemistry is central science that deals with everyday life. Chemistry is all about knowing, measuring and making material. It can be making molecules, modifying and studying their properties.<br/><br/>
                        Students can make their bright career in chemistry with our graduate, post graduate and PhD programs in chemistry. Deep understanding of chemistry can enable our graduates to take up new challenges in all aspects of chemistry that includes organic synthesis, chemical analysis, catalysis, nanotechnology, biochemistry etc. Our focused skill enhancement courses develop intellectual, practical and transferable skills of students.</p>  */}
                        <p className="dark-mode-white-color text-justify">The Department of Chemistry, under the esteemed School of Physical and Chemical Sciences started functioning since the inception of SGU in the year 2017. The department has been actively involved in teaching and research activities by offering Bachelor’s, Master’s, and Doctoral degree programs in Chemistry. The Department has well-equipped modern research laboratories with state-of-the art facilities like GC, HPLC, UV-visible spectrophotometer, Electrochemical Workstation etc. The Department has tie-ups with recognized institutions and industries for student projects, training and research activities. The department has enthusiastic, competent, well qualified and dedicated faculty members whose areas of expertise covers not only the core areas of chemistry but also many multidisciplinary areas such as energy and Materials science, Green Chemistry and catalysis, Synthetic chemistry, Ionic liquid, environmental remediation and nanoscience, publishing high-quality papers and patents clearly portray our dedication. 
                        </p>
                        <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                   Dr. Anand Dilip Sawant , <br /> Head, Department of Chemistry{" "}
                  </span>
                    </div>
                </div>
            </div>

          <div className="row tl-event-details-row g-0 mt-50">
              <div className="col-lg-12">
                <div className="tl-event-details-left">
                 <h3 className="tl-event-details-area-title text-[#4f70b6]">About Department</h3>
                  <div className="tl-event-details-key-content tl-event-details-area">
                    <p className="dark-mode-white-color">
                    Chemistry is central science that deals with everyday life.Students can make their bright career in chemistry with our graduate, post graduate and PhD programs in chemistry. Deep understanding of chemistry can enable our graduates to take up new challenges in all aspects of chemistry that includes organic synthesis, chemical analysis, catalysis, nanotechnology, biochemistry etc. Our focused skill enhancement courses develop intellectual, practical and transferable skills of students.
                    </p>
                </div>
                </div>
              </div>
              
            </div>  
           <div className="row tl-event-details-row g-0 mt-50">
  <div className="col-lg-12">
    <div className="tl-event-details-left">

      {/* Infrastructure Features */}
      <h3 className="tl-event-details-area-title text-[#4f70b6]">
        Infrastructure Features
      </h3>

      <div className="tl-event-details-key-content tl-event-details-area">
        <ul className="list-disc pl-5 space-y-3 dark-mode-white-color">
          <li>
            <strong>State-of-the-Art Laboratories:</strong> Equipped with advanced
            instrumentation and modern laboratory facilities for advanced
            experiments, research, and hands-on training.
          </li>
        </ul>
      </div>

      {/* Curriculum & Academic Features */}
      <h3 className="tl-event-details-area-title text-[#4f70b6] mt-5">
        Curriculum & Academic Features
      </h3>

      <div className="tl-event-details-key-content tl-event-details-area">
        <ul className="list-disc pl-5 space-y-3 dark-mode-white-color">
          <li>
            <strong>Highly Qualified Faculty:</strong> Experienced faculty members
            committed to quality teaching, mentoring, and research excellence.
          </li>

          <li>
            <strong>Industry-Aligned Curriculum:</strong> Curriculum designed to
            meet global industry standards and future skill requirements.
          </li>

          <li>
            <strong>Unique Industry & Job-Ready Courses:</strong> Professional
            science practices integrated into the curriculum to enhance
            employability and practical expertise.
          </li>

          <li>
            <strong>Internships & Placements:</strong> Strong industry linkages
            offering internship opportunities and excellent placement support.
          </li>

          <li>
            <strong>Core Technical Skills:</strong> Hands-on training in HPLC, GC,
            UV–Visible Spectroscopy, FTIR, NMR, wet laboratory SOPs, analytical
            method validation, and quality control documentation.
          </li>

          <li>
            <strong>Digital & AI Skills:</strong> Training in data analysis using
            Excel, Python/R, ChemDraw, molecular modelling, and AI-powered
            research tools.
          </li>

          <li>
            <strong>Safety & Compliance:</strong> Practical knowledge of GMP,
            GLP, laboratory safety, chemical handling, waste management, and
            regulatory documentation.
          </li>
        </ul>
      </div>

      {/* Career Prospects */}
      <h3 className="tl-event-details-area-title text-[#4f70b6] mt-5">
        Career Prospects
      </h3>

      <div className="tl-event-details-key-content tl-event-details-area">
        <ul className="list-disc pl-5 space-y-3 dark-mode-white-color">
          <li>
            <strong>Pharma & Biotech:</strong> Career opportunities in drug
            discovery, CROs, CDMOs, API development, and biotechnology
            industries.
          </li>

          <li>
            <strong>Government & Private Laboratories:</strong> Opportunities in
            quality control, regulatory affairs, analytical testing, and applied
            research laboratories.
          </li>

          <li>
            <strong>Research & Academia:</strong> Pathways to Ph.D. programs,
            postdoctoral fellowships, scientific research, and teaching careers.
          </li>

          <li>
            <strong>Global Careers:</strong> International fellowships, industry
            placements, higher education, and research positions abroad.
          </li>

          <li>
            <strong>Leadership Roles:</strong> Career advancement in project
            management, regulatory affairs, scientific communication, and
            research leadership.
          </li>
        </ul>
      </div>

    </div>
  </div>
</div> 

            <div className="row g-2 mt-50">
                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                        <h3 className="tl-event-details-area-title text-white">Vision</h3>
                        <h6 className="vision-info">“To emerge as a centre of excellence in education and research in the Chemical Sciences in the region.”</h6>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                        <h3 className="tl-event-details-area-title text-white">Mission</h3>
                            <ul className="course-subjects">
                                <li>To provide quality education to graduates and postgraduates in Chemical Sciences.</li>
                                <li>To advance Chemical Sciences by carrying out world class research in collaboration with other departments, industries and research laboratories.</li>
                                <li>To create intellectual manpower relevant to the industry and society at large.</li>
                                <li>To encourage entrepreneurship and skill development programs.</li>
                                <li>To collaborate with institutions of international repute for academic excellence.</li>
                                <li>To prepare students for life-long learning and leadership in a global academic culture.</li>
                            </ul>
                        </div>
                </div>
           </div>

        <div className="row outer-style mt-50">
            <h3 className="tl-event-details-area-title">PEO, PO and PSO (B.Sc.)</h3>
   
                <div data-spy="scroll" className="scrollspy-example z-depth-1 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                  <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                      <Nav className="nav-tabs tl-course-details-navs">
                        <Nav.Item>
                            <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEOs)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="curriculum-tab">Program Outcomes (POs)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="instruction-tab">Program Specific Outcomes (PSOs)</Nav.Link>
                        </Nav.Item>
                    </Nav>

                      <Tab.Content id="tl-course-tab-content">
                          <Tab.Pane eventKey="overview-tab">
                              <BSCPEO/>
                          </Tab.Pane>

                          <Tab.Pane eventKey="curriculum-tab">
                              <BSCPO/>
                          </Tab.Pane>

                          <Tab.Pane eventKey="instruction-tab">
                              <BSCPSO/>
                          </Tab.Pane>
                    </Tab.Content>
                        
                  </Tab.Container>
                </div>
            </div>

            <div className="row outer-style mt-50">
            <h3 className="tl-event-details-area-title">PEO, PO and PSO (M.Sc.)</h3>
   
                <div data-spy="scroll" className="scrollspy-example z-depth-1 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                  <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                      <Nav className="nav-tabs tl-course-details-navs">
                        <Nav.Item>
                            <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEOs)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="curriculum-tab">Program Outcomes (POs)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="instruction-tab">Program Specific Outcomes (PSOs)</Nav.Link>
                        </Nav.Item>
                    </Nav>

                      <Tab.Content id="tl-course-tab-content">
                          <Tab.Pane eventKey="overview-tab">
                              <MSCPEO/>
                          </Tab.Pane>

                          <Tab.Pane eventKey="curriculum-tab">
                              <MSCPO/>
                          </Tab.Pane>

                          <Tab.Pane eventKey="instruction-tab">
                              <MSCPSO/>
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

export default ChemicalDeptAbout
