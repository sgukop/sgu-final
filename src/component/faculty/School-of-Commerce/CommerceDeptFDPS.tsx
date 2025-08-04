'use client';
import React from 'react';
import NavLinks from './Navlinks';
import MenuList from '../Reusable-components/MenuList';

const CommerceDeptFDPS = () => {
  return (
  
    <div className="pt-100 pb-100">
      <div className="container-fluid">
      <h2 className="tl-9-section-title mb-50">FDPS / STTPS / Workshops / Expert Lectures Organised</h2>
      <div className="row">
          <MenuList dept="School of Management" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row">
        <div className="accordion" id="managementFDPS">
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
         
          aria-controls="collapseOne"
        >
          2023-2024
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#managementFDPS"
      >
        <div className="accordion-body">
            <div className="col-lg-12">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <p className="dark-mode-white-color"><strong>1. Expert Lecture: Capital Market & Journey of JIO</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>An insightful session on stock market dynamics and the business growth of JIO.</li>
                                    <li>Conducted on 27th September 2024 with 150 participants at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>2. Expert Lecture: Emerging Economic Trends in South Korea</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Provided an overview of South Korea's economic growth, policy frameworks, and global impact.</li>
                                    <li>Attended by 125 participants on 4th October 2024.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>3. Expert Lecture: Guest Lecture on ERP</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Focused on Enterprise Resource Planning (ERP) systems and their role in business efficiency.</li>
                                    <li>Conducted on 22nd October 2024, attended by 160 participants at the university.</li>
                                  </ul>
                          </div>
                    </div>
            </div>
        </div>
      </div>
    </div>
    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
         2022-2023
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#managementFDPS"
      >
        <div className="accordion-body">
            <div className="col-lg-12">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <p className="dark-mode-white-color"><strong>1. Product Development Workshop</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Aimed at enhancing student's understanding of product innovation and market positioning.</li>
                                    <li>Conducted on 14th January 2023, with 66 participants at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>2. Entrepreneurship Awareness Camp</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Focused on business opportunities, start-up ecosystem, and entrepreneurial mindset development.</li>
                                    <li>Attended by 116 participants on 14th March 2023 at the university.</li>
                                  </ul>
                            <p className="dark-mode-white-color mt-30"><strong>3. Research Methodology & Report Writing</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Designed to improve student's and faculty members' research and academic writing skills.</li>
                                    <li>Conducted on 10th April 2023 with 80 participants.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>4. Two Days Workshop on Digital Marketing</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Provided hands-on experience in digital marketing strategies, SEO, and social media marketing.</li>
                                    <li>Attended by 20 participants on 10th May 2023.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>5. Five Days Online FDP on NEP 2020</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Focused on the paradigm shift in asynchronous learning and industry-academic collaboration under NEP 2020.</li>
                                    <li>Conducted from 12th - 16th May 2023 at the national level with 66 participants.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>6. Workshop on Technical Analysis</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Introduced MBA students to financial market trends and investment analysis techniques.</li>
                                    <li>Held on 26th May 2022 for FY MBA students at the university.</li>
                                  </ul>
                          </div>
                    </div>
            </div>
        </div>
        </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
            2021-2022
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#managementFDPS"
      >
        <div className="accordion-body">
            <div className="col-lg-12">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <p className="dark-mode-white-color"><strong>1. One Day Webinar on Relevance of the Case Method in Teaching and Research</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Explored the significance of the case study method in pedagogy and research.</li>
                                    <li>Attended by over 130 participants at the state level.</li>
                                    <li>Conducted on 28th August 2021.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>2. One Day FDP on Case Study Teaching & Writing</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Focused on developing faculty expertise in writing and teaching case studies effectively.</li>
                                    <li>Attended by 22 university faculty members.</li>
                                    <li>Held on 25th September 2021 at the university.</li>
                                  </ul>
                           </div>
                    </div>
            </div>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
         2020-2021
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#managementFDPS"
      >
        <div className="accordion-body">
        <div className="col-lg-12">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <p className="dark-mode-white-color"><strong>1. Teaching Pedagogy and Assessment Workshop</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>A workshop dedicated to enhancing teaching methodologies, assessment techniques, and interactive learning strategies for faculty members.</li>
                                    <li>Various innovative and research-backed teaching techniques were discussed.</li>
                                    <li>Conducted on 11th & 12th December 2020 at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>2. Workplace Etiquettes</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>A training session focusing on professional conduct, effective communication, and organizational behavior for non-teaching staff.</li>
                                    <li>It aimed to enhance workplace efficiency and decorum.</li>
                                    <li>Conducted on 10th May 2021 at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>3. Role of Non-Teaching Staff in NAAC</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>A specialized session emphasizing the critical role of non-teaching staff in the accreditation process.</li>
                                    <li>Provided knowledge about documentation, assessment criteria, and compliance standards.</li>
                                    <li>Held on 11th May 2021 at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>4. Stress Management</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>A workshop addressing work-related stress and strategies to manage professional and personal stress effectively.</li>
                                    <li>Conducted on 12th May 2021 at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>5. Polish Your Personality and Build Self-Confidence</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Focused on self-improvement techniques, communication skills, and confidence-building exercises for non-teaching staff.</li>
                                    <li>Held on 13th May 2021 at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>6. Effective Time Management</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Provided insights into prioritization, scheduling, and productivity enhancement strategies.</li>
                                    <li>Conducted on 14th May 2021 at the university.</li>
                                  </ul>

                            <p className="dark-mode-white-color mt-30"><strong>7. Teamwork</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>A session emphasizing collaboration, leadership, and team dynamics to improve workplace synergy.</li>
                                    <li>Conducted on 15th May 2021 at the university.</li>
                                  </ul>
                           </div>
                    </div>
            </div>
        </div>
      </div>
    </div>

    <div className="tl-event-details-area tl-course-details-curriculum">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
         2019-2020
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#managementFDPS"
      >
        <div className="accordion-body">
        <div className="col-lg-12">
              <div className="tl-event-details-left">
                       <div className="tl-event-details-key-content">
                           <p className="dark-mode-white-color"><strong>1. "Parivartana" - One Week Training in Association with Gallagher Service Center</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>This training program was organized in collaboration with Gallagher Service Center, aiming to provide hands-on learning experiences for students.</li>
                                    <li>The focus was on skill development, industry exposure, and practical knowledge enhancement.</li>
                                    <li>Participants were students from BBA III, engaging in activities that enriched their academic and professional competencies.</li>
                                    <li>The event was held at the university from 19th to 24th August 2019.</li>
                                </ul>

                            <p className="dark-mode-white-color mt-30"><strong>2. "Two Days Entrepreneurship Development Programme" - National Level</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Aimed at fostering entrepreneurial skills and knowledge among students, this program provided insights into start-up culture, business planning, and market analysis.</li>
                                    <li>Participants included students from BBA II, III, MBA I, II, and students from other colleges.</li>
                                    <li>The event facilitated interaction with industry experts, providing real-world business perspectives.</li>
                                    <li>It was conducted on 30th and 31st January 2020 at the university.</li>
                                </ul>

                            <p className="dark-mode-white-color mt-30"><strong>3. One Day Workshop on Data Analytics for Research-Based Decision Making</strong></p>
                                  <ul className="tl-event-details-key-content-list phd-container">
                                    <li>This workshop was designed for faculty members to enhance their skills in data analytics and its applications in research-based decision-making.</li>
                                    <li>The sessions covered statistical tools, software usage, and case studies to provide a comprehensive learning experience.</li>
                                    <li>Faculty members from various colleges participated in this event.</li>
                                    <li>The workshop took place on 14th & 15th January 2020 at the university.</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  </div>
  </div>
  )
}
    
  export default CommerceDeptFDPS