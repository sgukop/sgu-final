'use client';
import React from 'react';
import Link from 'next/link';
import NavLinks from "./Navlinks";
import MenuList from "../Reusable-components/MenuList";
import ComputerDeptNewEvents from './ComputerDeptNewEvents';
import ComputerDeptAchievements from './ComputerDeptAchievements';

const ComputerActivitiesAchievements = () => {
    return (
      <section className="tl-14-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container-fluid">
        <div className="d-flex justify-content-center mb-50"><h2 className="tl-2-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto">Events, Activities & Achievements</h2></div>
        <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >

         {/*   <div className="tl-11-section-heading">
	            <h2 className="tl-11-section-title">Upcoming Events</h2>
            </div>

            <div className="row align-items-center tl-1-about-row">

    <div className="col-lg-12">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">One Day Workshop On Full Stack Development </h3>
                <p>The Computer Society of India (CSI) of CSE proposing to a one day workshop on” Full Stack Development”.on Date : 28 th March 2025.</p>

                <h6 className="tl-8-feature-title mt-4 mb-4">Event Highlights : </h6>
                <ul className="tl-event-details-key-content-list phd-container">
                    <li>One day workshop on Full Stack Development, delivered by Cross Country Healthcare, Pune
                    delivered a rich learning experience for participants.</li>
                    <li>Speaker: Mr. SagarSawant Sir, A seasoned expert in Full Stack Development. His practical demonstration and engaging explanation formed a Web Development and Angular for fundamental of Full Stack Development.</li>
                
                </ul>
            </div>
        </div>
    </div>
    <div className="col-lg-12 mt-50">
        <div className="tl-event-details-left">
            <div className="tl-event-details-key-content tl-event-details-area">
                <h3 className="tl-event-details-area-title">Technophilia 3.0</h3>
                <p>The Student Association of CSE (ACSES) proposing to organize a Two days' technical festival 'Technophilia' will organize on 3rd April, 2025 to 4th April 2025 under ACSES and CSI committee.<br/><br/>

                Various events like Techno Hunt, Technical quiz, Tech Rubic's Cube, Think Along, Human Ludo, Technical Dare Dart, Code passing and Relay, LAN Gaming, Tech Antakshari, Algorithm Challenge, Debugging Challenge, VR Gaming Meta Quest, Treasure Hunt for Faculties etc. are organized at Technophilia. All the students can part in these events. 
                </p>
            </div>
        </div>
    </div>
</div>   */}

            <ComputerDeptNewEvents />

            <div className="tl-11-section-heading mt-50">
	            <h2 className="tl-11-section-title">Activities</h2>
            </div>
            <div className="row gy-4 align-items-center">
                
                    <div className="col-lg-12">
                        <div className="accordion mt-10" id="accordionExample">
                            

                

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                    Seminars / Workshops Conducted
                                    </button>
                                </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                            <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>Two days Workshop on cloud computing and Devops by Mr. Shreyash P. Lingare DevSecOps Engineer, Lippopay Mumbai in 2025</li>
                                            <li>Workshop on Google Tools, Product, and Gemini API Integration by  Google Student Ambassador Program 2025</li>
                                            <li>Workshop on GDG Arcade and Google Cloud Study Jam on 13th october 2025</li>
                                            <li>Workshop on Google tools , Product and Gemini API Integration  on 3rd october 2025</li>
                                            <li>Sustainable Development was organized on 1st & 2nd February 2024.</li>
                                            <li>Full Stack Development was organized on 16th & 17th February 2024.</li>
                                            <li>Cloud and Edge Computing was organized on 28th & 29th November 2022.</li>
                                            <li>Hands on Training on Blockchain was organized on 14th & 15th January 2022.</li>
                                            <li>Workshop on Recent Technology was organized on 10th March 2022.</li>
                                            <li>Recent Services in Cloud Computing was organized on 17th March 2022.</li>
                                            <li>Blockchain Technology was organized on 25th & 26th March 2022.</li>
                                            <li>Cyber Security was organized on 04th March 2024.</li>
                                            <li>Cloud Computing & Data Science was organized on 12th November 2022.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

               <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                  Guest / Expert Lectures
                                    </button>
                                </h2>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                          <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>    Expert Session on From Idea to Publication: A Guide to Writing Research Papers” By Resource Person: Dr. Shefali Sonavne Associate Professor, IT Walchand College of Engineering, Sangli on Date:Friday,08/08/2025.</li>
                                            <li>A guest lecture on “How AI is Revolutionising various industries is that good enough” by  Dr. Aneish Kumar Ex Country Head, Bank of Newyork.. on 7th February 2024</li>
                                            <li>Mrs. Radika Dhanal, Assistant Professor, DYP Kolhapur addresses an expert session on a topic of “Advance Algorithms” in Sanjay Ghodawat University on 26th September 2024.</li>
                                            <li>Mr. Juber Mohamad Shaphi Mulla, Assistant Professor, Dept. of Mechatronics, Rajarambapu Institute of Technology, Islampur addresses a expert session on a topic of “Future Trends on IOT and Embedded Systems” in Sanjay Ghodawat University on 04th October 2024.</li>
                                            <li>Mr. Nitin B. Naik, he is Founder and CEO of Technophilia Academy for skills, addresses an expert session on a topic of “OOP Concepts in Machine Learning / AI” in Sanjay Ghodawat University on 09th September 2024.</li>
                                            <li>A guest lecture was organized on topic of “Future Trends in AI” by Dr. Jyoti Ajinkya Deshmukh, Head of AIDS Dept. RGIT, Mumbai on 16th July 2024.</li>
                                            <li>Mr. Mayank Arora, he is Founder and CEO of “@capable” and “elite techno groups” addresses a Webinar on a topic of “Awareness of Skill Enhancement and Placement” on 14th February 2024.</li>
                                            <li>A guest lecture was organized on topic of “Startup Ecosystem “by Mr. Amol Kalugade, he is Founder and CEO of Saffron Edge on 09th February 2024.</li>
                                            <li>A guest lecture on “Future Jobs and Opportunities” by  Dr. Aneish Kumar Ex Country Head, Bank of Newyork.. on 7th February 2024.</li>
                                            <li>A guest lecture was organized on topic of “Cyber Security” by Mr. Sagar Jambhorkar, he is a faculty member from the National Defense Academy on 09th September 2023.</li>
                                            <li>A guest lecture was organized on topic of of “Application of Artificial Intelligence (AI) in corporate World and Career Opportunities” by Mr. Rahul Patil, Vice President, Software Engineering, Bently Systems on 15th September 2023.</li>
                                            <li>A guest lecture was organized on topic of “Awareness of Certification Courses in AIML” by Mr Manish Singh, speaker, Unique IT Solutions Bangalore on 28th April 2023.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

               

                <div className="tl-event-details-area tl-course-details-curriculum">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                  Industrial Visits
                                    </button>
                                </h2>
                            <div
                                id="collapseSeven"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                          <div className="accordion-body">
                          <div className="tl-event-details-left " style={{padding:'5px'}}>
                                <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                    <div className="col-md-12 col-12"> 
                                        <ul className="tl-event-details-key-content-list phd-container">
                                            <li>Final Year Students Visited at Bently System, Pune - 22 Feb 2024</li>
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

        <div className="tl-11-section-heading mt-50">
	        <h2 className="tl-11-section-title">Student and Faculty Achievements</h2>
        </div>
        <ComputerDeptAchievements />
    </div>
    </div>
</div>
</section>
)
}

export default ComputerActivitiesAchievements