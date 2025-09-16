"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Tab, Nav } from "react-bootstrap";
import PEO from "./AIDS-PEO/PEO";
import PO from "./AIDS-PEO/PO";
import PSO from "./AIDS-PEO/PSO";


const AIandDSDeptAbout = () => {
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>

        <div className="row">
          <MenuList dept="Artificial Intelligence and Data Science" subMenu={NavLinks} />
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
                    src="assets/images/AIDS/hod-photo/aids-hod.JPG"
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
                  It gives me immense pleasure to welcome you to the Department of Artificial Intelligence and Data Science at Sanjay Ghodawat University. With the world moving rapidly towards an AI-driven economy, this program is a unique initiative to empower students with the knowledge and skills required to become innovative technologists, researchers, and entrepreneurs.
                  </p>
                  <p className="dark-mode-white-color text-justify">
                  Our tie-up with NxtWave Institute of Advanced Technology bridges the gap between academia and industry, ensuring that students learn not just theory but also its application in solving real-world challenges. The department focuses on holistic development through rigorous academics, industry-driven projects, internships, aptitude building, and communication skills. I firmly believe that our students will emerge as industry-ready professionals and responsible citizens who will contribute meaningfully to society
                  </p>
                  <p className="text-center mt-2"><strong>“WISH YOU ALL THE BEST”</strong></p>
                  <span
                    className="dark-mode-white-color mt-4"
                    style={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Mr. Gurunath Machhale <br /> Head of Department{" "}
                  </span>
                </div>
              </div>
            </div>

           <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">To be a leading department in AI and ML through  fostering academic excellence, innovative research, and entrepreneurial skills to create globally recognized  professionals.
                    </h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                      <li>
                      To provide quality education in Artificial Intelligence, Data Science, and emerging technologies through a well-structured curriculum and innovative pedagogy.
                      </li>
                      <li>
                      To foster industry-academia collaboration for skill development, internships, and real-world project exposure.
                      </li>
                      <li>
                      To nurture critical thinking, problem-solving abilities, and research aptitude among students.
                      </li>
                      <li>
                      To inculcate ethical values, communication skills, and social responsibility for holistic personality development.
                      </li>
                      <li>
                      To encourage innovation, entrepreneurship, and continuous learning for addressing global challenges.
                      </li>
                    </ul>
                    </div>
                </div>
           </div>

           <div className="row outer-style mt-50">
              <h3 className="tl-event-details-area-title text-[#4f70b6]">PEO, PO and PSO</h3>
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

                <h3 className="tl-event-details-area-title text-[#4f70b6]">
                  Programmes Offered Under AI and DS Department
                </h3>
                <div className="mt-4 mb-8">
                  <h4 className="font-semibold">UG Program</h4>
                  <p className="mt-2">
                    Department of Artificial Intelligence and Data Science (AI & DS)
                    <br />
                    The Department of Artificial Intelligence and Data Science at Sanjay
                    Ghodawat University was established in 2025 with the vision of nurturing
                    future-ready engineers equipped with strong technical expertise,
                    problem-solving ability, and industry-aligned skills. The program has been
                    designed in collaboration with our esteemed training partner, NxtWave
                    Institute of Advanced Technology, to provide students with cutting-edge
                    knowledge and hands-on experience in Artificial Intelligence, Data Science,
                    and modern computing technologies. The curriculum integrates core computing,
                    mathematics, AI/ML, cloud, and communication skills along with industry
                    projects, internships, and multi-disciplinary learning to ensure graduates
                    are well-prepared for the dynamic global workforce.
                  </p>
                </div>

               <h3 className="tl-event-details-area-title text-[#4f70b6]">Career Opportunities after B.Tech in AI & DS</h3>
               <p>Graduates of the Artificial Intelligence and Data Science program will have a wide spectrum of career opportunities in IT, research, product development, consulting, and entrepreneurship. Since AI & DS are driving the Industry 4.0 revolution, students will be in demand across multiple sectors including technology, finance, healthcare, retail, manufacturing, education, and government services</p>
                {/* Core AI & Data Science Roles */}
                  <div className="mt-8 mb-8">
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">
                      Core AI & Data Science Roles
                    </h3>
                    <ul className="tl-event-details-key-content-list">
                      <li>
                        <strong>Data Scientist : </strong>
                        Analyzing and interpreting complex data to derive insights for business decisions.
                      </li>
                      <li>
                        <strong>Machine Learning Engineer : </strong>
                        Designing, training, and deploying machine learning models.
                      </li>
                      <li>
                        <strong>Artificial Intelligence Engineer : </strong>
                        Developing intelligent systems using NLP, computer vision, and deep learning.
                      </li>
                      <li>
                        <strong>Deep Learning Specialist : </strong>
                        Working on advanced neural network architectures (CNNs, RNNs, Transformers).
                      </li>
                      <li>
                        <strong>LLM/Generative AI Developer : </strong>
                        Building applications using Large Language Models (LLMs) like GPT, BERT, etc.
                      </li>
                      <li>
                        <strong>AI Research Scientist : </strong>
                        Researching cutting-edge algorithms and AI technologies.
                      </li>
                    </ul>
                  </div>

                  {/* Software Engineering & Development Roles */}
                  <div className="mt-8 mb-8">
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">
                      Software Engineering & Development Roles
                    </h3>
                    <ul className="tl-event-details-key-content-list">
                      <li>
                        <strong>Full Stack Developer (AI-enabled Applications) : </strong>
                        Building end-to-end web and mobile applications.
                      </li>
                      <li>
                        <strong>Backend Developer (with AI/ML Integration) : </strong>
                        Specializing in scalable server-side systems.
                      </li>
                      <li>
                        <strong>Data Engineer : </strong>
                        Designing and managing data pipelines and architectures.
                      </li>
                      <li>
                        <strong>MLOps Engineer : </strong>
                        Automating ML workflows for production systems.
                      </li>
                      <li>
                        <strong>Cloud Engineer (AI/DS Focus) : </strong>
                        Deploying AI/ML workloads on cloud platforms (AWS, Azure, GCP).
                      </li>
                      <li>
                        <strong>Software Engineer (AI Products) : </strong>
                        Developing AI-powered solutions for industries.
                      </li>
                    </ul>
                  </div>

                  {/* Analytics & Business Intelligence */}
                  <div className="mt-8 mb-8">
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">
                      Analytics & Business Intelligence
                    </h3>
                    <ul className="tl-event-details-key-content-list">
                      <li>
                        <strong>Business Analyst (AI-driven Insights) : </strong>
                        Converting business needs into data solutions.
                      </li>
                      <li>
                        <strong>Data Analyst : </strong>
                        Visualizing and interpreting structured/unstructured data.
                      </li>
                      <li>
                        <strong>BI Developer (Business Intelligence) : </strong>
                        Developing dashboards and KPI monitoring tools.
                      </li>
                      <li>
                        <strong>Decision Scientist : </strong>
                        Applying AI/DS to optimize strategic decisions.
                      </li>
                    </ul>
                  </div>

                  {/* Emerging & Interdisciplinary Careers */}
                  <div className="mt-8 mb-8">
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">
                      Emerging & Interdisciplinary Careers
                    </h3>
                    <ul className="tl-event-details-key-content-list">
                      <li>
                        <strong>Robotics Engineer : </strong>
                        AI-driven Robotics & Automation.
                      </li>
                      <li>
                        <strong>AI in Healthcare Specialist : </strong>
                        Building diagnostic and predictive health solutions.
                      </li>
                      <li>
                        <strong>AI in Finance Expert : </strong>
                        Fraud detection, algorithmic trading, and risk analysis.
                      </li>
                      <li>
                        <strong>AI in Cybersecurity Analyst : </strong>
                        AI-based intrusion detection and threat prediction.
                      </li>
                      <li>
                        <strong>Autonomous Systems Developer : </strong>
                        Working on self-driving cars, drones, and smart systems.
                      </li>
                      <li>
                        <strong>AI for Sustainability Specialist : </strong>
                        Applying AI for energy, agriculture, and climate solutions.
                      </li>
                    </ul>
                  </div>

                  {/* Higher Studies & Research Opportunities */}
                  <div className="mt-8 mb-8">
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">
                      Higher Studies & Research Opportunities
                    </h3>
                    <ul className="tl-event-details-key-content-list">
                      <li>
                        <strong>M.Tech / MS : </strong>
                        AI, ML, Data Science, Robotics, or Cloud Computing (India/Abroad).
                      </li>
                      <li>
                        <strong>Ph.D. : </strong>
                        AI/DS/Computer Science for academic and R&D careers.
                      </li>
                      <li>
                        <strong>MBA : </strong>
                        Technology Management / Business Analytics for leadership roles.
                      </li>
                      <li>
                        <strong>Research Opportunities : </strong>
                        IITs, IISc, NITs, IIITs, and global universities.
                      </li>
                    </ul>
                  </div>

                  {/* Entrepreneurship & Startups */}
                  <div className="mt-8 mb-8">
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">
                      Entrepreneurship & Startups
                    </h3>
                    <ul className="tl-event-details-key-content-list">
                      <li>
                        <strong>AI-driven Startups : </strong>
                        FinTech, EdTech, HealthTech, AgriTech, RetailTech.
                      </li>
                      <li>
                        <strong>AI SaaS Products : </strong>
                        Chatbots, recommendation engines, workflow automation tools.
                      </li>
                      <li>
                        <strong>Freelancing / Consulting : </strong>
                        AI & Data Science domains.
                      </li>
                    </ul>
                  </div>

                  {/* Competitive Exams & Public Sector */}
                  <div className="mt-8 mb-8">
                    <h3 className="tl-event-details-area-title text-[#4f70b6]">
                      Competitive Exams & Public Sector
                    </h3>
                    <ul className="tl-event-details-key-content-list">
                      <li>
                        <strong>GATE (CS/AI/DS) : </strong>
                        PSU jobs and M.Tech admissions.
                      </li>
                      <li>
                        <strong>Government AI/ML Roles : </strong>
                        DRDO, ISRO, NIC, CDAC, BARC, Defense AI Projects.
                      </li>
                      <li>
                        <strong>Public Sector Opportunities : </strong>
                        Digital India, Smart Cities, and Government AI initiatives.
                      </li>
                    </ul>
                  </div>
   
              
            
              </div>
          </div>
      </div>
  </div>
    </section>
  );
};

export default AIandDSDeptAbout;
