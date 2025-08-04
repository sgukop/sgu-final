'use client'
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import PEO from './LawDeptPEO/PEO';
import PO from './LawDeptPEO/PO';
import PSO from './LawDeptPEO/PSO';

const LawDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>
        <div className="row">
          <MenuList dept="School of Legal Studies(Law)" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/law-dept/about-department/director.png" alt="Director Image" className="rounded-full"
                          style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                        <h2 className="tl-14-section-title">Director Desk</h2>
                        <p className="dark-mode-white-color">	
                           	Seasons Greetings from Department of School of Legal Studies (Law), Sanjay Ghodwat University (SGU) Kolhapur, Maharashtra. Thank you for giving the support towards the development of our Department at the Sanjay Ghodawat University. <br/><br/>
                            The University aims at attaining the honour of training and imparting quality legal education to aspiring students and creating a set of socially responsible legal professionals who posses the skills that the industry and the profession expect of them.SGU wants its students to imbibe three key values: the intellectual curiosity to INQUIRE, the personal capability to INSPIRE, and show the commitment to deliver positive social IMPACT.</p>
                            <span className="dark-mode-white-color mt-4" style={{fontWeight: "bold"}}> Director, <br/> Adv.Dr. Anjali Patil </span>
                    </div>
                </div>
            </div>

            <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                       <h3 className="tl-event-details-area-title">Message from the Director of the department</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                            <p className="dark-mode-white-color">Law being a dynamic discipline is always in a flux. Unless one possesses critical thinking and analytical skills, meaningful comprehension of legal discourse is not possible. Lawyers must possess logical argumentative skills for which nurturing research skills becomes imperative.<br/><br/>

                            We aim to produce successful, socially responsible and accountable professionals. Our goal is to provide secular, inclusive, humane, modern and updated education as well as training to the young brains.<br/><br/>

                            To achieve the aforesaid, we provide non-academic support including modern campus with latest amenities and facilities, well equipped Classrooms, Multipurpose Halls, Libraries, IT Labs, Resource Centers, Moot Court, Legal Aid Clinic, Placement Cell, Personality Enhancement and Development Cells, Food Court, Medical Facilities, Sports facilities and appropriate Professional Security of the Campus, to ensure the manifold development of the personality of the students, staff and faculty members, ensuring their pro-active involvement in the development of the law school. As a placement driven University, our dedicated Placement team proactively assists students for internship opportunities and career placements.<br/><br/>

                            To meet the interdisciplinary needs of the B.A. L.L.B. (Hons.) and B.B.A. L.L.B. (Hons.) programme, our law school possesses experienced core faculties from diverse specializations in different subjects and streams. In addition, reputed academicians, renowned professional lawyers, Law firm consultants, practitioners, renowned members of the Judiciary and Legal Luminaries are invited as visiting professors to provide practical exposure of the legal profession to students.<br/><br/>

                            Four dynamic specializations are provided to our students including, Business law, Constitution law, Crime & Criminology, Intellectual Property Rights. Assurance of Learning (AOL) model through outcome-based education. Regular updation of courses by experts, to be contemporary and relevant. Practical subjects like Moot Courts, Drafting, Pleading, Conveyancing & ADR. Contemporary curriculum with modern courses like Data Science & Artificial Intelligence. Planned and focused credit-based compulsory Internship Program are some major attributes of the law courses at SGU.</p>
                        </div>
                  </div>
                </div>
            </div>

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">"To be a center of excellence in legal education, fostering innovative thinkers and ethical leaders committed to justice, human rights, and societal well-being."</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <h6 className="vision-info">"To provide quality legal education that fosters ethical values, critical thinking, and professional excellence, empowering students to become leaders and advocates for justice in a dynamic global society."</h6>
                    </div>
                </div>
           </div>

        <div className="row outer-style mt-50">
           <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
                <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                  <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                      <Nav className="nav-tabs tl-course-details-navs">
                        <Nav.Item>
                            <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEOs)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="instructor-tab">Program Specific Outcomes (PSO)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="curriculum-tab">Program Outcomes (POs)</Nav.Link>
                        </Nav.Item>
                      </Nav>

                      <Tab.Content id="tl-course-tab-content">
                          <Tab.Pane eventKey="overview-tab">
                              <PEO/>
                          </Tab.Pane>

                          <Tab.Pane eventKey="curriculum-tab">
                              <PO/>
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

export default LawDeptAbout
