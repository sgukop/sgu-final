'use client'
import React from 'react';
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';
import PEOsBpharmacy from './PharmacyPEO/PEOsBpharmacy';
import PEOsDpharmacy from './PharmacyPEO/PEOsDpharmacy';
import POBPharmacy from './PharmacyPEO/POBPharmacy';
import PODPharmacy from './PharmacyPEO/PODPharmacy';
import DPharmacyPEO from './DPharmacyPEO/PEO';
import DPharamcyPO from './DPharmacyPEO/PO';
import DPharmacyPSO from './DPharmacyPEO/PSO';

import BPharmacyPEO from './BPharmacyPEO/PEO';
import BPharmacyPO from './BPharmacyPEO/PO';
import BPharmacyPSO from './BPharmacyPEO/PSO';

import MPharmacyPEO from './MPharmacyPEO/PEO';
import MPharmacyPO from './MPharmacyPEO/PO';
import MPharmacyPSO from './MPharmacyPEO/PSO';

import QualityPEO from './MPharmacy-Quality-PEO/PEO';
import QualityPO from './MPharmacy-Quality-PEO/PO';
import QualityPSO from './MPharmacy-Quality-PEO/PSO';
import PEO from './DPharmacyPEO/PEO';



const PharmacyDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Pharmacy</h2>
        <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
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
                    src="assets/images/pharmacy-dept/about-department/Director Photo 01.png"
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
                  <strong>Warm Greetings of the day to all !</strong><br/>
                I, take this noble opportunity to Welcome the enthusiastic aspirants and their parents visiting Sanjay Ghodawat University Website! Pharmacy is one of the world's most popular and society loved profession. Every country of this world has this sector which is dramatically changing with time. Its an amazing field having diverse spectra of opportunities starting from information technology (IT) to patient care at hospital. In earlier times this field was confined to the development of organic drug molecules typically and therefore “Pharmacist” was called “Chemist” sometimes. But in recent times new sources and nature of drug has evolved which has made diversified materials available as drug. On the other hand, the role of pharmacist which was limited to identify materials form nature and directly use them as drugs for animals and human being has transformed in systematic pharmaceutical research and manufacturing. Now all the drugs are rigorously tested for their safety, efficacy and purity. It is evidence-based science for sure. Pharmaceutics is formulation development work, which is a major work flow of the pharmacy business where drugs are manufactured and made available for the masses. Whereas, quality assurance department monitor the drug preparation by cross-checking the drugs being manufactured at various levels for the accuracy and precision. Other branches of pharmacy like Pharma Chemistry, Pharmacology, Pharmacognosy, Pharma Analysis, Drug regulatory affairs and clinical research are dedicated to support the manufacturing business running under the umbrella of Pharmaceutics. In recent times Pharmaceutical Biotechnology trough research has brought several Bio-tech products called biopharmaceuticals. They are vaccine, Sera, hormones, enzymes, vitamins and complex proteins by chemical nature. They are manufactured by advanced bioprocess technology which itself is an emerging field, globally. <br/><br/>
                With this brief introduction of Pharmacy profession, I finally conclude my address with best wishes to all aspirants!   Regards!

                  </p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Professor. Dr. Subhash Kumbhar <br /> Professor & Director{" "}
                  </span>
                </div>
              </div>
            </div>


          <div className="row tl-event-details-row g-0 mt-50">
                <div className="col-lg-12">
                   <div className="tl-event-details-left">
                   <h3 className="tl-event-details-area-title text-[#4f70b6]">About Us</h3>
                        <div className="tl-event-details-key-content tl-event-details-area">
                           <p className="dark-mode-white-color text-justify">School of Pharmaceutical sciences (SGU) is established in year 2019, under a sprawling Campus of <strong>Sanjay Ghodawat University (SGU).</strong> School of Pharmaceutical Sciences is approved and being regulated by Pharmacy Council of India. The institute offers two years full time D. Pharm, four years full time B. Pharm. and two years full time M. Pharm (02 specialization) program that provides an intellectual implementation of value-based knowledge and creativity motivates students to grow.
                           World class infrastructural facilities and laboratories provide students an inspiring environment. A well stacked library which has vast collection of books, journals (National & International) and e-journals gives a brighter edge in current pharma affairs. Highly qualified and committed staff are pillars of the organization to empower the students in pharmaceutical field.<br/><br/>
                           The purpose of the organization is to provide excellent academic standards with industry exposure to meet the emerging needs of present zeal prone world. Institute provides exposure to pharmaceutical industrial environment through industrial visits and industry-institute interaction. Institute is offering students plenty of opportunities to seek their career in globally required segments of pharmaceutical field like pharmaceutical industries, research & development, academics, marketing, business and Pharma IT companies etc.
                           The knowledge from highly qualified and committed faculty, lectures from visiting experts from industry and scientists from pharma education and management science gives the student a great edge and make them highly appropriate candidate for the upcoming pharmaceutical challenges. Institute caters students with advanced technical knowledge and skills to tackle pharmaceutical technological and social challenges in diversified areas. <br/><br/>
                           Hands on experience, maximum participation of students in the classroom, use of modern digital technology, smart classrooms, solution-oriented thinking promotion, stress on research and innovation, choice-based credit system for flexibility in choosing areas of interest in pharmacy etc. are some of the features of the institute.<br/><br/>
                           To enhance competency in Pharmacy domain at national level, school provides additional Guidance for GPAT and NIPER entrance exams through its Finishing School Module. Finishing School also provides 30 hours guidance for 7th and 8th semester each in the form of additional courses in the different career streams of Pharmacy as per student career choice. These lectures/ training sessions are conducted by industry expert employed for the purpose through appropriate MOU with the respective organization.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be recognized as the top pharmaceutical education provider in the region by imparting high level of academic and research outcome which are aligned with better regional and global needs.</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                        <li><strong>M1-Outcomes based quality education - </strong>To provide outcomes-based quality education to produce competent and ethical pharmacy professionals to face emerging challenges of the globalized pharmaceutical industry.</li>
                        <li><strong>M2-Research and lifelong learning - </strong>To establish the strong connections, develop research profile and lifelong learning to optimize adequate care and healthcare delivery.</li>  
                        <li><strong>M3- inculcating values and ethics - </strong>To inculcate the professional ethics and human values in pharmacy professionals and developing them to serve the healthcare needs of society.</li>
                        <li><strong>M4- Fostering leadership qualities - </strong>To provide conducive environment to boost the practical skills, entrepreneur traits and leadership qualities in budding pharmacists to stay ahead in the competitive world.</li>     
                  </ul>
                </div>
            </div>
        </div>



              <div className="row outer-style mt-50">
           <h3 className="tl-event-details-area-title">B. Pharmacy</h3>
                <div>
                      <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                      <Nav.Link eventKey="overview-tab">PEO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="curriculum-tab">PO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="instructor-tab">PSO</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="tl-course-tab-content">
                                    <Tab.Pane eventKey="overview-tab">
                                          <BPharmacyPEO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="curriculum-tab">
                                          <BPharmacyPO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="instructor-tab">
                                        <BPharmacyPSO/>
                                    </Tab.Pane>
                                    
                            </Tab.Content>
                      </Tab.Container>
                  </div>
              </div>

              <div className="row outer-style mt-50">
           <h3 className="tl-event-details-area-title">M. Pharm Pharmaceutics</h3>
                <div>
                      <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                      <Nav.Link eventKey="overview-tab">PEO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="curriculum-tab">PO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="instructor-tab">PSO</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="tl-course-tab-content">
                                    <Tab.Pane eventKey="overview-tab">
                                          <MPharmacyPEO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="curriculum-tab">
                                          <MPharmacyPO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="instructor-tab">
                                        <MPharmacyPSO/>
                                    </Tab.Pane>
                                    
                            </Tab.Content>
                      </Tab.Container>
                  </div>
              </div>

              <div className="row outer-style mt-50">
           <h3 className="tl-event-details-area-title">M. Pharm Quality Assurance</h3>
                <div>
                      <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                      <Nav.Link eventKey="overview-tab">PEO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="curriculum-tab">PO</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="instructor-tab">PSO</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="tl-course-tab-content">
                                    <Tab.Pane eventKey="overview-tab">
                                          <QualityPEO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="curriculum-tab">
                                          <QualityPO/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="instructor-tab">
                                        <QualityPSO/>
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

export default PharmacyDeptAbout
