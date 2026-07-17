'use client'
import React from 'react';
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import PSOs from "./Commerce-Dept-PO/PSOs";
import PEOs from "./Commerce-Dept-PO/PEOs";
import POs from "./Commerce-Dept-PO/POs";
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const CommerceDeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Department of Commerce</h2>
        <div className="row">
          <MenuList dept="Commerce" subMenu={NavLinks} />
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
                    src="/assets/images/faculty-profile-photos/male.jpg"
                    alt="Dean Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div>
                  <h2 className="tl-14-section-title text-[#4f70b6] lg:mt-10 sm:mt-0">Dean Desk</h2>
                  <p className="dark-mode-white-color" style={{textAlign:"justify"}}>
                   Dr. S. Gomathi, Dean of the Faculty of Commerce and Management, is a visionary academic leader with more than three decades of experience in higher education, research, and academic administration. She is recognized for her dynamic leadership, scholarly contributions, and commitment to shaping the next generation of management professionals.<br/><br/>

                  Dr. Gomathi holds a Ph.D. in Human Resource Management from Alagappa University, which she completed at the age of 26. Her distinguished academic career includes serving as Director and Professor at the School of Management, CMR University, Bengaluru, and as Senior Professor and Head of the Department at VIT Business School, VIT University, for 29 years. <br/><br/>  
                  A prolific scholar, Dr. Gomathi has authored eight books and published over 56 research papers in reputed national and international journals and conferences. Her areas of expertise include Organizational Behavior, Human Resource Management, Emotional Intelligence, Stress Management, Balanced Scorecard, and Talent Management. She has guided 13 doctoral scholars and mentored over 500 postgraduate projects, contributing significantly to research and professional development in management education.<br/><br/>
                  In addition to her academic achievements, Dr. Gomathi has served as a consultant, trainer, and resource person for leading institutions and corporations such as ITCOT, TIIC, LIC, and the Institution of Engineers. Her training and consultancy engagements have strengthened organizational capabilities and leadership effectiveness.<br/><br/> 
                  At Sanjay Ghodawat University, Dr. Gomathi’s vision is to cultivate a culture of innovation, entrepreneurship, and holistic learning, integrating values with technology-driven education. She strives to empower students to become competent, ethical, and globally responsible leaders who can adapt to the evolving business landscape.<br/><br/> 
                  Her unwavering dedication to academic excellence, research, and student success continues to inspire and elevate the Faculty of Commerce and Management.<br/><br/>

                  </p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Dr. Uttam Pandurang Jadhav <br/>
                    I/C Dean, <br/>
                    Faculty of Commerce and Management

                  </span>
                </div>
              </div>
            </div>


            <div className="row g-4">
              <div className="col-lg-5">
                <div className="tl-14-about-img">
                  <img
                    src="assets/images/commerce-dept/about-department/hod-photo.png"
                    alt="HOD Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div>
                  <h2 className="tl-14-section-title text-[#4f70b6] lg:mt-10 sm:mt-0">HOD's Desk</h2>
                  <p className="dark-mode-white-color" style={{textAlign:"justify"}}>
                  Greetings from the Department of Commerce, Faculty of Commerce and Management, Sanjay Ghodawat University, Kolhapur.
I feel privileged to introduce the <strong>Department of Commerce</strong>. The department started in 2017 with B.Com. Program. Over 8 years, the department currently boasts Distinguished Professors of practice, reputed Visiting Speakers and dynamic Faculties. <br/><br/>
Our academic curricula cover broad fields of Accounting & Finance, Taxation, Costing, from fundamentals to advanced and emerging areas such as Artificial Intelligence in Investment, Computerized Accounting and taxation with GST, Fin Tech, Financial Modeling in Accounting and Costing, to name a few, which impart strong foundation on several significant aspects of commerce profession and enhance the state of the knowledge of the students.
The department have implemented NEP 2020 aligned Curriculum in 2023, through which our department not only covers the breadth of different futuristic areas like AI in Investment, Business Analytics, Financial Modeling, etc, but also make them stand firm by imparting in-depth knowledge on the fundamental aspects of Commerce and other multidisciplinary areas. Moreover, most of the teaching courses contain practical components. Along with the lab practical and Community and Field Projects, Industrial Internship, the students are given ample opportunity to gain hands-on expertise in all the Technical, Social and Life Skills to enhance their employability and foster the entrepreneurial midset. In addition, to become industry-ready, the students are also trained in communication skills through the given formal courses and seminars. 
With the University motto of “Empowering Lives Globally,” over the years, the Department, through its faculty, staff and Curricular, Co curricular activities has remarkably influenced the students to achieve their life goal. 
If you have further questions after visiting our website which provides details of the Department facilities and various student activities, please feel free to contact us on email address provided on faculty pages.
Thank You for Visiting Us!

                  </p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Dr. Revati Deshpande. <br/>
                    Head, Department of Commerce.

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
                    In line with the National Education Policy (NEP) 2020, Bachelor of Commerce (B.Com.) program curriculum with three years and four years with Honours or Honours with Research optional is designed with updated knowledge related to accounting, banking & insurance, costing, auditing, taxation, etc. and delivered with the help of classroom teaching and practical including role-plays, debates, quizzes, presentations, case studies, live projects, simulations, internship and many more modern tools to promote learning and provide a variety of opportunities to enhance employability skills of the students aspiring for great success in their career.
                    </p>
                </div>
                </div>
              </div>
              
            </div>  

          {/*  <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                    <div className="tl-14-about-img">
                        <img src="assets/images/commerce-dept/about-department/about.png" alt="About Department Image" className="rounded-full"
                        style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="tl-14-about-txt">
                        <h3 className="tl-event-details-area-title">About Us</h3>
                        <p className="dark-mode-white-color">In line with the National Education Policy (NEP) 2020, Bachelor of Commerce (B.Com.) program curriculum with three years and four years with Honours or Honours with Research optional is designed with updated knowledge related to accounting, banking & insurance, costing, auditing, taxation, etc. and delivered with the help of classroom teaching and practical including role-plays, debates, quizzes, presentations, case studies, live projects, simulations, internship and many more modern tools to promote learning and provide a variety of opportunities to enhance employability skills of the students aspiring for great success in their career.</p>

                    </div>
                </div>
            </div>  */}

          <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be among globally acclaimed B-schools by developing transformational leaders through competencies, conviction and value creation for sustainable development.</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
		                    <li>To become a dynamic and responsive business school which strives for sustainable growth.</li>
                        <li>To bridge the gap between corporate expectations and academic delivery to prepare future ready management professionals.</li>  
                        <li>Contribute to management knowledge through research for societal concern.</li>
                        <li>To make a difference in society through transformational education, innovation, value creation, knowledge creation and enhancing employability.</li>     
                    </ul>
                    </div>
                </div>
           </div>

        <div className="row outer-style mt-50">
          <h3 className="tl-event-details-area-title">PEOs,POs,PSOs</h3>
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
                          Program Specific Outcomes (PSOs)
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
                      <PSOs />
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

export default CommerceDeptAbout
