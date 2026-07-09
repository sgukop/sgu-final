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
                        <img src="/assets/images/faculty-profile-photos/chemistry/HOD.jpeg" alt="About Department" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                    <div className="col-lg-7">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title">HOD's Desk</h2>
                            
                            <p className="dark-mode-white-color text-justify">
                                Welcome to the Department of Chemistry!
                            </p>
                            
                            <p className="dark-mode-white-color text-justify">
                                Since its inception in 2017, the Department of Chemistry, under the School of Physical and Chemical Sciences, has been a cornerstone of academic excellence and research at Sanjay Ghodawat University. Chemistry is the "central science" that touches every aspect of daily life, and our department is dedicated to preparing the next generation of scientists to meet the global challenges of the future.
                            </p>

                            <ul className="dark-mode-white-color text-justify list-unstyled">
                                <li className="mb-3">
                                    <strong>Academic Excellence & Industry Integration:</strong> We offer comprehensive B.Sc., M.Sc., and Ph.D. programs designed with an industry-aligned curriculum that meets global standards. Our teaching methodology goes beyond traditional boundaries, integrating professional practices in sciences to ensure our graduates are not just degree holders, but job-ready professionals. Our faculty members are highly qualified experts in diverse fields, ranging from core organic and analytical chemistry to multidisciplinary areas like Green Chemistry, Nanoscience, Energy and Materials Science, and Catalysis.
                                </li>
                                <li className="mb-3">
                                    <strong>State-of-the-Art Infrastructure:</strong> Our students train in state-of-the-art laboratories equipped with advanced instrumentation, including HPLC, GC, UV-Visible Spectrophotometers, FTIR, NMR, and Electrochemical Workstations. We believe in hands-on training, ensuring mastery over wet lab SOPs, method validation, and QC documentation.
                                </li>
                                <li className="mb-3">
                                    <strong>Future-Ready Skills for a Global Career:</strong> In alignment with modern demands, we have integrated Digital and AI skills into our research tools, providing training in data analysis (Excel, Python/R), ChemDraw, and molecular modelling. Our focus on Safety and Compliance (GMP/GLP) ensures that our students are prepared for high-stakes roles in Pharma, Biotech, CRO, and API development.
                                </li>
                                <li className="mb-3">
                                    <strong>Research, Collaboration, and Beyond:</strong> With strong industry linkages and tie-ups with recognized institutions, we provide excellent internships and placement records. Whether our students aim for international research fellowships, leadership roles in regulatory affairs, or careers in academia, we provide the pathways to achieve those global ambitions.
                                </li>
                            </ul>

                            <p className="dark-mode-white-color text-justify">
                                Our vision is to emerge as a center of excellence in education and research, fostering an environment of lifelong learning and leadership. We invite you to join us in this journey of discovery and professional growth.
                            </p>

                            <span
                                className="dark-mode-white-color mt-4 d-block"
                                style={{ fontWeight: "bold" }}
                            >
                                Dr. Anand Dilip Sawant , <br /> Head, Department of Chemistry
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
      <strong>Highly Qualified Faculty:</strong> Experienced teaching staff
      committed to mentoring, research, and academic excellence.
    </li>

    <li>
      <strong>Unique Industry & Job-Ready Courses:</strong> Professional
      practices in sciences integrated into the curriculum, along with
      industry internships, to enhance employability and practical skills.
    </li>

    <li>
      <strong>Core Technical Skills:</strong> Mastery of HPLC, GC, UV–Visible
      Spectroscopy, FTIR, NMR, wet laboratory SOPs, analytical method
      validation, and quality control documentation.
    </li>

    <li>
      <strong>Digital & AI Skills:</strong> Training in data analysis using
      Excel, Python/R, ChemDraw, molecular modelling, and AI-based
      research tools.
    </li>

    <li>
      <strong>Safety & Compliance:</strong> Practical knowledge of GMP,
      GLP compliance, laboratory safety, chemical handling, waste
      management, and regulatory documentation.
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
      <strong>Government & Private Labs:</strong> Opportunities in quality
      control (QC), regulatory affairs, analytical testing, and applied
      research laboratories.
    </li>

    <li>
      <strong>Research & Academia:</strong> Pathways to Ph.D. programs,
      postdoctoral fellowships, scientific research, and teaching careers.
    </li>
  </ul>
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
