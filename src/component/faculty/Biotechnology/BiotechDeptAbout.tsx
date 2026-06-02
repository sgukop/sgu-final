"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Tab, Nav } from "react-bootstrap";
import PEOs from "./BiotechDeptPEO/PEOs"
import POs from "./BiotechDeptPEO/POs"
import PSO from "./BiotechDeptPEO/PSO"

const BiotechDeptAbout = () => {
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>

        <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="tl-14-about-img">
                  <img
                    src="assets/images/biotechnology/about-department/about-image.png"
                    alt="About Department Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
               
                <p className="dark-mode-white-color">        
                
                  Welcome to the Department of Biotechnology, where science, innovation, and societal impact converge to solve global challenges in healthcare, agriculture, industry, and environmental sustainability. Our dynamic, future-oriented biotechnology programme seamlessly bridges fundamental life sciences with emerging innovations. Rooted in interdisciplinary learning, the curriculum provides a strong foundation in microbiology, molecular biology, cell biology, biochemistry, bioinformatics, and biostatistics.
                  <br/><br/>

                  We are committed to nurturing young minds with the technical expertise, research aptitude, and ethical values required to thrive in this rapidly advancing field. The programme emphasizes both theoretical understanding and extensive, hands-on laboratory training. Students gain practical exposure to modern scientific instruments, biomolecular analysis, fermentation technology, and computational biology, while exploring cutting-edge areas like AI in biology and biopharmaceuticals.
                  <br/><br/>

                  Through a vibrant research culture, industrial interactions, workshops, and community-oriented learning, we encourage students to think critically and innovate for the benefit of society. Ultimately, our vision is to prepare competent researchers, professionals, and entrepreneurs ready to meet global scientific and industrial challenges. We invite aspiring students to join us in this exciting journey of discovery, where knowledge meets application and ideas evolve into sustainable solutions for a better future.
                  </p>

                </div>
            </div>
           
            <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">
                    To be a center of excellence in biotechnology education, research, and innovation, empowering future scientists to develop sustainable, ethical, and impactful solutions for society, industry, and the environment.
                    </h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                      <li>
                        To provide quality education and interdisciplinary training in biotechnology through strong foundations in life sciences, emerging technologies, and hands-on learning.
                      </li>

                      <li>
                        To promote cutting-edge research and innovation in areas such as medical biotechnology, genetic engineering, bioinformatics, industrial biotechnology, environmental biotechnology, and sustainable bioprocesses with global relevance.
                      </li>

                      <li>
                        To establish meaningful collaborations with reputed national and international academic, research, and industrial organizations for knowledge exchange, internships, research partnerships, and student development.
                      </li>

                      <li>
                        To contribute to the scientific community through impactful research, publications, patents, consultancy, and technology-driven solutions addressing societal and environmental challenges.
                      </li>

                      <li>
                        To foster innovation, critical thinking, and entrepreneurial spirit among students by encouraging research-based learning, startup culture, and problem-solving approaches.
                      </li>

                      <li>
                        To engage in community outreach, environmental awareness, and socially responsible initiatives aligned with the Sustainable Development Goals (SDGs) for the betterment of society.
                      </li>
                    </ul>
                    </div>
                </div>
           </div>

            <div className="row outer-style mt-50">
             <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
              <div
                data-spy="scroll"
                className="scrollspy-example z-depth-1 p-3 mb-4 col-md-12"
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
  );
};

export default BiotechDeptAbout;
